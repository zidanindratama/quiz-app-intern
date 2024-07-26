import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <div>
        <Image
          src={"/not-found.png"}
          alt="not-found"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center flex flex-col gap-2 mt-6 mb-4">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-lg font-light">
          Sorry, we couldn&apos;t find that page.
        </p>
      </div>
      <Button asChild>
        <Link href={"/"}>Back to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
