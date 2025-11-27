import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import { EmptyInitial, EmptyResults } from "./components/EmptyState";
import MovieModal from "./components/MovieModal";
import useDebounce from "./hooks/useDebounce";
import { searchMovies, getMovieDetails } from "./services/api";

export default function MovieSearchApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch movie results
  useEffect(() => {
    async function fetch() {
      const query = debouncedSearchTerm.trim();

      if (!query) {
        setMovies([]);
        setHasSearched(false);
        return;
      }

      setLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [debouncedSearchTerm]);

  // Fetch detailed info for modal
  const handleMovieClick = async (movieId) => {
    try {
      const details = await getMovieDetails(movieId);
      setSelectedMovie(details);
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">

      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="max-w-7xl mx-auto px-4 py-8">

        {loading && <LoadingSpinner />}

        {!loading && error && <ErrorMessage message={error} />}

        {!loading && !error && !hasSearched && <EmptyInitial />}

        {!loading && !error && hasSearched && movies.length === 0 && (
          <EmptyResults />
        )}

        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} onMovieSelect={handleMovieClick} />
        )}
      </main>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
