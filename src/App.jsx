import { Routes, Route, Link } from "react-router-dom";
import cat from "./assets/cat.png";
import dog from "./assets/dog.png";
import "./style.css";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>press the cat!</h1>

      <Link to="/second">
        <img
          src={cat}
          alt="Go to second page"
          style={{ cursor: "pointer" }}
          className="catBtn"
        />
      </Link>
    </div>
  );
}

function SecondPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>press the dog</h1>
      <Link to="/">
      
       <img
          src={dog}
          alt="Go to second page"
          style={{ cursor: "pointer" }}
          className="catBtn"
        />
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;