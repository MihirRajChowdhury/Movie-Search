import { Film, Search } from "lucide-react";

export function EmptyInitial() {
  return (
    <div className="text-center py-20">
      <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Start searching for your favorite movies!
      </p>
    </div>
  );
}

export function EmptyResults() {
  return (
    <div className="text-center py-20">
      <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-xl text-gray-600 dark:text-gray-400">
        No movies found. Try a different search term.
      </p>
    </div>
  );
}
