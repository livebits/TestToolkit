import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const location = useLocation()
    
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ location }} />
    }

    return children
}

export default PrivateRoute;