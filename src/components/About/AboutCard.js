import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmaryar Khan</span> from{" "}
            <span className="purple">Kohat, Pakistan.</span>
            <br />
            I’m a passionate <span className="purple">
              Flutter Developer
            </span>{" "}
            and
            <span className="purple"> MERN Stack Developer</span>, helping
            clients build modern mobile and web applications.
            <br />
            I work as a freelancer and love transforming ideas into functional
            digital products.
            <br />I also hold a BSCS degree from{" "}
            <span className="purple">(KUST)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Ahmar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}



export default AboutCard;
