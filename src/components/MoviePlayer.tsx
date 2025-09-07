import React, { useRef, useState, useEffect } from "react";
import type { ContentItem } from "../data/mockContent";

interface MoviePlayerProps {
  movie: ContentItem;
  onClose: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isVideoFile, setIsVideoFile] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [hoverTime, setHoverTime] = useState(0);
  const [showHoverTime, setShowHoverTime] = useState(false);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkVideoType = () => {
      const isVideo = movie.streamUrl?.endsWith(".mp4") || movie.streamUrl?.endsWith(".webm") || movie.streamUrl?.endsWith(".ogg");
      console.log('Stream URL:', movie.streamUrl);
      console.log('Is video file:', isVideo);
      setIsVideoFile(!!isVideo);
    };

    checkVideoType();

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [movie.streamUrl]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (e.shiftKey) {
            seek(-30); // Retroceder 30 segundos con Shift
          } else {
            seek(-10); // Retroceder 10 segundos
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (e.shiftKey) {
            seek(30); // Avanzar 30 segundos con Shift
          } else {
            seek(10); // Avanzar 10 segundos
          }
          break;
        case 'KeyJ':
          e.preventDefault();
          seek(-10);
          break;
        case 'KeyL':
          e.preventDefault();
          seek(10);
          break;
        case 'KeyK':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'KeyI':
          e.preventDefault();
          seek(-30);
          break;
        case 'KeyO':
          e.preventDefault();
          seek(30);
          break;
        case 'Digit0':
          e.preventDefault();
          seek(0);
          break;
        case 'Digit1':
        case 'Digit2':
        case 'Digit3':
        case 'Digit4':
        case 'Digit5':
        case 'Digit6':
        case 'Digit7':
        case 'Digit8':
        case 'Digit9':
          e.preventDefault();
          const percentage = parseInt(e.code.replace('Digit', '')) * 10;
          seekToPercentage(percentage);
          break;
        case 'Escape':
          if (isFullscreen) {
            exitFullscreen();
          } else {
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
  };

  const seekToPercentage = (percentage: number) => {
    const video = videoRef.current;
    if (!video) return;

    const targetTime = (video.duration * percentage) / 100;
    video.currentTime = targetTime;
  };

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSpeedMenu(false);
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    setHoverTime(time);
    setIsHoveringProgress(true);
  };

  const handleProgressLeave = () => {
    setIsHoveringProgress(false);
    setShowHoverTime(false);
  };

  const toggleFullscreen = () => {
    const container = document.querySelector('.video-container') as HTMLElement;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  if (!movie.streamUrl) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-center h-full text-white">
            ⚠️ Este contenido no tiene un enlace de reproducción configurado.
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            ✖ Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div 
        className="video-container relative w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowControls(false)}
      >
        {isVideoFile ? (
          <>
            <video
              ref={videoRef}
              src={movie.streamUrl}
              className="w-full h-full"
              autoPlay
              onClick={togglePlayPause}
              onError={(e) => {
                console.error('Video error:', e);
                console.log('Video src:', movie.streamUrl);
              }}
              onLoadStart={() => console.log('Video load started')}
              onCanPlay={() => console.log('Video can play')}
            />
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-white text-lg">Cargando video...</div>
              </div>
            )}

            {/* Controles personalizados */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
              {/* Barra de progreso */}
              <div className="px-4 py-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Controles principales */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlayPause}
                    className="text-white hover:text-gray-300 transition"
                  >
                    {isPlaying ? '⏸️' : '▶️'}
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gray-300 transition"
                    >
                      {isMuted ? '🔇' : '🔊'}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  <div className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => seek(-10)}
                    className="text-white hover:text-gray-300 transition"
                    title="Retroceder 10s"
                  >
                    ⏪
                  </button>
                  <button
                    onClick={() => seek(10)}
                    className="text-white hover:text-gray-300 transition"
                    title="Avanzar 10s"
                  >
                    ⏩
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-gray-300 transition"
                    title="Pantalla completa"
                  >
                    {isFullscreen ? '⤓' : '⤢'}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={movie.streamUrl}
            title={movie.title}
            className="w-full h-full"
            allowFullScreen
          />
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition z-10"
        >
          ✖ Cerrar
        </button>

        {/* Título del video */}
        <div className="absolute top-3 left-3 text-white text-lg font-semibold bg-black/50 px-3 py-1 rounded">
          {movie.title}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default MoviePlayer;
