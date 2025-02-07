import React from "react";
import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiOutlineDownload } from "react-icons/ai";
import myCV from "../../Assets/Rameez Mirza Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mirza Rameez Baig </span>
            from <span className="purple"> Nanded, India.</span>
            <br />
            I am currently employed as a software developer at Iorta Technology Solutions.
            <br />
            I have completed Bachelor of Science (BSc) in Computer Science at SRTMUN
            Nanded, Mahrashtra.
            <br />
            <br />
          </p>
        </blockquote>
        <Row style={{ justifyContent: "center", position: "relative",  }}>
          <Button
            style={{ maxWidth: "180px", marginRight:40 }}
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

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
