"use client"
import { useState } from "react"

const lessons = [
  { id: 1, title: "Photosynthesis", subject: "Biology", mode: "🎨 Visual", completed: true, date: "Today" },
  { id: 2, title: "World War 2 Summary", subject: "History", mode: "⚡ ADHD", completed: true, date: "Yesterday" },
  { id: 3, title: "Quadratic Equations", subject: "Maths", mode: "📖 Dyslexia", completed: true, date: "2 days ago" },
  { id: 4, title: "The Water Cycle", subject: "Geography", mode: "🎧 Auditory", completed: false, date: "Not started" },
  { id: 5, title: "Newton's Laws", subject: "Physics", mode: "🎨 Visual", completed: false, date: "Not started" },
]

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const activity = [true, true, false, true, true, true, false]

export default function Progress() {
  const [tab, setTab] = useState("all")

  const filtered = tab === "all" ? lessons : tab === "done" ? lessons.filter(l => l.completed) : lessons.filter(l => !l.completed)

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-2">📊 My Progress</h1>
          <p className="text-gray-400 text-sm">Keep going — every lesson brings you closer to your goals</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">7</p>
            <p className="text-xs text-gray-400 mt-1">Day Streak 🔥</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">3</p>
            <p className="text-xs text-gray-400 mt-1">Lessons Done ✅</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-700">2</p>
            <p className="text-xs text-gray-400 mt-1">Remaining 📚</p>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">This Week</h2>
          <div className="flex justify-between">
            {weekDays.map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium ${
                  activity[i] ? "bg-green-700 text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {activity[i] ? "✓" : ""}
                </div>
                <p className="text-xs text-gray-400">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons List */}
        <div>
          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            {["all", "done", "pending"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                  tab === t
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {t === "all" ? "All Lessons" : t === "done" ? "Completed" : "Pending"}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="flex flex-col gap-3">
            {filtered.map((lesson) => (
              <div key={lesson.id} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between hover:border-green-300 transition">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    lesson.completed ? "bg-green-100" : "bg-gray-100"
                  }`}>
                    {lesson.completed ? "✅" : "📚"}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{lesson.title}</p>
                    <p className="text-xs text-gray-400">{lesson.subject} · {lesson.mode}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{lesson.date}</p>
                  {!lesson.completed && (
                    <button className="text-xs text-green-700 font-medium mt-1 hover:underline">Start →</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}