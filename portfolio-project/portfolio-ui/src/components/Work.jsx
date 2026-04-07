import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  // Show only first 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="section panel" id="work">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-grid">
        {displayedProjects.map((project) => (
          <div
            className="project-card glass clickable-card"
            key={project._id}
            onClick={() => navigate(`/project/${project.slug}`)}
          >
            <div
              className="project-thumb"
              style={
                project.image
                  ? {
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }
                  : {}
              }
            ></div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="tags">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button
            className="btn primary"
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer" }}
          >
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
}