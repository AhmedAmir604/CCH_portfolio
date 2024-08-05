import { projects } from "../lib/data";

export default function Projects() {
  return (
    <div className="flex gap-10 w-1/2" id="projects">
      {projects.map((el) => (
        <a className="flex flex-col gap-5 items-center border-gray-800 border-[5px] rounded-xl bg-gray-800 shadow py-[1.5rem] md:max-w-xl">
          <div className="w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg overflow-hidden">
            <img className="object-cover w-full h-full" src={el.img} alt="" />
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal border-[2px] border-gray-600 rounded-lg mx-[10px]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
              {el.heading}
            </h5>
            <p className="mb-3 font-normal text-gray-200">{el.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
