import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAppContext();

  const handleLogout = () => {
    // Clear the authenticated user before returning to the login page.
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Event Planner
        </Link>

        <nav className="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link>

          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/add-event">Add Event</Link>
              <Link to="/help">Help</Link>

              <button
                type="button"
                className="nav-logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/help">Help</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;