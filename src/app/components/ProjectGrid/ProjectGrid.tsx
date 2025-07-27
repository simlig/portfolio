"use client";

import React, { useEffect, useState } from "react";
import "@/app/interfaces/Project";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import styles from "../ProjectGrid/ProjectGrid.module.css";
import Pandemic2020Logo from "../Pandemic2020Logo/Pandemic2020Logo";

const projects: Project[] = [
  {
    imageUrl: "/portfolio/VineTech/RoverInVineyard.jpg",
    title: "VineTech",
    description: "Autonomous Rover that uses computer vision and machine learning to predict vineyard yields",
    link: "/VineTech/VineTech Final Poster.pdf#zoom=25",
    contributions: ["Autonomous-turning", "Adaptive Cruise Control", "Improved Predicted Yield"],
    slides: [
      "/portfolio/VineTech/Rover_Front.png",
      "/portfolio/VineTech/Rover_Inside.png",
      "/portfolio/VineTech/Rover_Outside.png",
    ],
    blank: true,
  },
  {
    imageUrl: "/portfolio/1075Mobile/1075Mobile.png",
    title: "1075 Mobile",
    description:
      "A mobile application for Android and IOS designed to assist propane drivers and servicemen. It provides customer addition and modification, tank information, driving routes, and safety check functionality",
    link: "https://www.amazon.com/Columbus-Systems-1075-Mobile/dp/B0B8FTX49R/ref=sr_1_1?s=mobile-apps&sr=1-1",
    contributions: ["Mobile Development", "Database Connectivity", "GPS"],
    slides: [
      "/portfolio/1075Mobile/MainLoginPage.png",
      "/portfolio/1075Mobile/ConfigurePage.png",
      "/portfolio/1075Mobile/BufferingPage.png",
      "/portfolio/1075Mobile/OptionsPage.png",
      "/portfolio/1075Mobile/CustomerCreation.png",
      "/portfolio/1075Mobile/CustomerCreated.png",
      "/portfolio/1075Mobile/CustomerCreation.png",
      "/portfolio/1075Mobile/MainCustomerPage.png",
      "/portfolio/1075Mobile/TankInfo.png",
      "/portfolio/1075Mobile/Navigation.png",
    ],
    blank: true,
  },
  {
    imageUrl: "/portfolio/Pandemic2020/Logos.png",
    title: "Pandemic 2020",
    description:
      "A Requirements Specification Document that was designed to reduce the spread of COVID-19 by developing an early warning system through the use of contact tracing, daily checkups and regulation notifications",
    link: "/PDFs/Pandemic2020.pdf",
    contributions: ["Project Planning", "Requirements Engineering", "UI/UX Design"],
    slides: [
      "/portfolio/Pandemic2020/Welcome.png",
      "/portfolio/Pandemic2020/Symptoms.png",
      "/portfolio/Pandemic2020/Options_Stats_Info.png",
      "/portfolio/Pandemic2020/Notifications_Options.png",
    ],
    blank: true,
  },
];

const ProjectGrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  useEffect(() => {
    projects.forEach((project) => {
      project.slides.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Backspace" && isOpen) || (e.key === "Escape" && isOpen)) {
        setIsOpen(!isOpen);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Function to open the modal
  const toggleModal = () => {
    document.body.style.overflow = isOpen ? "" : "hidden";
    setIsOpen(!isOpen);
  };

  function projectClicked(project: Project): void {
    setSelectedProject(project);
    toggleModal();
  }

  return (
    <>
      <div className={styles.mainProjectContainer}>
        {projects.map((project, index) => (
          <div key={index}>
            <button className={"hover:cursor-pointer"} onClick={() => projectClicked(project)}>
              <div className={styles.individualProjectContainer}>
                <div>
                  {project.title.includes("Pandemic") && (
                    <div className={styles.image + " bg-black flex justify-center items-center"}>
                      <Pandemic2020Logo></Pandemic2020Logo>
                    </div>
                  )}
                  {!project.title.includes("Pandemic") && (
                    <img src={project.imageUrl} alt={project.title} className={styles.image} />
                  )}
                </div>
                <p className={styles.projectTitle}>{project.title}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </button>
            {isOpen && (
              <div className={styles.modalContainer} onClick={toggleModal}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.exitModalContainer}>
                    <div className="ml-auto">
                      <button className={"hover:cursor-pointer"} onClick={toggleModal}>
                        <FontAwesomeIcon className={"text-2xl"} icon={faXmark} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.carousel}>
                    <Carousel slides={selectedProject.slides}></Carousel>
                    {/* <ClickToExpandImage project={project} ></ClickToExpandImage> */}
                  </div>
                  <div className={styles.modalTitle}>{selectedProject.title}</div>
                  <div className={styles.contributions}>
                    {selectedProject.contributions.map((contribution, index) => (
                      <ul key={index} className={styles.unorderedList}>
                        <FontAwesomeIcon className={"pr-2"} icon={faMinus} />
                        {contribution}
                      </ul>
                    ))}
                  </div>
                  <div className={styles.viewProjectContainer}>
                    <Link className={styles.link} href={selectedProject.link} target={selectedProject.blank ? "_blank" : ""}>
                      <div className={styles.viewProject}>
                        <FontAwesomeIcon className={"pr-2"} icon={faArrowUpRightFromSquare} />
                        VIEW PROJECT
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
