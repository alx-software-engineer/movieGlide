import { useEffect, useMemo } from "react";
import useMovieStore from "../Store/useMoviesStore";
import { fetchTrendingMovies, fetchPopularMovies } from "../Services/api";
import MovieList from "./MovieList";
import Search from "./Search";

function Home() {
    // This state selection logic is perfect as is.
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
    const searchTerm = useMovieStore((state) => state.searchTerm);

    // This data fetching logic is also perfect.
    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                const trending = await fetchTrendingMovies();
                setTrendingMovies(trending);
                const popular = await fetchPopularMovies();
                setMovies(popular);

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
        
        if (allMovies.length === 0 ) {
            loadMovies();
        }
    }, [allMovies.length, setAllMovies, setMovies, setTrendingMovies, setLoading, setError]);

    // This filtering logic is also perfect.
    const searchResults = useMemo(() => 
        allMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        ), [allMovies, searchTerm]
    );

    return (
        // Added padding for mobile (`px-4`) and larger padding for desktop (`md:px-0`)
        <div className="px-4 md:px-0">
            {/* Hero Section */}
            <div className="text-center my-8 md:my-12">
                 <h1 className="text-secondary mb-4 text-3xl md:text-5xl font-bold"> 
                    Discover Your Next Favorite Movie
                </h1>
                <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
                    Browse trending and popular movies, all in one place. Your next movie night starts here.
                </p>
            </div>

            {/* Search Bar container - centered */}
            <div className="flex justify-center mb-10">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <Search />
                </div>
            </div>

            {/* Conditional Rendering Logic for Loading/Error states */}
            {isLoading && <div className="text-center text-secondary mt-10 text-xl">Loading movies...</div>}
            {error && <div className="text-center text-red-500 mt-10 text-xl">{error}</div>}

            {/* Main Content Area */}
            {!isLoading && !error && (
                <div>
                    {searchTerm ? (
                        // Search Results View
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Search Results</h2>
                            {searchResults.length > 0 ? (
                                <MovieList movies={searchResults} />
                            ) : (
                                <p className="text-secondary text-center text-lg">No movies found matching "{searchTerm}"</p>
                            )}
                        </section>
                    ) : (
                        // Default View
                        <>
                            <section className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Trending This Week</h2>
                                <MovieList movies={trendingMovies} />
                            </section>
                            <section>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Popular Movies</h2>
                                <MovieList movies={movieList} />
                            </section>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;