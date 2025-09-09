import useMovieStore from "../Store/useMoviesStore";

function Search() {
    const searchTerm = useMovieStore((state => state.searchTerm));
    const setSearchTerm = useMovieStore((state) => state.setSearchTerm);

    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
     <div className="mb-8 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a movie in the lists below..."
        className="w-full p-3 bg-gray-700 text-secondary rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}

export default Search;