import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAppContext();

  // Redirect users to the login page when they try to access
  // private pages without an authenticated account.
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;