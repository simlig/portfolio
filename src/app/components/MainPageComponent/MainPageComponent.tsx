"use client";

import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import ProfessionalExperienceList from "../ProfessionalExperienceList/ProfessionalExperienceList";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

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
      <div className="grid items-center justify-items-center min-h-[calc(100vh-40px)] p-8 pb-20 bg-slate-900">
        <div>
          <div className={"text-[2.2rem] sm:text-[2.5rem] md:text-5xl font-bold md:mb-4 text-center"}>Samuel K Imlig</div>

          <div className={"text-1xl font-bold mb-[.12rem] sm:mb-1 text-center"}>Software Engineer</div>
          <div className={"text-1xl font-bold text-center"}>Fullstack Developer</div>
        </div>
      </div>
      <div className="grid-cols-1 items-center justify-items-center min-h-[calc(100vh-40px)] px-[.25rem] pt-4 sm:p-8 pb-20 bg-[#141e38] gap-0">
        <div ref={projectGridAnchor} className={"font-bold text-4xl sm:text-5xl mb-12 sm:mb-16"}>
          Projects
        </div>

        <ProjectGrid></ProjectGrid>
      </div>
      <div className="grid-cols-1 items-center justify-items-center min-h-[calc(100vh-40px)] px-[.25rem] pt-4 sm:p-8 pb-20 bg-[#172646] gap-0">
        <div ref={professionalExperienceListAnchor} className={"font-bold text-4xl sm:text-5xl mb-12 sm:mb-16"}>
          Experience
        </div>
        <ProfessionalExperienceList></ProfessionalExperienceList>
      </div>
    </div>
  );
};

export default MainPageComponent;
