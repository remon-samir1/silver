"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";
import LandingSection4 from "./LandingSection4";
import LandingSection5 from "./LandingSection5";
import Testmonials from "./Testmonials";
import ContactSection from "./ContactSection";
import Footer from "./Components/Footer/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const mainImageRef = useRef(null);
  const playButtonRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([lineRef.current, subtitleRef.current, titleRef.current, descriptionRef.current], {
        opacity: 0,
        // y: 50
      });
      
      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 30
      });

      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10
      });

      gsap.set(playButtonRef.current, {
        opacity: 0,
        scale: 0,
        rotation: 180
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      tl.to(lineRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        transformOrigin: "left center",
        ease: "power2.out"
      })

      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, "-=0.4")

      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.2")

      // Animate description
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      }, "-=0.3")

      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")

      .to(imageContainerRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8")

      .to(playButtonRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.6");

      gsap.to(mainImageRef.current, {
        // y: 10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // gsap.to(playButtonRef.current, {
      //   y: -15,
      //   duration: 2.5,
      //   ease: "sine.inOut",
      //   yoyo: true,
      //   repeat: -1,
      //   delay: 0.5
      // });

      const buttons = buttonsRef.current.querySelectorAll('.link');
      buttons.forEach(button => {
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
          
          const icon = button.querySelector('svg');
          if (icon) {
            gsap.to(icon, {
              x: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          
          const icon = button.querySelector('svg');
          if (icon) {
            gsap.to(icon, {
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function will handle removing these listeners
        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

      // Add play button pulse animation
      const handlePlayButtonEnter = () => {
        gsap.to(playButtonRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handlePlayButtonLeave = () => {
        gsap.to(playButtonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const playButton = playButtonRef.current;
      if (playButton) {
        playButton.addEventListener('mouseenter', handlePlayButtonEnter);
        playButton.addEventListener('mouseleave', handlePlayButtonLeave);
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.5
          });
        }
      });
      gsap.to(imageContainerRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  });

  return (
    <>
      <Navbar/>
      <div ref={containerRef} className="home flex items-center px-[8%] gap-20 pt-12">
        <div ref={textContentRef}>
          <p className="flex items-center gap-2">
            <span 
              ref={lineRef}
              className="h-[0.8px] w-8 bg-white/80 origin-left scale-x-0"
            ></span>
            <span 
              ref={subtitleRef}
              className="text-[1rem] opacity-0 text-white font-light"
            >
              نحن نقدم لوريم إيبسوم
            </span>
          </p>
          <h3 
            ref={titleRef}
            className="max-w-[495px] font-bold text-[2.8rem] opacity-0 text-white mt-4"
          >
            خدمات وحلول تكنولوجيا المعلومات
          </h3>
          <p 
            ref={descriptionRef}
            className="max-w-[495px] font-light opacity-0 text-[1.2rem] text-white/80 mt-4"
          >
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. بيبندوم إيبسوم أ مونتيس أورسي.
          </p>
          <div ref={buttonsRef} className="mt-4 opacity-0 flex items-center gap-4">
            <Link href='/contact' className="flex link items-center gap-2 py-2 px-8 bg-[#DEFFED] rounded-3xl transition-all duration-300">
              <span className="text-[1.1rem] font-medium text-textColor">اتصل بنا</span>
              <Icon icon="material-symbols:arrow-back-rounded" className="text-textColor" width="24" height="24" />
            </Link>
            <Link href='/pricing' className="flex link items-center gap-2 py-2 px-8 bg-main rounded-3xl transition-all duration-300">
              <span className="text-[1.1rem] font-medium text-white"> ابدأ الان</span>
              <Icon icon="material-symbols:arrow-back-rounded" className="text-white" width="24" height="24" />
            </Link>
          </div>
        </div>
        <div 
          ref={imageContainerRef}
          className="w-[30.5rem] opacity-0 h-[30.5rem] self-center relative mt-6"
        >
          <Image 
            ref={mainImageRef}
            width={100} 
            height={100} 
            unoptimized
            src='/silver-bg-2.png' 
            className="w-full h-full  object-cover"
          />
          <Image 
            // ref={playButtonRef}
            width={98} 
            height={98} 
            src='/play.png' 
            className="absolute top-10 cursor-pointer -right-4 transition-transform duration-300 z-50"
          />
        </div>
      </div>
      <LandingSection2/>
      <LandingSection3/>
      <LandingSection4/>
      <LandingSection5/>
      <Testmonials/>
      <ContactSection/>
      <Footer/>
    </>
  );
};

export default Page;