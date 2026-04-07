import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/skills");

        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }

        const data = await response.json();
        setSkills(data);
      } catch (err) {
        console.error("Error fetching skills:", err);
        setError(err.message);

        setSkills([
          {
            _id: "1",
            title: "UI/UX Design",
            text: "Designing clean and user-friendly interfaces",
            icon: "🎨"
          },
          {
            _id: "2",
            title: "React",
            text: "Building interactive frontend apps",
            icon: "⚛"
          },
          {
            _id: "3",
            title: "Node.js",
            text: "Creating backend APIs and server logic",
            icon: "🟢"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) console.log(error);

  return (
    <section className="section panel" id="skills">
      <div className="section-header-row">
        <h2 className="section-title">My Skills</h2>
        <Link to="/skills" className="btn primary small">
          View All Skills
        </Link>
      </div>

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-card glass" key={skill._id}>
            <div className="skill-icon">{skill.icon || "✦"}</div>
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}