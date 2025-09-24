"use client";

import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);


  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`mt-6 border ${
        isOpen ? "bg-main rounded-t-md" : "bg-[#F0F9F4]"
      }  overflow-hidden`}
    >
      <button
        onClick={onClick}
        className={`w-full flex justify-between flex-row-reverse items-center gap-3 px-4 py-3 text-left font-medium transition-colors bg-background ${
          isOpen ? "text-white" : "text-textColor"
        }`}
      >
        {isOpen ? (
          <div className="flex justify-center items-center rounded-sm w-[32px] h-[24px]">
            <FiMinus className="text-white " />
          </div>
        ) : (
          <div className="flex justify-center items-center rounded-sm w-[32px] h-[24px]">
            <IoAddSharp className="text-textColor " />
          </div>
        )}
        {question}
      </button>

      <div
        ref={contentRef}
        className="px-8 text-white font-light text-sm leading-relaxed bg-background2"
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p className="py-4">{answer}</p>
      </div>
    </div>
  );
};

const ServicesDetailsSection2 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const sideTabsRef = useRef([]);
  const accordionRef = useRef(null);
  const featuresRef = useRef([]);
  const faqRef = useRef(null);
  const CallUsData = [
    {
      icon:"ic:sharp-phone",
      text:"اتصل بنا",
      disc:"+123 456 7890"
    },
    {
      icon:"clarity:email-solid",
      text:"البريد الالكتروني",
      disc:"info@example.com"
    },
    {
      icon:"mdi:location",
      text:"عنوان المكتب",
      disc:"125 برلين، ألمانيا"
    },
  ]
  const sideData = [
    { icon: "iconoir:design-nib", title: "تطوير الويب" },
    {
      icon: "material-symbols:developer-mode-tv-outline-rounded",
      title: "تصميم واجهة النستخدم وتجربة المستخدم",
    },
    { icon: "carbon:application-web", title: "ادخال البيانات" },
    { icon: "streamline-pixel:ui-design-website", title: "تصميم التطبيقات" },
    { icon: "carbon:development", title: "الامن" },
  ];

  const faqs = [
    {
      question: "ما هي الرؤية للمستقبل؟",
      answer:
        "لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.",
    },
    {
      question: "خل تقدم موارد مجانية ؟",
      answer:
        "لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.",
    },
    {
      question: "هل يمكنك المساعدة في العثور على مستثمرين؟",
      answer:
        "لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.",
    },
    {
      question: "هل يمكن المساعدة في العثور على مستثمرين؟",
      answer:
        "لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.",
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            // toggleActions:"play reverse play reverse"
          },
        }
      );
      sideTabsRef.current.forEach((tab, i) => {
        gsap.fromTo(
          tab,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tab,
              start: "top 90%",
              // toggleActions:"play reverse play reverse"
            },
          }
        );
      });

    

      gsap.fromTo(
        accordionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 85%",
          },
        }
      );

      featuresRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.15,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <div
      className="py-20 px-[5%] flex items-start flex-col-reverse md:flex-row gap-4"
      ref={sectionRef}
    >
      {/* Side Section */}
      <div className="w-full md:w-[395px]">
        <div className="w-full bg-[#F0F9F4] px-3 py-5">
          {sideData.map((data, index) => (
            <div
              key={index}
              ref={(el) => (sideTabsRef.current[index] = el)}
              className=" sideTab  bg-[#FAFAFA] hover:bg-main/30 duration-200 p-4 mt-4 flex flex-row-reverse justify-between items-center gap-4 opacity-0"
            >
              <Icon
                icon="solar:arrow-right-linear"
                width="24"
                height="24"
                className="text-background z-50 rotate-180"
              />
              <span className="font-light z-50 text-background text-[1rem]">
                {data.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#F0F9F4] px-3 py-10 mt-8">
      {
    CallUsData.map((data , index)=>(
          <div key={index} className="flex items-center gap-3 mt-6">
          <div className="w-[42px] h-[42px] border border-main rounded-full flex items-center justify-center">
            <Icon
              icon={data.icon}
              width="18"
              height="18"
              className="text-main"
            />
          </div>
          <div>

          <p className="text-sm font-light text-textColor">{data.text}</p>
          <p className="text-main font-medium">{data.disc}</p>
          </div>
        </div>
        ))
      }
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1">
        {/* Main Image */}
        <div
          ref={imageRef}
          className="w-full h-[28rem] overflow-hidden relative opacity-0"
        >
          <Image
            src="/servicesDetails.png"
            width="200"
            height="200"
            alt="ui "
            className="w-full h-full rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>

        <h3 className="mt-6 text-[1.5rem] font-semibold text-textColor">
          تطوير الويب
        </h3>

        <p className="mt-4 text-body text-[1.1rem] font-light">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <p className="mt-4 text-body text-[1.1rem] font-light ">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>

        {Array.from({ length: 5 }).map((data, index) => (
          <div key={index} className="flex items-center gap-3 mt-4">
            <Icon
              className="text-main"
              icon="ri:checkbox-circle-fill"
              width="32"
              height="32"
            />
            <span className="text-[1.1rem] text-body font-light">
              لوريم إيبسوم دولور سيت أميت كونسيكتتور لوريم إيبسوم دولور سيت أميت
              كونسيكتتور.{" "}
            </span>
          </div>
        ))}

        <div className="mt-4 flex gap-5 items-center">
          {Array.from({ length: 2 }).map((data, index) => (
            <Image
              src="/servicesDetails.png"
              height={365}
              width={100}
              className="flex-1 rounded-tl-[50px] rounded-br-[50px]"
            />
          ))}
        </div>
        <p className="mt-6 text-body text-[1.1rem] font-light ">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>

        <h3 className="mt-6 text-[1.5rem] font-semibold text-textColor">
          اسئلة متكررة
        </h3>

        {/* Accordion */}
        <div className="flex-1" ref={accordionRef}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsSection2;
