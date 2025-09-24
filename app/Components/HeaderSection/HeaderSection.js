import React, { useEffect, useRef } from "react";
import "./HeaderSection.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const HeaderSection = ({ title, link, current }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the image
    gsap.to(imageRef.current, {
      y: -20, // Translate Y animation
      duration: 2,
      ease: "power2.inOut",
      yoyo: true, // Makes the animation go back and forth
      repeat: -1 // Infinite repetition
    });
  }, []);

  return (
    <div className="h-[80vh] relative HeaderSection flex flex-col items-center justify-center">
      <Image
        ref={imageRef}
        src="/header-vector.png"
        width={136}
        height={140}
        className="absolute left-[5%] top-[30%]"
        alt="Header decoration"
      />
      <h3 className="text-[2.8rem] text-main font-bold">{title}</h3>
      <div className="flex items-center gap-3 mt-4">
        <Link href="/" className="text-white text-[0.9rem] font-medium">
          {link}
        </Link>
        <Icon
          icon="lsicon:arrow-up-outline"
          width="24"
          height="24"
          style={{ color: "#fff" }}
          className="-rotate-90"
        />
        <span className="text-main text-[0.9rem] font-medium">{current}</span>
      </div>
    </div>
  );
};

export default HeaderSection;