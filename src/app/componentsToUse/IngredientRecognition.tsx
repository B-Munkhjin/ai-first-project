"use client";

import { geminiRecognition } from "@/lib/ingredientRecognitionAI";
import { RotateCw, Sparkles, Image } from "lucide-react";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function IngredientRecognition() {
  const [prompt, setPrompt] = useState("");
  const [text, setText] = useState("");

  const getImage = async () => {
    const res = await geminiRecognition(prompt);

    if (res) {
      setText(res);
    }
  };

  const clear = () => {
    setPrompt("");
    setText("");
  };

  return (
    <div className="my-8 flex flex-col gap-4">
      <div className="flex w-145 justify-between gap-4">
        <div className="flex gap-2">
          <Sparkles />
          <h1 className="text-xl font-semibold">Ingredient recognition</h1>
        </div>
        <button
          className="py-2 px-3 rounded-md border border-[#E4E4E7]"
          onClick={clear}
        >
          <RotateCw className="w-5" />
        </button>
      </div>
      <p className="text-[#71717A] text-sm w-145">
        Describe the food, and AI will detect the ingredients.
      </p>
      <input
        value={prompt}
        className=" w-145 bg-[#FFFFFF] border border-[#E4E4E7] px-5 py-4 rounded-md overflow-x-hidden overflow-y-auto resize-none wrap-break-word whitespace-pre-wrap"
        placeholder="Орц тодорхойлох"
        onChange={(event) => {
          setPrompt(event.target.value);
        }}
      />

      <div className="flex justify-end relative left-45">
        <button
          onClick={getImage}
          className="px-4 py-2 bg-[#18181B] rounded-md text-white "
        >
          Generate
        </button>
      </div>
      <div className="flex gap-2">
        <Image className="size-6" />
        <h1 className="text-xl font-semibold">Identified Ingredients</h1>
      </div>
      <div className="w-fit h-fit">
        {(text && (
          <div className="w-145 h-fit border border-#E4E4E7 rounded-lg p-4">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        )) || (
          <p className="text-[#71717A] text-sm w-145">
            First, enter your text to recognize an ingredients.
          </p>
        )}
      </div>
    </div>
  );
}

// export default Home();
