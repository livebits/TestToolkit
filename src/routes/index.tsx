import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/ContactUs";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;