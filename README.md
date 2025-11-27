# 🎬 Movie Search App

A modern, responsive movie search application built with React, Vite, and Tailwind CSS. Features real-time search with debouncing, detailed movie information, and a beautiful dark mode UI with smooth animations.

![Movie Search App](https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## ✨ Features

- **🔍 Real-time Search**: Instantly search for movies using the TMDB API
- **⚡ Debounced Input**: Optimized API calls with 300ms debounce
- **🌓 Dark Mode**: Fully supported dark theme with smooth transitions
- **📱 Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **🎨 Modern UI**: Built with Tailwind CSS v4 for a premium look and feel
- **✨ Smooth Animations**: Powered by Framer Motion for delightful interactions
- **ℹ️ Detailed View**: Click any movie to see full details in a beautiful modal

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A TMDB API key (Get one [here](https://www.themoviedb.org/documentation/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-search.git
   cd movie-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your TMDB API credentials:
   ```env
   VITE_TMDB_ACCESS_TOKEN=your_read_access_token_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📖 Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Use the search bar to find movies by title
3. Toggle dark mode using the sun/moon icon in the header
4. Click on any movie card to view detailed information including:
   - Plot summary
   - Release date
   - Rating
   - Genres
   - Runtime

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ErrorMessage.jsx
│   ├── Header.jsx
│   ├── LoadingSpinner.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── MovieModal.jsx
│   └── SearchBar.jsx
├── hooks/             # Custom React hooks
│   └── useDebounce.js
├── services/          # API integration
│   └── api.js
├── App.jsx            # Main application component
├── index.css          # Global styles & Tailwind config
└── main.jsx           # Entry point
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the amazing movie database API
- [Tailwind Labs](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer](https://www.framer.com/) for the animation library
