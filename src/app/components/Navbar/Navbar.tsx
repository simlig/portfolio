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
          {width && width > 450 && (
            <>
              <Link href="/PDFs/Samuel Imlig Resume.pdf#zoom=80" target={"_blank"} className={styles.links}>
                Resume
              </Link>
              <Link href="https://www.linkedin.com/in/samuel-imlig/" target={"_blank"} className={styles.links}>
                <FontAwesomeIcon icon={faLinkedin} className={"fa-lg"} href={"https://www.linkedin.com/in/samuel-imlig/"} />
              </Link>
            </>
          )}
          {width && width <= 450 && (
            <button className={styles.links} onClick={() => setHamburgerListActive(!hamburgerListActive)}>
              <FontAwesomeIcon icon={faBars} className={"fa-lg"} />
            </button>
          )}
        </div>
      </div>
      {hamburgerListActive && width && width < 450 && (
        <div className={styles.hamburgerContainer}>
          <div className="flex">
            <Link
              href="/PDFs/Samuel Imlig Resume.pdf"
              target={"_blank"}
              className={
                styles.hamburgerLinks + (width && width < 360 ? " px-2" : "") + (width && width >= 360 ? " px-4" : "")
              }
            >
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-imlig/"
              target={"_blank"}
              className={
                styles.hamburgerLinks + (width && width < 360 ? " px-2" : "") + (width && width >= 360 ? " px-4" : "")
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
