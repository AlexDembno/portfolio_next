"use client";

import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Header() {
  const text = "Oleksii Dembnovetskyi";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={`${styles.animated_title} ${styles.title}`}>
          {text.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.cont}`}>
            <p className={styles.hoverText}>Send me a message</p>
            <a href="#form" className={styles.link}>
              <FaEnvelope className={styles.icon} />
            </a>
          </li>
          <li className={`${styles.item} ${styles.cont}`}>
            <p className={styles.hoverText}>My LinkedIn</p>
            <a
              className={styles.link}
              href="https://linkedin.com/in/oleksii-dembnovetskyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </li>
          <li className={`${styles.item} ${styles.cont}`}>
            <p className={styles.hoverText}>My GitHub</p>
            <a
              className={styles.link}
              href="https://github.com/AlexDembno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
          </li>
          <li className={`${styles.item} ${styles.cont}`}>
            <p className={styles.hoverText}>Download my resume</p>
            <a
              className={styles.link}
              href="/cv/Oleksii_Dembnovetskyi_CV.pdf"
              download="Oleksii_Dembnovetskyi_CV.pdf"
            >
              <FaDownload className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
