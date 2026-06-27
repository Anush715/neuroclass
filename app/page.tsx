import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-green-700">🧠 NeuroClass</h1>
       <div className="flex gap-6 text-gray-500 text-sm font-medium">
  <Link href="/" className="hover:text-green-700">Home</Link>
  <Link href="/quiz" className="hover:text-green-700">Take Quiz</Link>
  <Link href="/learn" className="hover:text-green-700">Start Learning</Link>
  <Link href="/progress" className="hover:text-green-700">My Progress</Link>
  <Link href="/teacher" className="hover:text-green-700">For Teachers</Link>
  <Link href="/parent" className="hover:text-green-700">For Parents</Link>
</div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <span className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
          AI-Powered Learning Platform
        </span>
        <h2 className="text-5xl font-bold text-gray-900 max-w-3xl leading-tight mb-6">
          Not every brain learns the same way.{" "}
          <span className="text-green-700">This platform adapts to yours.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mb-10">
          NeuroClass transforms any study material into your perfect learning format — whether you have dyslexia, ADHD, or simply learn better through visuals or audio.
        </p>
        <div className="flex gap-4">
          <Link href="/learn" className="bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition">
  Start Learning
</Link>
          <Link href="/teacher" className="border border-gray-200 text-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
  For Teachers
</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-16 bg-gray-50">
        {[
          { icon: "📖", title: "Dyslexia Mode", desc: "Custom fonts, color overlays, chunked text and audio narration." },
          { icon: "⚡", title: "ADHD Mode", desc: "Micro lessons, focus timers and gamified progress streaks." },
          { icon: "🎨", title: "Visual Mode", desc: "Auto generates diagrams, flowcharts and mind maps from any content." },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

    </main>
   
   
      )
    }
