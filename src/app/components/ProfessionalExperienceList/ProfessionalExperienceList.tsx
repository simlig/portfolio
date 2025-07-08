"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faLocationDot, faTimeline, faUser } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "@/app/hooks/WidthCalculator";
import styles from "../ProfessionalExperienceList/ProfessionalExperienceList.module.css";

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
      <div className={styles.mainContainer}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.symetricalJobContainer}>
            <div className={styles.outerJobContainer}>
              <div className={styles.innerJobContainer}>
                <div className={"flex"}>
                  <div
                    className={styles.imageContainer}
                  >
                    <img src={job.jobThumbnail} className={styles.image}></img>
                  </div>
                  <div className={styles.titleContainer}>
                    {width && width >= 400 && (
                      <>
                        <div className={styles.jobTitle}>{job.jobTitle}</div>
                        <a className={styles.jobLink} href={job.jobLink} target={"_blank"}>
                          <div className={styles.company}>{job.jobCompany}</div>
                          <FontAwesomeIcon className={styles.externalLinkArrow + " fa-sm"} icon={faArrowUpRightFromSquare} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {width && width < 400 && (
                  <>
                    <div className={styles.flexTextLeft + " mt-4"}>
                      <div className={"flex"}>
                        <FontAwesomeIcon className={styles.dynamicIcons + " fa-sm"} icon={faUser} />
                        <div className={styles.jobTitleSmall}>{job.jobTitle}</div>
                      </div>
                    </div>
                    <div className={styles.flexTextLeft}>
                      <a className={styles.flexTextLeft} href={job.jobLink} target={"_blank"}>
                        <FontAwesomeIcon className={styles.dynamicIcons + " fa-sm"} icon={faArrowUpRightFromSquare} />
                        <div className={styles.companySmall}>{job.jobCompany}</div>
                      </a>
                    </div>
                  </>
                )}
                <div className={styles.flexTextLeft + `${width && width >= 400 ? " mt-4" : ""}`}>
                  <div className={"flex"}>
                    <FontAwesomeIcon className={styles.timeLine + " fa-sm"} icon={faTimeline} />
                    <div className={styles.staticIconInformation}>{job.jobStartDate}</div>
                    <FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />
                    <div className={styles.staticIconInformation}>{job.jobEndDate}</div>
                  </div>
                </div>
                <div className={styles.flexTextLeft}>
                  <FontAwesomeIcon className={styles.locationIcon + " fa-sm"} icon={faLocationDot} />
                  <div className={styles.staticIconInformation}>{job.jobLocation}</div>
                </div>

                <ul className={styles.jobDescriptionList}>
                  {job.jobDescription.map((jobPoint, index) => (
                    <li key={index}>{jobPoint}</li>
                  ))}
                </ul>
                <div className={"flex flex-wrap"}>
                  {job.softwareUsed.map((software) => (
                    <div key={software} className={styles.softwareContainer}>
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
