import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  // Routes determine which page is displayed based on the URL.
  // The Header remains visible so users can navigate throughout
  // the application without losing access to the main menu.
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-event"
  element={
    <ProtectedRoute>
      <AddEvent />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-event/:id"
  element={
    <ProtectedRoute>
      <EditEvent />
    </ProtectedRoute>
  }
/>
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;