package qwikk.spring.movies.repo

import jakarta.persistence.EntityManager
import jakarta.persistence.PersistenceContext
import jakarta.persistence.criteria.CriteriaBuilder
import jakarta.persistence.criteria.CriteriaQuery
import jakarta.persistence.criteria.Predicate
import jakarta.persistence.criteria.Root
import org.springframework.stereotype.Repository
import qwikk.spring.movies.model.Actor
import qwikk.spring.movies.model.Genre
import qwikk.spring.movies.model.Movie

@Repository
class MovieRepoCustomImpl : MovieRepoCustom {

    @PersistenceContext
    lateinit var entityManager: EntityManager

    override fun findByCustomQuery(title: String?, genreList: List<String>?, actorList: List<String>?,
                                   director: String?, sort: String?,
                                   page: Int, size: Int): List<Movie> {

        val cb = entityManager.criteriaBuilder
        val query = cb.createQuery(Movie::class.java)
        val root = query.from(Movie::class.java)
        val predicates = mutableListOf<Predicate>()

        if (genreList != null) {
            predicates.add(
                compareSubJoinToList<Genre>(cb, query, root, genreList, "genre", "name")
            )
        }

        if (actorList != null) {
            predicates.add(
                compareSubJoinToList<Actor>(cb, query, root, actorList, "starring", "name")
            )
        }

        if (title != null) {
            predicates.add(cb.like(cb.lower(root.get("seriesTitle")), "%${title.lowercase()}%"))
        }
        if (director != null) {
            predicates.add(cb.like(cb.lower(root.get("director")), "%${director.lowercase()}%"))
        }

        query.select(root)
        query.where(*predicates.toTypedArray())
        when (sort) {
            "imdbRating" -> query.orderBy(cb.desc(root.get<Double>(sort)))
            "noOfVotes", "metaScore", "releasedYear", "gross" -> query.orderBy(cb.desc(cb.coalesce(root.get(sort), -1)))
        }

        val typedQuery = entityManager.createQuery(query)
        typedQuery.setFirstResult(page * size)
        typedQuery.setMaxResults(size)

        return typedQuery.resultList
    }

    private fun <T> compareSubJoinToList(cb: CriteriaBuilder, query: CriteriaQuery<Movie>, root: Root<Movie>,
                                         list: List<String>, joinedWith: String, onAttribute: String): Predicate {

        val subQuery = query.subquery(Movie::class.java)
        val subRoot = subQuery.from(Movie::class.java)
        val subJoin = subRoot.join<Movie, T>(joinedWith)

        val predicate: Predicate = subJoin.get<String>(onAttribute).`in`(list)
        val subPredicateList: List<Predicate> = list.map {
            cb.like(cb.lower(subJoin.get(onAttribute)), "%${it.lowercase()}%")
        }

        subQuery.select(subRoot)
        subQuery.where(cb.or(*subPredicateList.toTypedArray()))
        subQuery.groupBy(subRoot)
        subQuery.having(cb.greaterThanOrEqualTo(cb.count(subJoin), list.size.toLong()))

        return root.`in`(subQuery)
    }
}