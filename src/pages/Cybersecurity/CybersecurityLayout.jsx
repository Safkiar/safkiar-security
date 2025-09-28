// src/pages/Scripts/ScriptsLayout.jsx
import { Outlet, useLocation} from "react-router-dom";
import "./Cybersecurity.css";
import CybersecurityNav from "./CybersecurityNav";
import { AnimatePresence, motion } from "framer-motion";
import contentAnim from "../../settings/navigation/navigation";

export default function CybersecurityLayout() {
      const location = useLocation();
    return (
        <div className="basic-site-layout">


            <div className="side-navbar">
                <h1>Cybersecurity</h1>
                <CybersecurityNav />      

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