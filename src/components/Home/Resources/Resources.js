import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FiShare2 } from "react-icons/fi";

import styles from "./resources.module.css";

const Resources = ({ title, desc, data }) => {
  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.header}>{title}</h1>
        <h5 className={styles.desc}>{desc}</h5>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // centeredSlides={true}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
          }}
        >
          {data.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={element.image} className={styles.cardImage} />
                  <Card.Body className={styles.cardBody}>
                    <div className={styles.cardTitle}>
                      <h5>{element.title}</h5>
                      <FiShare2 size={24} />
                    </div>
                    <div className={styles.cardDesc}>
                      <p>{element.desc}</p>
                    </div>
                    <div className={styles.cardBtnContainer}>
                      <a href={element.link} target="_blank" rel="noreferrer">
                        <Button className={styles.cardBtn}>Open</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Resources;
