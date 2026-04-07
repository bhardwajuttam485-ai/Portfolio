import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EducationPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/educations");

        if (!res.ok) {
          throw new Error("Failed to fetch education");
        }

        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching education:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  if (loading) return <p className="page-status">Loading education...</p>;

  return (
    <section className="section panel details-list-page">
      <button className="btn secondary back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="details-page-title">My Education</h1>
      <p className="details-page-subtitle">
        A complete academic overview including degrees, institutes, and learning background.
      </p>

      <div className="details-list-grid">
        {items.map((item) => (
          <div className="details-card" key={item._id}>
            <div className="details-badge">{item.year}</div>
            <h3>{item.degree}</h3>
            <p><strong>{item.institute}</strong></p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}