import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Dashboard.css";

function Dashboard() {
 const { currentUser, events, deleteEvent } = useAppContext();

  // Only display events belonging to the currently logged-in user.
  const userEvents = events.filter(
    (event) => event.userId === currentUser?.id,
  );

  const handleDelete = (eventId) => {
  // Ask the user for confirmation before permanently removing
  // the selected event from the application.
  const confirmed = window.confirm(
    "Are you sure you want to delete this event?",
  );

  if (confirmed) {
    deleteEvent(eventId);
  }
};

  return (
    <main className="dashboard-page">
      <section className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Welcome, {currentUser?.name}!</h1>
            <p>Manage your upcoming events from your dashboard.</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <Link to="/add-event" className="add-event-button">
            + Add New Event
          </Link>
        </div>

        <section className="events-section">
          <h2>Your Events</h2>

          {userEvents.length === 0 ? (
            <p className="empty-message">
              You don't have any events yet. Add your first event to get
              started.
            </p>
          ) : (
            <div className="events-grid">
              {userEvents.map((event) => (
       <article key={event.id} className="event-card">
  <h3>{event.title}</h3>

  <p>
    <strong>Date:</strong> {event.date}
  </p>

  <p>
    <strong>Time:</strong> {event.time}
  </p>

  <p>
    <strong>Location:</strong> {event.location}
  </p>

  {event.description && (
    <p>
      <strong>Description:</strong> {event.description}
    </p>
  )}

  <div className="event-actions">
    <Link
      to={`/edit-event/${event.id}`}
      className="edit-button"
    >
      Edit
    </Link>

    <button
      type="button"
      className="delete-button"
      onClick={() => handleDelete(event.id)}
    >
      Delete
    </button>
  </div>
</article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default Dashboard;