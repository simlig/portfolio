"use client";

import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import ProfessionalExperienceList from "../ProfessionalExperienceList/ProfessionalExperienceList";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import SlowRevealList from "../SlowRevealList/SlowRevealList";
import styles from "../MainPageComponent/MainPageComponent.module.css";
import Footer from "../Footer/Footer";

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
      <div className={styles.animatedBackground} />

      <div className={styles.landingPage}>
        <div>
          <div className={styles.landingPageHeaders}>Samuel K Imlig</div>
          <SlowRevealList contentArray={["Software Engineer", "Fullstack Developer"]} interval={1200}></SlowRevealList>
        </div>
      </div>
      <div className={styles.landingPageTransition} />
      <div className={styles.fullScreenView + " bg-slate-900 lg:bg-[#141e38]"}>
        <div className={styles.headerContainer}>
          <div className="flex items-center mb-8 sm:mb-0">
            <div ref={projectGridAnchor} className={styles.headers}>
                Projects
            </div>
            <div className={styles.headerDivider}></div>
          </div>
        </div>
        <ProjectGrid></ProjectGrid>
      </div>
      <div className={styles.fullScreenView + " bg-slate-900 lg:bg-[#141e38]"}>
        <div className={styles.headerContainer}>
          <div className="flex items-center">
            <div ref={professionalExperienceListAnchor} className={styles.headers}>
                  Experience
                </div>
            <div className={styles.headerDivider}></div>
          </div>
        </div>

        {/* <div ref={professionalExperienceListAnchor} className={styles.headers}>
          Experience
        </div>
        <div className={"px-4 py-[.10rem] w-full bg-white"}>

        </div> */}
        <ProfessionalExperienceList></ProfessionalExperienceList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPageComponent;
