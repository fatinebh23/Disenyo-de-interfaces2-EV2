import React from "react";

const GameCard = ({ movie: { imdbID, released, background_image, name } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{released}</p>
      </div>

      <div>
        <img
          // "N/A" es como la api dice que no tiene poster
          src={
            background_image !== "N/A"
              ? background_image
              : "https://via.placeholder.com/400"
          }
          alt={name}
        />
      </div>

      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default GameCard;
