import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={4}>
          <h1 className={styles.header}>About us</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col lg={5}>
          <span className={styles.aboutText}>
            engineerHUB is INDIA's leading community of engineers where students or alumni from IITs, NITs, IIITs and state colleges unite together to
            develop and nurture the skills of students all over India. Our goal is to counsel beginners in the field by providing them with basic
            guidelines about how and where to start their learning.
          </span>
        </Col>
      </Row>
      <Row className={styles.secondRowContainer}>
        <Col lg={1}></Col>
        <Col lg={4}>
          <img src="https://www.engineerhub.in/static/media/Group.6dd638e54db8a78e2840afc8061cc3d8.svg" alt="" className={styles.groupImg} />
        </Col>
        <Col lg={2}></Col>
        <Col lg={5}>
          <div className={styles.aboutBullets}>
            <ul>
              <li>Providing students valuable content and personal assistance.</li>
            </ul>
            <ul>
              <li>
                Conducting regular webinars by our leading industriallists & mentors who map out the basic blueprint expanding from their learning to
                placement experience.
              </li>
            </ul>
            <ul>
              <li>
                Special attention is given to the students that help them enhance their programming skills, manage projects and provide them with
                internship opportunities.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
