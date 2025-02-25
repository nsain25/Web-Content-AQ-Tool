import React, { useState } from "react";
import { Button, Input, Card, CardContent } from "./ui"; // Updated import
import axios from "axios";

export default function WebContentQA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const response = await axios.post("/api/ask", { question });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <Button onClick={handleAsk}>Ask</Button>
        {answer && <p>Answer: {answer}</p>}
      </CardContent>
    </Card>
  );
}
