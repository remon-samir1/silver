import React, { useEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const phoneIconRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); 

  const Links = [
    { name: "الرئيسية", to: '/' },
    { name: "الخدمات", to: '/services' },
    { name: "الأعمال", to: '/projects' },
    { name: "من نحن", to: '/about' },
    { name: "تواصل معنا", to: '/contact' },
    { name: "مقالات", to: '/blogs' },
  ];

  useGSAP(() => {
    const initAnimations = async () => {
      if (typeof window === 'undefined') return;

      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.set(navbarRef.current, { y: -100, opacity: 0 });
          gsap.to(navbarRef.current, {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out"
          });

          ScrollTrigger.create({
            trigger: "body",
            start: "30px top",
            end: "bottom bottom",
            onEnter: () => {
              gsap.to(navbarRef.current, {
                backgroundColor: "rgb(0,0,0,0.8)",
                backdropFilter: "blur(10px)",
                height:"5rem",
                duration: 0.3
              });
            },
            onLeaveBack: () => {
              gsap.to(navbarRef.current, {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                duration: 0.3
              });
            }
          });
        }, navbarRef);

        return () => {
          ctx.revert();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (error) {
        console.warn('GSAP failed to load:', error);
      }
    };

    initAnimations();
  });

  return (
    <>
      {/* Navbar الرئيسي */}
      <div
        ref={navbarRef}
        className='flex items-center justify-between w-full fixed top-0 right-0 px-[5%] py-4 z-50 transition-all duration-300 bg-transparent'
        style={{ opacity: 0 }}
      >
        {/* اللوجو */}
        <div ref={logoRef}>
          <Logo />
        </div>

        {/* اللينكات (تظهر بس في الشاشات الكبيرة) */}
        <div ref={linksRef} className="hidden md:flex items-center gap-9">
          {Links.map((data, index) => (
            <Link 
              href={data.to} 
              key={index} 
              className='text-white font-light text-[1.1rem] hover:text-main duration-300 transition-colors relative'
            >
              {data.name}
            </Link>
          ))}
        </div>

        {/* contact (تظهر بس في الديسكتوب) */}
        <div ref={contactRef} className="hidden md:flex items-center gap-4">
          <div className="w-[3.3rem] h-[3.3rem] rounded-full bg-textColor flex justify-center items-center cursor-pointer">
            <Icon 
              ref={phoneIconRef}
              icon="solar:phone-outline" 
              width="28" height="28"  
              style={{color: '#fff'}} 
            />
          </div>
          <div>
            <p className='text-[0.9rem] text-white/80'>إتصل بنا</p>
            <p className='text-[0.9rem] text-white/80 mt-1'>+941-913-4136</p>
          </div>
        </div>

        {/* زرار القائمة الجانبية في الموبايل */}
        <button 
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={isOpen ? "eva:close-fill" : "ci:hamburger"} />
        </button>
      </div>

      {/* القائمة الجانبية في الموبايل */}
      <div className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
        <div className="flex flex-col items-start p-6 gap-6">
        <Link href='/'>
      <Image src='/silver.png' width={40} height={43} alt='silver'/>
    </Link>
          {Links.map((data, index) => (
            <Link 
              href={data.to} 
              key={index} 
              onClick={() => setIsOpen(false)} // يقفل القائمة بعد الضغط
              className='text-gray-800 font-medium text-lg hover:text-main transition-colors'
            >
              {data.name}
            </Link>
          ))}
          <div className="mt-auto pt-6 border-t border-gray-200 w-full">
          <div className="w-[3.3rem] h-[3.3rem] rounded-full bg-textColor flex justify-center items-center cursor-pointer">
            <Icon 
              ref={phoneIconRef}
              icon="solar:phone-outline" 
              width="28" height="28"  
              style={{color: '#fff'}} 
            />
          </div>
            <p className='text-sm mt-3 text-gray-600'>إتصل بنا</p>
            <p className='text-base mt-3 text-gray-800 font-semibold'>+941-913-4136</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
