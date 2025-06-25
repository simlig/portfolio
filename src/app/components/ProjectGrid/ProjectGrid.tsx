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

const projects: Project[] = [
  {
    imageUrl: "/portfolio/VineTech/RoverInVineyard.jpg",
    title: "VineTech",
    description:
      "Autonomous Rover that uses computer vision and machine learning to predict vineyard yields",
    // link: "/VineTech",
    link: "/VineTech/VineTech Final Poster.pdf",
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
    setIsOpen(!isOpen);
  };

  function projectClicked(project: Project): void {
    setSelectedProject(project);
    toggleModal();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={index}>
            <button className={"cursor-pointer"} onClick={() => projectClicked(project)}>
              <div className="flex flex-col items-center  my-2 lg:my-0 bg-slate-900 border hover:border-slate-700 hover:scale-105 transition-transform duration-300 border-slate-900 rounded-lg p-4">
                <div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover object-center rounded-lg shadow-lg mb-4"
                  />
                </div>
                <p className="text-center text-lg font-semibold">
                  {project.title}
                </p>
                <p className="text-center text-gray-500">
                  {project.description}
                </p>
              </div>
            </button>
            {isOpen && (
              <div
                className="fixed top-0 w-full h-screen bg-neutral-700/[var(--bg-opacity)] [--bg-opacity:50%] inset-0 justify-center items-center z-50 overflow-auto flex"
                onClick={toggleModal}
              >
                <div
                  className="bg-[#1b242f] max-w-[600px] shadow-lg grid grid-cols-1 place-items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={"bg-slate-800"}>
                    <Carousel slides={selectedProject.slides}></Carousel>
                  </div>
                  <div className="place-self-start font-bold text-4xl pt-4 px-4">
                    {selectedProject.title}
                  </div>
                  <div className="m-4 text-gray-200 place-self-start">
                    {selectedProject.contributions.map((contribution, index) => (
                      <ul key={index} className={"font-light text-[.80rem]"}>
                        <FontAwesomeIcon className={"pr-2"} icon={faMinus} />
                        {contribution}
                      </ul>
                    ))}
                    
                  </div>
                  <div className={"w-full flex justify-between items-center"}>
                    <Link className={"place-self-start m-4"} href={selectedProject.link} target={selectedProject.blank ? "_blank" : ""}>
                      <div
                        className={
                          "place-self-start px-4 py-2 border-2 border-red-400 text-[.80rem]"
                        }
                      >
                        <FontAwesomeIcon
                          className={"pr-2"}
                          icon={faArrowUpRightFromSquare}
                        />
                        VIEW PROJECT
                      </div>
                    </Link>
                    <div className={"place-self-center p-4"}>
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
