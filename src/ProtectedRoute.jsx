import { Navigate } from "react-router-dom";


export function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/auth/" replace />;
  }

  return children;
}
