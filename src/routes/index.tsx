import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import ContactPage from "../pages/ContactUs";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="/about" element={
                <PrivateRoute>
                    <About />
                </PrivateRoute>
            } />
            <Route path="/contact" element={
                <PrivateRoute>
                    <ContactPage />
                </PrivateRoute>
            } />
            <Route path="*" Component={NotFound} />
        </Routes>
    )
}

export default AppRoutes;