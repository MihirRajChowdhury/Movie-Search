import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-6">
      <motion.div
        className="relative"
        animate={{ scale: isFocused ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors duration-300"
          style={{ color: isFocused ? '#3b82f6' : '#9ca3af' }}
        />

        <motion.input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-4 py-3 rounded-full border-2 
          border-gray-200 dark:border-gray-600 
          bg-white dark:bg-gray-700 
          text-gray-900 dark:text-white 
          placeholder-gray-400 
          focus:border-blue-500 dark:focus:border-blue-400 
          outline-none transition-colors"
          whileFocus={{ boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
        />
      </motion.div>
    </div>
  );
}