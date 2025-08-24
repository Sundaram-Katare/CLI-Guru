import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { error } from "console";
import removeMarkdown from 'remove-markdown';

export async function POST(req: Request) {
  console.log("API route called");
  
  try {
    const { category, command } = await req.json();

    const validCategories = ["linux", "docker", "github"];
    if (!validCategories.includes(category)) {
      return NextResponse.json({ message: "Invalid category" }, { status: 400 });
    }

    if (!command || command.trim() === "") {
      return NextResponse.json({ message: "Command is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY not found in environment variables");
      return NextResponse.json({ message: error + "hrll" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Explain the ${category} command: ${command}.  
Format the answer with clear headings and short paragraphs.  Write headings with emojis, and go in next line, then write para and then again heading and so on. it can be read in about 60 seconds.  
Include:  

1. **Overview** – What this command does.  
2. **Syntax & Common Options** – Show the basic syntax and list the most used options.  
3. **Usage** – When and where this command is typically used.  
4. **Example** – Provide one simple, practical example.  

Keep the tone concise, structured, and beginner-friendly. Avoid unnecessary jargon.
`;

    const result = await model.generateContent(prompt);
    console.log("API response:", result);
    const response = await result.response;
    const generatedText = response.text();

    console.log("Generated response:", generatedText);

    return NextResponse.json({ message: generatedText });

  } catch (error) {
    console.error("Error in API route:", error);
    
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json({ message: "Invalid API key" }, { status: 401 });
      }
      if (error.message.includes("quota")) {
        return NextResponse.json({ message: "API quota exceeded" }, { status: 429 });
      }
    }

    return NextResponse.json({ message: "Error generating response" }, { status: 500 });
  }
}
