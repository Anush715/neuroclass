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

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompts[mode],
          parameters: { max_new_tokens: 800, return_full_text: false }
        }),
      }
    )

    const data = await response.json()
    console.log("HF response:", JSON.stringify(data))

    const result = data?.[0]?.generated_text || "No response received"
    return NextResponse.json({ result })

  } catch (error: any) {
    console.log("Error:", error.message)
    return NextResponse.json({ result: "Error: " + error.message }, { status: 200 })
  }
}