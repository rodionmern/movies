import React from "react";
import { nanoid } from "nanoid";

import './MovieItem.css'

export const MovieItem = ({title, rating, poster, genres}) => {
    return(
        <div className="movie-item">
            <h4 className="movie-title">{title}</h4>
            <p  className="movie-rating">{rating}/10</p>
            <ul className="movie-genres">
                {genres.map(genre => {return <li key={nanoid(10)}>{genre}</li>})}
            </ul>
            <img src={poster} className="movie-poster" />
        </div>
    )
}