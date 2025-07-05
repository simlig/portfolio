"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faLocationDot, faTimeline, faUser } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "@/app/hooks/WidthCalculator";
const jobs: Job[] = [
  {
    jobTitle: "Software Engineer",
    jobLocation: "Remote",
    jobLink: "https://www.saic.com/",
    jobCompany: "SAIC",
    jobStartDate: "2023",
    jobEndDate: "Present",
    jobThumbnail: `/portfolio/Thumbnails/SAICLogo.jpg`,
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
    jobThumbnail: "/portfolio/Thumbnails/GeorgeFoxLogo.jpg",
    jobDescription: [
      "Diagnosed and resolved software/hardware issues on Windows and macOS computers to ensure full functionality, customer satisfaction and adherence to industry standards.",
      "Enhanced efficiency by implementing automated file transfers through PowerShell scripts, reducing required employee oversight.",
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
    jobThumbnail: "/portfolio/Thumbnails/AAP.png",
    jobDescription: [
      "Developed a mobile application for iOS and Android that utilized the REST paradigm to interact with a Paradox database.",
      "Reduced pen and paper tasks by 90%, which significantly increased employee productivity and reduced redundancy.",
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
    jobThumbnail: `/portfolio/Thumbnails/GeorgeFoxLogo.jpg`,
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

const ProfessionalExperienceList = () => {
  const [openListItem, setOpenListItem] = useState<number>(-1);
  const width = useWindowWidth();

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
      <div className="max-w-7xl mx-auto sm:p-6 grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-12 justify-items-center">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full bg-slate-900  border hover:border-slate-700 hover:scale-105 transition-transform duration-300 border-slate-900 rounded-lg p-4 my-2 lg:my-0"
          >
            <div className="flex flex-col items-center">
              <div className="font-bold p-4 mt-4 bg-slate-900 w-full">
                <div className={"flex"}>
                  <div
                    className={`self-start w-24 h-24 rounded-full overflow-hidden bg-white will-change-transform border}`}
                  >
                    <img src={job.jobThumbnail} className={`w-full h-full object-cover`}></img>
                  </div>
                  <div className="place-self-center flex-1">
                    {width && width >= 400 && (
                      <>
                        <div className="pl-8 text-[1rem] sm:text-base font-extrabold">{job.jobTitle}</div>
                        <a className={"flex text-left"} href={job.jobLink} target={"_blank"}>
                          <div className="pl-8 text-[1rem] sm:text-base">{job.jobCompany}</div>
                          <FontAwesomeIcon className={"fa-sm pt-[.3rem] pl-2"} icon={faArrowUpRightFromSquare} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {width && width < 400 && (
                  <>
                    <div className={"flex mt-4 text-left"}>
                      <div className={"flex"}>
                        <FontAwesomeIcon className={"fa-sm pt-1 pr-2 pl-[.2rem]"} icon={faUser} />
                        <div className={"text-gray-300 font-extrabold"}>{job.jobTitle}</div>
                      </div>
                    </div>
                    <div className={"flex text-left"}>
                      <a className={"flex text-left"} href={job.jobLink} target={"_blank"}>
                        <FontAwesomeIcon className={"fa-sm pt-1 pr-2 pl-[.2rem]"} icon={faArrowUpRightFromSquare} />
                        <div className={"text-gray-500 font-bold opacity-90"}>{job.jobCompany}</div>
                      </a>
                    </div>
                  </>
                )}
                <div className={`flex text-left ${width && width >= 400 ? "mt-4" : ""}`}>
                  <div className={"flex"}>
                    <FontAwesomeIcon className={"fa-sm pt-1 pr-2 pl-[.10rem]"} icon={faTimeline} />
                    <div className={"text-gray-500 font-bold opacity-90"}>{job.jobStartDate}</div>
                    <FontAwesomeIcon icon={faMinus} className={"px-2 align-middle self-center text-gray-500 opacity-90"} />
                    <div className={"text-gray-500 font-bold opacity-90"}>{job.jobEndDate}</div>
                  </div>
                </div>
                <div className={"flex text-left"}>
                  <FontAwesomeIcon className={"fa-sm pr-3 pt-1 pl-[.3rem]"} icon={faLocationDot} />
                  <div className={"text-gray-500 font-bold opacity-90"}>{job.jobLocation}</div>
                </div>

                <ul className={"my-4 text-left text-[.75rem] sm:text-sm opacity-90 list-outside list-disc pl-4"}>
                  {job.jobDescription.map((jobPoint, index) => (
                    <li key={index}>{jobPoint}</li>
                  ))}
                </ul>
                <div className={"flex flex-wrap"}>
                  {job.softwareUsed.map((software) => (
                    <div key={software} className={"text-sm my-2 mr-2 px-2 py-1 rounded-4xl border bg-blue-600 opacity-95"}>
                      {software}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalExperienceList;
