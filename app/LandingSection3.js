import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingSection3 = () => {
  const boxes = [
    {
      image:"/box1.png",
      title:"تصميم واجهة المستخدم وتجربة المستخدم",
      disc:"تُركّز واجهة المستخدم (UI) على عناصر التصميم، بينما تُولي تجربةالمستخدم (UX) الأولوية لرضا المستخدم. تضمن واجهة المستخدم/تجربةالمستخدم الجيدة سهولة الاستخدام."
    },
    {
      image:"/box2.png",
      title:"تطوير الويب",
       disc:"العمود الفقري لموقعك الإلكتروني. نبني ونحافظ على بنيته الأساسية، ونضمن فعاليته وسرعته وسهولة الوصول إليه."
    },
    {
      image:"/box3.png",
      title:"تصميم التطبيقات",
      disc:"عملية نصمم فيها تصميمات تطبيقات جذابة بصريًا، لضمان تجربة ممتعة للزوار."
    },

    {
      image:"/box4.png",
      title:"ادخال البيانات",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. ماتي ماسا فارياس موريبي بيلينتسكي كويز أورناري تيلاس. ميسيناس فاسيليسيز إيد نولام أوت."
    },
    {
      image:"/box5.png",
      title:"خدمات تحسين محركات البحث",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. ماتي ماسا فارياس موريبي بيلينتسكي كويز أورناري تيلاس. ميسيناس فاسيليسيز إيد نولام أوت."
    },
    {
      image:"/box6.png",
      title:"الامن",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. ماتي ماسا فارياس موريبي بيلينتسكي كويز أورناري تيلاس. ميسيناس فاسيليسيز إيد نولام أوت."
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const boxesRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the heading
      gsap.fromTo(headingRef.current, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the description
      gsap.fromTo(descriptionRef.current, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate each box with a stagger effect
      boxesRef.current.forEach((box, i) => {
        if (box) {
          gsap.fromTo(box, 
            { y: 60, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: box,
                start: "top 85%",
                end: "bottom 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  });

  const addToBoxesRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} className="px-[5%] py-20 section-3">
      <div className="text-center">
        <h3 ref={headingRef} className="max-w-[365px] mx-auto text-white text-[1.9rem] font-medium">
          خدمات تصميم المواقع الإلكترونية لدينا
        </h3>
        <p ref={descriptionRef} className="max-w-[810px] text-white/80 leading-8 text-[1.1rem] mt-4 font-light text-center mx-auto">
          تقدم خدمات تصميم المواقع الإلكترونية لدينا حلولاً شاملة، من تصميم صور
          جذابة إلى تحسين الحضور الإلكتروني. نغطي التصميم والتطوير وتجربة
          المستخدم والمحتوى وتحسين محركات البحث والتسويق الرقمي لضمان تميز شامل
          لموقعك الإلكتروني.
        </p>
      </div>
      <div className="mt-6 flex items-center gap-7 flex-wrap">
        {boxes.map((data, index) => (
          <div
            key={index}
            ref={addToBoxesRefs}
            style={{ flex: "1 1 30%" }}
            className="bg-main h-[26.5rem] flex flex-col justify-between min-w-[300px] p-10 rounded-md"
          >
            <div className="flex flex-col items-center justify-center">
              <Image src={data.image} width={65} height={65} alt={data.title} />
              <h3 className="text-white text-center text-[1.2rem] font-bold mt-6">
                {data.title}
              </h3>
              <p className="mt-4 text-base text-white/80 font-light text-center">
                {data.disc}
              </p>
            </div>
            <button className="mt-4 text-main text-base duration-500 justify-self-end bg-white font-medium text-center w-full p-3 rounded-tr-3xl hover:rounded-tr-none rounded-bl-3xl hover:rounded-bl-none">
              إعرف المزيد
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection3;