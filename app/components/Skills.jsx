import React from "react";
import { Icons } from "../icons";

const skillsWinc = [
  { name: "HTML5", icon: Icons.html5 },
  { name: "CSS3", icon: Icons.css },
  { name: "Sass", icon: Icons.sass },
  { name: "JavaScript", icon: Icons.javascript },
  { name: "React", icon: Icons.react },
  { name: "Chakra UI", icon: Icons.chakra },
  { name: "Figma", icon: Icons.figma },
  { name: "Responsive Web Design", icon: Icons.rwd },
  { name: "NPM", icon: Icons.npm },
  { name: "Node.js", icon: Icons.node },
  { name: "Windows", icon: Icons.windows },
  { name: "PowerShell", icon: Icons.powershell },
  { name: "VS Code", icon: Icons.vscode },
  { name: "GitHub", icon: Icons.github },
  { name: "Git", icon: Icons.git },
  { name: "Postman", icon: Icons.postman },
  { name: "Netlify", icon: Icons.netlify },
];

const skillsCurrent = [
  { name: "Next.js", icon: Icons.next },
  { name: "Tailwind CSS", icon: Icons.tailwind },
  { name: "WordPress", icon: Icons.wordpress },
];

const Skills = () => {
  return (
    <>
      <h3 className="font-bold mt-12">Vaardigheden/kennis uit de opleiding</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 mt-5">
        {skillsWinc.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <IconComponent className="w-12 h-12 text-purpledark" />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
      <h3 className="font-bold mt-10">Wat ik nu leer</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 mt-5">
        {skillsCurrent.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <IconComponent className="w-12 h-12 text-purpledark" />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
