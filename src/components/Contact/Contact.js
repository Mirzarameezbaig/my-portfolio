import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Particle from '../Particle'
import emailjs from "emailjs-com";
import laptopImg from "../../Assets/contact.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            "service_he64xmw", 
            "template_u9mrv8d", 
            formData,
            "pxTLQzbqbGOUbctwh"
          )
          .then(
            (response) => {
              console.log("Email sent successfully!", response.status, response.text);
            },
            (err) => {
              console.error("Failed to send email.", err);
            }
          );
    
        setFormData({ name: "", email: "", subject: "", message: "" });
      };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{alignItems:'center', display:'flex', justifyContent:'center'}}
          >
            <img 
            height={'90%'} width={'90%'}
            src={laptopImg} alt="about"  className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h2 className="text-center">Contact Me</h2>
            <Card className="contact-form-container">
            <Card.Body>
            <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group style={{textAlign:'left'}} controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group style={{textAlign:'left'}} controlId="email">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group style={{textAlign:'left'}} controlId="subject">
          <Form.Label>Your Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group style={{textAlign:'left'}} controlId="message">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="send-btn">
          Send Message
        </Button>
      </Form>
                </Card.Body>
                </Card>
          </Col>
          
        </Row>
      </Container>
    </Container>
  )
}

export default Contact
