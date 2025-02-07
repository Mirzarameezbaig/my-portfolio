import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myCV from "../../Assets/Rameez Mirza Resume.pdf";
import {
  AiOutlineDownload,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a
              <i>
                <b className="purple"> MERN Stack Developer  </b>
              </i>{" "}&nbsp;with<i>

                
                <b className="purple"> 3 years of experience </b>
              </i>{" "}
               in building scalable and efficient web
              applications. Passionate about crafting seamless user experiences, I specialize in
              <i>
                <b className="purple"> React.js, Node.js, Express.js, and MongoDB. </b>
              </i>
              <br />
              <br />
              I thrive on solving complex problems and optimizing performance while ensuring clean, maintainable code. 
              <br />
              <br />
              Driven by innovation, I love working on challenging projects that push the boundaries of modern web development.
              <br/>
              <br/>
              <i>
                <b className="purple">
                  {" "}
                  Let's build something amazing together! 🚀
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          </Col>
        </Row>
        <Row style={{ justifyContent: "left", position: "relative",  }}>
          <Button
            style={{ maxWidth: "200px", marginRight:40, marginLeft:10 }}
             variant="primary"
                        href={myCV}
                        target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <a
                            href="https://www.linkedin.com/in/mirza-rameez-baig-412886237/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaLinkedinIn />
                          </a>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
