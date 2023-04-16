import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { BsInstagram, BsLinkedin, BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`text-white text-center text-lg-start ${styles.container}`}>
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} xs={12} className={`mb-4 mb-md-0 ${styles.leftCol}`}>
            <h5 className={styles.header}>About Us</h5>
            <p className={styles.desc}>
              engineerHUB is INDIA's largest community of engineers where students(alumni) from IITs, NITs, IIITs and state colleges join together to
              develop and nurture students skills coming from all over India. .
            </p>
          </Col>

          <Col lg={3} md={6} xs={12} className={`mb-4 mb-md-0 ps-5 ${styles.middleCol}`}>
            <h5 className={styles.header}>Links</h5>

            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#magazines" className={`text-white text-decoration-none ${styles.links}`}>
                  Magazines
                </a>
              </li>
              <li className="mb-2">
                <a href="#courses" className={`text-white text-decoration-none ${styles.links}`}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#events" className={`text-white text-decoration-none ${styles.links}`}>
                  Events
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-md-0 ps-5">
            <h5 className={styles.header}>Contact Us</h5>

            <ul className={`list-unstyled ${styles.socialContainer}`}>
              <li>
                <a href="mailto:info@engineerhub.in" className={`text-white text-decoration-none ${styles.links}`}>
                  info@engineerhub.in
                </a>
              </li>
              <li className={styles.socials}>
                <a href="https://www.instagram.com/engineerhub.in/" className={`text-white text-decoration-none`}>
                  <BsInstagram className={styles.socialIcon} size={24} />
                </a>
                <a href="https://www.linkedin.com/company/engineersummit/mycompany/" className={`text-white text-decoration-none`}>
                  <BsLinkedin className={styles.socialIcon} size={24} />
                </a>
                <a href="https://twitter.com/engineerhub_in" className={`text-white text-decoration-none`}>
                  <BsTwitter className={styles.socialIcon} size={24} />
                </a>
                <a href="https://discord.com/invite/ZMZAEZ5NfA" className={`text-white text-decoration-none`}>
                  <BsDiscord className={styles.socialIcon} size={24} />
                </a>
                <a href="https://t.me/engineerhub_in" className={`text-white text-decoration-none`}>
                  <BsTelegram className={styles.socialIcon} size={24} />
                </a>
              </li>
              <li className={styles.btnContainers}>
                <Button variant="primary">Sign In</Button>
                <Button variant="primary">Sign Up</Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
        Powered by <br />
        <a className="text-white" href="https://www.engineerhub.in/">
          engineerHUB
        </a>
      </div>
    </footer>
  );
};

export default Footer;
