import GetStartedBtn from "./GetStartedBtn";
import UpcomingBtn from "./UpcomingBtn";
import { useEffect } from "react";
import useMovieStore from "../Store/useMoviesStore";
import { fetchTrendingMovies,  } from "../Services/api";
import MovieList from "./MovieList";


function Home() {

    const movieList = useMovieStore((state) => state.movieList);
    const isLoading = useMovieStore((state) => state.isLoading);
    const error = useMovieStore((state) => state.error);
    const addMovies = useMovieStore((state) => state.addMovies);
    const setLoading = useMovieStore((state) => state.setLoading);
    const setError = useMovieStore((state) => state.setError);
    const trendingMovies = useMovieStore((state) => state.trendingMovies);
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies);


    useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    // Only fetch movies if our list is empty
    if (trendingMovies.length === 0) {
        loadMovies();
    }
  }, [trendingMovies.length, setTrendingMovies, setLoading, setError]);



    return (
       <div>
            <h1 className="text-secondary text-center mb-7 text-xl md:text-3xl lg:text-4xl"> 
                Discover the series streaming
                Experience with  <span className="font-bold">MovieGlide</span>
            </h1>

            <h2 className="text-gray-600 text-xs text-center mb-7">
                Our young and expert admins prepare amazing and 
                trend series for you to watch online and priceless
            </h2>

            <div className="flex justify-center gap-8 mb-2">
                <GetStartedBtn />
                <UpcomingBtn />
            </div>

            {/* Loading */}
            {isLoading && <div className="text-center text-secondary mt-10">Loading popular movies...</div>}

            {/* Error */}
            {error && <div className="text-center text-red-500 mt-10">{error}</div>}

                {/* Movie List */}
            {!isLoading && !error && (
                <div>
                     <h1 className="text-2xl font-bold text-primary mb-3">Trending</h1>
                    <MovieList movies={trendingMovies} />
                </div>
            )}

       </div>
    );
}

export default Home;