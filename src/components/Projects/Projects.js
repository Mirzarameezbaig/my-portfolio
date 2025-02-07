import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import common from "../../Assets/Projects/common-module.jpg";
import health from "../../Assets/Projects/health.webp";
import motor from "../../Assets/Projects/motor.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="WE-CARE"
              description="Developed an online health claims application for Tata AIG, streamlining the claims process 
with features like document uploads and real-time status updates."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motor}
              isBlog={false}
              title="Motor Claims"
              description="Developing an online motor claims application for Tata AIG, focusing on easy claim submission 
and real-time updates. "/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={common}
              isBlog={false}
              title="Common Modules"
              description="Common Modules is a microservices-based claims application that includes shared modules for 
different lines of business (LOBs), such as Motor Claims and WE-CARE."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
