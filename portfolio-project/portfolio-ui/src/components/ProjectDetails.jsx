import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/projects/${slug}`);

        if (!res.ok) {
          throw new Error("Project not found");
        }

        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <p className="page-status">Loading project...</p>;
  if (!project) return <p className="page-status">Project not found.</p>;

  return (
    <section className="section panel project-details-page">
      <button className="btn secondary back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="project-details-grid">
        <div className="project-details-image-wrap">
          <div
            className="project-details-image"
            style={{
              backgroundImage: project.image ? `url(${project.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        </div>

        <div className="project-details-content">
          <h1>{project.title}</h1>
          <p className="project-short-desc">{project.desc}</p>

          {project.abstract && (
            <div className="project-details-card">
              <h3>Abstract</h3>
              <p>{project.abstract}</p>
            </div>
          )}

          {project.details && (
            <div className="project-details-card">
              <h3>Project Details</h3>
              <p>{project.details}</p>
            </div>
          )}

          <div className="project-details-card">
            <h3>Technologies</h3>
            <div className="tags">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn primary">
                Live Project
              </a>
            )}

            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn secondary">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}