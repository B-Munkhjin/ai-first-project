"use client";

import { geminiImageAnalysis } from "@/lib/imageAnalysisAI";
import { RotateCw, Sparkles, FileText } from "lucide-react";

import { ChangeEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
interface IngredientResponse {
  ingredient: string[];
}
export default function ImageCreator() {
  const [file, setFile] = useState<File | null>(null);
  const [res, setRes] = useState("");

  const getImage = async () => {
    if (!file) return;

    const img = await geminiImageAnalysis(file);
    console.log(img);

    if (img) {
      setRes(img);
    }
  };

  const clear = () => {
    setFile(null);
    setRes("");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="my-8 flex flex-col gap-4">
      <div className="flex w-145 justify-between gap-4">
        <div className="flex gap-2">
          <Sparkles />
          <h1 className="text-xl font-semibold">Image analysis</h1>
        </div>
        <button
          className="py-2 px-3 rounded-md border border-[#E4E4E7]"
          onClick={clear}
        >
          <RotateCw className="w-5" />
        </button>
      </div>
      <p className="text-[#71717A] text-sm w-145">
        Upload a food photo, and AI will detect the ingredients.
      </p>
      <div className="w-145">
        {(file && (
          <img src={URL.createObjectURL(file)} className="w-100" />
        )) || (
          <div className="flex gap-2 h-10 py-2 px-3 bg-[#FFFFFF] border border-[#E4E4E7] rounded-md w-full">
            <input
              placeholder=""
              type="file"
              onChange={handleFileChange}
              className=" w-145"
            />
            {/* <h1 className="text-sm text-[#09090B] font-medium">Choose File</h1>
            <h2 className="text-sm text-[#71717A]">JPG , PNG</h2> */}
          </div>
        )}
      </div>
      <div className="flex justify-end relative left-45">
        <button
          onClick={getImage}
          className="px-4 py-2 bg-[#18181B] rounded-md text-white "
        >
          Generate
        </button>
      </div>
      <div className="flex gap-2">
        <FileText className="size-6" />
        <h1 className="text-xl font-semibold">Here is the summary</h1>
      </div>
      <div className="w-fit h-fit">
        {(res && (
          <div className="w-145 h-fit border border-#E4E4E7 rounded-lg p-4">
            <ReactMarkdown>{res}</ReactMarkdown>
          </div>
        )) || (
          <p className="text-[#71717A] text-sm w-145">
            First, enter your image to recognize an ingredients.
          </p>
        )}
      </div>
    </div>
  );
}

// export default Home();
