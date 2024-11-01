import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import './MoviesList.css'

import { MovieItem } from "../MovieItem/MovieItem";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        setMovies(movies.data.data.movies)
    }
    getMovies()
    }, [])

    return(
        <>
            <h2 className="movies-list-title">List of movies:</h2>
            <div className="movies-list">
            {
                movies.map(movie => (
                <MovieItem key={movie.id} title={movie.title_long} genres={movie.genres} rating={movie.rating} poster={movie.medium_cover_image} />
                ))
            }
            </div>
        </>
    )
}

export default MoviesList;