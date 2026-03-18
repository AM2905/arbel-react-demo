import { Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  return (
    <div className="pp-root">
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