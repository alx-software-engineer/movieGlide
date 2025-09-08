import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../Services/api'; 

function MovieDetails() {
  const { id } = useParams();
  
  // Components state
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Could not load the movie details.");
      } finally {
        setIsLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (isLoading) {
    return <div className="text-center text-secondary mt-10">Loading details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }
  
  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="max-w-4xl mx-auto p-4 text-secondary">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
        <img src={imageUrl} alt={movie.title} className="w-full md:w-1/3 h-auto" />
        <div className="p-6 flex flex-col">
          <h1 className="text-3xl font-bold text-primary mb-2">{movie.title}</h1>
          <p className="text-gray-400 text-sm mb-4">
            Release Date: {movie.release_date} | Runtime: {movie.runtime} mins
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map(genre => (
              <span key={genre.id} className="bg-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {genre.name}
              </span>
            ))}
          </div>
          <p className="mb-6 flex-grow">{movie.overview}</p>
          <Link to="/" className="text-primary hover:underline self-start">
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;