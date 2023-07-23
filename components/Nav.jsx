"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";

const Nav = () => {
  const isUserLogged = true;

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
        <p className="logo_text">BrainWavePrompt</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {isUserLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"create-prompt"} className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            {/* 01:06 */}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
