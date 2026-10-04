import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>St. Luke Hospital</h3>
          <p>
            Hospital Management System frontend for St. Luke Hospital,
            Musanze District, Northern Province, Rwanda.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Dashboard</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/billing">Billing</Link>
            <Link to="/pharmacy">Pharmacy</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Emergency: 912</p>
          <p>Musanze, Rwanda</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} St. Luke Hospital. All rights reserved.
      </div>
    </footer>
  );
}