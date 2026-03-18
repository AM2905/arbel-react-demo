import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar({ color }) {
  return (
    <nav className="navbar" style={{ background: color }}>
      <span className="navbar__brand">🐾 חיות</span>
      <div className="navbar__links">
        <NavLink
          to="/cats"
          className={({ isActive }) =>
            "navbar__link" + (isActive ? " navbar__link--active" : "")
          }
        >
          🐱 חתולים
        </NavLink>
        <NavLink
          to="/dogs"
          className={({ isActive }) =>
            "navbar__link" + (isActive ? " navbar__link--active" : "")
          }
        >
          🐶 כלבים
        </NavLink>
      </div>
    </nav>
  );
}