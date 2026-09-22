import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./AddEvent.css";

function AddEvent() {
  const navigate = useNavigate();
  const { addEvent, currentUser } = useAppContext();

  // Store the information entered into the event form.
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    // Make sure all required event information has been provided
    // before the event is added to the application.
    if (
      !formData.title.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.location.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (!currentUser) {
      setError("You must be logged in to create an event.");
      return;
    }

    addEvent(formData);

    // Return to the dashboard so the user can immediately see
    // the newly created event.
    navigate("/dashboard");
  };

  return (
    <main className="add-event-page">
      <section className="form-card">
        <h1>Add New Event</h1>
        <p>Enter the details of your event below.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Event Name *</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date *</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time *</label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter event location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your event"
              rows="5"
            />
          </div>

          <div className="form-actions">
            <button type="submit">Save Event</button>

            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AddEvent;