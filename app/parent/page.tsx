"use client"
import { useState } from "react"

const children = [
  {
    name: "Aarav",
    grade: "Grade 6",
    avatar: "🧒",
    learningStyle: "Visual Learner",
    streak: 7,
    lessonsCompleted: 12,
    strengths: ["Quick at understanding diagrams", "Strong memory for visual patterns", "Great at summarizing topics"],
    suggestion: "Aarav engages best with visual content. Consider asking his teacher for diagram-based notes.",
    flag: false,
  },
  {
    name: "Priya",
    grade: "Grade 4",
    avatar: "👧",
    learningStyle: "ADHD Friendly Mode",
    streak: 3,
    lessonsCompleted: 6,
    strengths: ["Very creative thinker", "Excellent at short focused tasks", "High energy and enthusiasm"],
    suggestion: "Priya works best in short sessions. We noticed she may benefit from a conversation with her school counselor about focus strategies.",
    flag: true,
  },
]

export default function Parent() {
  const [selected, setSelected] = useState(children[0])

  return (
    <main className="min-h-screen bg-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="bg-green-100 text-green-700 text-xs font-medium px-4 py-1 rounded-full">For Parents</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">Parent Dashboard</h1>
          <p className="text-gray-400 text-sm">Track your child's learning journey and celebrate their strengths</p>
        </div>

        {/* Child Selector */}
        <div className="flex gap-3 mb-8">
          {children.map((child) => (
            <button
              key={child.name}
              onClick={() => setSelected(child)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition ${
                selected.name === child.name
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400"
              }`}
            >
              <span>{child.avatar}</span>
              <span>{child.name}</span>
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">{selected.streak}</p>
            <p className="text-xs text-gray-400 mt-1">Day Streak 🔥</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">{selected.lessonsCompleted}</p>
            <p className="text-xs text-gray-400 mt-1">Lessons Completed ✅</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">{selected.learningStyle.split(" ")[0]}</p>
            <p className="text-xs text-gray-400 mt-1">Learning Style 🧠</p>
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">💪 {selected.name}'s Strengths</h2>
          <div className="flex flex-col gap-3">
            {selected.strengths.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestion */}
        <div className={`rounded-2xl p-6 ${selected.flag ? "bg-amber-50 border border-amber-200" : "bg-green-50 border border-green-200"}`}>
          <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: selected.flag ? "#92400e" : "#065f46" }}>
            {selected.flag ? "💡 A gentle suggestion for you" : "✅ All looking great!"}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: selected.flag ? "#78350f" : "#064e3b" }}>
            {selected.suggestion}
          </p>
        </div>

      </div>
    </main>
  )
}