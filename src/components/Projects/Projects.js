import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Book from "../../Assets/Projects/BOOK.png";
import sorting from "../../Assets/Projects/sorting.png";
import CPUScheduling from "../../Assets/Projects/CPU-Scheduling.png";
import expense from "../../Assets/Projects/expense.png"
import chartuese from "../../Assets/Projects/chartuese.png"

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
              imgPath={CPUScheduling}
              isBlog={false}
              title="CPU-Scheduling-Simulator"
              description="The CPU-Scheduling-Simulator is a Java-based tool that visualizes and analyzes CPU scheduling algorithms like FCFS, SJN, and RR. It features a GUI for easy interaction, detailed outputs showing execution order and performance metrics, and custom data structures for efficient process management."
              ghLink="https://github.com/Kpooja0823/CPU-Scheduling-Simulator"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chartuese}
              isBlog={false}
              title="Food blog Application"
              description="The Cupcake Blogging Website, built with Ruby on Rails, offers features like secure user authentication, a publish system for blogs, a favoriting system, and a search bar with keyword filters. It includes a user-friendly workspace for managing blogs, Active Storage for file uploads, and a redesigned, modern layout. The platform combines functionality and design to provide an engaging blogging experience."
              ghLink="https://github.com/Kpooja0823/Chartreuse-Ruby-On-Rails-Project"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker "
              description="The Expense Tracker is a MERN application designed to efficiently manage personal or business expenses.It offers features such as user authentication, expense tracking, editing, categorization, a dashboard with visual expense insights, and search/filter capabilities.It provides a responsive design compatible across all devices."
              ghLink="https://github.com/Kpooja0823/Expense-Tracker"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Book-Genre-Prediction"
              description="This Python-based project uses advanced text mining and NLP techniques to classify books into genres like Fiction, Non-fiction, Mystery, and Adventure based on their synopses, simplifying the process of finding books that match user preferences."
              ghLink="https://github.com/Kpooja0823/Book-Genre-Classification"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="It is a Java-based tool with an intuitive graphical interface that demonstrates sorting algorithms like Bubble Sort, Merge Sort, and more in real-time for learning and exploration."
              ghLink="https://github.com/Kpooja0823/Sorting-Visualizer-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
