import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Our Little Shop
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}