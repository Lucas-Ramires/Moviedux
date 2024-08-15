import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">You Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const filme = movies.find((filme) => filme.id === id);
          return (
            <MovieCard
              key={id}
              filme={filme}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
