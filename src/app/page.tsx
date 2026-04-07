import { GoogleGenAI } from "@google/genai";
import { Function } from "./components/Function1";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default function Home() {
  return (
    <div>
      <Function />
    </div>
  );
}

// export default Home();
