// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import LearningNav from "./LearningNav";
import "./Learning.css";
import { AnimatePresence, motion } from "framer-motion";
import contentAnim from "../../settings/navigation/navigation";

export default function LearningLayout() {
      const location = useLocation();
    return (
        <div className="basic-site-layout">


            <div className="side-navbar">
                <h1>Learning</h1>
                <LearningNav />      

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