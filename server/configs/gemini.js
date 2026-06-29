import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemma-4-26b-a4b-it",
    contents: prompt,
  });
  return response.text
}

export default main;