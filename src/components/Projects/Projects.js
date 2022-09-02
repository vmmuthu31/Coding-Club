import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAP0c8Wo_bNx-D4pMeCHmOj5f09aDZ2ujBIqx3NT5nQgypD6SvLOAWshPJgAQI1cAhuw&usqp=CAU"
              isBlog={false}
              title="Quiz Application in Python"
              description="It is quiz application in python that runs in terminal."
              link="https://realpython.com/python-quiz-application/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.d120.org/assets/1/18/registration.jpg?5468"
              isBlog={false}
              title="Student Registration form in HTML"
              description="It is javatpoint tutorial page where you can find the html tags."
              link="https://www.javatpoint.com/html-registration-form"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
