import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navigation">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/cybersecurity" className="nav-item">Cybersecurity</Link>
      <Link to="/certificates" className="nav-item">Courses</Link>
      <Link to="/learning" className="nav-item">Learning</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/scripts" className="nav-item">Scripts</Link>
    </div>
  );
}

export default Nav;