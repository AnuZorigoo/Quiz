import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { BookOpen, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Quiz {
  id: string;
  userId: string;
  title: string;
  content: string;
  summary: string;
  questions: unknown[];
  createdAt: string;
}

const QuizPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <Card className="flex flex-col gap-3">
        <p className="flex gap-2 items-center font-semibold text-[24px]">
          <Sparkles /> Article Quiz Generator
        </p>
        <p className="font-semibold text-[14px]">
          {" "}
          <BookOpen /> Summarized content
        </p>
        <h1>{quiz.title}</h1>
        <p>{quiz.summary}</p>
        <CardFooter className="flex justify-between">
          <Button variant={"secondary"}>See Content</Button>
          <Button>Take Quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
