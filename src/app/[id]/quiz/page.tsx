import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

interface Question {
  id: string;
  quizId: string;
  question: string;
  answers: string[];
  correct: string;
}

interface Quiz {
  id: string;
  userId: string;
  title: string;
  content: string;
  summary: string;
  questions: Question[];
  createdAt: string;
}
const TakeQuizPage = () => {
  const params = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizId = params.id as string;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quick Test</CardTitle>
        </CardHeader>
        <CardDescription>
          Take a quick test about your knowledge from your content{" "}
        </CardDescription>
      </Card>
    </div>
  );
};
