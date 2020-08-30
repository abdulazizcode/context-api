import React from "react";


const Movie = ({name,price,year ,id}) =>{
    return(
        <div className="movie">
            <div className="name">
               <h1>TITLE:{name}</h1>
            </div>

            <div className="year">
               <p>Year:{year}</p>
            </div>

            <div className="price">
              <i>Price:{price}</i>
            </div>
        </div>
    );
}

export default Movie;