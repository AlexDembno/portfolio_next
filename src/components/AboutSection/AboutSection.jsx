import styles from "./AboutSection.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiCss3,
  SiTailwindcss,
  SiWebpack,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiAxios,
  SiMongodb,
  SiPostgresql,
  SiCloudinary,
  SiExpress,
  SiMongoose,
  SiSwagger,
  SiGit,
  SiGithub,
  SiFigma,
  SiTrello,
} from "react-icons/si";

export default function AboutSection() {
  const techStack = [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
    { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
    { name: "Sass", icon: <SiSass color="#cc6699" /> },
    { name: "CSS3", icon: <SiCss3 color="#264de4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" /> },
    { name: "Webpack", icon: <SiWebpack color="#8dd6f9" /> },
    { name: "React", icon: <SiReact color="#61dafb" /> },
    { name: "Redux", icon: <SiRedux color="#764abc" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
    { name: "Vue.js", icon: <SiVuedotjs color="#4fc08d" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#5fa04e" /> },
    { name: "Axios", icon: <SiAxios color="#5a29e4" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Cloudinary", icon: <SiCloudinary color="#3448c5" /> },
    { name: "Express", icon: <SiExpress color="#000000" /> },
    { name: "Mongoose", icon: <SiMongoose color="#880000" /> },
    { name: "Swagger", icon: <SiSwagger color="#85ea2d" /> },
    { name: "Git", icon: <SiGit color="#f05032" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" /> },
    { name: "Figma", icon: <SiFigma color="#f24e1e" /> },
    { name: "Trello", icon: <SiTrello color="#0052cc" /> },
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.heading}>About Me</h2>

      <p className={styles.about}>
        <strong>Full Stack Developer</strong> | React | Next.js | TypeScript |
        Node.js
      </p>

      <p className={styles.about}>
        I am a Full Stack Developer with a strong focus on building modern,
        responsive, and high-performance web applications. Skilled in React,
        Next.js, and TypeScript, I emphasize clean, maintainable code, UI/UX
        best practices, and performance optimization. On the backend, I develop
        robust and scalable services with Node.js and Express, and have
        experience working with both SQL and NoSQL databases.
      </p>

      <h3 className={styles.aboutTools}>Tools & Tech Stack</h3>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <ul className={styles.techList}>
            {techStack.map((tech, index) => (
              <li key={`first-${index}`} className={styles.techItem}>
                <span className={styles.icon}>
                  {tech.icon}
                  {tech.name}
                </span>
              </li>
            ))}
            {techStack.map((tech, index) => (
              <li key={`second-${index}`} className={styles.techItem}>
                <span className={styles.icon}>
                  {tech.icon}
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
