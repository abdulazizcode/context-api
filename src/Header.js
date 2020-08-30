import React, {useContext} from 'react';
import "./Header.css";
import {MovieContext} from "./MovieContext";

const Header = () => {
    const [movies] = useContext(MovieContext);
    return (
        <div className="header">
                <nav className="nav">
                    <div className="left">
                        <h1>MovieList</h1>
                    </div>

                    <div className="right">
                        <p>You have: {movies.length} movies</p>
                    </div>
                </nav>
        </div>
    );
}

export default Header;
