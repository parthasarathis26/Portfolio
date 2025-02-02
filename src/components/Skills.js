import { useRef } from "react";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { name: "C", percentage: 85 },
    { name: "Java", percentage: 85 },
    { name: "C++", percentage: 70 },
    { name: "Python", percentage: 60 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 75 },
    { name: "Node", percentage: 80 },
    { name: "MySql", percentage: 70 },
    { name: "MongoDB", percentage: 75 },
    { name: "SpringBoot", percentage: 30 },
    { name: "VS Code", percentage: 75 },
    { name: "AWS", percentage: 60 },
    { name: "Docker", percentage: 50 },
  ];

  const skillListRef = useRef(null);

  const scrollUp = () => {
    const container = skillListRef.current;
    const itemHeight = container.firstChild.offsetHeight + 15; // Adjust for margin
    container.scrollBy({
      top: -itemHeight,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    const container = skillListRef.current;
    const itemHeight = container.firstChild.offsetHeight + 15; // Adjust for margin
    container.scrollBy({
      top: itemHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Scroll through my skills to explore my expertise in web
                development and programming.
              </p>
              <div className="carousel-container">
                <button className="arrow-btn up-arrow" onClick={scrollUp}>
                  &#9650;
                </button>
                <div className="vertical-skill-list" ref={skillListRef}>
                  {skills.map((skill, index) => (
                    <div className="horizontal-skill" key={index}>
                      <h5>{skill.name}</h5>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${skill.percentage}%`,
                            background: "linear-gradient(to right, #ff0080, #ff8c00)",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="arrow-btn down-arrow" onClick={scrollDown}>
                  &#9660;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
