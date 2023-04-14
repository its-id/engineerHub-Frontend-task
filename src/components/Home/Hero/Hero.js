import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <Row className={styles.heroContainer}>
      <Col lg={7}>
        <div className={styles.tagContainer}>
          <h1 className={styles.brandName}>engineerHUB</h1>
          <div className={styles.tag}>
            <TypeAnimation sequence={["Campus", 1000, "Industries", 1000, "Students", 1000]} repeat={Infinity} />
          </div>
        </div>
        <Row className={styles.infoContainer}>
          <Col xs={4} className={styles.infoCard}>
            <img className="c-img" src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/gif/student.gif" alt="Graduate" style={{ width: "120px" }} />
            <h1 className={styles.infoCardHeader}>
              <CountUp end={50} duration={2} /> K+
            </h1>
            <h6 className={styles.infoCardDetails}>Students</h6>
          </Col>
          <Col xs={4} className={styles.infoCard}>
            <img className="c-img" src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/gif/campus.gif" alt="Graduate" style={{ width: "120px" }} />
            <h1 className={styles.infoCardHeader}>
              <CountUp end={800} duration={2} />+
            </h1>
            <h6 className={styles.infoCardDetails}>Campuses</h6>
          </Col>
          <Col xs={4} className={styles.infoCard}>
            <img className="c-img" src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/gif/industry.gif" alt="Graduate" style={{ width: "120px" }} />
            <h1 className={styles.infoCardHeader}>
              <CountUp end={18} duration={2} />+
            </h1>
            <h6 className={styles.infoCardDetails}>Industries</h6>
          </Col>
        </Row>
      </Col>
      <Col lg={5} className={styles.mapContainer}>
        <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/Animation/Animation.gif" alt="" className={styles.animationMap} />
      </Col>
    </Row>
  );
};

export default Hero;
