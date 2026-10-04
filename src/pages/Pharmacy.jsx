import { Link, useSearchParams } from "react-router-dom";
import { medicines } from "../data/pharmacy";

export default function Pharmacy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filtered = medicines.filter((medicine) =>
    category ? medicine.category === category.toLowerCase() : true
  );

  const categories = ["all", "antibiotics", "analgesics", "cardiovascular"];

  const setCategory = (value) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">PHARMACY INVENTORY</span>
            <h1>Pharmacy</h1>
            <p>Filter medicine inventory using URL search parameters.</p>
          </div>
          <span className="filter-badge">
            {category ? `Category: ${category}` : "All Medicines"}
          </span>
        </div>

        <div className="filter-panel">
          <strong>Category:</strong>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`filter-button ${(!category && item === "all") || category === item ? "selected" : ""}`}
            >
              {item === "all" ? "All" : item}
            </button>
          ))}
        </div>

        <div className="medicine-grid">
          {filtered.map((medicine) => (
            <article className="medicine-card" key={medicine.id}>
              <div className="medicine-icon">💊</div>
              <div className="medicine-content">
                <span className="category">{medicine.category}</span>
                <h3>{medicine.name}</h3>
                <p>{medicine.price} RWF / {medicine.unit.slice(0, -1)}</p>
                <div className="stock-row">
                  <span>Stock</span>
                  <strong className={medicine.stock < 80 ? "low-stock" : ""}>
                    {medicine.stock} {medicine.unit}
                  </strong>
                </div>
                {medicine.stock < 80 && (
                  <span className="stock-warning">Low stock</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h2>No medicine found</h2>
            <p>Choose another pharmacy category.</p>
          </div>
        )}
      </div>
    </section>
  );
}