import { useOutletContext } from "react-router-dom";

export default function PatientBilling() {
  const { patient } = useOutletContext();

  const total = patient.billing.reduce((sum, [, amount]) => sum + amount, 0);

  return (
    <div>
      <div className="section-title">
        <div>
          <span className="eyebrow">NESTED ROUTE</span>
          <h2>Patient Billing</h2>
        </div>
        <span className="route-label">/patients/{patient.id}/billing</span>
      </div>

      <div className="billing-list">
        {patient.billing.map(([item, amount]) => (
          <div className="billing-row" key={item}>
            <span>{item}</span>
            <strong>{new Intl.NumberFormat("en-RW").format(amount)} RWF</strong>
          </div>
        ))}
        <div className="billing-total">
          <span>Total</span>
          <strong>{new Intl.NumberFormat("en-RW").format(total)} RWF</strong>
        </div>
      </div>
    </div>
  );
}