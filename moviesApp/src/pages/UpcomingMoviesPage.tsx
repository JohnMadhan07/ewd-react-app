import React from "react";
import { useState, useEffect, FC } from "react";  
import { ListedMovie } from "../types/interfaces";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


  const HomePage: FC= () => {
    const [movies, setMovies] = useState<ListedMovie[]>([]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
    return (
      <MovieListPageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie: ListedMovie) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};
export default HomePage;