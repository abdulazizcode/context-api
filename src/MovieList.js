import React, {useContext} from "react";
import {MovieContext} from "./MovieContext";
import Movie from  "./Movie";

const MovieList = () =>{
    const [movies] = useContext(MovieContext);
    return (
        <div className="movie__list">
            {
                movies.map(e => (
                    <Movie name={e.name} price={e.price} year={e.year} key={e.name}/>
                ))
            }
        </div>
    );
}

export default MovieList;