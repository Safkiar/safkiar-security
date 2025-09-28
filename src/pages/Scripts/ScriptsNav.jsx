// src/pages/Scripts/ScriptsNav.jsx
import { Link } from "react-router-dom";

export default function ScriptsNav() {
  return (
    <nav className="sidebar-nav">

      <Link to="." >All Scripts</Link>
      <Link to="macaddresschange">MAC Address Change</Link>
          <Link to="networkscanner">Network Scanner</Link>
      {/* kolejne linki: <NavLink to="nazwa">Nazwa</NavLink> */}
    </nav>
  );
}