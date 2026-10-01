# 🧠 NeuroClass — AI-Powered Adaptive Learning Platform

> "Not every brain learns the same way. This platform adapts to yours."

## 🌐 Live Demo
**[neuroclass-two.vercel.app](https://neuroclass-two.vercel.app)**

---

## 📌 Problem Statement
1 in 5 students worldwide has a learning difference — dyslexia, ADHD, dyscalculia, or is on the autism spectrum. Yet 100% of schools teach everyone identically. NeuroClass transforms any study material into a personalized format based on how each student's brain actually learns.

---

## ✨ Features

### 👨‍🎓 For Students
- Learning style detection quiz
- AI-powered content transformation into their ideal format
- Dyslexia mode — custom fonts, chunked text, audio narration
- ADHD mode — micro lessons, focus timers, gamified streaks
- Visual mode — auto-generated diagrams and mind maps
- Auditory mode — podcast-style narration

### 👩‍🏫 For Teachers
- Upload any lesson → get 5 versions for different learners
- Track which students struggle with which concepts

### 👨‍👩‍👧 For Parents
- Weekly learning style reports
- Responsible AI concern nudges (non-diagnostic language only)
- Students never see concern flags — only positive feedback

### 📊 Progress Tracker
- Daily streaks and activity tracking
- Completed vs pending lessons
- Subject-wise breakdown

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Next.js 15 | Frontend + API routes |
| React.js | UI components |
| Tailwind CSS | Styling |
| OpenAI GPT-4 | Content transformation |
| Node.js | Backend runtime |
| Vercel | Deployment |
| GitHub | Version control |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- OpenAI API key (for AI transform feature)

### Installation

```bash
# Clone the repository
git clone https://github.com/Anush715/neuroclass.git

# Navigate into the project
cd neuroclass

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OpenAI API key in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables


> ⚠️ The AI content transformation feature requires a valid OpenAI API key with credits. All other features (quiz, dashboards, progress tracker) work without it.

---

## 🏗️ Project 
app/
├── page.tsx # Landing page
├── quiz/ # Learning style detection quiz
├── learn/ # AI content transformer
├── progress/ # Student progress tracker
├── teacher/ # Teacher dashboard
├── parent/ # Parent dashboard
└── api/
└── transform/ # OpenAI API route


## 🎯 Responsible AI Design

A core design principle of NeuroClass is that **students never see concern flags or diagnostic language**. Behavioral patterns are only surfaced to parents and teachers with careful, non-diagnostic wording — because we believe AI in education must empower, never label.

---

## 👩‍💻 Developer

**Anushka Bansal**
- GitHub: [github.com/Anush715](https://github.com/Anush715)
- LinkedIn: [linkedin.com/in/anushka-bansal-a13b433a5](https://linkedin.com/in/anushka-bansal-a13b433a5)
- Live: [neuroclass-two.vercel.app](https://neuroclass-two.vercel.app)
