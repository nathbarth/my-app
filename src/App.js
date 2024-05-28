import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '52042e3d97a85adee1b1c5a75bf40514'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(POPULAR_MOVIES_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Films Populaires</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

