"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons/faCircleMinus";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const ProfessionalExperienceList = () => {
  const jobs: Job[] = [
    {
      jobTitle: "Software Engineer",
      jobLocation: "Remote",
      jobLink: "https://www.saic.com/",
      jobCompany: "SAIC",
      jobStartDate: "2023",
      jobEndDate: "Present",
      jobThumbnail: "/Thumbnails/SAICLogo.jpg",
      jobThumbnailStyling: "bg-blue-700",
      jobDescription: [],
      softwareUsed: ["React", "Java", "Python", "AWS"],
    },
    {
      jobTitle: "Computer Support Specialist",
      jobLocation: "Newberg, OR",
      jobLink: "https://www.georgefox.edu/",
      jobCompany: "George Fox University",
      jobStartDate: "2023",
      jobEndDate: "2023",
      jobThumbnail: "/Thumbnails/GeorgeFoxLogo.jpg",
      jobDescription:[
        "Diagnosed and resolved software/hardware issues on Windows and macOS computers to ensure full functionality, customer satisfaction and adherence to industry standards.",
        "Enhanced efficiency by implementing automated file transfers through PowerShell scripts, reducing required employee oversight."
      ],
      softwareUsed: ["Powershell", "Python"],
    },
    {
      jobTitle: "Software Development Intern",
      jobLocation: "Olympia, WA",
      jobLink: "https://www.linkedin.com/company/columbus-systems-inc/about/",
      jobCompany: "Columbus Systems",
      jobStartDate: "2022",
      jobEndDate: "2022",
      jobThumbnail: "/Thumbnails/AAP.png",
      jobDescription: [
        "Developed a mobile application for iOS and Android that utilized the REST paradigm to interact with a Paradox database.",
        "Reduced pen and paper tasks by 90%, which significantly increased employee productivity and reduced redundancy."
      ],
      softwareUsed: ["Delphi", "Pascal", "ParadoxDB"],
    },

    {
      jobTitle: "Lab Assistant",
      jobLocation: "Newberg, OR",
      jobLink: "https://www.georgefox.edu/",
      jobCompany: "George Fox University",
      jobStartDate: "2021",
      jobEndDate: "2023",
      jobThumbnail: "/Thumbnails/GeorgeFoxLogo.jpg",
      jobDescription: [
        "Assisted and encouraged students to reach their academic goals by teaching them core Computer " +
        "Science concepts such as data structures, analysis of algorithms, parallel programming paradigms, " +
        "relational databases, and programming style best practices.",
        "Consoled students when they fell short of academic goals and collaborated with them to develop a " +
        "course plan, better study habits and increased career preparedness.",
      ],
      softwareUsed: ["Python", "Java", "Scala", "C", "C++", "SQL", "CUDA"],
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
              <div className="flex justify-between lg:my-0 bg-purple-950 border hover:border-slate-700 border-slate-900 rounded-sm p-4">
                <div className="text-left lg:text-lg font-semibold">
                  {job.jobTitle}
                  <FontAwesomeIcon icon={faMinus} className={"px-2 align-middle self-center"}/>
                  {job.jobCompany}
                </div>
                <div className="text-left text-lg font-semibold hidden md:block">
                  {job.jobStartDate}
                  <FontAwesomeIcon icon={faMinus} className={"px-2 align-middle self-center"}/>
                  {job.jobEndDate}
                  {openListItem == index && (
                      
                    <FontAwesomeIcon icon={faCircleMinus} className={"fa-lg pl-2"}/>

                  )}
                  {openListItem != index && (
                    <FontAwesomeIcon icon={faCirclePlus} className={"fa-lg pl-2"}/>

                  )}
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
                <div className={"flex mt-4"}>
                  <a className={"flex"} href={job.jobLink} target={"_blank"}>
                  <FontAwesomeIcon className={"fa-sm pt-1 pr-2"} icon={faArrowUpRightFromSquare} />
                  <div className={"text-gray-500 font-bold opacity-90"}>{job.jobCompany}</div>
                  </a>
                </div>
                <div className={"flex"}>
                  <FontAwesomeIcon className={"fa-sm pr-3 pt-1"}icon={faLocationDot} />
                  <div className={"text-gray-500 font-bold opacity-90"}>{job.jobLocation}</div>
                </div>

                
                {/* <div className="grid auto-cols-min md:grid-cols-[4%_4%_auto] lg:grid-cols-[3%_3%_auto] w-full mt-4">
                  <FontAwesomeIcon className={"fa-sm pt-1 pr-2"} icon={faArrowUpRightFromSquare} />
                  <div className={"text-gray-500 font-bold opacity-90"}>{job.jobCompany}</div>
                  <div></div>

                  <FontAwesomeIcon className={"fa-sm pr-2 pt-1"} icon={faLocationDot} />
                  <div className={"text-gray-500 font-bold opacity-90"}>{job.jobLocation}</div>
                  <div></div>
                </div> */}



                <ul className={"my-4 text-sm opacity-90 list-outside list-disc pl-4"}>
                {job.jobDescription.map((jobPoint, index) => (
                  <li key={index}>
                    {jobPoint}
                  </li>
                ))}

                </ul>
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
