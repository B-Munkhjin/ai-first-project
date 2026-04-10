import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];

      resolve(base64);
    };

    reader.onerror = (error) => reject(error);
  });

export async function geminiImageAnalysis(imgFile: File) {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const base64ImageData = await toBase64(imgFile);

  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64ImageData as string,
        },
      },
      {
        text: "Role: Master Chef, Goal: When user upload image and that image include meals, you should recognize then and return what ingredients included. make it short and understandable.",
      },
    ],
  });

  return result.text;
}
