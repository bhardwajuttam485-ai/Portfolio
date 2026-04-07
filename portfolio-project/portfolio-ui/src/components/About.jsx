export default function About() {
  return (
    <section className="section panel" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="about-left">
          <div className="info-card glass">
            <h3>Who I Am</h3>
            <p>
              A Full Stack Developer and Data Analyst with a deep love for 
              polyglot programming and a passion for crafting seamless user experiences.  
            </p>
          </div>

          <div className="info-card glass">
            <h3>What I Do</h3>
            <p>
              Build seamless web applications and transform raw data into actionable business intelligence. I thrive on solving complex problems and creating intuitive interfaces. 
            </p>
          </div>

          <div className="info-card glass">
            <h3>How I Work</h3>
            <p>
              By combining logical coding structures with analytical precision to ensure every 
              pixel and every byte serves a purpose. I believe in clean code, efficient algorithms, and data-driven decision making to create impactful digital solutions.  
            </p>
          </div>
        </div>

        <div className="about-image-wrap">
          <div className="about-image"></div>
        </div>
      </div>
    </section>
  );
}