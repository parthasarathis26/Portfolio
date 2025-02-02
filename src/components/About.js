import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/about2.jpg"; // Replace with your actual image path


export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Black Container */}
          <div className="about-container">
            {/* Left Side: Image */}
            <Col xs={20} md={5}>
              <div className="about-img">
                <img src={aboutImg} alt="About Me"  />
              </div>
            </Col>
            {/* Right Side: Content */}
            <Col xs={12} md={6}>
              <div className="about-content">
                <h2>About Me</h2>
                <p>
                  Hello! I'm Parthasarathi, a passionate Full Stack Developer with expertise in creating
                  dynamic and responsive web applications. With a strong foundation in modern
                  web technologies, I strive to deliver high-quality solutions that meet user needs.
                </p>
                <p>
                  I enjoy problem-solving and continuously improving my skills. When I'm not coding,
                  you can find me exploring new technologies, reading books, or contributing to open-source projects.
                </p>
                <button className="btn btn-primary" onClick={() => console.log("Download Resume")}>
                  Download Resume
                </button>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};
