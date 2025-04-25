import React, { useState } from "react";

function MentoraChatbot() {
  const [grade, setGrade] = useState(0);
  const [subject, setSubject] = useState("Math");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const response = await fetch("https://mentora-backend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grade, subject, question })
    });
    const data = await response.json();
    setAnswer(data.answer || "No answer returned.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mentora K–12 AI Tutor</h1>
      <input type="number" value={grade} onChange={e => setGrade(e.target.value)} placeholder="Grade" />
      <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
      <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask a question" />
      <button onClick={askQuestion}>Ask</button>
      <p><strong>Answer:</strong> {answer}</p>
    </div>
  );
}

export default MentoraChatbot;