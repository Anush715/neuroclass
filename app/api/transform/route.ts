import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { content, mode } = await req.json()

    const prompts: Record<string, string> = {
      visual: `Transform this into a structured visual learning format with headers and bullet points:\n\n${content}`,
      auditory: `Transform this into a conversational podcast-style narration:\n\n${content}`,
      dyslexia: `Transform this into dyslexia-friendly format with very short sentences and simple words:\n\n${content}`,
      adhd: `Transform this into ADHD-friendly micro lessons of 2-3 sentences each:\n\n${content}`,
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompts[mode] }] }]
        }),
      }
    )

    const text = await response.text()
    console.log("Gemini raw response:", text)
    
    const data = JSON.parse(text)
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received"
    
    return NextResponse.json({ result })

  } catch (error: any) {
    console.log("Error:", error.message)
    return NextResponse.json({ result: "Error: " + error.message }, { status: 200 })
  }
}