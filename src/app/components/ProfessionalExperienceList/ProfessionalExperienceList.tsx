"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfessionalExperienceList = () => {
  const jobs: Job[] = [
    {
      jobTitle: "Software Engineer",
      jobCompany: "SAIC",
      jobStartDate: "2023",
      jobEndDate: "Present",
      jobThumbnail: "/Thumbnails/SAICLogo.jpg",
      jobThumbnailStyling: "bg-blue-700",
      jobDescription: "",
      softwareUsed: ["React", "Tailwind", "Java", "Python", "AWS"],
    },
    {
      jobTitle: "Computer Support Specialist",
      jobCompany: "George Fox University",
      jobStartDate: "2023",
      jobEndDate: "2023",
      jobThumbnail: "/Thumbnails/GeorgeFoxLogo.jpg",
      jobDescription:
        "Diagnosed and resolved software/hardware issues on Windows and macOS computers to ensure full functionality, customer satisfaction and adherence to industry standards." +
        "Enhanced efficiency by implementing automated file transfers through PowerShell scripts, reducing required employee oversight.",
      softwareUsed: ["Powershell", "Python"],
    },
    {
      jobTitle: "Software Development Intern",
      jobCompany: "Columbus Systems",
      jobStartDate: "2022",
      jobEndDate: "2022",
      jobThumbnail: "/Thumbnails/AAP.png",
      jobDescription: "Developed a mobile application for iOS and Android that utilized the REST paradigm to interact with a Paradox database. " +
      "Reduced pen and paper tasks by 90%, which significantly increased employee productivity and reduced redundancy.",
      softwareUsed: ["Delphi", "Pascal", "ParadoxDB"],
    },
  ];

  const [openListItem, setOpenListItem] = useState<number>(-1);

  // Function to open the modal
  const setOpenList = (listItem: number) => {
    if (openListItem == listItem) {
      setOpenList(-1);
    } else {
      setOpenListItem(listItem);
    }
  };

  return (
    <>
      {jobs.map((job, index) => (
        <div key={index} className={"w-full md:max-w-2xl lg:max-w-3xl mb-4"}>
          <div className="grid grid-cols-1">
            <button
              className={"cursor-pointer w-full"}
              onClick={() => setOpenList(index)}
            >
              <div className="flex justify-between my-2 lg:my-0 bg-purple-950 border hover:border-slate-700 border-slate-900 rounded-sm p-4">
                <div className="text-left text-lg font-semibold">
                  {job.jobTitle}
                  <FontAwesomeIcon icon={faMinus} className={"pt-2"}/>
                </div>
                <div className="text-left text-lg font-semibold hidden sm:block">
                  {job.jobStartDate}
                </div>
                {/* <img className={"h-64 w-full"} src={"/Thumbnails/SAIC.png"}></img> */}
              </div>
            </button>
            {openListItem == index && (
              <div className="font-bold p-4 mt-4 bg-slate-900 w-full">
                <div
                  className={`place-self-start w-24 h-24 rounded-full overflow-hidden bg-white flex items-center justify-center will-change-transform border
                  }`}
                >
                  <img
                    src={job.jobThumbnail}
                    className={`w-full h-full object-cover`}
                  ></img>
                </div>
                <div className={"my-4 text-sm opacity-90"}>{job.jobDescription}</div>
                <div className={"flex "}>
                  {job.softwareUsed.map((software) => (
                    <button
                      key={software}
                      className={
                        "text-sm my-2 mr-2 px-2 py-1 rounded-4xl border bg-blue-600 opacity-95"
                      }
                    >
                      {software}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfessionalExperienceList;
