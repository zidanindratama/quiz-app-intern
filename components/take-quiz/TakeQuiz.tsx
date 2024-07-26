"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUserData from "@/hooks/useUserData";

const TakeQuiz = () => {
  const router = useRouter();
  const { userData, loading } = useUserData();

  useEffect(() => {
    if (!loading && userData === null) {
      router.push("/login");
    }
  }, [loading, userData, router]);

  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">
      <div>
        <Image
          src={"/take-quiz.png"}
          alt="take-quiz"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center flex flex-col gap-2 mt-6 mb-4">
        <h1 className="text-3xl font-bold">Take your quiz</h1>
        <p className="text-lg font-light">Test your knowledge in Quizzy</p>
      </div>
      <Button asChild>
        <Link href={"/quiz"}>Quiz Now</Link>
      </Button>
    </div>
  );
};

export default TakeQuiz;
