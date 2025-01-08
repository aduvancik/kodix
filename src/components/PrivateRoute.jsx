import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isAuthenticated = Boolean(localStorage.getItem("currentUser"));

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
