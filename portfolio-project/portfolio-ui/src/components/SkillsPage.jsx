import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        if (!response.ok) {
          throw new Error(`Failed to fetch skills: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setSkills(data);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err.message);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
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
          <h1 className="section-title">Technical Skills</h1>
          <div className="skill-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skill-card glass" style={{ opacity: 0.5 }}>
                <div className="skill-icon">✦</div>
                <div>
                  <h3>Loading...</h3>
                  <p>Loading skill details...</p>
                </div>
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
            Unable to load skills from backend: {error}
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="section-title">Technical Skills</h1>
          <p style={{ color: '#cfd6f9', fontSize: '16px', marginTop: '10px' }}>
            My professional expertise and technical proficiencies
          </p>
        </div>

        <div className="skill-grid">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div className="skill-card glass" key={skill._id || skill.title} style={{
                padding: '28px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div className="skill-icon" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '32px',
                  background: 'linear-gradient(135deg, #ff9add, #7ba0ff)',
                  color: '#07111d',
                  boxShadow: '0 0 22px rgba(171, 104, 255, 0.35)',
                  margin: '0 auto 20px'
                }}>
                  {skill.icon || '✦'}
                </div>
                <div>
                  <h3 style={{
                    marginTop: 0,
                    marginBottom: '12px',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}>
                    {skill.title || skill.name}
                  </h3>
                  <p style={{
                    color: '#cdd4f4',
                    lineHeight: '1.6',
                    margin: 0,
                    fontSize: '14px'
                  }}>
                    {skill.text || skill.category || 'Professional Skill'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              <p style={{ color: '#cfd6f9', fontSize: '16px' }}>No skills available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
