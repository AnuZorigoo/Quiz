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

const Home = async () => {
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
            <Input placeholder="Enter a title for your article..."></Input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 items-center font-semibold text-[#71717A] text-[14px]">
              {" "}
              <Newspaper /> Article Content
            </p>
            <Input
              className="h-30 pt-3"
              placeholder="Paste your article content here..."
            ></Input>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant={"default"}>Generate Summary</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
