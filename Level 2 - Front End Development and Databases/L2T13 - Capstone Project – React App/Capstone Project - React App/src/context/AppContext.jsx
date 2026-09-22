import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Store registered users so account information can be shared
  // between the registration and login pages.
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("eventPlannerUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Store the currently logged-in user so different pages
  // can access the user's account information.
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("eventPlannerCurrentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Store all events created in the application.
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("eventPlannerEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const register = (userData) => {
    const userExists = users.some(
      (user) =>
        user.username.toLowerCase() === userData.username.toLowerCase() ||
        user.email.toLowerCase() === userData.email.toLowerCase(),
    );

    if (userExists) {
      return {
        success: false,
        message: "Username or email is already registered.",
      };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem("eventPlannerUsers", JSON.stringify(updatedUsers));

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const login = (username, password) => {
  // Find a registered user whose username and password match
  // the credentials entered on the login form.
  const user = users.find(
    (registeredUser) =>
      registeredUser.username === username &&
      registeredUser.password === password,
  );

    if (!user) {
      return {
        success: false,
        message: "Invalid username or password.",
      };
    }

    setCurrentUser(user);
    localStorage.setItem(
      "eventPlannerCurrentUser",
      JSON.stringify(user),
    );

    return {
      success: true,
      message: "Login successful.",
    };
  };

  const logout = () => {
    // Remove the active user from shared state when the user logs out.
    setCurrentUser(null);
    localStorage.removeItem("eventPlannerCurrentUser");
  };

  const addEvent = (eventData) => {
    const newEvent = {
      id: Date.now(),
      userId: currentUser.id,
      ...eventData,
    };

    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents);
    localStorage.setItem(
      "eventPlannerEvents",
      JSON.stringify(updatedEvents),
    );
  };

  const updateEvent = (eventId, updatedEventData) => {
    const updatedEvents = events.map((event) =>
      event.id === Number(eventId)
        ? { ...event, ...updatedEventData }
        : event,
    );

    setEvents(updatedEvents);
    localStorage.setItem(
      "eventPlannerEvents",
      JSON.stringify(updatedEvents),
    );
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter(
      (event) => event.id !== Number(eventId),
    );

    setEvents(updatedEvents);
    localStorage.setItem(
      "eventPlannerEvents",
      JSON.stringify(updatedEvents),
    );
  };

  const value = {
    users,
    currentUser,
    events,
    register,
    login,
    logout,
    addEvent,
    updateEvent,
    deleteEvent,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}