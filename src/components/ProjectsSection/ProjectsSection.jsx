"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "./index.js";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPhp,
  SiMysql,
  SiAxios,
  SiCloudinary,
  SiMongoose,
  SiSwagger,
  SiGit,
  SiGithub,
  SiFigma,
  SiTrello,
  SiHandlebarsdotjs,
  SiWebpack,
  SiNodedotjs,
  SiDotenv,
  SiPrettier,
  SiEslint,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection() {
  const techIcons = {
    JavaScript: <SiJavascript color="#f7df1e" />,
    TypeScript: <SiTypescript color="#3178c6" />,
    HTML: <SiHtml5 color="#e34f26" />,
    CSS: <SiCss3 color="#264de4" />,
    Sass: <SiSass color="#cc6699" />,
    Tailwind: <SiTailwindcss color="#06b6d4" />,
    Vite: <SiVite color="#8dd6f9" />,
    React: <SiReact color="#61dafb" />,
    Redux: <SiRedux color="#764abc" />,
    "Next.js": <SiNextdotjs color="#000000" />,
    "Vue.js": <SiVuedotjs color="#42b883" />,
    Express: <SiExpress color="#000000" />,
    MongoDB: <SiMongodb color="#47a248" />,
    PostgreSQL: <SiPostgresql color="#336791" />,
    PHP: <SiPhp color="#777bb4" />,
    MySQL: <SiMysql color="#00758f" />,
    Axios: <SiAxios color="#5a29e4" />,
    Cloudinary: <SiCloudinary color="#3448c5" />,
    Mongoose: <SiMongoose color="#880000" />,
    Swagger: <SiSwagger color="#85ea2d" />,
    Git: <SiGit color="#f05032" />,
    GitHub: <SiGithub color="#181717" />,
    Figma: <SiFigma color="#f24e1e" />,
    Trello: <SiTrello color="#0052cc" />,
    VSCode: <VscVscode color="#007acc" />,
    Handlebars: <SiHandlebarsdotjs color="#f0772b" />,
    Webpack: <SiWebpack color="#8dd6f9" />,
    "Node.js": <SiNodedotjs color="#8cc84b" />,
    Dotenv: <SiDotenv color="#e5a51c" />,
    Prettier: <SiPrettier color="#f7b93e" />,
    ESLint: <SiEslint color="#4b32c3" />,
  };

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Projects</h2>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          const newIndex = swiper.activeIndex;
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            setExpandedIndex(null);
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${styles.projectsList} ${
                expandedIndex === index ? styles.more : ""
              }`}
            >
              <h3 className={styles.projectTitle}>
                {project.liveLink ? (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.role}>
                  <strong>Role:</strong> {project.role}
                </p>

                <h4>Frontend Features</h4>
                <p className={styles.subheading}>{project.frontend}</p>

                {project.backend && (
                  <>
                    <h4>Backend Development</h4>
                    <p className={styles.subheading}>{project.backend}</p>
                  </>
                )}
                {project.technologies?.length > 0 && (
                  <>
                    <p className={styles.techHeading}>
                      <strong>Technologies & Tools:</strong>
                    </p>
                    <ul className={styles.techList}>
                      {project.technologies.map((tech, i) => (
                        <li key={i} className={styles.techItem} title={tech}>
                          {techIcons[tech] || tech}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <button
                onClick={() => handleToggle(index)}
                className={styles.button}
              >
                {expandedIndex === index ? "less" : "more"}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
