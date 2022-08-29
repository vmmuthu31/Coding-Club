import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function Certicards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        style={{ height: "18em" }}
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <AiOutlineDownload />
          &nbsp;Details{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Certicards;
