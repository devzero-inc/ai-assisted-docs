"use client";

import { useState } from "react";
import Image from "next/image";
import generateResponse from "@/http/api";
import Response from "@/components/Response";

const Home = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await generateResponse(prompt);
      setLoading(false);
      setResponse(response);
      setIsModalOpen(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-primary h-screen">
      <div className="flex items-center gap-2">
        <Image src={`/icons/image.png`} alt="Logo" width={80} height={80} />
        <h1 className="font-bold text-4xl">
          Dev<span className="font-light">Zero</span>
        </h1>
      </div>
      <h1 className="bg-custom-gradient bg-clip-text text-transparent font-bold text-6xl">
        AI-Assisted Docs
      </h1>
      <form className="flex flex-col items-center justify-center gap-3 w-[35%]" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="topic" className="self-center text-center">
            Ask questions and get instant, context-aware answers from the
            documentation, powered by AI.
          </label>
          <input
            className="px-4 py-3 rounded-md outline-none bg-secondary w-full text-center"
            type="text"
            placeholder="What's your query?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <button
          className={`bg-custom-gradient-2 text-white rounded-md px-4 py-3 w-full hover:opacity-95 ${loading ? "cursor-not-allowed opacity-100" : "cursor-pointer"}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Generating response" : "Submit"}
        </button>
      </form>
      {isModalOpen && <Response res={response} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;
