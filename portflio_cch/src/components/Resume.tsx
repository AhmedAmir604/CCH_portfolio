import React from "react";

export default function Resume() {
  return (
    <section className="w-1/2 flex flex-col gap-8 items-center justify-center">
      <h2 className="text-2xl text-gray-200 font-thin">
        Want my Resume Download it from here!
      </h2>
      <a
        href="/CV.pdf"
        type="button"
        download
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 hover:scale-110 border-[3px] border-transparent hover:border-gray-400"
      >
        Download Resume
      </a>
    </section>
  );
}
