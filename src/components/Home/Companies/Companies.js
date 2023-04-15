import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./companies.module.css";

const Companies = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.header}>Companies we Collaborate</div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {/* <div className={styles.logos}> */}
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/oracle.svg" height="100px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/tka.png" height="100px" width="150px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/nkosh.png" height="100px" width="150px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/deciml.png" height="100px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/create.png" height="100px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/Eduncle.png" height="100px" className={styles.fab} />
          <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/CompaniesLogo/IOTR.png" height="100px" width="250px" className={styles.fab} />

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Companies;
