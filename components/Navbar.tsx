"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import useUserData from "@/hooks/useUserData";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  id: string;
  url: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "1",
    url: "/",
    title: "Home",
  },
  {
    id: "2",
    url: "/#features",
    title: "Features",
  },
  {
    id: "3",
    url: "/#how-it-works",
    title: "How it works?",
  },
];

const Navbar = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { userData, loading } = useUserData();

  const handleLogout = (e: any) => {
    e.preventDefault();
    toast({
      title: "Successfully logged out!",
      description: "Thank you for using Quizzy",
    });
    localStorage.removeItem("userData");
    router.push("/");
  };

  return (
    <div className="flex flex-row justify-between items-center max-w-7xl mx-auto w-full text-[#050505]">
      <Link href={"/"} className="font-bold text-3xl">
        Quizzy
      </Link>
      <div className="hidden md:flex flex-row gap-12 justify-between items-center">
        {navLinks.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.id}
              className="font-semibold hover:text-muted-foreground"
            >
              {link.title}
            </Link>
          );
        })}
        {userData !== null ? (
          <>
            <Link
              href={"/take-quiz"}
              className="font-semibold hover:text-muted-foreground"
            >
              Quiz
            </Link>
            <Button className="font-bold" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button asChild>
            <Link href={"/login"} className="font-bold">
              Join Us
            </Link>
          </Button>
        )}
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">Open</SheetTrigger>
        <SheetContent className="py-32">
          <SheetHeader>
            <div className="flex flex-col gap-4 text-left">
              {navLinks.map((link) => {
                return (
                  <Link
                    href={link.url}
                    key={link.id}
                    className="font-semibold hover:text-muted-foreground"
                  >
                    {link.title}
                  </Link>
                );
              })}
              {userData !== null ? (
                <>
                  <Link
                    href={"/take-quiz"}
                    className="font-semibold hover:text-muted-foreground"
                  >
                    Quiz
                  </Link>
                  <Button className="font-bold" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button asChild>
                  <Link href={"/login"} className="font-bold">
                    Join Us
                  </Link>
                </Button>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
