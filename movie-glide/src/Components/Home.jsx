import GetStartedBtn from "./GetStartedBtn";
import UpcomingBtn from "./UpcomingBtn";
import { useEffect } from "react";
import useMovieStore from "../Store/useMoviesStore";
import { fetchTrendingMovies,  fetchPopularMovies} from "../Services/api";
import MovieList from "./MovieList";


function Home() {

    const movieList = useMovieStore((state) => state.movieList);
    const isLoading = useMovieStore((state) => state.isLoading);
    const error = useMovieStore((state) => state.error);
    const setMovies = useMovieStore((state) => state.setMovies);
    const setLoading = useMovieStore((state) => state.setLoading);
    const setError = useMovieStore((state) => state.setError);
    const trendingMovies = useMovieStore((state) => state.trendingMovies);
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies);
    const setAllMovies = useMovieStore((state) => state.setAllMovies);
    const allMovies = useMovieStore((state) => state.allMovies);


    useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const trending = await fetchTrendingMovies();
        setTrendingMovies(trending);
        const popular = await fetchPopularMovies();
        setMovies(popular);

        // All Movies
        const allMoviesMap = new Map();
        trending.forEach(movie => allMoviesMap.set(movie.id, movie));
        popular.forEach(movie => allMoviesMap.set(movie.id, movie));
        setAllMovies(Array.from(allMoviesMap.values()));


      } catch (err) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    // Only fetch movies if our list is empty
    if (allMovies.length === 0 ) {
        loadMovies();
    }
  }, [trendingMovies.length, movieList.length, setAllMovies, setMovies, setTrendingMovies, setLoading, setError]);



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
                    {/* Trending Movies Section */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-6">Trending This Week</h2>
                      <MovieList movies={trendingMovies} />
                    </section>

                    {/* Popular Movies Section */}
                    <section>
                      <h2 className="text-2xl font-bold text-primary mb-6">Popular Movies</h2>
                      <MovieList movies={movieList} />
                    </section>
                </div>
            )}

       </div>
    );
}

export default Home;