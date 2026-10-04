const invoices = [
  ["INV-001", "Jean Claude N.", "Consultation + Laboratory", 28000, "Paid"],
  ["INV-002", "Marie Claire U.", "Consultation + Medication", 30000, "Pending"],
  ["INV-003", "Patrick M.", "Procedure + Medication", 127000, "Paid"],
  ["INV-004", "Aline Mukamana", "Maternity Care", 43500, "Pending"]
];

export default function Billing() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">FINANCE</span>
            <h1>Billing</h1>
            <p>Hospital billing information and payment status.</p>
          </div>
        </div>

        <div className="table-card">
          <div className="table-title">
            <h2>Recent Invoices</h2>
            <span>{invoices.length} invoices</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Patient</th>
                  <th>Services</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(([invoice, patient, service, amount, status]) => (
                  <tr key={invoice}>
                    <td><strong>{invoice}</strong></td>
                    <td>{patient}</td>
                    <td>{service}</td>
                    <td>{new Intl.NumberFormat("en-RW").format(amount)} RWF</td>
                    <td>
                      <span className={`status ${status.toLowerCase()}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}