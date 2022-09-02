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
              link="https://www.canva.com/design/DAFKVy8Qop8/FeX61vaG6zqPj_HGn2Qzfg/view?utm_content=DAFKVy8Qop8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath="https://miro.medium.com/max/1400/1*Zipt5ex6sSVSkciwlJoG4Q.png"
              isBlog={false}
              title="Basic Concept of Python"
              description="Topic covered variable, datatypes, inputs, print statements."
              link="https://github.com/vmmuthu31/Coding-Club/blob/master/Let's%20Start%20with%20Python!.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath="https://slideplayer.com/16109628/97/images/slide_1.jpg"
              isBlog={false}
              title="Programming with real life application"
              description="Real time calculator, Flames calulator, Pizza delivery app."
              link="https://replit.com/@mvairamuthu2003/Pizza-order?v=1#main.py"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath="https://www.onlevelup.com/wp-content/uploads/2021/03/python-inter.png"
              isBlog={false}
              title="Intermediate level of python and introduction to HTML"
              description="Conditional Statements, Functions, List, Tuples, Dictionaries"
              link="https://github.com/vmmuthu31/Coding-Club/blob/master/Let's%20Start%20with%20Python!.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Announcements;
