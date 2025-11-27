import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MovieGrid({ movies, onMovieSelect }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieSelect(movie.id)} />
      ))}
    </motion.div>
  );
}
