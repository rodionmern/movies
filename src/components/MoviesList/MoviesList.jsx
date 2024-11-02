import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import './MoviesList.css'

import { MovieItem } from "../MovieItem/MovieItem";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=54880bc8207ac162252930d905c536c8&language=ru-RU");
        console.log(movies)
        setMovies(movies.data.results)
    }
    getMovies()
    }, [])

    return(
        <>
            <div className="movies-list">
            {
                movies.map(movie => (
                <MovieItem key={movie.id} id={movie.id} title={movie.title} date={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} />
                ))
            }
            </div>
        </>
    )
}

export default MoviesList;