import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
  DiMaterializecss,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="tech-names">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTypescript />
        <span className="tech-names">TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <span className="tech-names">HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <span className="tech-names">CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="tech-names">Node JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <span className="tech-names">Express JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="tech-names">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="tech-names">React JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
        <span className="tech-names">Vue JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <span className="tech-names">Next JS</span>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <span className="tech-names">Sass</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <span className="tech-names">Tailwind CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMaterializecss />
        <span className="tech-names">Material UI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <span className="tech-names">Redux</span>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="tech-names">Git</span>
      </Col>
    </Row>
  );
}

export default Techstack;
