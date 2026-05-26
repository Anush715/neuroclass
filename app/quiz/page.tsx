"use client"
import Link from "next/link"
import { useState } from "react"

const questions = [
  {
    id: 1,
    question: "When you try to remember something, you usually...",
    options: [
      { label: "Picture it in your mind", type: "visual" },
      { label: "Repeat it out loud", type: "auditory" },
      { label: "Write it down", type: "dyslexia" },
      { label: "Break it into small steps", type: "adhd" },
    ],
  },
  {
    id: 2,
    question: "When studying, you prefer...",
    options: [
      { label: "Diagrams and charts", type: "visual" },
      { label: "Listening to explanations", type: "auditory" },
      { label: "Reading at your own pace", type: "dyslexia" },
      { label: "Short focused sessions", type: "adhd" },
    ],
  },
  {
    id: 3,
    question: "When you get distracted, it is usually because...",
    options: [
      { label: "Too much text on the page", type: "dyslexia" },
      { label: "The topic feels too long", type: "adhd" },
      { label: "Not enough visuals", type: "visual" },
      { label: "It is too quiet", type: "auditory" },
    ],
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState({ visual: 0, auditory: 0, dyslexia: 0, adhd: 0 })
  const [done, setDone] = useState(false)
  const [result, setResult] = useState("")

  function handleAnswer(type: string) {
    const updated = { ...scores, [type]: scores[type as keyof typeof scores] + 1 }
    setScores(updated)

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      const top = Object.entries(updated).sort((a, b) => b[1] - a[1])[0][0]
      setResult(top)
      setDone(true)
    }
  }

  const resultMap: Record<string, { label: string; desc: string; emoji: string }> = {
    visual: { emoji: "🎨", label: "Visual Learner", desc: "You learn best through diagrams, flowcharts and mind maps." },
    auditory: { emoji: "🎧", label: "Auditory Learner", desc: "You learn best by listening to explanations and narration." },
    dyslexia: { emoji: "📖", label: "Dyslexia-Friendly Mode", desc: "You learn best with custom fonts, color overlays and chunked text." },
    adhd: { emoji: "⚡", label: "ADHD-Friendly Mode", desc: "You learn best with short focused sessions and gamified progress." },
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-2">🧠 Learning Style Quiz</h1>
      <p className="text-gray-400 text-sm mb-10">3 quick questions — no right or wrong answers</p>

      {!done ? (
        <div className="w-full max-w-xl bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <p className="text-xs text-gray-400 mb-3">Question {current + 1} of {questions.length}</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">{questions[current].question}</h2>
          <div className="flex flex-col gap-3">
            {questions[current].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.type)}
                className="text-left px-5 py-4 rounded-xl border border-gray-200 text-gray-700 hover:border-green-500 hover:bg-green-50 transition text-sm font-medium"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{resultMap[result].emoji}</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">You are a {resultMap[result].label}!</h2>
          <p className="text-gray-500 text-sm mb-6">{resultMap[result].desc}</p>
          <Link href="/learn" className="bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition">
  Start Learning Your Way →
</Link>
        </div>
      )}
    </main>
  )
}