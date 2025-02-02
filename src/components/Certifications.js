import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import certImg1 from "../assets/img/book.png";
import certImg2 from "../assets/img/book.png";
import certImg3 from "../assets/img/book.png";
import certImg4 from "../assets/img/book.png";
import certImg5 from "../assets/img/book.png";
import certImg6 from "../assets/img/book.png";

export const Certifications = () => {
  const certifications = [
    {
      imgUrl: certImg1,
      title: "Certification 1",
      description: "This is a description for certification 1."
    },
    {
      imgUrl: certImg2,
      title: "Certification 2",
      description: "This is a description for certification 2."
    },
    {
      imgUrl: certImg3,
      title: "Certification 3",
      description: "This is a description for certification 3."
    },
    {
      imgUrl: certImg4,
      title: "Certification 4",
      description: "This is a description for certification 4."
    },
    {
      imgUrl: certImg5,
      title: "Certification 5",
      description: "This is a description for certification 5."
    },
    {
      imgUrl: certImg6,
      title: "Certification 6",
      description: "This is a description for certification 6."
    }
  ];

  return (
    <section className="certification" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certifications</h2>
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
