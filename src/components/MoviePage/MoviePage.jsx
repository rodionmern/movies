import axios from "axios";
import React, { useEffect, useState } from "react";

import './MoviePage.css'

const MoviePage = () => {
    const [ movie, setMovie ] = useState([])

    const pageHref = window.location.href;
    const id = pageHref.toString().slice((pageHref.indexOf("e/") + 2));

    useEffect(() =>
    {
        const getDetails = async () => {
            const movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=54880bc8207ac162252930d905c536c8&language=ru-RU`)
            console.log(movieDetails.data)
            setMovie(movieDetails.data)
        }
        getDetails()
    }, [id])

    console.log(pageHref, id)

    return (
        <>
        <div className="movie-page">
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="Постер фильма" className="movie-page-poster" />
            <div className="movie-page-details">
                <h1>{movie.title} ({movie.release_date/*.slice(0, 4)*/})</h1>
                <p><b className="movie-page-rating">{movie.vote_average}/10</b> <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDB</a></p>
                <p>{movie.overview}</p>
                <ul className="movie-page-other-details">
                    <li>Исходное название: {movie.original_title}</li>
                    <li>Бюджет фильма: {movie.budget}$</li>
                    <li>Сборы фильма: {movie.revenue}$</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MoviePage