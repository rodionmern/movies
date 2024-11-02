import React from "react";
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <header>
            <h2>Movie Searcher</h2>
            <Link to="/movies/" replace={true}>Главная</Link>
        </header>
    )
}

export default Header