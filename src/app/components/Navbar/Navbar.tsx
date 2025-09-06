import { useWindowWidth } from "@/app/hooks/WidthCalculator";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Ref, useState } from "react";
import styles from "../Navbar/Navbar.module.css";

type NavbarTypes = {
  landingPageAnchor: Ref<HTMLDivElement | null>;
  projectGridAnchor: Ref<HTMLDivElement | null>;
  professionalExperienceListAnchor: Ref<HTMLDivElement | null>;
};

const Navbar: React.FC<NavbarTypes> = ({ landingPageAnchor, projectGridAnchor, professionalExperienceListAnchor }) => {
  const width = useWindowWidth();
  const [hamburgerListActive, setHamburgerListActive] = useState<boolean>(false);

  function handleScroll(ref: any) {
    const navbarHeight = 60;
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarFlexContainer}>
        <div className="flex">
          <button
            onClick={() => handleScroll(landingPageAnchor)}
            className={
              styles.portfolioAnchors + (width && width < 360 ? " px-2" : "") + (width && width >= 360 ? " px-4" : "")
            }
          >
            Home
          </button>
          <button
            onClick={() => handleScroll(projectGridAnchor)}
            className={
              styles.portfolioAnchors + (width && width < 360 ? " px-2" : "") + (width && width >= 360 ? " px-4" : "")
            }
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll(professionalExperienceListAnchor)}
            className={
              styles.portfolioAnchors + (width && width < 360 ? " px-2" : "") + (width && width >= 360 ? " px-4" : "")
            }
          >
            Experience
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
