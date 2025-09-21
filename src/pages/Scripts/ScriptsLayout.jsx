// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet } from "react-router-dom";
import ScriptsNav from "./ScriptsNav";
import "./Scripts.css";

export default function ScriptsLayout() {
    return (
        <div className="basic-site-layout">

            <div className="side-navbar">
                <h1>Scripts</h1>
                <ScriptsNav />      {/* menu WIDOCZNE tylko w sekcji /scripts */}

            </div>
            <div className="site-content">
                <Outlet />        {/* tu zmienia się zawartość podstron /scripts/... */}
            </div>
        </div>
    );
}