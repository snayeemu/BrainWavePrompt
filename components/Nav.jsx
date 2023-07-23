"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="BrainWavePrompt"
          width={30}
          height={40}
          className="object-contain"
        />
      </Link>

      <p className="logo_text">BrainWavePrompt</p>
      {/* 01:03 */}
    </nav>
  );
};

export default Nav;
