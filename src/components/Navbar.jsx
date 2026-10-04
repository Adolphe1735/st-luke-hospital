import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/patients", label: "Patients" },
  { to: "/appointments", label: "Appointments" },
  { to: "/billing", label: "Billing" },
  { to: "/pharmacy", label: "Pharmacy" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">SL</span>
          <span>
            St. Luke Hospital
            <small>Musanze • Rwanda</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Hospital navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}