import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/book.png";
import projImg2 from "../assets/img/chatbot.png";
import projImg3 from "../assets/img/heart_dis.png";
import projImg4 from "../assets/img/student_attendance.png";
import projImg5 from "../assets/img/phonebook.png";
import projImg6 from "../assets/img/codepen.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Book Recommendation",
      description: "A platform to find and like books.",
      imgUrl: projImg1,
      gitUrl: "https://book-recommendation-fullstack.vercel.app/",
    },
    {
      title: "ChatBot",
      description: "An AI-powered conversational assistant.",
      imgUrl: projImg2,
      gitUrl: "https://github.com/parthasarathis26/Chatbot.git",
    },
    {
      title: "Heart Disease Prediction",
      description: "Predicts heart disease risk using ML.",
      imgUrl: projImg3,
      gitUrl: "https://github.com/parthasarathis26/Heart_Disease_Prediction.git",
    },
    {
      title: "Student Attendance",
      description: "Manages student attendance records.",
      imgUrl: projImg4,
      gitUrl: "https://github.com/parthasarathis26/student-attendance-registration.git",
    },
    {
      title: "PhoneBook",
      description: "Organize and manage contacts easily.",
      imgUrl: projImg5,
      gitUrl: "https://github.com/parthasarathis26/Python_Phonebook_App.git",
    },
    {
      title: "CodePen",
      description: "Online code editor for web development.",
      imgUrl: projImg6,
      gitUrl: "https://github.com/parthasarathis26/React-Codepen.git",
    },
  ];
  


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a selection of my projects that showcase my skills in Full Stack Development, Web Design, and Backend Development. These projects demonstrate my ability to create innovative and efficient solutions tailored to real-world challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
        <Tab.Pane eventKey="first">
        <Row className="justify-content-center">
  {projects.slice(0, 4).map((project, index) => (
    <Col key={index} md={6} className="d-flex justify-content-center">
      <div className="proj-imgbx">
        <img src={project.imgUrl} alt={project.title} className="project-image" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
          <a 
            href={project.gitUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="visit-link"
          >
            Visit
          </a>
        </div>
      </div>
    </Col>
  ))}
</Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Row className="justify-content-center">
  {projects.slice(4, 6).map((project, index) => (
    <Col key={index} md={6} className="d-flex justify-content-center">
      <div className="proj-imgbx">
        <img src={project.imgUrl} alt={project.title} className="project-image" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
          <a 
            href={project.gitUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="visit-link"
          >
            Visit
          </a>
        </div>
      </div>
    </Col>
  ))}
</Row>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <p>Looking ahead, I plan to delve deeper into emerging technologies like AI, blockchain, and cloud computing. My future projects will focus on creating scalable, secure, and innovative solutions, including a real-time collaborative platform, advanced predictive analytics systems, and tools to enhance user experience through automation and intelligent design. Stay tuned for exciting updates!</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}