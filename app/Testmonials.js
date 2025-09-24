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

const Testmonials = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const navButtonRef = useRef(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    // Section title animation
    gsap.fromTo(".testimonial-title", 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".testimonial-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(imageRef.current, 
      { x: -100, opacity: 0, rotation: -5 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(contentRef.current, 
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(navButtonRef.current, 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5,
        scrollTrigger: {
          trigger: navButtonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.utils.toArray(".testimonial-text").forEach((text, i) => {
      gsap.fromTo(text, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      if (ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  });

  return (
    <div ref={sectionRef} className="py-20 px-[5%] flex items-start gap-32 overflow-hidden">
      <h3 className="testimonial-title font-medium text-textColor text-[1.9rem]">
        ماذا يقول عملائنا عنا
      </h3>
      <div className="flex items-start gap-16 h-max">
        <div ref={imageRef}>
          <Image src="/testmonial.png" width={280} height={540} alt="Testimonial" />
        </div>
        <div ref={contentRef} className="pt-10 relative h-[540px]">
          <h4 className="testimonial-text text-textColor text-[1.3rem] font-medium">
            محمد صلاح
          </h4>
          <h6 className="testimonial-text text-body text-base font-light mt-3">
            مهندس التوجيهات العالمية
          </h6>
          <h4 className="testimonial-text text-textColor text-[1.3rem] font-light mt-3 max-w-[365px]">
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. أليكام ليكتوس فيت كومودو
            ماجنا أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو.
          </h4>
          <div ref={navButtonRef} className="w-[47px] h-[47px] flex justify-center items-center bg-main rounded-full absolute bottom-0 right-0 cursor-pointer hover:scale-110 transition-transform duration-300">
            <Icon
              icon="weui:arrow-outlined"
              width="22"
              height="22"
              className="text-white rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;