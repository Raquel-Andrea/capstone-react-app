import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Home.css";

function Home() {
  const { currentUser } = useAppContext();

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">PLAN • ORGANISE • REMEMBER</p>

          <h1>Plan your life with confidence.</h1>

          <p className="hero-description">
            Personal Event Planner helps you organise important events,
            keep track of the details, and manage your schedule in one
            simple place.
          </p>

          <div className="hero-actions">
            {currentUser ? (
              <Link to="/dashboard" className="primary-button">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/register" className="primary-button">
                  Get Started
                </Link>

                <Link to="/login" className="secondary-button">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Everything you need to stay organised</h2>

        <div className="features-grid">
          <article className="feature-card">
            <h3>Create Events</h3>
            <p>
              Add event names, dates, times, locations and descriptions
              so important details are easy to find.
            </p>
          </article>

          <article className="feature-card">
            <h3>Manage Your Schedule</h3>
            <p>
              View your events from your personal dashboard and keep
              your plans organised.
            </p>
          </article>

          <article className="feature-card">
            <h3>Update Anytime</h3>
            <p>
              Edit event information whenever your plans change and
              remove events that are no longer needed.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;