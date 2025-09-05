import { create } from 'zustand';

const useMovieStore = create((set) => ({
    movieList: [],

    addMovies: (newMovies) => {
        set((state) => ({movieList : [...state.movieList, ...newMovies]}));
    },
}))

export default useMovieStore;