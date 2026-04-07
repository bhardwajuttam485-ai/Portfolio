import heroPerson from "../assets/images/img.png";

export default function Hero() {
  return (
    <section className="hero panel" id="home">
      <div className="hero-left">
        <h1>
          I CREATE IMPACTFUL
          <br />
          DIGITAL EXPERIENCES
        </h1>

        <p>Uttam Bhardwaj | Full Stack Developer | Data Analyst </p>

        <div className="hero-buttons">
          
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-frame">
          <div className="hero-ellipse"></div>
          <img
            src={heroPerson}
            alt="Uttam Bhardwaj"
            className="hero-person-image"
          />
        </div>
      </div>
    </section>
  );
}