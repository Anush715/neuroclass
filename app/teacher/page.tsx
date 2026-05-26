"use client"
import { useState } from "react"

export default function Teacher() {
  const [lesson, setLesson] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const formats = [
    { emoji: "🎨", label: "Visual Format", desc: "Diagrams, flowcharts and mind maps" },
    { emoji: "🎧", label: "Auditory Format", desc: "Narration script for listening" },
    { emoji: "📖", label: "Dyslexia Friendly", desc: "Chunked text with simple language" },
    { emoji: "⚡", label: "ADHD Friendly", desc: "Micro lessons with focus timers" },
    { emoji: "📝", label: "Standard Format", desc: "Clean structured notes" },
  ]

  return (
    <main className="min-h-screen bg-white px-6 py-16">

      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="bg-green-100 text-green-700 text-xs font-medium px-4 py-1 rounded-full">For Teachers</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-3">Teacher Dashboard</h1>
        <p className="text-gray-400 text-sm">Upload any lesson — get 5 versions for every type of learner in your class</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        {/* Lesson Input */}
        {!submitted ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Paste your lesson plan</p>
            <textarea
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              placeholder="Paste your lesson content here — any subject, any grade..."
              className="w-full h-56 border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:border-green-400"
            />
            <button
              onClick={() => setSubmitted(true)}
              disabled={!lesson}
              className="w-full bg-green-700 text-white py-4 rounded-full font-semibold text-lg hover:bg-green-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Generate 5 Learning Formats →
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">✅ 5 formats ready for your class</p>
              <button
                onClick={() => { setSubmitted(false); setLesson("") }}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
              >
                Start over
              </button>
            </div>
            {formats.map((f) => (
              <div key={f.label} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between hover:border-green-300 transition">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{f.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{f.label}</p>
                    <p className="text-xs text-gray-400">{f.desc}</p>
                  </div>
                </div>
                <button className="text-xs bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full hover:bg-green-100 transition font-medium">
                  Generate ✨
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}