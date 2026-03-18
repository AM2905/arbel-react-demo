import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/QuizPage.css";

const CAT_QUESTIONS = [
  {
    question: "כמה שעות ביום חתול ישן?",
    options: ["4-6", "8-10", "12-16", "20-22"],
    correct: 2,
  },
  {
    question: "כמה שרירים יש לחתול באוזן אחת?",
    options: ["10", "20", "32", "50"],
    correct: 2,
  },
  {
    question: "איזה גזע חתולים אוהב מים?",
    options: ["מיין קון", "חתול ביתי", "חתול בנגל", "פרסי"],
    correct: 2,
  },
];

const DOG_QUESTIONS = [
  {
    question: "פי כמה כלב מריח טוב יותר מאדם?",
    options: ["פי 5", "פי 20", "פי 40", "פי 100"],
    correct: 2,
  },
  {
    question: "כמה מייל ביום האסקי יכול לרוץ?",
    options: ["20", "50", "100", "150"],
    correct: 3,
  },
  {
    question: "מה מייחד את הלברדור פיזית?",
    options: ["אוזניים ארוכות", "זנב מסולסל", "אצבעות מחוברות בקרום", "פרווה מתולתלת"],
    correct: 2,
  },
];

export default function QuizPage({ animal }) {
  const navigate = useNavigate();
  const isCat = animal === "cat";
  const questions = isCat ? CAT_QUESTIONS : DOG_QUESTIONS;
  const color = isCat ? "#FF6BB5" : "#3DAAFF";
  const emoji = isCat ? "🐱" : "🐶";
  const correctShape = isCat ? "🐟" : "🦴";
  const wrongShape = "🐾";

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].correct) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };
const getMessage = () => {
  if (score === 3) return "הצלחת הכל! 🎉";
  if (score === 2) return "כל הכבוד! 👏";
  if (score === 1) return "כדאי לחזור על החומר 📚";
  return "פעם הבאה תצליחי יותר 💪";
};
  if (finished) {
    return (
      <div className="quiz-page" style={{ "--quiz-color": color }}>
        <div className="quiz-finish">
          <span className="quiz-finish__emoji">{emoji}</span>
          <h1 className="quiz-finish__title">סיימת!</h1>
<p className="quiz-finish__message">{getMessage()}</p>
          <p className="quiz-finish__score">{score} / {questions.length}</p>
          <button
            className="quiz-finish__btn"
            style={{ background: color }}
            onClick={() => navigate(isCat ? "/cats" : "/dogs")}
          >
            חזרה לדף {isCat ? "החתולים" : "הכלבים"}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-page" style={{ "--quiz-color": color }}>
      <div className="quiz-header" style={{ background: color }}>
        <button className="quiz-back" onClick={() => navigate(isCat ? "/cats" : "/dogs")}>
          → חזור
        </button>
        <span className="quiz-progress">{current + 1} / {questions.length}</span>
      </div>

      <div className="quiz-body">
        <span className="quiz-emoji">{emoji}</span>
        <h2 className="quiz-question">{q.question}</h2>
        <div className="quiz-options">
          {q.options.map((option, index) => {
            let shape = "⬜";
            if (selected !== null) {
              if (index === q.correct) shape = correctShape;
              else if (index === selected && selected !== q.correct) shape = wrongShape;
            }
            return (
              <button
                key={index}
                className={`quiz-option ${
                  selected !== null
                    ? index === q.correct
                      ? "correct"
                      : index === selected
                      ? "wrong"
                      : "dim"
                    : ""
                }`}
                onClick={() => handleAnswer(index)}
              >
                <span className="quiz-option__shape">{shape}</span>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}