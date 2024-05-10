
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../pages/Shared/providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="w-full text-center mx-auto">
            <span className="w-1/5 mx-auto loading loading-ring loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute;