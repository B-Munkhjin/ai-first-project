import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function Function() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "why people exist?",
  });

  return response.text;
}
