import React from 'react';
import { Icons } from '../icons'; 

const skills = [
  { name: 'HTML5', icon: Icons.html5 },
  { name: 'CSS3', icon: Icons.css },
  { name: 'Sass', icon: Icons.sass },
  { name: 'React', icon: Icons.react },
  { name: 'GitHub', icon: Icons.github },
  { name: 'Git', icon: Icons.git },
  { name: 'Figma', icon: Icons.figma },
  { name: 'NPM', icon: Icons.npm },
  { name: 'Node.js', icon: Icons.node },
  { name: 'WordPress', icon: Icons.wordpress },
  { name: 'JavaScript', icon: Icons.javascript },
  { name: 'Chakra UI', icon: Icons.chakra },
  { name: 'PowerShell', icon: Icons.powershell },
  { name: 'Windows', icon: Icons.windows },
  { name: 'Postman', icon: Icons.postman },
  { name: 'Tailwind CSS', icon: Icons.tailwind },
  { name: 'Netlify', icon: Icons.netlify },
  { name: 'VS Code', icon: Icons.vscode },
  { name: 'Responsive Web Design', icon: Icons.rwd },
  { name: 'Next.js', icon: Icons.next },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div key={index} className="flex flex-col items-center">
            <IconComponent className="w-12 h-12 text-blue-500" />
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
