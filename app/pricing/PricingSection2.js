'use client';

import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";

const PricingSection2 = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const toggleRef = useRef(null);

  const pricingPlans = [
    {
      plan: "بداية",
      icon: "iconoir:bright-star",
      disc: "مثالي للأفراد ومشاريع الهوايات.",
      price: "99$",
      features: ["الدعم الفني", "موارد غير محدودة", "SSD", "الدومين مجاني"],
      buttonText: "اختار البداية",
    },
    {
      plan: "المميز",
      price: "79$",
      icon: "ion:rocket-outline",
      disc: "مثالي للشركات الصغيرة والمستقلين",
      features: [
        "الدعم الفني الممتاز",
        "موارد غير محدودة",
        "SSD",
        "الدومين مجاني",
        "CDN",
        "حماية",
      ],
      buttonText: "اختار المميز",
    },
    {
      plan: "المؤسسة",
      price: "199$",
      icon: "iconoir:bright-star",
      disc: "للفرق الكبيرة والمشاريع الحيوية.",
      features: [
        "مساعدة في تحديد المشاريع",
        "موارد غير محدودة",
        "SSD",
        "الدومين مجاني",
        "CDN",
        "دعم احترافي",
      ],
      buttonText: "تواصل مع المختصين",
    },
  ];

  useEffect(() => {
    // Simple fade-in animation using CSS classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (toggleRef.current) observer.observe(toggleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="px-[5%] py-20">
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-delay-1 {
          animation-delay: 0.2s;
        }
        
        .animate-delay-2 {
          animation-delay: 0.4s;
        }
      `}</style>
      
      <div ref={headerRef} className="text-center opacity-0">
        <h3 className="text-[1.9rem] text-textColor font-medium">
          اختر خطتك المثالية
        </h3>
        <p className="text-[1.1rem] mt-4 mx-auto font-light text-body max-w-[675px] text-center">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس .
        </p>
        <div 
          ref={toggleRef}
          className="mt-6 bg-[#C9EBD8] flex items-center gap-3 rounded-full p-2 w-max mx-auto opacity-0"
        >
          <button className="text-[1.1rem] font-medium text-main rounded-3xl hover:text-white hover:bg-main hover:scale-105 transition-all duration-300 ease-out hover:shadow-lg px-12 py-2">
            شهري
          </button>
          <button className="text-[1.1rem] font-medium text-main rounded-3xl hover:text-white hover:bg-main hover:scale-105 transition-all duration-300 ease-out hover:shadow-lg px-12 py-2">
            سنوي
          </button>
        </div>
      </div>
      
      <div ref={cardsRef} className="mt-10 flex items-center gap-8 opacity-0">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className={`bg-[#F0F9F4] relative px-5 rounded-xl h-[27rem] flex-1 pt-5 pb-6 transition-all duration-300 ease-out hover:shadow-lg cursor-pointer group ${
              index === 1 && "!bg-main shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon
                className={`${index === 1 ? "text-white" : "text-main"}`}
                icon={item.icon}
                width="30"
                height="30"
              />
              <h3
                className={`${
                  index === 1 ? "text-white" : "text-textColor"
                } font-medium text-[1.4rem]`}
              >
                {item.plan}
              </h3>
            </div>
            
            <p
              className={`${
                index === 1 ? "text-white" : "text-body"
              } text-base font-light mt-3`}
            >
              {item.disc}
            </p>
            
            <h3
              className={`text-[2.5rem] font-bold mt-4 ${
                index === 1 ? "text-white" : "text-textColor"
              }`}
            >
              {item.price}
            </h3>
            
            <div className="space-y-3 mt-4">
              {item.features.map((data, key) => (
                <div 
                  key={key} 
                  className="flex items-center gap-3"
                >
                  <Icon
                    className={`${index === 1 ? "text-white" : "text-main"}`}
                    icon="hugeicons:checkmark-circle-04"
                    width="16"
                    height="16"
                  />
                  <span
                    className={`text-sm font-light ${
                      index === 1 ? "text-white" : "text-body"
                    }`}
                  >
                    {data}
                  </span>
                </div>
              ))}
            </div>
            
            <button
              className={`${
                index === 1 
                  ? "bg-white hover:bg-gray-50" 
                  : "bg-[#C9EBD8] hover:bg-green-300"
              } w-[90%] text-center rounded-lg absolute left-[5%] bottom-5 p-3 text-textColor text-base font-medium transition-colors duration-200`}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection2;