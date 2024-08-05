import { skills } from "../lib/data";

const Skills = () => {
  return (
    <div className="w-[80%]" id="skills">
      <h1 className="pb-[3rem] text-5xl text-gray-100 text-center underline">
        Skills
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-gray-400 text-5xl"
          >
            {skill.icon}
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
