"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import { Newspaper, Sparkle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Question {
  id: string;
  question: string;
  answers: string[];
  correct: string;
}

interface QuizResponse {
  id: string;
  title: string;
  content: string;
  summary: string;
  questions: Question[];
  createdAt: string;
}

const Home = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Please fill in both title and content");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `API error: ${response.status}`);
      }

      const data: QuizResponse = await response.json();

      setTitle("");
      setContent("");

      router.push(`/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create quiz");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-full">
      <Card className="w-214 flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="flex gap-2 font-semibold text-[24px] items-center">
            {" "}
            <Sparkles /> Article Quiz Generator
          </CardTitle>
          <CardDescription>
            Paste your article below to generate a summarize and quiz question.
            Your articles will saved in the sidebar for future reference.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 items-center font-semibold text-[#71717A] text-[14px]">
              {" "}
              <Newspaper /> Article Title
            </p>
            <Input
              placeholder="Enter a title for your article..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            ></Input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 items-center font-semibold text-[#71717A] text-[14px]">
              {" "}
              <Newspaper /> Article Content
            </p>
            <Input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
              className="h-30 pt-3"
              placeholder="Paste your article content here..."
            ></Input>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            variant={"default"}
            onClick={handleGenerateSummary}
            disabled={loading}
          >
            {loading ? "Creating Quiz..." : "Generate Summary"}
          </Button>
          {error && (
            <div className="p-4 bg-red-50 border border-red-300 rounded-md">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
