import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import certImg1 from "../assets/img/ML-Internship.jpg";
import certImg2 from "../assets/img/Codsoft-internship_page-0001.jpg";
import certImg3 from "../assets/img/partha_mongodb_certificate _original_page-0001.jpg";


export const Certifications = () => {
  const certifications = [
    {
      imgUrl: certImg1,
      title: "Machine Learning Intern at SystimaNX IT Solutions Pvt Ltd",
      description: "Developed Python-based ML applications and documented AI/ML terminologies using diverse datasets."
    },
    {
      imgUrl: certImg2,
      title: "Codsoft",
      description: "Developed Python programming small projects."
    },
    {
      imgUrl: certImg3,
      title: "MongoDB Associate Developer (Node.js)",
      description: "Certified in MongoDB development using Node.js, specializing in database design, queries, and optimization."
    },
    
  ];

  return (
    <section className="certification" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certifications and Internship</h2>
                  <p>Explore my certifications that demonstrate my expertise and commitment to continuous learning in various domains.</p>
                  <div className="cert-carousel">
                    <div className="scroll-container">
                      {certifications.map((cert, index) => (
                        <div key={index} className="scroll-item">
                          <div className="cert-imgbx">
                            <img
                              src={cert.imgUrl}
                              alt={`Certification ${index + 1}`}
                              className="cert-image"
                            />
                            <div className="cert-text">
                              <h4>{cert.title}</h4>
                              <p>{cert.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
