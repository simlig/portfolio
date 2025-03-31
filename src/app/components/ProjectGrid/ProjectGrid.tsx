"use client";

import React, { useState } from "react";
import "@/app/interfaces/Project";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";

const projects: Project[] = [
  {
    imageUrl: "/VineTech/RoverInVineyard.jpg",
    title: "Vine Tech",
    description:
      "Autonomous Rover that uses computer vision and machine learning to predict vineyard yields",
    link: "/VineTech",
  },
  {
    imageUrl: "/CSPhotos/1075Mobile.png",
    title: "1075 Mobile",
    description:
      "A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks",
    link: "https://project-link-2.com",
  },
  // {
  //   imageUrl: '/CSPhotos/1075Mobile.png',
  //   title: 'TypeScript Programming Language Report',
  //   description: 'A mobile application for Android and IOS for viewing customer information, driving routes and performing safety checks',
  //   link: '/PDFs/CSIS420_Research_Paper.pdf'
  // },
];

const ProjectGrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const slides = ["/VineTech/Rover_Front.png", "/VineTech/Rover_Inside.png", "/VineTech/Rover_Outside.png"]

  // Function to open the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-12">
        {projects.map((project, index) => (
          <button key={index} onClick={toggleModal}>
            <div
              key={index}
              className="flex flex-col items-center  my-2 lg:my-0 bg-slate-900 border hover:border-slate-700 hover:scale-105 transition-transform duration-300 border-slate-900 rounded-lg p-4"
            >
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
              <p className="text-center text-gray-500">{project.description}</p>
            </div>
          </button>
        ))}
      </div>
      {isOpen && (
        <div
          className="top-0 right-0 left-0 bottom-0 fixed inset-0 flex justify-center items-center z-50"
          onClick={toggleModal} // Close on outside click
        >
          <div
            className="bg-white max-w-[600px] rounded-lg shadow-lg grid grid-cols-1  place-items-center"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing on clicking inside
          >
            <Carousel slides={slides}></Carousel>
            <button
              onClick={toggleModal}
              className="text-black text-2xl"
            ></button>
            <p className="m-4 text-black">
              This is a modal using Tailwind CSS in a React TypeScript app.
              Click outside or the close button to close it.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
