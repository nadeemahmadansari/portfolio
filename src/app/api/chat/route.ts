import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: `You are Nadeem's AI Assistant. Your goal is to help visitors learn more about Nadeem, his skills, and his work. 
    Nadeem is a Senior Full Stack Developer with 4+ years of experience. 
    He specializes in React, Next.js, Node.js, and Google Apps Script. 
    He has worked on products with 6M+ users.
    Be professional, helpful, and concise. If you don't know something, ask the visitor to use the contact form.`,
    messages,
  });

  return result.toTextStreamResponse();
}
