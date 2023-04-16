import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsWhatsapp } from "react-icons/bs";

import styles from "./features.module.css";

const Features = ({ features }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <h1 className={styles.header}>What we do?</h1>
      <Carousel variant="light" slide={true}>
        {features.map((feature, index) => {
          return (
            <Carousel.Item key={index}>
              <Row className={styles.contentRow}>
                <Col lg={8}>
                  <h1 className={styles.contentHeader}>{feature.title}</h1>
                  <h5 className={styles.contentDesc}>{feature.desc}</h5>
                </Col>
                <Col lg={3} className={styles.contentImgContainer}>
                  <img
                    src="https://www.engineerhub.in/static/media/Phoneimg.70bb1327de4c75fa4b045bc3612a34b0.svg"
                    alt=""
                    className={styles.contentImg}
                  />
                </Col>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className={styles.contactContainer}>
        <div className={`align-self-center ${styles.contactHeader}`}>Join our Community & let’s grow together !</div>
        <div className={`d-flex justify-content-evenly ${styles.contactLinksContainer}`}>
          <a href="https://discord.com/invite/ZMZAEZ5NfA" target="_blank" rel="noreferrer">
            <button class={styles.socialBtn + " " + styles.bgDiscord}>
              <img
                src="https://www.engineerhub.in/static/media/discord.5fe91ff931dc3e60a45a9fa50c85201f.svg"
                height="33"
                width="33"
                alt=""
                className={styles.socialBtnLogo}
              />
              Join Discord
            </button>
          </a>

          <a href="https://chat.whatsapp.com/HFoB03RXiWxJ0uNI6oH5gG" target="_blank" rel="noreferrer">
            <button class={styles.socialBtn + " " + styles.bgWhatsapp}>
              <BsWhatsapp size={24} className={styles.socialBtnLogo} />
              Join WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
