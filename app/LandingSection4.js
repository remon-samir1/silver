import { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingSection4 = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(sectionRef.current, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none none",
              markers: false
            }
          }
        );

        gsap.fromTo(imageRef.current, 
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(sectionRef.current, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      gsap.fromTo(contentRef.current, 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(item, 
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      gsap.fromTo(buttonRef.current, 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => ctx.revert();
  });

  const addToItemsRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <div className="bg-main relative">
        <Image src="/vector1.png" className="absolute top-[10%] right-[4%]" width={52} height={71} alt="About our company" />
        <Image src="/vector2.png" className="absolute top-[50%] left-[5%]" width={18} height={71} alt="About our company" />
      
    <div ref={sectionRef} className="px-[5%] rounded-bl-[250px] py-20 flex items-start gap-20 bg-white">
      <div ref={imageRef} className="flex-1">
        <Image src="/section4.png" width={646} height={646} alt="About our company" />
      </div>
      <div ref={contentRef} className="flex-1">
        <h4 className="text-[1.1rem] font-medium text-main">عن شركتنا</h4>
        <h3 className="text-[1.9rem] text-textColor font-medium mt-4">
          ما الذي يجعلنا مختلفين؟
        </h3>
        <p className="text-body text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. إيجت إينيم سيد نونك أولامكوربر
          إلينتوم رونكوس نام ليكتوس سابين. فيرمنتوم بلاسيارات سابين فيفيرا
          بيبندوم إيرات سوسبينديس أورشي سينيكتوس.
        </p>
        {Array.from({length:5}).map((data, index) => (
          <div key={index} ref={addToItemsRefs} className="flex items-center gap-3 mt-4">
            <Icon
              className="text-main"
              icon="ri:checkbox-circle-fill"
              width="32"
              height="32"
            />
            <span className="text-[1.1rem] text-body font-light">لوريم إيبسوم دولور سيت أميت كونسيكتتور. </span>
          </div>
        ))}
        <button ref={buttonRef} className="mt-4 text-white text-base duration-300 justify-self-end bg-main font-medium text-center px-16 py-3 rounded-br-full hover:shadow hover:shadow-main rounded-tl-full">
          إعرف المزيد عنا
        </button>
      </div>
    </div>
    </div>
  );
};

export default LandingSection4;