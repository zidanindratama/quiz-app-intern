import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniPaperClip } from "react-icons/hi2";
import { navLinks } from "./Navbar";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-7xl mx-auto w-full text-[#050505]">
      <Link href={"/"} className="font-bold text-3xl">
        Quizzy
      </Link>
      <div className="flex flex-row gap-5 mt-6">
        <Link href={"https://zidanindratama.vercel.app/"}>
          <HiMiniPaperClip className="w-8 h-8 text-muted-foreground hover:text-[#050505]" />
        </Link>
        <Link href={"https://github.com/zidanindratama"}>
          <FaGithub className="w-8 h-8 text-muted-foreground hover:text-[#050505]" />
        </Link>
        <Link href={"https://www.linkedin.com/in/zidan-indratama"}>
          <FaLinkedin className="w-8 h-8 text-muted-foreground hover:text-[#050505]" />
        </Link>
      </div>
      <p className="text-lg font-semibold mt-6">&copy; 2024 Zidan Indratama</p>
    </div>
  );
};

export default Footer;
