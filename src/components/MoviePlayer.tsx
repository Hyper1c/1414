import React from "react";
import type { ContentItem } from "../data/mockContent";

interface MoviePlayerProps {
  movie: ContentItem;
  onClose: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        {movie.streamUrl ? (
          <iframe
            src={movie.streamUrl}
            title={movie.title}
            className="w-full h-full"
            allowFullScreen
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            ⚠️ Este contenido no tiene un enlace de reproducción configurado.
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          ✖ Cerrar
        </button>
      </div>
    </div>
  );
};

export default MoviePlayer;
