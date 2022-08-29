import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";
import intern from "../../Assets/intern.jpg";
import internship from "../../Assets/../Assets/Certificates/internship.pdf";
import reactimg from "../../Assets/../Assets/React.jpg";
import javaimg from "../../Assets/../Assets/Certificates/java_certification.png";
import javacer from "../../Assets/../Assets/Certificates/java_certification.png";
import mysqlcer from "../../Assets/../Assets/Certificates/mysql.png";
import mysqlimg from "../../Assets/../Assets/Certificates/mysql.png";
import cimg from "../../Assets/../Assets/Certificates/C.png";
import Ccer from "../../Assets/../Assets/Certificates/C.png";
import reactCer from "../../Assets/../Assets/Certificates/React.pdf";
import Coursera from "../../Assets/../Assets/Certificates/Course_era_python_certificate.pdf";
import python from "../../Assets/../Assets/python_for_everybody.jpg";

function Announcements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Announcements </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few post our daily events.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath="https://uploads.scratch.mit.edu/classrooms/avatars/229520.png"
              isBlog={false}
              title="Day 1 Orientation"
              description="Introduction to Computer Science and basics of programming."
              link={internship}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Announcements;
