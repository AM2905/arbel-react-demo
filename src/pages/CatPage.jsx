import { useState } from "react";
import NavBar from "../components/NavBar";
import FlipCard from "../components/FlipCard";
import "../css/CatPage.css";
import { useNavigate } from "react-router-dom";

const CAT_CARDS = [
  {
    name: "חתול ביתי",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=70",
    fact: "חתולים ישנים בין 12 ל-16 שעות ביום — כמעט 70% מחייהם! יש להם 32 שרירים באוזן אחת, מה שמאפשר להם לסובב אותה 180 מעלות.",
    tag: "Felis catus",
    accentColor: "#FF6BB5",
  },
  {
    name: "חתול בנגל",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&q=70",
    fact: "חתולי בנגל אוהבים מים — נדיר מאוד בקרב חתולים! הפרווה שלהם מבריקה באור השמש בזכות קצות שיער שקופות ייחודיות.",
    tag: "גזע היברידי",
    accentColor: "#FF8C00",
  },
  {
    name: "מיין קון",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500&q=70",
    fact: "מיין קון הוא גזע החתולים הביתיים הגדול ביותר — זכרים יכולים להגיע ל-9 ק\"ג. הם משמיעים צייצים ורטרוטים במקום מיאוי רגיל.",
    tag: "ענקים עדינים",
    accentColor: "#9B59D0",
  },
];

export default function CatPage() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleFlip = (name) => {
    setFlippedCards((prev) => new Set(prev).add(name));
  };

  const allFlipped = flippedCards.size === CAT_CARDS.length;

  return (
    <div className="cat-page">
      <NavBar color="#FF6BB5" />
      <div className="cat-page__hero">
        <span className="cat-page__emoji">🐱</span>
        <h1 className="cat-page__title">חתולים</h1>
        <p className="cat-page__sub">לחץ על הכרטיסיות בשביל לחשוף עובדות</p>
        <div className="cat-page__stripe" />
      </div>
      <div className="cat-page__cards">
        {CAT_CARDS.map((card) => (
          <FlipCard
            key={card.name}
            {...card}
            onFlip={() => handleFlip(card.name)}
          />
        ))}
      </div>
      {allFlipped && (
        <div className="QuizBtn"  style={{ background: "#FF6BB5" }} onClick={() => navigate("/cats/quiz")}>
           לחידון החתולים 🐱
        </div>
      )}
    </div>
  );
}