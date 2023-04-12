import "./about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function About() {
  const [displayEmail, setDisplayEmail] = useState(false);

  function toggleEmail() {
    console.log("giancarlo.calette@uabc.edu.mx");
    setDisplayEmail(true);
  }

  function getEmailSection() {
    if (displayEmail) {
      return (
        <div className="content">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={"/img/card7.jpg"} />
            <Card.Body>
              <Card.Title>TECHCONNECT SUPPORT</Card.Title>
              <Card.Text>
                Get the knowledge and assitance for solving your technical challenges.
              </Card.Text>
              <Card.Text>
                customersupport@servoonline.com
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="About">
      <h1>Contact Us</h1>
      <h3>Whether you need help solving your biggest production problems or want to improve operations, we are here for you. Our remote support services can help optimize control system performance, improve Overall Equipment Effectiveness (OEE), and reduce maintenance costs. We can also help identify and fix issues before they occur, fill skills gaps, and retain knowledge for new workers.</h3>
      {getEmailSection()}
      <button className="btn btn-sm btn-dark" onClick={toggleEmail}>
        TechConnect Support
      </button>
    </div>
  );
}

export default About;
