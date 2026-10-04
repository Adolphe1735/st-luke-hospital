import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import PatientHistory from "./pages/PatientHistory";
import PatientBilling from "./pages/PatientBilling";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";
import Pharmacy from "./pages/Pharmacy";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* Outdated URL */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/patients" element={<Patients />} />

          <Route path="/patients/:id" element={<PatientDetails />}>
            <Route path="history" element={<PatientHistory />} />
            <Route path="billing" element={<PatientBilling />} />
          </Route>

          <Route path="/appointments" element={<Appointments />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/pharmacy" element={<Pharmacy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}