const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results || [];
}

export async function getMovieDetails(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
}
