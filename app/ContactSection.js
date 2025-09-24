"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const playIconRef = useRef(null);
  const formBoxRef = useRef(null);
  const formElementsRef = useRef([]);

  useGSAP(() => {
    // Animation for Play Icon
    gsap.from(playIconRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: playIconRef.current,
        start: "top 80%",
      },
    });

    // Animation for the form container
    gsap.from(formBoxRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formBoxRef.current,
        start: "top 85%",
      },
    });

    // Animate form elements one by one
    gsap.from(formElementsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formBoxRef.current,
        start: "top 70%",
      },
    });
  });

  return (
    <div className="mt-20 mb-40 contact h-[600px] relative">
      {/* Play Icon */}
      <Image
        ref={playIconRef}
        src="/play2.png"
        width={92}
        height={92}
        alt="play-icon"
        className="absolute top-[40%] left-[30%] cursor-pointer"
      />

      {/* Contact Form Box */}
      <div
        ref={formBoxRef}
        className="w-[510px] bg-white rounded-tl-[40px] rounded-br-[40px] absolute top-[20%] right-[10%] shadow-lg"
      >
        <div className="p-4">
          <h3
            ref={(el) => (formElementsRef.current[0] = el)}
            className="text-textColor text-[1.2rem] font-bold"
          >
            حدد موعدًا
          </h3>
          <p
            ref={(el) => (formElementsRef.current[1] = el)}
            className="text-body text-base font-light mt-3 max-w-[90%]"
          >
            لا تتردد في الاتصال بنا، نحن لا نرسل رسائل غير مرغوب فيها إلى بريدك
            الإلكتروني
          </p>

          <form>
            <input
              ref={(el) => (formElementsRef.current[2] = el)}
              type="text"
              placeholder="الاسم كامل"
              className="w-full p-3 bg-[#F0F9F4] border border-stroke rounded-sm mt-4 outline-none focus:border-main text-body"
            />
            <input
              ref={(el) => (formElementsRef.current[3] = el)}
              type="email"
              placeholder="البريد الالكتروني هنا"
              className="w-full p-3 bg-[#F0F9F4] border border-stroke rounded-sm mt-4 outline-none focus:border-main text-body"
            />
            <select
              ref={(el) => (formElementsRef.current[4] = el)}
              className="w-full p-3 bg-[#F0F9F4] border border-stroke rounded-sm mt-4 outline-none focus:border-main text-body"
            >
              <option className="text-body" value="" defaultValue>
                اختر خيارا
              </option>
              <option className="text-body" value="تطوير الويب">
                تطوير الويب
              </option>
              <option className="text-body" value="تصميم واجهة المستخدم">
                تصميم واجهة المستخدم وتجربة المستخدم
              </option>
              <option className="text-body" value="تصميم التطبيقات">
                تصميم التطبيقات
              </option>
              <option className="text-body" value="إدخال البيانات">
                إدخال البيانات
              </option>
              <option className="text-body" value="الأمن">
                الأمن
              </option>
            </select>

            <textarea
              ref={(el) => (formElementsRef.current[5] = el)}
              placeholder="رسالتك"
              className="w-full h-32 p-3 bg-[#F0F9F4] border border-stroke rounded-sm mt-4 outline-none focus:border-main text-body"
            />
          </form>
        </div>

        {/* Submit Button */}
        <div className="mt-4 bg-main w-full p-4 rounded-br-[40px]">
          <button
            type="submit"
            className="bg-white z-50 text-textColor text-base font-medium px-10 py-3 rounded-tl-[40px] rounded-br-[40px] transition-all duration-300 hover:bg-gray-100"
          >
            ارسال الرسالة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
