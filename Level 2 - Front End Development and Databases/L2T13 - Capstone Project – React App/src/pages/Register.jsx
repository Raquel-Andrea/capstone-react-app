import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const { register } = useAppContext();

  // Keep track of the information entered into each registration field.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // Store validation and registration messages so the user receives
  // clear feedback when the form is submitted.
  const [message, setMessage] = useState("");
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

    setMessage("");
    setError("");

    // Prevent registration when any required field has been left empty.
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.username.trim() ||
      !formData.password.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    // Check that the email follows a basic valid email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const result = register(formData);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setMessage(result.message);

    // Send the newly registered user to the login page after
    // the account has been successfully created.
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <main className="register-page">
      <section className="form-card">
        <h1>Create an Account</h1>
        <p>Register to start organising your events.</p>

        {error && <p className="error-message">{error}</p>}

        {message && <p className="success-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a password"
            />
          </div>

          <button type="submit">Create Account</button>
        </form>
      </section>
    </main>
  );
}

export default Register;