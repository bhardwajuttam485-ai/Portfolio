import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Education() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/educations`);

        if (!res.ok) {
          throw new Error("Failed to fetch education");
        }

        const data = await res.json();
        setItems(data);
      } catch {
        // Error fetching education, using fallback data
        setItems([
          {
            _id: "1",
            year: "2023",
            degree: "B.Tech in Computer Science",
            institute: "ABC Institute of Technology",
            text: "Focused on software engineering and full stack development."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  if (loading) return <p>Loading education...</p>;

  return (
    <section
      className="section panel clickable-section"
      onClick={() => navigate("/education")}
    >
      <div className="section-header-row">
        <h2 className="section-title">Education</h2>
        <button
          className="btn primary small-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/education");
          }}
        >
          View All
        </button>
      </div>

      <div className="timeline">
        {items.slice(0, 3).map((item) => (
          <div className="timeline-item" key={item._id}>
            <span>{item.year}</span>
            <h4>{item.degree}</h4>
            <p><strong>{item.institute}</strong></p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}