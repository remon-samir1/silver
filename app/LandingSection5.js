import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingSection5 = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const categoryRef = useRef(null);

  const categories = [
    "تصميم التطبيقات",
    "تطوير الويب",
    "تصميم واجهة المستخدم وتجربة المستخدم",
    "المحتوى والرسومات",
    "خدمات تحسين محركات البحث",
    "التسويق الرقمي",
  ];

  useGSAP(() => {
    if (typeof window === "undefined") return;

    gsap.fromTo(".section-title", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(".category-btn", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: categoryRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  // Handle card hover animation
  const handleCardHover = (index, isHovering) => {
    const card = cardsRef.current[index];
    if (!card) return;

    if (isHovering) {
      gsap.to(card, {
        y: -7,
        rotation: 0,
        // scale: 1.03,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.09)",
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector(".project-button"), {
        x: -10,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector(".project-image"), {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector(".project-button"), {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Reset image effect
      gsap.to(card.querySelector(".project-image"), {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={sectionRef} className="px-[5%] py-20 overflow-hidden">
      <div className="section-title">
        <p className="text-main text-[1.1rem] font-medium">عن مشاريعنا</p>
        <h3 className="text-textColor text-[1.9rem] font-medium mt-3">
          المشاريع - النجاح في العمل
        </h3>
        <p className="text-body mt-3 text-[1.1rem] font-light">
          قائمتنا الشاملة من المشاريع تكمل عملك وترفعه إلى المستوى التالي.
        </p>
      </div>
      
      <div ref={categoryRef} className="mt-6 flex items-center gap-8 flex-wrap">
        {categories.map((data, index) => (
          <button
            key={index}
            className="category-btn text-base font-light text-textColor py-3 duration-200 border-b-2 border-white hover:border-main"
          >
            {data}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-4 mt-10 flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", flex: "1 1 30%" }}
            className="py-6 px-5 min-w-[250px] h-[485px] rounded-2xl overflow-hidden cursor-pointer relative bg-white"
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
          >
            <h3 className="text-[1.3rem] font-bold text-textColor">
              تطبيق شراء ملابس
            </h3>
            <p className="text-[1.1rem] font-light text-body mt-3">
              لوريم إيبسوم دولور سيت أميت كونسيكتتور. أليكام ليكتوس فيت كومودو
              ماجنا أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو.
            </p>
            <button className="project-button flex items-center gap-2 py-2 mt-4 transition-all duration-300">
              <span className="text-[1rem] font-medium text-main">
                رؤية المشروع
              </span>
              <Icon
                icon="material-symbols:arrow-back-rounded"
                className="text-main"
                width="24"
                height="24"
              />
            </button>
            <div className="overflow-hidden rounded-xl mt-4">
              <Image 
                src='/silver-project.png' 
                width={100} 
                height={235} 
                className="project-image w-full h-auto transition-transform duration-500"
                alt="Project image"
              />
            </div>
            
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection5;

