// src/pages/Scripts/ScriptsNav.jsx
import { Link } from "react-router-dom";

export default function CybersecurityNav() {
    return (
        <nav className="sidebar-nav">

            <Link to=".">Help</Link>
            <h3>Useful</h3>
            <Link to="links">Links</Link>
            {/* kolejne linki: <NavLink to="nazwa">Nazwa</NavLink> */}
        </nav >
    );
}