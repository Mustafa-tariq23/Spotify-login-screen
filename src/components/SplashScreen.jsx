import React from "react";

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Main logo container */}
      <div className="flex flex-col items-center justify-center">
        {/* Spotify logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify"
          className="w-32 mb-6"
        />

        {/* Animated loading bar */}
        <div className="mt-6 w-48 h-1 bg-gray-600 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full animate-loading-bar" />
        </div>
      </div>

      {/* CSS for loading bar animation */}
      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
