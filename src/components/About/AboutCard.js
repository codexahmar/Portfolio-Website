import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ahmaryar Khan</span> — a dedicated
            freelance{" "}
            <span className="purple">Flutter & MERN Stack Developer</span> based
            in <span className="purple">Kohat, Pakistan</span>.
            <br />
            <br />
            I help businesses, startups, and individuals bring their ideas to
            life through clean, scalable, and high-performance mobile and web
            applications.
            <br />
            <br />
            With hands-on experience across both iOS and Android platforms, I
            specialize in delivering modern, user-friendly solutions that are
            built to perform and grow. From launching apps from scratch to
            improving existing ones — I'm here to make your project a success.
            <br />
            <br />
            <strong>Here’s what I offer:</strong>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cross-platform mobile apps using Flutter
            </li>
            <li className="about-activity">
              <ImPointRight /> Full-stack web development with MERN (MongoDB,
              Express, React, Node.js)
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced state management (Provider, GetX)
            </li>
            <li className="about-activity">
              <ImPointRight /> Firebase, Stripe, Google Maps & More...
            </li>
            <li className="about-activity">
              <ImPointRight /> Custom UI/UX, smooth animations & reusable
              widgets
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I hold a BSCS degree from <span className="purple">(KUST)</span>,
            and I’m constantly exploring the latest in mobile and web
            technologies to keep my work ahead of the curve.
            <br />
            <br />
            If you're looking for a reliable developer who genuinely cares about
            quality and collaboration — let’s build something amazing together!
            <br />
            <br />
            <strong>When I’m not coding, I enjoy:</strong>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring Emerging Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference — both in code and in
            impact."
          </p>
          <footer className="blockquote-footer">Ahmar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
