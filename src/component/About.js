// About.js
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import vision from './Vison.jpg';
import mision from './Mission.jpg'

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="cover-image">
          <div className="cover-text">
            <h1>About Us</h1>
            <p>Discover our story, mission, and team</p>
          </div>
        </div>
      </header>
      <section className="mb-3 about-section">
        <div className="mb-4 about-partitions">
          <div className="partition">
            <div className="text-content">
              <h2>Our Vision</h2>
              <p>To constantly endeavor to create a sustainable position as one of the leading but diversified chemical companies with strong manufacturers and exporters based on industrial chemicals products aiming for global presence with worldwide product acceptability.</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="partition">
            <img src={vision} alt="Our Vision" className="vision-image" /> {/* Another vision image path */}
          </div>
        </div>
        <div className="about-partitions">
          <div className="partition-mission-image partition">
            <img src={mision} alt="Our Mission" className="mission-image" /> {/* Another vision image path */}
          </div>
          <div className="divider"></div>
          <div className="partition">
            <div className="text-content">
              <h2>Our Vision</h2>
              <p>To constantly endeavor to create a sustainable position as one of the leading but diversified chemical companies with strong manufacturers and exporters based on industrial chemicals products aiming for global presence with worldwide product acceptability.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections go here */}
    </div>
  );
};

export default About;
