import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { content, mode } = await req.json()

  const prompts: Record<string, string> = {
    visual: `Transform the following study material into a structured visual learning format. Break it into clear sections with headers, bullet points, and suggest where diagrams or flowcharts would help. Make it easy to scan visually.\n\n${content}`,
    auditory: `Transform the following study material into a podcast-style narration script. Write it in a conversational tone as if a friendly teacher is explaining it out loud. Use natural spoken language.\n\n${content}`,
    dyslexia: `Transform the following study material into dyslexia-friendly format. Use very short sentences. Break into tiny paragraphs. Use simple words. Add lots of white space by using line breaks. Avoid walls of text.\n\n${content}`,
    adhd: `Transform the following study material into ADHD-friendly micro lessons. Break it into very short sections of 2-3 sentences max. Add a quick summary after each section. Use encouraging language and keep energy high.\n\n${content}`,
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompts[mode],
        },
      ],
      max_tokens: 1000,
    }),
  })

  const data = await response.json()
  const result = data.choices[0].message.content

  return NextResponse.json({ result })
}