"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [isSlide, setIsSlide] = useState(false);

  return (
    <header className="fixed top-0 w-full z-10 border-b-[1px]  bg-white border-primary">
      {/* 검은색 배경 */}
      {isSlide && (
        <div
          className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-10 "
          onClick={() => setIsSlide((prev) => !prev)}
        ></div>
      )}

      <div
        className="relative w-full h-[50px] flex justify-between 
      items-center p-[20px]  md:h-[80px] max-w-[1280px] mx-auto"
      >
        <div className="flex justify-center items-center gap-[10px] text-[18px] md:text-[26px]">
          💸
          <div className="relative w-[150px] h-[28px] md:w-[180px] md:h-[38px]">
            <Image src="/asset/images/NGSR_logo.png" alt="logo" fill />
          </div>
          💸
        </div>
        <button
          className="absoluteright-10  text-white"
          onClick={() => setIsSlide((prev) => !prev)}
        >
          <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px]">
            <Image src="/asset/images/hamburger-icon.svg" alt="logo" fill />
          </div>
        </button>
      </div>

      <div
        className={`absolute top-[0px] w-[200px] h-[100vh] flex-col 
        items-center bg-secondary ease-in-out md:flex  z-20 duration-200
        ${isSlide ? "right-[0px]" : "right-[-300px]"} `}
      >
        <div className="w-full h-[50px] md:h-[80px] flex  justify-end pr-4 text-[24px] text-white md:text-[30px]">
          {" "}
          <button className="c" onClick={() => setIsSlide((prev) => !prev)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <ul className="w-full">
          <li className="w-full p-[12px] pr-[25px] text-white text-right text-[20px] cursor-pointer hover:bg-white hover:text-black">
            <Link href="/">사다리 게임</Link>
          </li>
          <li className="w-full p-[12px] pr-[25px] text-white text-right text-[20px] cursor-pointer hover:bg-white hover:text-black">
            <Link href="/">룰렛 돌리기</Link>
          </li>
          <li className="w-full p-[12px] pr-[25px] text-white text-right text-[20px] cursor-pointer hover:bg-white hover:text-black">
            <Link href="/">풍선 터뜨리기</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
