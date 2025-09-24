import React, { useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const phoneIconRef = useRef(null);

  const Links = [
    {
      name: "الرئيسية",
      to: '/'
    },
    {
      name: "الخدمات",
      to: '/services'
    },
    {
      name: "الاعمال",
      to: '/projects'
    },
    {
      name: "من نحن",
      to: '/about'
    },
    {
      name: "تواصل معنا",
      to: '/contact'
    },
    {
      name: "مقالات",
      to: '/blogs'
    },
  ];

  useGSAP(() => {
    // Dynamic import for client-side only
    const initAnimations = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Set initial states
          gsap.set(navbarRef.current, {
            y: -100,
            opacity: 0
          });

          gsap.set(logoRef.current, {
            scale: 0,
            rotation: -180
          });

          if (linksRef.current?.children) {
            gsap.set(linksRef.current.children, {
              y: -30,
              opacity: 0
            });
          }

          gsap.set(contactRef.current, {
            x: 50,
            opacity: 0
          });

          gsap.set(phoneIconRef.current, {
            scale: 0,
            rotation: 360
          });

          // Create master timeline for navbar entrance
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" }
          });

          // Animate navbar container slide down
          tl.to(navbarRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          })

          // Animate logo with spin effect
          .to(logoRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.6")

          // Animate navigation links with stagger
          .to(linksRef.current?.children || [], {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.4")

          // Animate contact section
          .to(contactRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out"
          }, "-=0.5")

          // Animate phone icon
          .to(phoneIconRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          }, "-=0.4");

          ScrollTrigger.create({
            trigger: "body",
            start: "30px top",
            end: "bottom bottom",
            onEnter: () => {
              gsap.to(navbarRef.current, {
                backgroundColor: "rgb(0, 0, 0 , 0.8)",
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

          if (linksRef.current?.children) {
            const linkElements = Array.from(linksRef.current.children);
            linkElements.forEach(link => {
              const handleMouseEnter = () => {
                gsap.to(link, {
                  y: -3,
                  duration: 0.3,
                  ease: "power2.out"
                });
              };

              const handleMouseLeave = () => {
                gsap.to(link, {
                  y: 0,
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              };

              link.addEventListener('mouseenter', handleMouseEnter);
              link.addEventListener('mouseleave', handleMouseLeave);
            });
          }

          // Add hover animation for phone icon
          const handlePhoneIconEnter = () => {
            gsap.to(phoneIconRef.current, {
              scale: 1.1,
              rotation: 15,
              duration: 0.3,
              ease: "power2.out"
            });

            if (phoneIconRef.current?.parentElement) {
              gsap.to(phoneIconRef.current.parentElement, {
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                duration: 0.3,
                ease: "power2.out"
              });
            }
          };

          const handlePhoneIconLeave = () => {
            gsap.to(phoneIconRef.current, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            if (phoneIconRef.current?.parentElement) {
              gsap.to(phoneIconRef.current.parentElement, {
                boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
                duration: 0.3,
                ease: "power2.out"
              });
            }
          };

          if (phoneIconRef.current?.parentElement) {
            const phoneIconContainer = phoneIconRef.current.parentElement;
            phoneIconContainer.addEventListener('mouseenter', handlePhoneIconEnter);
            phoneIconContainer.addEventListener('mouseleave', handlePhoneIconLeave);
          }



          // Add subtle breathing animation for contact info
          gsap.to(contactRef.current, {
            scale: 1.02,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1
          });

        }, navbarRef);

        // Cleanup function
        return () => {
          ctx.revert();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (error) {
        console.warn('GSAP failed to load:', error);
      }
    };

    const cleanup = initAnimations();
    
    return () => {
      if (cleanup && typeof cleanup.then === 'function') {
        cleanup.then(cleanupFn => cleanupFn && cleanupFn());
      }
    };
  });

  return (
    <div 
      ref={navbarRef}
      className='flex items-center gap-[12%] w-full fixed top-0 right-0 px-[5%] py-4 z-50 transition-all duration-300'
      style={{ opacity: 0 }} // Initial hidden state for SSR
    >
      <div ref={logoRef}>
        <Logo />
      </div>
      
      <div ref={linksRef} className="flex items-center gap-9">
        {Links.map((data, index) => (
          <Link 
            href={data.to} 
            key={index} 
            className='text-white font-light text-[1.1rem] hover:text-main duration-300 transition-colors relative'
          >
            <span className="relative z-10">{data.name}</span>
          </Link>
        ))}
      </div>
      
      <div ref={contactRef} className="flex items-center gap-4">
        <div className="w-[3.3rem] h-[3.3rem] rounded-full bg-textColor flex justify-center items-center transition-all duration-300 cursor-pointer">
          <Icon 
            ref={phoneIconRef}
            icon="solar:phone-outline" 
            width="30" 
            height="30"  
            style={{color: '#fff'}} 
          />
        </div>
        <div>
          <p className='text-[0.9rem] text-white/80 font-light'>إتصل بنا</p>
          <p className='text-[0.9rem] text-white/80 font-light mt-1'>+941-913-4136</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;