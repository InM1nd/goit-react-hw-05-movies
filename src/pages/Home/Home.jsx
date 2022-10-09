import { useState, useEffect } from 'react';
import { fetchMovieTrending } from '../../api/Api';
import MovieList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovieTrending().then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return <>{movies && <MovieList movies={movies} />}</>;
}