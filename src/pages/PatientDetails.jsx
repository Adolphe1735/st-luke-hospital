import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { patients } from "../data/patients";

export default function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = patients.find((item) => item.id === id);

  if (!patient) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h1>Patient Not Found</h1>
          <p>The patient ID does not match a registered patient.</p>
          <button onClick={() => navigate("/patients")} className="btn btn-primary">
            Back to Patients
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <button onClick={() => navigate("/patients")} className="back-button">
          ← Back to Patients
        </button>

        <div className="patient-header">
          <div className="patient-avatar">👤</div>
          <div className="patient-main">
            <span className="eyebrow">PATIENT RECORD • {patient.id}</span>
            <h1>{patient.name}</h1>
            <p>{patient.age} years • {patient.gender} • {patient.department}</p>
            <span className={`status ${patient.status}`}>{patient.status}</span>
          </div>
          <div className="diagnosis">
            <small>Current Diagnosis</small>
            <strong>{patient.diagnosis}</strong>
          </div>
        </div>

        <div className="patient-contact">
          <span>📞 {patient.phone}</span>
          <span>🏥 {patient.department}</span>
        </div>

        <nav className="nested-nav">
          <NavLink
            to={`/patients/${patient.id}/history`}
            className={({ isActive }) =>
              isActive ? "nested-link active" : "nested-link"
            }
          >
            Medical History
          </NavLink>
          <NavLink
            to={`/patients/${patient.id}/billing`}
            className={({ isActive }) =>
              isActive ? "nested-link active" : "nested-link"
            }
          >
            Billing
          </NavLink>
        </nav>

        <div className="nested-content">
          <Outlet context={{ patient }} />
        </div>
      </div>
    </section>
  );
}