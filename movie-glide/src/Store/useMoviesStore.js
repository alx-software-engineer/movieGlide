import { create } from 'zustand';

const useMovieStore = create((set) => ({
    movieList: [],

    addMovies: (newMovies) => {
        set((state) => ({movies : [...state.movieList, ...newMovies]}));
    },
}))

export default useMovieStore;