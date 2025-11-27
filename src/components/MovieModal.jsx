import { Calendar, Film, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Movie Modal Component
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-200 dark:bg-gray-700">
                {movie.poster_path ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center">
                    <Film className="w-24 h-24 text-gray-400" />
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="md:w-2/3 p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {movie.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">
                      {movie.release_date?.split('-')[0] || 'N/A'}
                    </span>
                  </div>
                  {movie.vote_average > 0 && (
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{movie.vote_average.toFixed(1)}/10</span>
                    </div>
                  )}
                  {movie.vote_count > 0 && (
                    <span className="text-sm">({movie.vote_count} votes)</span>
                  )}
                </div>

                {movie.genres && movie.genres.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {movie.genres.map((genre, index) => (
                        <motion.span
                          key={genre.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {genre.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {movie.overview || 'No overview available.'}
                  </p>
                </div>

                {movie.runtime && (
                  <div className="mt-6 text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Runtime:</span> {movie.runtime} minutes
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}