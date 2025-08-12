import { GoogleGenAI } from '@google/genai';

async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const tools = [{ googleSearch: {} }];
  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    tools,
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let finalText = "";

  for await (const chunk of response) {
    if (chunk.candidates?.[0]?.content?.parts?.[0]?.text) {
      finalText += chunk.candidates[0].content.parts[0].text;
    }
  }

  return finalText;
}

export default runChat;