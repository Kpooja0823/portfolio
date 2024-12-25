import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiAngularSimple,
  DiMongodb,
  DiGit,
  DiDotnet,
} from "react-icons/di";
import {
  SiMysql,
  SiSpringboot,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws, FaDocker } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons" 
      style ={{backgroundColor: "#FFFFFF", color: "red"}}>
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#800080"}}>
      <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#512bd4"}}>
      <DiDotnet/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#4584B6"}}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#FFC300"}} >
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#61DBFB"}}>
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "green"}}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "red"}}>
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
           style ={{backgroundColor: "#FFFFFF", color: "#00758f"}}>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "green"}}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "green"}}>
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#F1502F"}}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#EF5B25"}}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#0064a5"}}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "orange"}}>
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons"
      style ={{backgroundColor: "#FFFFFF", color: "#0db7ed"}}>
      <FaDocker />
      </Col>
    </Row>
  );
}

export default Techstack;
