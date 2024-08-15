import React from "react";
import "../styles.css";

const MovieCard = ({ filme, isWatchlisted, toggleWatchlist }) => {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={filme.id} className="movie-card">
      <img
        src={`images/${filme.image}`}
        alt={filme.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{filme.title}</h3>
        <div>
          <span className="movie-card-genre">{filme.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(filme.rating)}`}>
            {filme.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(filme.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
