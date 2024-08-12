import { links } from "../lib/data";

export default function NavBar() {
  return (
    <div className="sticky bg-[#101820] border border-gray-400 top-10 w-1/2 left-1/4 rounded-full z-30">
      <ul className="flex justify-center items-center text-gray-400 gap-20 ">
        {links.map((el) => (
          <a
            href={el.link}
            className="cursor-pointer px-[1rem] py-[10px] my-[5px] text-sm bg-[#101820] rounded-full font-bold hover:bg-gray-400 hover:text-black transition-all"
          >
            {el.name}
          </a>
        ))}
      </ul>
    </div>
  );
}
