import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-primary h-screen ">
      <div className="flex items-center gap-2">
        <Image src={`/icons/image.png`} alt="Logo" width={80} height={80} />
        <h1 className="font-bold text-4xl">
          Dev<span className=" font-light">Zero</span>
        </h1>
      </div>
      <h1 className=" bg-custom-gradient bg-clip-text text-transparent font-bold text-6xl">
        AI-Assisted Docs
      </h1>
      <form className="flex flex-col items-center justify-center gap-3 w-[35%]">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="topic" className=" self-center text-center">
            Ask questions and get instant, context-aware answers from the
            documentation, powered by AI.
          </label>
          <input
            className="px-4 py-3 rounded-md outline-none bg-secondary w-full text-center"
            type="text"
            placeholder="What's your query?"
          />
        </div>
        <button
          className={`bg-custom-gradient-2 text-white rounded-md px-4 py-3 w-full hover:opacity-95`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
