import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { content, mode } = await req.json()

    const prompts: Record<string, string> = {
      visual: `Transform the following study material into a structured visual learning format with headers and bullet points:\n\n${content}`,
      auditory: `Transform the following study material into a conversational podcast-style narration:\n\n${content}`,
      dyslexia: `Transform the following study material into dyslexia-friendly format with very short sentences and simple words:\n\n${content}`,
      adhd: `Transform the following study material into ADHD-friendly micro lessons of 2-3 sentences each:\n\n${content}`,
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://neuroclass-two.vercel.app",
        "X-Title": "NeuroClass",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: prompts[mode] }],
      }),
    })

    const data = await response.json()
    
    if (data.error) {
      return NextResponse.json({ result: "API Error: " + data.error.message }, { status: 200 })
    }

    const result = data.choices?.[0]?.message?.content || "No response received"
    return NextResponse.json({ result })

  } catch (error) {
    return NextResponse.json({ result: "Something went wrong. Please try again." }, { status: 200 })
  }
}