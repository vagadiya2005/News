// About.js
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

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

      <section className=" intro-section">
        <h2>We are India’s Largest Manufacturer</h2>
        <h3>and leading exporter of industrial chemicals products.</h3>
        <p>We work closely with our clients to address their requirements from concept to production, best price, good quality of material, serving superior quality, and timely delivery of the orders of goods.</p>
        <p>The long-time relationship we build with our clients provides the foundation for our continued success. The company has the structure and capabilities to work with global businesses at the international and domestic levels.</p>
        <p>Our high-efficiency production line, which we have here is highly efficient technology in the R&D and QC department, and responsible employees work, so we have achieved success in our businesses.</p>
      </section>

      <section className="about-section">
        <div className="about-partition">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>To constantly endeavor to create a sustainable position as one of the leading but diversified chemical companies with strong manufacturers and exporters based on industrial chemicals products aiming for global presence with worldwide product acceptability.</p>
          </div>
          <img src='asset/images//Vison.jpg' alt="Our Vision" className="about-image" />
        </div>
        <div className="about-partition">
          <img src='asset/images//Mission.jpg' alt="Our Mission" className="about-image" />
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>Continuously grow, prosper, achieve economies of scale, and establish ourselves as a producer of quality products through continual improvement in performance, meeting customers' expectations, and striving to develop value options from side stream by-products.</p>
          </div>
        </div>
      </section>

      <section className="certificate-section">
        <h2>CERTIFICATES OF Shreeji International</h2>
        <div className="certificate-container">
          <iframe
            src='asset/images//IEC_CODE.pdf'
            className="certificate-iframe"
            title="Certificate"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
