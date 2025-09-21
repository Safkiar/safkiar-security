import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./navigation/Nav";

import Contact from "./pages/Contact/Contact";
import Cybersecurity from "./pages/Cybersecurity/Cybersecurity";
import Experience from "./pages/Experience/Experience";
import Homepage from "./pages/Homepage/Homepage";
import Lab from "./pages/Lab/Lab";
import Scripts from "./pages/Scripts/Scripts";

import MacAddressChange from "./pages/Scripts/PythonScritps/MacAddressChange";
import ScriptsLayout from "./pages/Scripts/ScriptsLayout";

import LearningLayout from "./pages/Learning/LearningLayout";
import Learning from "./pages/Learning/Learning";
import LinuxCommands from "./pages/Learning/Linux/LinuxCommands";
import AboutLinux from "./pages/Learning/Linux/AboutLinux";
import CybersecurityLayout from "./pages/Cybersecurity/CybersecurityLayout";
import Links from "./pages/Cybersecurity/Useful/Links";

function AppContent() {
  const location = useLocation();
  const pageAnimation = {
    initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }
  };

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div {...pageAnimation}><Homepage /></motion.div>} />
          <Route path="/contact" element={<motion.div {...pageAnimation}><Contact /></motion.div>} />
          <Route path="/cybersecurity" element={<motion.div {...pageAnimation}><CybersecurityLayout /></motion.div>} >
            <Route index element={<motion.div {...pageAnimation}><Cybersecurity /></motion.div>} />
            <Route path="links" element={<motion.div {...pageAnimation}><Links /></motion.div>} />
          </Route>
          <Route path="/experience" element={<motion.div {...pageAnimation}><Experience /></motion.div>} />
          <Route path="/lab" element={<motion.div {...pageAnimation}><Lab /></motion.div>} />
          <Route path="/learning" element={<motion.div {...pageAnimation}><LearningLayout /></motion.div>} >
            <Route index element={<motion.div {...pageAnimation}><Learning /></motion.div>} />
                   <Route path="aboutlinux" element={<motion.div {...pageAnimation}><AboutLinux /></motion.div>} />
            <Route path="linuxcommands" element={<motion.div {...pageAnimation}><LinuxCommands /></motion.div>} />
          </Route>
          <Route path="/scripts" element={<motion.div {...pageAnimation}><ScriptsLayout /></motion.div>}>
            <Route index element={<motion.div {...pageAnimation}><Scripts /></motion.div>} />
            <Route path="macaddresschange" element={<motion.div {...pageAnimation}><MacAddressChange /></motion.div>} />
          </Route>
          <Route path="*" element={<motion.div {...pageAnimation}>404 – Not found</motion.div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default function App() { return (<BrowserRouter><AppContent /></BrowserRouter>); }