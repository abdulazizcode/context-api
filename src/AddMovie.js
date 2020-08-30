import React, {useState, useContext} from 'react';
import "./index.css";
import {MovieContext} from "./MovieContext";


const  AddMovie =() => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

    const [,setMovies] = useContext(MovieContext);

    const addName = (e) => {
        setName(e.target.value);
    }

    const addPrice = (e) => {
        setPrice(e.target.value);
    }
    const addYear = (e) => {
        setYear(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setMovies(prevMovie => [...prevMovie, {name:name, price:price,year:year}])

    }

    return (
        <div className="add__movie">
            <form className="form">

                <input type="text"
                       placeholder="Enter name of movie"
                       value={name}
                       onChange={addName}
                  />
                  
                <input  
                     type="number" 
                     placeholder="Select price of movie" 
                    value={price}
                    onChange={addPrice}
                />

                <input type="number" 
                       placeholder="Year  of movie" 
                       value={year}
                       onChange={addYear}
                />

            </form>
            <button onClick={onSubmit}>Add Movie</button>
        </div>
    )
}
export default AddMovie;