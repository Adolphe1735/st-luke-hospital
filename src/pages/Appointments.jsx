const appointments = [
  ["08:30", "Marie Claire U.", "General Outpatient", "Dr. Uwase"],
  ["09:30", "Jean Claude N.", "Internal Medicine", "Dr. Mugisha"],
  ["11:00", "Aline Mukamana", "Maternity", "Dr. Diane"],
  ["14:00", "David Nshimiyimana", "Cardiology", "Dr. Eric"]
];

export default function Appointments() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">SCHEDULE</span>
            <h1>Appointments</h1>
            <p>Overview of today's upcoming appointments.</p>
          </div>
        </div>

        <div className="appointment-grid">
          {appointments.map(([time, patient, department, doctor]) => (
            <article className="appointment-card" key={`${time}-${patient}`}>
              <div className="appointment-time">{time}</div>
              <div>
                <h3>{patient}</h3>
                <p>{department}</p>
                <small>{doctor}</small>
              </div>
              <span className="appointment-status">Scheduled</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}