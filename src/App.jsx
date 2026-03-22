import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/App.css";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 🔁 Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const elem = document.documentElement;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      }
    }
  };

  // 🎯 Track fullscreen state (for icon change)
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return (
    <div className="pp-root">

      {/* ✅ Fullscreen button */}
      <button className="fullscreen-btn" onClick={toggleFullscreen}>
        {isFullscreen ? "✕" : "⛶"}
      </button>

      <Routes>
        <Route path="/cats/quiz" element={<QuizPage animal="cat" />} />
        <Route path="/dogs/quiz" element={<QuizPage animal="dog" />} />
        <Route path="/" element={<Navigate to="/cats" replace />} />
        <Route path="/cats" element={<CatPage />} />
        <Route path="/dogs" element={<DogPage />} />
      </Routes>

    </div>
  );
}