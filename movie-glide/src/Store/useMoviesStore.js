import { create } from 'zustand';

const useMovieStore = create((set) => ({
    movieList: [],
    isLoading: false,
    error: null,

    // Add Movies
    addMovies: (newMovies) => {
        set((state) => ({movieList : [...state.movieList, ...newMovies]}));
    },

    setLoading: (status) => set({ isLoading: status }),
    setError: (message) => set({ error: message }),
}))

export default useMovieStore;