import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="app-shell">
        <button 
          className="btn secondary" 
          onClick={() => navigate('/')}
          style={{ marginBottom: '24px', cursor: 'pointer' }}
        >
          ← Back to Home
        </button>
        <div className="section panel" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1 className="section-title">Projects Portfolio</h1>
          <div className="project-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="project-card glass" style={{ opacity: 0.5 }}>
                <div className="project-thumb" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
                <h3>Loading...</h3>
                <p>Loading project details...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <button 
        className="btn secondary" 
        onClick={() => navigate('/')}
        style={{ marginBottom: '24px', cursor: 'pointer' }}
      >
        ← Back to Home
      </button>

      <div className="section panel" style={{ padding: '40px 24px' }}>
        {error && (
          <div style={{ color: '#ff8a8a', textAlign: 'center', marginBottom: '24px' }}>
            Unable to load projects from backend: {error}
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="section-title">Projects Portfolio</h1>
          <p style={{ color: '#cfd6f9', fontSize: '16px', marginTop: '10px' }}>
            Explore my recent projects and professional work
          </p>
        </div>

        <div className="project-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                className="project-card glass clickable-card"
                key={project._id || project.title}
                onClick={() => navigate(`/project/${project.slug}`)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="project-thumb"
                  style={
                    project.image
                      ? {
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }
                      : {
                          background: 'linear-gradient(135deg, rgba(255, 139, 214, 0.3), rgba(100, 127, 255, 0.3))'
                        }
                  }
                ></div>
                <h3>{project.title}</h3>
                <p>{project.desc || project.description || 'Project details'}</p>

                <div className="tags">
                  {(project.tags || project.technologies || []).map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              <p style={{ color: '#cfd6f9', fontSize: '16px' }}>No projects available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
