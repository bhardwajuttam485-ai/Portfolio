import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExperiencePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/experiences");

        if (!res.ok) {
          throw new Error("Failed to fetch experiences");
        }

        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <p className="page-status">Loading experience...</p>;

  return (
    <section className="section panel details-list-page">
      <button className="btn secondary back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="details-page-title">My Experience</h1>
      <p className="details-page-subtitle">
        A complete timeline of my professional journey, roles, and practical work experience.
      </p>

      <div className="details-list-grid">
        {items.map((item) => (
          <div className="details-card" key={item._id}>
            <div className="details-badge">{item.year}</div>
            <h3>{item.role}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}