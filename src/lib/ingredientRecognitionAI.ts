import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export async function geminiRecognition(text: string) {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const defaultPromt = `Detect the ingredients and list them understandable:${text}`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: defaultPromt,
  });

  return result.text;
}
