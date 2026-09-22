import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAppContext();

  // Store the username and password entered by the user.
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    // Make sure the user provides both login fields before
    // attempting to authenticate the account.
    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter your username and password.");
      return;
    }

    const result = login(formData.username, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Send the authenticated user to the dashboard after
    // successful login.
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="form-card">
        <h1>Welcome Back</h1>
        <p>Log in to manage your events.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;