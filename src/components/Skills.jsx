import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiMysql,
  SiWordpress,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5 },
  { id: "css", Component: FaCss3Alt },
  { id: "javascript", Component: SiJavascript },
  { id: "bootstrap", Component: FaBootstrap },
  { id: "php", Component: FaPhp },
  { id: "react", Component: FaReact },
  { id: "tailwind", Component: SiTailwindcss },
  { id: "wordpress", Component: SiWordpress },
  { id: "node", Component: FaNodeJs },
  { id: "sql", Component: SiMysql },
  { id: "npm", Component: FaNpm },
  { id: "mongodb", Component: SiMongodb },
  { id: "vite", Component: SiVite },
  { id: "vscode", Component: SiVisualstudiocode },
  { id: "github", Component: DiGithubBadge },
];

export default function Skills({ language }) {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  // Define translations for the section title
  const translations = {
    en: { my: "My", skills: "Skills" },
    th: { skills: "ทักษะ", my: "ของฉัน" },
  };

  return (
    <div
      id="skills"
      className="rounded-lg flex items-center justify-center pt-4"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h3 className="text-4xl font-semibold md:text-center mb-10">
          {language === "en" ? (
            <>
              <span className="text-cyan-600">My</span>{" "}
              <span className="text-white">Skills</span>
            </>
          ) : (
            <>
              <span className="text-cyan-600">{translations.th.skills}</span>{" "}
              <span className="text-white">{translations.th.my}</span>
            </>
          )}
        </h3>
        <div className="grid grid-cols-8 gap-4 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component } = skills[index];
            return (
              <animated.div
                style={props}
                className="text-5xl text-goldDesert transition-all duration-180 transform hover:scale-110 hover:text-darkDesert"
                key={skills[index].id}
              >
                <Component />
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
