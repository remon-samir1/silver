"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const ProjectsSection2 = () => {
  const categories = [
    "تصميم التطبيقات",
    "تطوير الويب",
    "تصميم واجهة المستخدم وتجربة المستخدم",
    "المحتوى والرسومات",
    "خدمات تحسين محركات البحث",
  ];

  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const categoryBarRef = useRef(null);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     categoryBarRef.current,
  //     { y: 50, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: categoryBarRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   projectRefs.current.forEach((project, index) => {
  //     if (project) {
  //       const direction = index % 2 === 0 ? 100 : -100;

  //       gsap.fromTo(
  //         project,
  //         {
  //           x: direction,
  //           opacity: 0,
  //           scale: 0.9,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           scale: 1,
  //           duration: 1,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: project,
  //             start: "top 80%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       );
  //     }
  //   });
  // });

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} className="pt-20 pb-40 px-[5%]">
      <div
        ref={categoryBarRef}
        className="mt-6 flex items-center w-full h-20 gap-4 border-b-2 border-[rgba(186, 186, 186, 0.15)] opacity-0"
      >
        {categories.map((data, index) => (
          <button
            key={index}
            className="category-btn h-20 text-base flex-1 font-light text-textColor py-3 duration-200 border-b-2 border-transparent hover:border-main"
          >
            {data}
          </button>
        ))}
      </div>

      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          ref={addToRefs}
          className={`h-[480px] overflow-hidden flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } items-start bg-[#F0F9F4] mt-12 rounded-tr-[50px] `}
        >
          <div className="p-10">
            <h3 className="text-textColor text-[1.9rem] font-bold">
              تطبيق شراء ملابس
            </h3>
            <p className="text-[1.1rem] font-light text-textColor mt-2">
              لوريم إيبسوم دولور سيت أميت كونسيكتتور. أليكام ليكتوس فيت كومودو
              ماجنا أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو ليكتوس فيت
              كومودو ماجنا أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو..
            </p>
            <h3 className="text-textColor text-[1.2rem] mt-4 font-medium">
              المدة
            </h3>
            <p className="text-[1.1rem] font-light text-textColor mt-2">
              اسبوع
            </p>
            <h3 className="text-textColor text-[1.2rem] mt-4 font-medium">
              الشركة
            </h3>
            <p className="text-[1.1rem] font-light text-body mt-4">
              إيبسوم دولور سيت أميت
            </p>
            <Link
              href="/projects/details"
              className="mt-6 w-max bg-main px-10 duration-300 hover:shadow-light py-3 rounded-tl-[40px] rounded-br-[40px] text-white flex items-center gap-3"
            >
              <span className="text-base font-light">رؤية المشروع</span>
              <Icon
                icon="mdi-light:arrow-left"
                width="24"
                height="24"
                style={{ color: "#fff" }}
              />
            </Link>
          </div>
          <Image
            src="/silver-project.png"
            width={100}
            height={100}
            className="w-[55%] h-full object-cover transition-transform duration-500"
            alt="Project image"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection2;
