// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import ScriptsNav from "./ScriptsNav";
import { AnimatePresence, motion } from "framer-motion";
import "./Scripts.css";
import contentAnim from "../../settings/navigation/navigation";

export default function ScriptsLayout() {
  const location = useLocation();

  return (
    <div className="basic-site-layout">
      <div className="side-navbar">
        <h1>Scripts</h1>
        <ScriptsNav />
      </div>

      <div className="site-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={contentAnim.transition}
            variants={contentAnim}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}