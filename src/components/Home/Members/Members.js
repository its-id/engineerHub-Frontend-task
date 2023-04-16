import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Card from "react-bootstrap/Card";
import "aos/dist/aos.css";
import styles from "./members.module.css";

const Members = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.header}>What our Members think about us</div>
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
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {data.map((member, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={member.image} className={styles.cardImage} />
                <Card.Body className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>
                    {member.name} <br /> <span>{member.desg}</span>
                  </h5>
                  <p className={styles.cardMsg}>"{member.msg}"</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Members;
