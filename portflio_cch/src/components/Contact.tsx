export default function Contact() {
  return (
    <form className="mt-8 flex flex-col dark:text-white w-1/3 gap-8">
      <input
        required
        name="senderEmail"
        placeholder="Your Email Here"
        className="px-3 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 dark:outline-none transition-all"
        type="email"
      ></input>
      <textarea
        required
        name="message"
        placeholder="Message"
        maxLength={5000}
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 dark:outline-none transition-all"
      ></textarea>
      <a
        type="submit"
        className="text-white bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 hover:scale-110 border-[3px] border-transparent hover:border-gray-400 w-1/3 "
      >
        Submit
      </a>
    </form>
  );
}
