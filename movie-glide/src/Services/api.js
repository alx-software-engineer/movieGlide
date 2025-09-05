import axios from "axios";

// API Key
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

export const fetchPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular', {
            params: {
                api_key : apiKey,
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
}