package qwikk.spring.movies.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestParam
import qwikk.spring.movies.service.MovieService
import kotlin.NoSuchElementException

@RestController
@RequestMapping("api/movies")
@CrossOrigin
class MovieController(private val service: MovieService) {

    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(e: NoSuchElementException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.NOT_FOUND)

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e: IllegalArgumentException): ResponseEntity<String> =
        ResponseEntity(e.message, HttpStatus.BAD_REQUEST)

    @GetMapping()
    fun findFilteredMovie(
        @RequestParam(required = false) title: String?,
        @RequestParam(required = false) genre: List<String>?,
        @RequestParam(required = false) actor: List<String>?,
        @RequestParam(required = false) director: String?,
        @RequestParam(required = false) sort: String?,
        @RequestParam(defaultValue = "0") page: String,
        @RequestParam(defaultValue = "1001") size: String) = service.findByCustomQuery(title,genre,actor,director,sort,page,size)


    @GetMapping("/top10/rated")
    fun findTop10() = service.findTop10Rated()

    @GetMapping("/top10/popular")
    fun findTop10Popular() = service.findTop10Popular()

    @GetMapping("/{movieID}")
    fun findById(@PathVariable movieID: Long) = service.findMovieId(movieID)

    @GetMapping("/genre")
    fun findGenres() = service.findGenres()

    @GetMapping("/actor")
    fun findActors() = service.findActors()
}