import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FlipCard from "../components/FlipCard";
import "../css/DogPage.css";

const DOG_CARDS = [
  {
    name: "גולדן רטריבר",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=70",
    fact: "לגולדן רטריבר יש פרווה כפולה עמידה למים, והם יכולים להריח פי 40 טוב יותר מבני אדם. הם משמשים ברחבי העולם ככלבי טיפול והדרכה.",
    tag: "Canis lupus familiaris",
    accentColor: "#3DAAFF",
  },
  {
    name: "לברדור",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=70",
    fact: "ללברדור יש אצבעות רגליים מחוברות בקרום וזנב דמוי קמשון, מה שהופך אותו לשחיין מצוין. הוא הגזע הפופולרי ביותר בארה\"ב במשך 30 שנה ברציפות.",
    tag: "הפופולרי בעולם",
    accentColor: "#22CC88",
  },
  {
    name: "האסקי סיבירי",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&q=70",
    fact: "האסקי יכול לרוץ עד 150 מייל ביום. יש לו מטבוליזם ייחודי שמאפשר לו לשמור על אנרגיה לאורך זמן — תכונה שלא קיימת באף גזע אחר.",
    tag: "נולד לרוץ",
    accentColor: "#FF5A5A",
  },
];

export default function DogPage() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleFlip = (name) => {
    setFlippedCards((prev) => new Set(prev).add(name));
  };

  const allFlipped = flippedCards.size === DOG_CARDS.length;

  return (
    <div className="dog-page">
      <NavBar color="#3DAAFF" />
      <div className="dog-page__hero">
        <span className="dog-page__emoji">🐶</span>
        <h1 className="dog-page__title">כלבים</h1>
        <p className="dog-page__sub">לחץ על הכרטיסיות בשביל לחשוף עובדות</p>
        <div className="dog-page__stripe" />
      </div>
      <div className="dog-page__cards">
        {DOG_CARDS.map((card) => (
          <FlipCard
            key={card.name}
            {...card}
            onFlip={() => handleFlip(card.name)}
          />
        ))}
      </div>
      {allFlipped && (
        <div className="QuizBtn" style={{ background: "#3DAAFF" }} onClick={() => navigate("/dogs/quiz")}>
           לחידון הכלבים 🐶
        </div>
      )}
    </div>
  );
}