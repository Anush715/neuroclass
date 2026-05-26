"use client"
import { useState } from "react"

export default function Learn() {
  const [content, setContent] = useState("")
  const [mode, setMode] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const modes = [
    { id: "visual", emoji: "🎨", label: "Visual Learner", desc: "Diagrams and mind maps" },
    { id: "auditory", emoji: "🎧", label: "Auditory Learner", desc: "Podcast style narration" },
    { id: "dyslexia", emoji: "📖", label: "Dyslexia Friendly", desc: "Custom fonts and overlays" },
    { id: "adhd", emoji: "⚡", label: "ADHD Friendly", desc: "Micro lessons and timers" },
  ]

  async function handleTransform() {
    if (!content || !mode) return
    setLoading(true)
    setResult("")

    const res = await fetch("/api/transform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, mode }),
    })

    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-3">🧠 Start Learning</h1>
        <p className="text-gray-400 text-sm">Paste your study material below and pick your learning mode</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        {/* Step 1 - Pick mode */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Step 1 — Choose your learning mode</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border transition ${
                  mode === m.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 hover:border-green-300 hover:bg-green-50"
                }`}
              >
                <span className="text-3xl mb-2">{m.emoji}</span>
                <span className="text-sm font-semibold text-gray-700">{m.label}</span>
                <span className="text-xs text-gray-400 mt-1">{m.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 - Paste content */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Step 2 — Paste your study material</p>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste any text, notes, chapter or topic here..."
            className="w-full h-48 border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:border-green-400"
          />
          <p className="text-xs text-gray-400 mt-2">{content.length} characters</p>
        </div>

        {/* Transform Button */}
        <button
          onClick={handleTransform}
          disabled={!content || !mode || loading}
          className="w-full bg-green-700 text-white py-4 rounded-full font-semibold text-lg hover:bg-green-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "✨ Transforming..." : "✨ Transform My Content"}
        </button>

        {/* Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-4">✅ Your Transformed Content</p>
            <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">{result}</p>
          </div>
        )}

      </div>
    </main>
  )
}