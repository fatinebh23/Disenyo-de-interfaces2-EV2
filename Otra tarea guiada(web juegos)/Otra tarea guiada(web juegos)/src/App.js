import React, { useState, useEffect } from "react";

import GameCard from "./GameCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const nueva ="https://api.rawg.io/api/games/${0}?key=${0b9ae65662514e61927fdd498013f3d6}";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);

  // useEffect(() => {
  //   searchgames("Batman");
  // }, []);
  /*
  const searchgames = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setGames(data.Search);
  };
  */

  const api_url =
    "https://api.rawg.io/api/games?key=60ee929c5b7748aaa1fd09e94321f5d3";
  /*
  fetch(`&search=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes trabajar con los datos recibidos
      console.log(data.results);
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });

    */

  const buscarJuego = async (title) => {
    const response = await fetch(`${api_url}&search=${title}`);
    const data = await response.json();

    console.log(data.results);
    setGames(data.results);
  };

  // Para cargar cosas antes de la primera búsqueda

  useEffect(() => {
    buscarJuego("Classic");
  }, []);

  return (
    <div className="app">
      <h1>JUEGOS DE FATINE</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for games"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => buscarJuego(searchTerm)}
        />
      </div>

      {games?.length > 0 ? (
        <div className="container">
          {games.map((movie) => (
            // para evitar el error en la consola añadimos el key
            <GameCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No se ha encontrado ningun juego</h2>
        </div>
      )}
    </div>
  );
};
export default App;
