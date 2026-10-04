import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="not-found">
          <div className="error-number">404</div>
          <span className="eyebrow">PAGE NOT FOUND</span>
          <h1>We couldn't find that page.</h1>
          <p>
            The URL does not match a St. Luke Hospital Management System route.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}