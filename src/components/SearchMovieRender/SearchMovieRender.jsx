import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SearchMovieRender.module.css';

export default function SearchMovieRender({ movieList }) {
  const location = useLocation();

  return (
    <ul className={s.movie_list}>
      {movieList.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

SearchMovieRender.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};