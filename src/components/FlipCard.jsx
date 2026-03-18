import { useState } from "react";
import "../css/FlipCard.css";

export default function FlipCard({ name, image, fact, tag, accentColor, onFlip }) {
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState(false);

  const handleClick = () => {
    if (!flipped && !seen) {
      setSeen(true);
      if (onFlip) onFlip();
    }
    setFlipped((f) => !f);
  };

  return (
    <div
      className={`flip-wrap${flipped ? " flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <img className="flip-front__img" src={image} alt={name} />
          {seen && <span className="flip-front__check">✓</span>}
          <div className="flip-front__bar">
            <span className="flip-front__name">{name}</span>
            <span
              className="flip-front__hint"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              הפוך ↻
            </span>
          </div>
        </div>
        <div className="flip-back" style={{ background: accentColor }}>
          <span className="flip-back__label">הידעת?</span>
          <div className="flip-back__title">{name}</div>
          <p className="flip-back__fact">{fact}</p>
          <span className="flip-back__tag">{tag}</span>
        </div>
      </div>
    </div>
  );
}