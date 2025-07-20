import { faVirusCovid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from "../Pandemic2020Logo/Pandemic2020Logo.module.css"

const Pandemic2020Logo = () => {
  return (
    <div className={styles.pandemicContainer}>
      <div className={styles.pandemicLogoContainer}>
        <FontAwesomeIcon className={"text-red-600"} icon={faVirusCovid} size="2xl" />
        <h1 className={styles.header}>
          Pandemic <span className="text-red-600">2020</span>
        </h1>
      </div>
      <p className={styles.description}>
        A digital early warning system for COVID-19
      </p>
    </div>
  );
};

export default Pandemic2020Logo;