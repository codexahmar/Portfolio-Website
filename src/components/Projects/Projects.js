import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import movie from "../../Assets/Projects/movie-app.png";
import budgetmanagement from "../../Assets/Projects/bankingapp-1.png";
import islamicapp from "../../Assets/Projects/islamicapp.png";
import pantho from "../../Assets/Projects/Pantho.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={islamicapp}
              isBlog={false}
              title="Quran Mp3 & Qibla Finder"
              description="Islamic mobile app built with Flutter providing prayer times, Quran recitation, Qibla direction, and daily Azkar. Supports real-time notifications, Hijri calendar, and multilingual content. Integrates audio playback, background services, and local storage using Provider, Just Audio, and Shared Preferences.

"
              ghLink="https://github.com/codexahmar/Islamic-App"
              demoLink="https://play.google.com/store/apps/details?id=com.islamicazan.shzoneabbe"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetmanagement}
              isBlog={false}
              title="True Wallet"
              description="A secure Flutter-based banking application powered by Firebase. It includes OTP-based two-factor authentication, real-time money transfers, budget management, and expense tracking. Users can create and manage multiple account types, view transaction history, and sync data seamlessly with Cloud Firestore. Built with a focus on data security, responsive UI, and smooth user experience."
              ghLink="https://github.com/codexahmar/InternIntelligence_BankingApp"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pantho}
              isBlog={false}
              title="Pantho – A Modern Blood Donation Platform"
              description="Developed a blood donation app using Flutter, featuring a smooth onboarding experience and support for multiple donation types including whole blood, plasma, platelets, and PRBC. Implemented clean architecture and used GetX for state management. The app allows users to register as donors, manage profiles, select blood groups, and control contact visibility."
              ghLink="https://github.com/codexahmar/Pantho-Freelance"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="ShopEase – A Flutter E-commerce UI"
              description="Built a frontend E-commerce mobile app using Flutter and GetX, featuring a fully responsive UI with dark mode support. The app simulates core shopping functionalities like browsing products, managing favorites and cart, viewing product details, and completing purchases via Stripe payment gateway. Predefined product data was used to demonstrate real-world e-commerce features without a backend."
              ghLink="https://github.com/codexahmar/InternIntelligence_ecommerceApp"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation App"
              description="Movie browsing app built with Flutter using TMDb API. Supports movie search, personalized recommendations, user profiles, and favorites. Features real-time API calls, responsive UI, and state management with Provider. Developed using Dart with HTTP integration for dynamic movie data."
              ghLink="https://github.com/codexahmar/InternIntelligence_Movie-App"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Built a Flutter app that uses Google ML Kit for real-time face detection. It analyzes smile probability, eye openness, and head tilt to estimate mood. Users can capture or select images, and the app highlights faces and displays facial features with accuracy across lighting and angles."
              ghLink="https://github.com/codexahmar/InternIntelligence_FaceDetection"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
