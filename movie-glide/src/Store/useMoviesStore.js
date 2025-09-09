import { create } from 'zustand';

const useMovieStore = create((set) => ({
    movieList: [],
    isLoading: false,
    error: null,
    trendingMovies: [],
    allMovies : [],
    searchTerm: '',

    // Actions
    setAllMovies : (movies) => set({allMovies : movies}),
    setMovies: (newMovies) => set({movieList : newMovies}),
    setTrendingMovies: (movies) => set({ trendingMovies: movies }),
    setLoading: (status) => set({ isLoading: status }),
    setError: (message) => set({ error: message }),
    setSearchTerm: (term) => set({ searchTerm: term }),
}))

export default useMovieStore;