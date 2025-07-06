import { useWindowWidth } from "@/app/hooks/WidthCalculator";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Ref, useRef, useState } from "react";

type NavbarTypes = {
  landingPageAnchor: Ref<HTMLDivElement | null>;
  projectGridAnchor: Ref<HTMLDivElement | null>;
  professionalExperienceListAnchor: Ref<HTMLDivElement | null>;
};

const Navbar: React.FC<NavbarTypes> = ({ landingPageAnchor, projectGridAnchor, professionalExperienceListAnchor }) => {
  const width = useWindowWidth();
  const [hamburgerListActive, setHamburgerListActive] = useState<boolean>(false);

  function handleScroll(ref: any) {
    const navbarHeight = 60; // Adjust this to your navbar height in px
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="bg-blue-700 p-2 sticky top-0 z-10 border-b-1 border-b-gray-500">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex">
          <button
            onClick={() => handleScroll(landingPageAnchor)}
            className={
              "text-gray-200 rounded focus:outline-none focus:border-white border-1 border-transparent hover:border-white transition-all hover:opacity-75 hover:cursor-pointer" +
              (width && width < 360 ? " px-2" : "") +
              (width && width >= 360 ? " px-4" : "")
            }
          >
            Home
          </button>
          <button
            onClick={() => handleScroll(projectGridAnchor)}
            className={
              "text-gray-200 rounded focus:outline-none focus:border-white border-1 border-transparent hover:border-white transition-all hover:opacity-75 hover:cursor-pointer" +
              (width && width < 360 ? " px-2" : "") +
              (width && width >= 360 ? " px-4" : "")
            }
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll(professionalExperienceListAnchor)}
            className={
              "text-gray-200 rounded focus:outline-none focus:border-white border-1 border-transparent hover:border-white transition-all hover:opacity-75 hover:cursor-pointer" +
              (width && width < 360 ? " px-2" : "") +
              (width && width >= 360 ? " px-4" : "")
            }
          >
            Experience
          </button>
          {width && width > 450 && (
            <>
              <Link
                href="/PDFs/Samuel Imlig Resume.pdf"
                target={"_blank"}
                className={
                  "text-gray-200 px-4 rounded focus:outline-none focus:border-white focus:ring-white border-1 border-transparent hover:border-white transition-all hover:opacity-75"
                }
              >
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/samuel-imlig/"
                target={"_blank"}
                className={
                  "text-gray-200 px-4 rounded focus:outline-none focus:border-white focus:ring-white border-1 border-transparent hover:border-white z-20 hover:opacity-75"
                }
              >
                <FontAwesomeIcon icon={faLinkedin} className={"fa-lg"} href={"https://www.linkedin.com/in/samuel-imlig/"} />
              </Link>
            </>
          )}
          {width && width <= 450 && (
            <button
              className={
                "text-gray-200 px-4 rounded cursor-pointer focus:outline-none focus:border-white focus:ring-white border-1 border-transparent hover:border-white z-20 hover:opacity-75"
              }
              onClick={() => setHamburgerListActive(!hamburgerListActive)}
            >
              <FontAwesomeIcon icon={faBars} className={"fa-lg"}/>
            </button>
          )}
        </div>
      </div>
      {hamburgerListActive && width && width < 450 && (
        <div className="mx-auto flex items-center justify-between">
          <div className="flex">
            <Link
              href="/PDFs/Samuel Imlig Resume.pdf"
              target={"_blank"}
              className={
                "text-gray-200 mt-2 rounded focus:outline-none focus:border-white focus:ring-white border-1 border-transparent hover:border-white transition-all hover:opacity-75" +
              (width && width < 360 ? " px-2" : "") +
              (width && width >= 360 ? " px-4" : "")
              }
            >
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-imlig/"
              target={"_blank"}
              className={
                "text-gray-200 mt-2 rounded focus:outline-none focus:border-white focus:ring-white border-1 border-transparent hover:border-white z-20 hover:opacity-75" +
              (width && width < 360 ? " px-2" : "") +
              (width && width >= 360 ? " px-4" : "")
              }
            >
              <FontAwesomeIcon icon={faLinkedin} className={"fa-lg"} href={"https://www.linkedin.com/in/samuel-imlig/"} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
