import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Quiz from "@/components/quiz/Quiz";
import React from "react";

const page = () => {
  return (
    <>
      <div className="sticky top-0 px-6 py-6 bg-white drop-shadow z-10">
        <Navbar />
      </div>
      <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
        <Quiz />
      </div>
      <div className="bg-white drop-shadow z-10 px-6 py-6">
        <Footer />
      </div>
    </>
  );
};

export default page;
