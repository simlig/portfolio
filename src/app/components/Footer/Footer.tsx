import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Footer/Footer.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        <div className={styles.flexBox}>
          <a
            href="https://www.linkedin.com/in/samuel-imlig/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>
          <a href="https://github.com/simlig/portfolio" target="_blank" rel="noopener noreferrer" className={styles.links}>
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
          </a>
          <a href="mailto:samuelimlig@gmail.com" className={styles.links}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
          </a>
        </div>

        <div className={styles.copyright}>
          © 2025 Samuel K. Imlig. All rights reserved. All trademarks, logos, and software referenced are the property of
          their respective owners.
          <div className="text-center pt-2">Next.js · TypeScript · Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
