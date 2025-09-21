// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet } from "react-router-dom";
import "./Cybersecurity.css";
import CybersecurityNav from "./CybersecurityNav";

export default function CybersecurityLayout() {
    return (
        <div className="basic-site-layout">


            <div className="side-navbar">
                <h1>Cybersecurity</h1>
                <CybersecurityNav />      {/* menu WIDOCZNE tylko w sekcji /scripts */}

            </div>
            <div className="site-content">
                <Outlet />        {/* tu zmienia się zawartość podstron /scripts/... */}
            </div>
        </div>
    );
}