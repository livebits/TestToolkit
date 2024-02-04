import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/ContactUs";
import NotFound from "../pages/404";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={NotFound} />
        </Routes>
    )
}

export default AppRoutes;