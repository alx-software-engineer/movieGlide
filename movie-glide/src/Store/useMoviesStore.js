import { create } from 'zustand';

const useMovieStore = create((set) => ({
    movieList: [],
    isLoading: false,
    error: null,
    trendingMovies: [],

    // Add Movies
    addMovies: (newMovies) => set({movieList : newMovies}),

    setTrendingMovies: (movies) => set({ trendingMovies: movies }),

    setLoading: (status) => set({ isLoading: status }),
    setError: (message) => set({ error: message }),
}))

export default useMovieStore;