import React from "react";
import { Link } from "react-router-dom";

import './MovieItem.css'

export const MovieItem = ({id, title, rating, poster}) => {
    return(
        <div className="movie-item">
            <h4 className="movie-title"><Link to={`/movies/page/${id}`}>{title}</Link></h4>
            <p  className="movie-rating">{rating}/10</p>
            {/* <ul className="movie-genres"> */}
                {/* {genres.map(genre => {return <li key={nanoid(10)}>{genre}</li>})} */}
            {/* </ul> */}
            <img src={poster} alt="Постер фильма" className="movie-poster" />
        </div>
    )
}