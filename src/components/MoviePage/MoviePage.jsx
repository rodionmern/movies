import axios from "axios";
import React, { useEffect, useState } from "react";

import './MoviePage.css'

const MoviePage = () => {
    const [ movie, setMovie ] = useState({})

    const pageHref = window.location.href;
    const id = pageHref.toString().slice((pageHref.indexOf("e/") + 2));

    useEffect(() =>
    {
        const getDetails = async () => {
            const movieDetails = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?token=EWBPDG5-EFKMJ7N-PZ2Y4YM-Z6A6PYY&id=${id}`)
            console.log(movieDetails)
            setMovie(movieDetails)
        }
        getDetails()
    }, [id])

    console.log(pageHref, id)

    return (
        <>
        <div className="movie-page">
            <img src={movie.poster.url} alt="Постер фильма" className="movie-page-poster" />
            <div className="movie-page-details">
                <h1>{movie.name} ({movie.year})</h1>
                <p><b className="movie-page-rating">IMDB {movie.rating.imdb}/10</b> <b className="movie-page-rating">KP {movie.rating.kp}/10</b></p>
                <p>{movie.description}</p>
                <ul className="movie-page-other-details">
                    <li>Исходное название: {movie.name_original}</li>
                    <li>Бюджет фильма: {movie.budget}</li>
                </ul>
                {/* <h4>Трейлер:</h4> */}
                {/* <iframe width="560" height="315" */}
                    {/* src={movie.trailer}> */}
                {/* </iframe> */}
            </div>
        </div>
        </>
    )
}

export default MoviePage