import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELF
            </h1>
            <p className="home-about-body">
              This Coding Club was initiated to empower the student knowledge
              <br /> not only in basics of computer but also strong in coding
              skills like
              <i>
                <b className="purple"> C, Javascript and Python, etc. </b>
              </i>
              <br />
              <br />
              The Domains that we cover are &nbsp;
              <i>
                <b className="purple">
                  Web Technologies, AI/ML, Blockchain, Iot, DataScience{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Mobile Application Development.</b>
              </i>
              <br />
              <br />
              Our motto is to build new products to the
              <b className="purple"> problem statements.</b>
            </p>
          </Col>
          <Col md={4} style={{ margin: "0px" }} className="myAvtar">
            <Tilt>
              <img
                src="https://assets2.varsitytutors.com/vt-ecom-catalog-ui/images/products/learn_scratch_from_scratch-2x.jpg"
                style={{ height: "60vh", width: "50vh" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CodeJEC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCWa6gUtKK8kUZe0VuCx3L9A"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/code-jec-undefined-3a14ab24a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/code_jec/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
