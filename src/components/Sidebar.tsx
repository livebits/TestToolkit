import { Link } from "react-router-dom";
import '../styles/Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>Menu</h2>
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