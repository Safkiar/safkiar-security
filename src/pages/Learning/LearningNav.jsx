// src/pages/Scripts/ScriptsNav.jsx
import { Link } from "react-router-dom";

export default function LearningNav() {
    return (
        <nav className="sidebar-nav">

            <Link to=".">All Scripts</Link>
            <h3>Linux</h3>
            <Link to="aboutlinux">About Linux</Link>
            <Link to="linuxcommands">Linux Commands</Link>
            <Link to="systemstructure">System Structure</Link>
            <h3>Math</h3>
            <Link to="math">Math</Link>
        </nav >
    );
}