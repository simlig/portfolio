"use client";

import React, { useState } from "react";
import "@/app/interfaces/Project";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import styles from "../ProjectGrid/ProjectGrid.module.css"

const projects: Project[] = [
  {
    imageUrl: "/portfolio/VineTech/RoverInVineyard.jpg",
    title: "VineTech",
    description:
      "Autonomous Rover that uses computer vision and machine learning to predict vineyard yields",
    link: "/VineTech/VineTech Final Poster.pdf#zoom=25",
    contributions: ["Autonomous-turning", "Adaptive Cruise Control", "Improved Predicted Yield"],
    slides: [
      "/portfolio/VineTech/Rover_Front.png",
      "/portfolio/VineTech/Rover_Inside.png",
      "/portfolio/VineTech/Rover_Outside.png",
    ],
    blank: true
  
  },
  {
    imageUrl: "/portfolio/CSPhotos/1075Mobile.png",
    title: "1075 Mobile",
    description:
      "A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks",
    link: "",
    contributions: ["Mobile Development", "Database Connectivity", "GPS"],
    slides: [
      "/portfolio/CSPhotos/1.png",
      "/portfolio/CSPhotos/3.png",
      "/portfolio/CSPhotos/10.png",
    ],
    blank: false
  },
];



const ProjectGrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);


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
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.image}
                  />
                </div>
                <p className={styles.projectTitle}>
                  {project.title}
                </p>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </button>
            {isOpen && (
              <div
                className={styles.modalContainer}
                onClick={toggleModal}
              >
                <div
                  className={styles.modal}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.carousel}>
                    <Carousel slides={selectedProject.slides}></Carousel>
                  </div>
                  <div className={styles.modalTitle}>
                    {selectedProject.title}
                  </div>
                  <div className={styles.contributions}>
                    {selectedProject.contributions.map((contribution, index) => (
                      <ul key={index} className={styles.unorderedList}>
                        <FontAwesomeIcon className={"pr-2"} icon={faMinus} />
                        {contribution}
                      </ul>
                    ))}
                    
                  </div>
                  <div className={styles.exitContainer}>
                    <Link className={styles.link} href={selectedProject.link} target={selectedProject.blank ? "_blank" : ""}>
                      <div
                        className={
                          styles.viewProject
                        }
                      >
                        <FontAwesomeIcon
                          className={"pr-2"}
                          icon={faArrowUpRightFromSquare}
                        />
                        VIEW PROJECT
                      </div>
                    </Link>
                    <div className={styles.exitModal}>
                    <button className={"hover:cursor-pointer"} onClick={toggleModal}>
                      <FontAwesomeIcon className={"text-2xl"} icon={faXmark} />
                    </button>
                    </div>
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
