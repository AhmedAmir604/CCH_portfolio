export function Hero() {
  return (
    <div
      className="flex flex-col gap-[4rem] items-center justify-center mt-[3rem]"
      id="aboutMe"
    >
      <div className="flex flex-col items-center gap-10">
        <img
          className="w-[10rem] h-[10rem] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="public\icon.png"
          alt="Bordered avatar"
        />
        <p className="text-gray-400 font-semibold text-lg text-center w-1/2">
          <h1>About Me</h1>
          <p className="mb-3">
            Doing graduation in{" "}
            <span className="font-medium">Computer Science degree</span>, I
            decided to pursue my passion for programming. I enrolled in a coding
            bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">React, Next.js</span>. I am also
            familiar with TypeScript. I am always looking to learn new
            technologies. I am currently am intern at{" "}
            <span className="font-medium">CodeCrafters Hub</span> as a website
            developer.
          </p>
        </p>
      </div>
    </div>
  );
}
