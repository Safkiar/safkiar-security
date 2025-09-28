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
import SystemStructure from "./pages/Learning/Linux/SystemStructure";
import NetworkScanner from "./pages/Scripts/PythonScritps/NetworkScanner";

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
  <Route path="/" element={<motion.div {...pageAnimation}><Homepage/></motion.div>} />
  <Route path="/contact" element={<motion.div {...pageAnimation}><Contact/></motion.div>} />

  {/* layouty bez motion.div */}
  <Route path="/cybersecurity" element={<CybersecurityLayout/>}>
    <Route index element={<Cybersecurity/>} />
    <Route path="links" element={<Links/>} />
  </Route>

  <Route path="/learning" element={<LearningLayout/>}>
    <Route index element={<Learning/>} />
    <Route path="aboutlinux" element={<AboutLinux/>} />
    <Route path="linuxcommands" element={<LinuxCommands/>} />
    <Route path="systemstructure" element={<SystemStructure/>} />
  </Route>

  <Route path="/scripts" element={<ScriptsLayout/>}>
    <Route index element={<Scripts/>} />
    <Route path="macaddresschange" element={<MacAddressChange/>} />
    <Route path="networkscanner" element={<NetworkScanner/>} />
  </Route>

  <Route path="*" element={<motion.div {...pageAnimation}>404 – Not found</motion.div>} />
</Routes>
      </AnimatePresence>
    </>
  );
}
export default function App() { return (<BrowserRouter><AppContent /></BrowserRouter>); }