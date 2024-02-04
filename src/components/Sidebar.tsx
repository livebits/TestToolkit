import { Link, useNavigate } from "react-router-dom";
import '../styles/Sidebar.css';
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logoutUser = () => {
        logout();
        navigate('/login')
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>Menu</h2>
                {
                    localStorage.getItem('token') && <button className="logout" onClick={() => logoutUser()}>Logout</button>
                }
            </div>
            <div className="sidebar__content">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;