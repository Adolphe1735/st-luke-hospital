import { Link, useSearchParams } from "react-router-dom";
import { patients } from "../data/patients";

export default function Patients() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  const filteredPatients = patients.filter((patient) =>
    status ? patient.status === status.toLowerCase() : true
  );

  const setStatus = (value) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ status: value });
    }
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">PATIENT MANAGEMENT</span>
            <h1>Patients</h1>
            <p>Patient records and URL-based status filtering.</p>
          </div>
          <span className="filter-badge">
            {status ? `Status: ${status}` : "All Patients"}
          </span>
        </div>

        <div className="filter-panel">
          <strong>Filter:</strong>
          {["all", "admitted", "outpatient", "discharged"].map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`filter-button ${(!status && item === "all") || status === item ? "selected" : ""}`}
            >
              {item === "all" ? "All" : item}
            </button>
          ))}
        </div>

        <div className="table-card">
          <div className="table-title">
            <h2>Patient List</h2>
            <span>{filteredPatients.length} records</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td><strong>{patient.id}</strong></td>
                    <td>
                      <strong>{patient.name}</strong>
                      <small>{patient.diagnosis}</small>
                    </td>
                    <td>{patient.age}</td>
                    <td>{patient.department}</td>
                    <td>
                      <span className={`status ${patient.status}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/patients/${patient.id}`} className="small-btn">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredPatients.length === 0 && (
          <div className="empty-state">
            <h2>No patients found</h2>
            <p>Try another status filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}