import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default function Experience() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/experiences`);

        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }

        const data = await res.json();
        setItems(data);
      } catch {
        // Error fetching experiences, using fallback data
        setItems([
          {
            _id: "1",
            year: "2021",
            role: "UI/UX Designer",
            text: "Crafted interfaces and digital product flows."
          },
          {
            _id: "2",
            year: "2019",
            role: "XYZ Tech Solutions",
            text: "Worked on dashboard systems and visual design."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <p>Loading experience...</p>;

  return (
    <section
      className="section panel clickable-section"
      onClick={() => navigate("/experience")}
    >
      <div className="section-header-row">
        <h2 className="section-title">Experience</h2>
        <button
          className="btn primary small-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/experience");
          }}
        >
          View All
        </button>
      </div>

      <div className="timeline">
        {items.slice(0, 3).map((item) => (
          <div className="timeline-item" key={item._id}>
            <span>{item.year}</span>
            <h4>{item.role}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}