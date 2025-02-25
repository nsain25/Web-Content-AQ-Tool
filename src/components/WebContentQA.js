import React, { useState } from "react";
import { Button, Input, Card, CardContent } from "@/components/ui";
import axios from "axios";

export default function WebContentQA() {
  const [urls, setUrls] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("");
    try {
      const response = await axios.post("http://localhost:8000/query", {
        urls: urls.split(","),
        question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer("Error fetching answer. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">Web Content Q&A Tool</h1>
      <Input
        placeholder="Enter URLs (comma-separated)"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <Input
        placeholder="Ask a question about the content"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Get Answer"}
      </Button>
      {answer && (
        <Card className="w-full p-4 mt-4">
          <CardContent>
            <p className="font-semibold">Answer:</p>
            <p>{answer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
