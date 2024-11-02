import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import './MoviesList.css'

import { MovieItem } from "../MovieItem/MovieItem";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const getMovies = async () => {
        const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie?token=EWBPDG5-EFKMJ7N-PZ2Y4YM-Z6A6PYY&rating.kp=8-9&page=1&limit=5");
        console.log(response)
        setMovies(response.data.docs)
    }
    getMovies()
    }, [])

    return(
        <>
            <div className="movies-list">
            {
                movies.map(movie => (
                <MovieItem key={movie.id} id={movie.id} title={movie.name} rating={movie.rating.kp} poster={movie.poster.url} />
                ))
            }
            </div>
        </>
    )
}

export default MoviesList;