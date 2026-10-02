import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { content, mode } = await req.json()

    const prompts: Record<string, string> = {
      visual: `Transform the following study material into a structured visual learning format with clear headers and bullet points:\n\n${content}`,
      auditory: `Transform the following study material into a conversational podcast-style narration as if a friendly teacher is explaining it:\n\n${content}`,
      dyslexia: `Transform the following study material into dyslexia-friendly format with very short sentences, simple words and lots of spacing:\n\n${content}`,
      adhd: `Transform the following study material into ADHD-friendly micro lessons of 2-3 sentences each with summaries:\n\n${content}`,
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompts[mode] }] }],
        }),
      }
    )

    const data = await response.json()
    const result = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received"
    return NextResponse.json({ result })

  } catch (error) {
    return NextResponse.json({ result: "Something went wrong. Please try again." }, { status: 200 })
  }
}