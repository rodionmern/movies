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
            const movieDetails = await axios.get(`https://kinobd.xyz/api/films/${id}`)
            console.log(movieDetails.data)
            setMovie(movieDetails.data)
        }
        getDetails()
    }, [id])

    console.log(pageHref, id)

    return (
        <>
        <div className="movie-page">
            <img src={movie.big_poster} alt="Постер фильма" className="movie-page-poster" />
            <div className="movie-page-details">
                <h1>{movie.name_russian} ({movie.year})</h1>
                <p><b className="movie-page-rating">{movie.rating_imdb}/10</b> <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDB</a></p>
                <p>{movie.description}</p>
                <ul className="movie-page-other-details">
                    <li>Исходное название: {movie.name_original}</li>
                    <li>Бюджет фильма: {movie.budget}</li>
                </ul>
                <h4>Трейлер:</h4>
                <iframe width="560" height="315"
                    src={movie.trailer}>
                </iframe>
            </div>
        </div>
        </>
    )
}

export default MoviePage