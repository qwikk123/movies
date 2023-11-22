package qwikk.spring.movies.repo

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import qwikk.spring.movies.model.Actor

interface ActorRepository: JpaRepository<Actor, Long> {
    @Query("SELECT DISTINCT name FROM Actor")
    fun findAllActors(): List<String>
}