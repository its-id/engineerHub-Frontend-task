// import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import styles from "./colleges.module.css";

const collegeData = [
  [
    {
      firstName: "NIT",
      lastName: "PATNA",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/nitp.png",
    },
    {
      firstName: "NIT",
      lastName: "RAIPUR",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/nitr.jpeg",
    },
    {
      firstName: "NIT",
      lastName: "KURUKSHETRA",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/nitk.jpeg",
    },
    {
      firstName: "NIT",
      lastName: "AHEMDABAD",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/nita.png",
    },
  ],
  [
    {
      firstName: "AKGEC",
      lastName: "GHAZIABAD",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/akg.png",
    },
    {
      firstName: "AKTU",
      lastName: "",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/aktu.jpeg",
    },
    {
      firstName: "MIT",
      lastName: "BANGALORE",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/mit.jpg",
    },
    {
      firstName: "VIT",
      lastName: "VELLORE",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/vit.png",
    },
  ],
  [
    {
      firstName: "IIT",
      lastName: "PATNA",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/iitp.jpeg",
    },
    {
      firstName: "IIT",
      lastName: "KANPUR",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/iitk.svg",
    },
    {
      firstName: "IIT",
      lastName: "BOMBAY",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/iitb.jpg",
    },
    {
      firstName: "IIT",
      lastName: "ROORKEE",
      logo: "https://ehubtestbucket.s3.ap-south-1.amazonaws.com/collegeLogo/iitr.jpg",
    },
  ],
];

const Colleges = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Our students come from</div>
      <Carousel variant="dark" slide={true}>
        {collegeData.map((college, index) => {
          return (
            <Carousel.Item key={index}>
              <div className={styles.slideContainer}>
                <div className={styles.card + " " + styles.borderCyan}>
                  <img src={college[0].logo} alt="" />
                  <h2>
                    {college[0].firstName}
                    {college[0].lastName ? (
                      <>
                        <br /> {college[0].lastName}
                      </>
                    ) : null}
                  </h2>
                </div>
                <div className={styles.middleContainer}>
                  <div className={styles.card + " " + styles.middleTopCard}>
                    <img src={college[1].logo} alt="" />
                    <h2>
                      {college[1].firstName}
                      {college[1].lastName ? (
                        <>
                          <br /> {college[1].lastName}
                        </>
                      ) : null}
                    </h2>
                  </div>
                  <div className={styles.card + " " + styles.borderOrange}>
                    <img src={college[2].logo} alt="" />
                    <h2>
                      {college[2].firstName}
                      {college[2].lastName ? (
                        <>
                          <br /> {college[2].lastName}
                        </>
                      ) : null}
                    </h2>
                  </div>
                </div>
                <div className={styles.card + " " + styles.borderBlue}>
                  <img src={college[3].logo} alt="" />
                  <h2>
                    {college[3].firstName}
                    {college[3].lastName ? (
                      <>
                        <br /> {college[3].lastName}
                      </>
                    ) : null}
                  </h2>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Colleges;
