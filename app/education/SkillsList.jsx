import { Icons } from "./icons";

async function getSkills(skills) {
  const res = await fetch(`http://localhost:4000/${skills}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${skills}`);
  }

  return res.json();
}

export default async function SkillsList() {
  const skillswinc = await getSkills("skillswinc");
  const skillscurrent = await getSkills("skillscurrent");

  return (
    <>
      <h3 className="font-bold mt-12">Vaardigheden uit de opleiding</h3>
      <div className="flex flex-wrap gap-4 p-4 mt-5">
        {skillswinc.map((skill) => {
          const IconComponent = Icons[skill.icon];
          return (
            <div key={skill.id} className="flex flex-col items-center">
              {IconComponent && (
                <IconComponent className="w-12 h-12 text-purpledark" />
              )}
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
      <h3 className="font-bold mt-12">Vaardigheden uit de opleiding</h3>
      <div className="flex flex-wrap gap-4 p-4 mt-5">
        {skillscurrent.map((skill) => {
          const IconComponent = Icons[skill.icon];
          return (
            <div key={skill.id} className="flex flex-col items-center">
              {IconComponent && (
                <IconComponent className="w-12 h-12 text-purpledark" />
              )}
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
