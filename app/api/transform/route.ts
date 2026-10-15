import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { content, mode } = await req.json()

  const modeMessages: Record<string, string> = {
    visual: `Here is your content broken down visually:\n\n📌 **Main Topic**\n${content}\n\n✅ Key Points:\n• Read the content carefully\n• Identify the main concepts\n• Create a mind map or diagram\n• Use colors to highlight important parts\n\n💡 Tip: Draw a flowchart to visualize the connections!`,
    auditory: `🎙️ Hey there! Let's talk about this topic together...\n\n"${content}"\n\nSo basically what this means is — imagine you're explaining this to a friend. Start by saying the main idea out loud. Then add details one by one. Remember, hearing yourself say it helps you remember it better!\n\n🎧 Pro tip: Record yourself explaining this and listen back!`,
    dyslexia: `📖 Let's make this easy to read.\n\n${content}\n\nKey idea:\nThis topic is important.\nRead it slowly.\nTake breaks often.\nUse a ruler to follow each line.\n\nYou are doing great. Keep going!`,
    adhd: `⚡ Quick Lesson — Let's Go!\n\n📍 Topic: ${content}\n\n🔹 Step 1: Read the first line only.\n✅ Done? Great!\n\n🔹 Step 2: Take a 30 second break.\n✅ Done? Amazing!\n\n🔹 Step 3: Read the next line.\n✅ You're crushing it!\n\n🏆 Summary: You just learned something new. Well done!`,
  }

  return NextResponse.json({ result: modeMessages[mode] })
}