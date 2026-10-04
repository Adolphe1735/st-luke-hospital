import { useOutletContext } from "react-router-dom";

export default function PatientHistory() {
  const { patient } = useOutletContext();

  return (
    <div>
      <div className="section-title">
        <div>
          <span className="eyebrow">NESTED ROUTE</span>
          <h2>Medical History</h2>
        </div>
        <span className="route-label">/patients/{patient.id}/history</span>
      </div>

      <div className="timeline">
        {patient.history.map((item, index) => (
          <div className="timeline-item" key={index}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}