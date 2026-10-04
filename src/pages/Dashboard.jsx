import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { patients } from "../data/patients";
import { medicines } from "../data/pharmacy";

export default function Dashboard() {
  const admitted = patients.filter((p) => p.status === "admitted").length;
  const lowStock = medicines.filter((m) => m.stock < 80).length;

  return (
    <section className="page-section">
      <div className="container">
        <div className="dashboard-hero">
          <div>
            <span className="eyebrow">ST. LUKE HOSPITAL • MUSANZE</span>
            <h1>Hospital Management Dashboard</h1>
            <p>
              Manage patients, appointments, billing and pharmacy inventory
              from one simple ReactJS interface.
            </p>
          </div>
          <div className="hospital-badge">🏥</div>
        </div>

        <div className="stats-grid">
          <StatCard icon="👥" label="Total Patients" value={patients.length} detail="Registered patients" />
          <StatCard icon="🛏️" label="Admitted" value={admitted} detail="Currently admitted" />
          <StatCard icon="💊" label="Medicines" value={medicines.length} detail="Inventory items" />
          <StatCard icon="⚠️" label="Low Stock" value={lowStock} detail="Needs attention" />
        </div>

        <div className="module-grid">
          <Link to="/patients" className="module-card">
            <span>👥</span>
            <div>
              <h3>Patients</h3>
              <p>View patient records, history and billing information.</p>
            </div>
          </Link>

          <Link to="/appointments" className="module-card">
            <span>📅</span>
            <div>
              <h3>Appointments</h3>
              <p>Review upcoming hospital appointments.</p>
            </div>
          </Link>

          <Link to="/billing" className="module-card">
            <span>💳</span>
            <div>
              <h3>Billing</h3>
              <p>View billing summaries and payment status.</p>
            </div>
          </Link>

          <Link to="/pharmacy" className="module-card">
            <span>💊</span>
            <div>
              <h3>Pharmacy</h3>
              <p>Monitor drug categories and available stock.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}