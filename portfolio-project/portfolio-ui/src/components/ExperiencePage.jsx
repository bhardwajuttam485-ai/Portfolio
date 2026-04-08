import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default function ExperiencePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/experiences`);

        if (!res.ok) {
          throw new Error("Failed to fetch experiences");
        }

        const data = await res.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
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

      {error && (
        <div style={{ color: '#ff8a8a', textAlign: 'center', marginBottom: '24px' }}>
          Unable to load experiences: {error}
        </div>
      )}

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