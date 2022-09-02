import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Nagi from "./nagi.jpeg";
import Membercard from "./Membercard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Jaya Engineering <strong className="purple">College </strong>(JEC)
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={14}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img purple"
          >
            <h1>Club ambassadors</h1>

            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <Membercard
                  imgPath={Nagi}
                  isBlog={false}
                  title="Nagi Pragalathan"
                  description="3rd Year,CSE Department"
                  link="https://www.linkedin.com/in/nagi-pragalathan-n-a03a55230/"
                />
              </Col>
              <Col md={4} className="project-card">
                <Membercard
                  imgPath="https://avatars.githubusercontent.com/u/88650559?v=4"
                  isBlog={false}
                  title="Vairamuthu. M"
                  description="3rd Year,CSE Department"
                  link="https://www.linkedin.com/in/vmmuthu31/"
                />
              </Col>
              <Col md={4} className="project-card">
                <Membercard
                  imgPath="https://media-exp1.licdn.com/dms/image/C5603AQE0MR6mc0gyTw/profile-displayphoto-shrink_400_400/0/1660999411818?e=1667433600&v=beta&t=vRexqDcYhvqv4wgITHZbnXjdTYx35Lykk5iLyD2Ue50"
                  isBlog={false}
                  title="Thilagavathi. V"
                  description="3rd Year,CSE Department"
                  link="https://www.linkedin.com/in/thilagavathi-v-a436b2217/"
                />
              </Col>
              <Col md={4} className="project-card">
                <Membercard
                  imgPath="https://media-exp1.licdn.com/dms/image/C4D03AQH1mTmTZCYbbg/profile-displayphoto-shrink_400_400/0/1655048815297?e=1667433600&v=beta&t=2rXyxn-_RQmG6h5qHLuUz7TaAOzY3U3NTj0JhYGN2Q0"
                  isBlog={false}
                  title="Naveen G"
                  description="3rd Year,CSE Department"
                  link="https://www.linkedin.com/in/naveeng2402/"
                />
              </Col>
              <Col md={4} className="project-card">
                <Membercard
                  imgPath="https://media-exp1.licdn.com/dms/image/C5603AQGcITrRBBbGlw/profile-displayphoto-shrink_400_400/0/1651550904286?e=1667433600&v=beta&t=PJ9ltjbugaWKI_HJ_R4NbvLQLFAcHAa7Y4w99MndN4I"
                  isBlog={false}
                  title="Rishika"
                  description="3rd Year,CSE Department"
                  link="https://www.linkedin.com/in/rishika-s-v/"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
