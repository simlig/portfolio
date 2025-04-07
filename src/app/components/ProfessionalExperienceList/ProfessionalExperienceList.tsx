"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const ProfessionalExperienceList = () => {
  const jobs: Job[] = [
    {
      header: "Software Engineer @ SAIC",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedListItem, setSelectedListItem] = useState<Job>(jobs[0]);

  // Function to open the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function projectClicked(project: Job): void {
    setSelectedListItem(project);
    toggleModal();
  }

  return (
    <>
      {jobs.map((project, index) => (
        <div key={index} className={"w-5/12" }>
          <button
            className={"cursor-pointer w-full"}
            onClick={() => projectClicked(project)}
          >
            <div className="flex justify-between my-2 lg:my-0 bg-slate-900 border hover:border-slate-700 border-slate-900 rounded-sm p-4">
              <div className="text-left text-lg font-semibold">
                Software Engineer @ SAIC
              </div>
              <div className="text-left text-lg font-semibold">
                2023 - Present
              </div>
              {/* <img className={"h-64 w-full"} src={"/Thumbnails/SAIC.png"}></img> */}
            </div>
          </button>
          {isOpen && (

              <div className="font-bold p-4 mt-4 bg-slate-700 rounded-sm w-full">
                {selectedListItem.header}
              </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProfessionalExperienceList;
