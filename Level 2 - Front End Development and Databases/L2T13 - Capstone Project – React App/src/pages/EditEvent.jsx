import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./EditEvent.css";

function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { events, updateEvent, currentUser } = useAppContext();

  // Find the event selected by the user so its existing details
  // can be displayed in the edit form.
  const eventToEdit = events.find(
    (event) =>
      event.id === Number(id) && event.userId === currentUser?.id,
  );

  const [formData, setFormData] = useState(() => ({
    title: eventToEdit?.title || "",
    date: eventToEdit?.date || "",
    time: eventToEdit?.time || "",
    location: eventToEdit?.location || "",
    description: eventToEdit?.description || "",
  }));

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

    // Make sure the required event information is completed
    // before saving the updated event.
    if (
      !formData.title.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.location.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (!eventToEdit) {
      setError("The selected event could not be found.");
      return;
    }

    updateEvent(id, formData);

    // Return to the dashboard after successfully updating
    // the selected event.
    navigate("/dashboard");
  };

  if (!eventToEdit) {
    return (
      <main className="edit-event-page">
        <section className="form-card">
          <h1>Event Not Found</h1>
          <p>The event you are trying to edit could not be found.</p>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Return to Dashboard
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="edit-event-page">
      <section className="form-card">
        <h1>Edit Event</h1>
        <p>Update the details of your event below.</p>

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
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <div className="form-actions">
            <button type="submit">Save Changes</button>

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

export default EditEvent;