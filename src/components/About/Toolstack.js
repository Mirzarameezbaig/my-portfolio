import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithub, DiJira } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="tech-names">Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="tech-names">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <span className="tech-names">GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
        <span className="tech-names">JIRA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <span className="tech-names">Figma</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
