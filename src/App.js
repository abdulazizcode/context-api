import React from "react";
import "./App.css";
import Header from "./Header";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";

const App = () => {
    return(
        <MovieProvider>
            <div className="app">
                <Header/>
                <MovieList/>
                <AddMovie/>
            </div>
        </MovieProvider>
    );
}

export default App;