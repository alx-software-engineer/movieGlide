import { useParams } from "react-router-dom";
import useMovieStore from "../Store/useMoviesStore";


function MovieDetails() {

    const { id } = useParams();

    const SearchedMovies = useMovieStore(state => state.allMovies);
    
    const movie = SearchedMovies.find(m => m.id === parseInt(id));

    if (!movie) {
        return <div className="text-center text-red-500 mt-10">Recipe not found!</div>;
    }
    
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div>
            <li className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-primary/50">
                <img src={imageUrl} alt={movie.title} className="w-full h-auto" />
                <div className="p-3">
                    <h3 className="text-base font-bold text-secondary truncate">{movie.title}</h3>
                    <p className="text-gray-400 text-sm">{movie.release_date}</p>
                </div>
            </li>
        </div>
        
    )
}

export default MovieDetails;