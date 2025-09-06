import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <li className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-primary/50">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.title} className="w-full h-auto" />
        <div className="p-3">
          <h3 className="text-base font-bold text-secondary truncate">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.release_date}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieCard;