import { useState } from "react";
import NavBar from "../routes/NavBar";

export default function Home() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (name.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName("");
  };

  return (
    <div>
      <NavBar />

      {!loggedIn ? (
        <div>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h1>Welcome {name}</h1>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}