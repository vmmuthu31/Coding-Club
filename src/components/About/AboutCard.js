import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            It is an ISO 9001:2000 certified institution founded in the year
            1995 with a focus on technological innovation, entrepreneurship and
            character building to the students. The college offers 9 UG courses
            and 7 PG courses. JEC is Affiliated to Anna University, Chennai and
            approved by AICTE, New Delhi. The college management team consists
            of well-experienced and committed Academicians and Administrators.
            Feel free to connect with us
          </p>
          <h1
            style={{
              fontSize: "1.1em",
              marginRight: "16.5em",
              paddingBottom: "2px",
            }}
            className="purple"
          >
            Programme Outcomes (POC):
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Blooming Future Entrepreneurs
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Software Developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Team Management
            </li>
          </ul>

          <p className="purple">
            “The programmers of tomorrow are the wizards of the future. You’re
            going to look like you have magic powers compared to everybody
            else.”{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
