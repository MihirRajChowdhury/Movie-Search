import { Calendar, Film, Star } from "lucide-react";
import { motion } from "framer-motion";

// Movie Card Component
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onClick={() => onClick(movie)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-shadow duration-300"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
        {movie.poster_path ? (
          <motion.img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Film className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1 mb-1">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
          {movie.vote_average > 0 && (
            <>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-2" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}