// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet } from "react-router-dom";
import LearningNav from "./LearningNav";
import "./Learning.css";

export default function LearningLayout() {
    return (
        <div className="basic-site-layout">


            <div className="side-navbar">
                <h1>Learning</h1>
                <LearningNav />      {/* menu WIDOCZNE tylko w sekcji /scripts */}

            </div>
            <div className="site-content">
                <Outlet />        {/* tu zmienia się zawartość podstron /scripts/... */}
            </div>
        </div>
    );
}