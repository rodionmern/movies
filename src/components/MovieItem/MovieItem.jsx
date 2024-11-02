import React from "react";
import { Link } from "react-router-dom";

import './MovieItem.css'

export const MovieItem = ({id, title, rating, poster, date}) => {
    return(
        <div className="movie-item">
            <h4 className="movie-title"><Link to={`/page/${id}`}>{title}</Link></h4>
            <p  className="movie-rating">{rating}/10</p>
            {/* <ul className="movie-genres"> */}
                {/* {genres.map(genre => {return <li key={nanoid(10)}>{genre}</li>})} */}
            {/* </ul> */}
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`} alt="Постер фильма" className="movie-poster" />
        </div>
    )
}