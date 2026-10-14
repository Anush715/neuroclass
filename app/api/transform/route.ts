import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { content, mode } = await req.json()

    const prompts: Record<string, string> = {
      visual: `Transform this into a structured visual learning format with clear headers and bullet points:\n\n${content}`,
      auditory: `Transform this into a conversational podcast-style narration as if a friendly teacher is explaining:\n\n${content}`,
      dyslexia: `Transform this into dyslexia-friendly format with very short sentences, simple words and spacing:\n\n${content}`,
      adhd: `Transform this into ADHD-friendly micro lessons of 2-3 sentences each with a summary after each:\n\n${content}`,
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompts[mode] }],
        max_tokens: 1000,
      }),
    })

    const data = await response.json()
    console.log("Groq response:", JSON.stringify(data))

    const result = data?.choices?.[0]?.message?.content || "No response received"
    return NextResponse.json({ result })

  } catch (error: any) {
    console.log("Error:", error.message)
    return NextResponse.json({ result: "Error: " + error.message }, { status: 200 })
  }
}