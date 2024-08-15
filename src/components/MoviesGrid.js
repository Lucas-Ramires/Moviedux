import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (filme, genre) => {
    return (
      genre === "All Genres" ||
      filme.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchesSearchTerm = (filme, searchTerm) => {
    return filme.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  };

  const matchesRating = (filme, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return filme.rating >= 8;

      case "OK":
        return filme.rating >= 5 && filme.rating < 8;

      case "Bad":
        return filme.rating < 5;

      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (filme) =>
      matchesGenre(filme, genre) &&
      matchesRating(filme, rating) &&
      matchesSearchTerm(filme, searchTerm)
  );

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((filme) => (
          <MovieCard
            filme={filme}
            key={filme.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(filme.id)}
          />
        ))}
      </div>
    </div>
  );
}
