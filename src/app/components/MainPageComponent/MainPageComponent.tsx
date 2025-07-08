"use client";

import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import ProfessionalExperienceList from "../ProfessionalExperienceList/ProfessionalExperienceList";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import SlowRevealList from "../SlowRevealList";
import styles from "../MainPageComponent/MainPageComponent.module.css"

const MainPageComponent = () => {
  const landingPageAnchor = useRef<HTMLDivElement | null>(null);
  const projectGridAnchor = useRef<HTMLDivElement | null>(null);
  const professionalExperienceListAnchor = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={landingPageAnchor} className={"text-gray-200"}>
      <Navbar
        landingPageAnchor={landingPageAnchor}
        projectGridAnchor={projectGridAnchor}
        professionalExperienceListAnchor={professionalExperienceListAnchor}
      ></Navbar>

      <div className={styles.landingPage}>
        <div>
          <div className={styles.landingPageHeaders}>Samuel K Imlig</div>
          <SlowRevealList contentArray={["Software Engineer", "Fullstack Developer"]} interval={1200}></SlowRevealList>
        </div>
      </div>
      <div className={styles.fullScreenView + " bg-[#141e38]"}>
        <div ref={projectGridAnchor} className={styles.headers}>
          Projects
        </div>
        <ProjectGrid></ProjectGrid>
      </div>
      <div className={styles.fullScreenView + " bg-[#172646]"}>
        <div ref={professionalExperienceListAnchor} className={styles.headers}>
          Experience
        </div>
        <ProfessionalExperienceList></ProfessionalExperienceList>
      </div>
    </div>
  );
};

export default MainPageComponent;
