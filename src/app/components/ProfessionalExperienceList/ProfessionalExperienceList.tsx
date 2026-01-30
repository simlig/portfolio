"use client";

import React, { useState } from "react";
import "@/app/interfaces/Job";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faLocationDot, faSquareArrowUpRight, faTimeline, faUser } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "@/app/hooks/WidthCalculator";
import styles from "../ProfessionalExperienceList/ProfessionalExperienceList.module.css";
import Link from "next/link";

const jobs: Job[] = [
  {
    jobTitle: "Software Engineer",
    jobLocation: "Remote",
    jobLink: "https://www.saic.com/",
    jobCompany: "SAIC",
    jobStartDate: "2024",
    jobEndDate: "Present",
    jobThumbnail: `/portfolio/Thumbnails/SAICLogo.jpg`,
    jobThumbnailStyling: "bg-blue-700",
    jobDescription: [
      "Collaborated within a three-person team to execute a major platform upgrade, which involved extensive package and dependency replacement, a complete frontend migration and testing across a codebase of over 195,000 lines of code.",
      "Built a multi‑cloud SIEM environment using Terraform, Terragrunt, and Ansible, enabling automated deployment and configuration of log ingestion pipelines across AWS, Azure, GCP, and OCI.",
      "Led client meetings and provided progress reports and technical guidance for issue resolution, system functionality, and upcoming development efforts.",
      "Identified, investigated, and resolved security vulnerabilities across both the infrastructure and application codebase, contributing to overall system hardening and improved security posture."
    ],
    softwareUsed: ["Java", "Spring", "Thymeleaf", "Terragrunt", "Ansible", "Jenkins"],
  },
  {
    jobTitle: "SWE Associate",
    jobLocation: "Remote",
    jobLink: "https://www.saic.com/",
    jobCompany: "SAIC",
    jobStartDate: "2023",
    jobEndDate: "2024",
    jobThumbnail: `/portfolio/Thumbnails/SAICLogo.jpg`,
    jobThumbnailStyling: "bg-blue-700",
    jobDescription: [
      "Developed, designed and maintained an AWS based full-stack application that allowed clients to query, update and analyze content and user data across 800,000+ unique entries.",
      "Migrated the platform from Amazon Linux 2 to Amazon Linux 2023 to ensure full compliance with security protocols and best practices.",
      "Guided teammates through full‑stack development principles and hands‑on implementation.",
    ],
    softwareUsed: ["Java", "SpringBoot", "NextJS", "Tailwind", "AWS"],
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
      "Diagnosed and resolved software/hardware issues on Windows and macOS computers to ensure full functionality, customer satisfaction and adherence to industry standards either in person, over the phone or through a remote connection",
      "Resolved campus-wide CPU throttling issues on Windows 11 machines by identifying the causes and implementing both manual and automatic solutions",
      "Enhanced efficiency by implementing automated file transfers through PowerShell scripts, reducing required employee oversight"
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
      "Developed a cross-platform mobile application (Delphi, Paradox) for iOS and Android that enabled service employees to query customer data, navigate to residences and record duties performed via a centralized backend system",
      "Led Amazon Appstore deployment, managing production builds, metadata setup and release cycles",
      "Eliminated redundant pen and paper tasks, leading to a substantial increase in employee productivity"
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
                   {width && width >= 400 && (
                      <>
                      <div className={styles.imageContainer}>
                        <img src={job.jobThumbnail} className={styles.image}></img>
                      </div>
                      </>
                   )}
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
                        {/* <FontAwesomeIcon className={styles.dynamicIcons + " fa-sm"} icon={faUser} /> */}
                        <div className={styles.jobTitleSmall}>
                          {job.jobTitle}
                          <a href={job.jobLink} className="text-green-400 hover: cursor">{" @ " + job.jobCompany}</a>
                        </div>
                      </div>
                    </div>
                  <div className={styles.flexTextLeft + " mt-2"}>
                    <div className={"flex font-sans"}>
                      <div className={styles.staticIconInformation + " font-thin"}>{job.jobStartDate}</div>
                      <FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />
                      <div className={styles.staticIconInformation + " font-thin"}>{job.jobEndDate}</div>
                    </div>
                  </div>
                  </>
                )}
                {width && width >= 400 && (
                <div className={styles.flexTextLeft + " mt-4"}>
                  <div className={"flex"}>
                    <FontAwesomeIcon className={styles.timeLine + " fa-sm font-thin font-sans"} icon={faTimeline} />
                    <div className={styles.staticIconInformation}>{job.jobStartDate}</div>
                    <FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />
                    <div className={styles.staticIconInformation}>{job.jobEndDate}</div>
                  </div>
                </div>
                )}

                <div className={styles.jobDescriptionList}>
                  {job.jobDescription.map((jobPoint, index) => (
                  <div className="flex mb-2" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mt-[.20rem] w-4 h-4 stroke-green-400 stroke-[2px] fill-none shrink-0"
                    >
                      <path d="M8 6l10 6-10 6z" strokeLinejoin="round" />
                    </svg>
                    <div className="ml-4 text-[1.05rem] font-thin font-sans text-gray-300">{jobPoint}</div>
                  </div>
                  ))}
                </div>
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

        <Link href="/PDFs/Samuel Imlig Resume.pdf#zoom=80" target={"_blank"}  className={styles.fullResume}>
          View Full Resume
          <FontAwesomeIcon icon={faSquareArrowUpRight} className="pl-2" size="lg"/>
        </Link>

      </div>
    </>
  );
};

export default ProfessionalExperienceList;
