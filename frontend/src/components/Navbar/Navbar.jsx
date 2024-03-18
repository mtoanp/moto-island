import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          Logo
        </NavLink>
      </div>
      <div className="nav-middle"></div>
      <div className="nav-right">
        <div className="nav-links text-green-800">
          <NavLink to="/api/factures/new">New Facture</NavLink>
          <NavLink to="/api/factures/history">History</NavLink>
        </div>
      </div>
    </nav>
  );
}
