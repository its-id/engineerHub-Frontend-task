import React from "react";

import styles from "./playstore.module.css";

const PlayStore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        We will be on <span className={styles.playstoreSpan}>PlayStore</span> soon
      </div>
      <div className={styles.desc}>Try our new App anytime and anywhere you like</div>
      <button className={styles.playStoreBtn}>
        Get the App <img src="https://www.engineerhub.in/static/media/gplay.02baee190058cc0ae8bd8a9a96d03ad4.svg" alt="googlePlay" width="25px" />
      </button>
    </div>
  );
};

export default PlayStore;
