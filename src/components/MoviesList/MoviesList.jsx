import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import './MoviesList.css'

import { MovieItem } from "../MovieItem/MovieItem";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const getMovies = async () => {
        const response = await axios.get("https://kinobd.xyz/api/films");
        console.log(response)
        setMovies(response.data.data)
    }
    getMovies()
    }, [])

    return(
        <>
            <div className="movies-list">
            {
                movies.map(movie => (
                <MovieItem key={movie.id} id={movie.id} title={movie.name_russian} rating={movie.rating_kp} poster={movie.small_poster} />
                ))
            }
            </div>
        </>
    )
}

export default MoviesList;