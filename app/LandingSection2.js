"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const LandingSection2 = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headingsRef = useRef([]);
  const paragraphsRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
      gsap.from(sectionRef.current, 
            {
          y: 100, opacity: 0 ,
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

      // Animate the image with a slight scale effect
      gsap.fromTo(imageRef.current, 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the content container
      gsap.fromTo(contentRef.current, 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate each heading with a stagger effect
      headingsRef.current.forEach((heading, i) => {
        if (heading) {
          gsap.fromTo(heading, 
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                end: "bottom 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Animate each paragraph with a stagger effect
      paragraphsRef.current.forEach((paragraph, i) => {
        if (paragraph) {
          gsap.fromTo(paragraph, 
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 90%",
                end: "bottom 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
      );
    });

  
  // }
  // );

  // Helper functions to assign refs to elements
  const addToHeadingsRefs = (el) => {
    if (el && !headingsRef.current.includes(el)) {
      headingsRef.current.push(el);
    }
  };

  const addToParagraphsRefs = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  return (
    <div className="md:bg-main bg-white">
      <div 
        ref={sectionRef}
        className="px-[5%] rounded-tr-[400px] py-10 bg-white flex flex-col-reverse md:flex-row items-start gap-20"
      >
        <div ref={imageRef} className="flex-1">
          <Image
            src="/section2.png"
            width={100}
            height={100}
            unoptimized
            className="w-full h-[47.6rem] object-cover"
            alt="Web development services"
          />
        </div>
        <div ref={contentRef} className="flex-1">
          <h3 
            ref={addToHeadingsRefs}
            className="text-[1.9rem] font-medium text-textColor"
          >
            قم بترقية عملك مع خدمات تطوير تطبيقات الويب القوية لدينا
          </h3>
          <p 
            ref={addToParagraphsRefs}
            className="text-[1.1rem] font-light text-body mt-4"
          >
            احصل على حلول ويب متخصصة مصممة لتلبية احتياجاتك
          </p>
          <h4 
            ref={addToHeadingsRefs}
            className="mt-4 text-textColor font-medium text-[1.3rem]"
          >
            الخبرة والتجربة
          </h4>
          <p 
            ref={addToParagraphsRefs}
            className="text-[1.1rem] font-light text-body mt-4"
          >
            نحن فريق من وكالات تطوير المواقع ذات المهارات العالية والخبرة في
            المملكة العربية السعودية، ونتقن استخدام مجموعة متنوعة من تقنيات الويب
            ولغات البرمجة والأطر. وهذا يمكننا من إنشاء تطبيقات ومواقع ويب عالية
            الجودة، وتقديم خدمات استثنائية في تصميم وتطوير المواقع والتطبيقات
            المحمولة من خلال الاستفادة من مطوري المواقع المتخصصين لدينا.
          </p>
          <h4 
            ref={addToHeadingsRefs}
            className="mt-4 text-textColor font-medium text-[1.3rem]"
          >
            تصميم ويب متكيف
          </h4>
          <p 
            ref={addToParagraphsRefs}
            className="text-[1.1rem] font-light text-body mt-4"
          >
            إنشاء هوية علامة تجارية قوية يعتمد على قيم محددة، وعناصر بصرية، وتحديد
            استراتيجي. يساعد استخدام الألوان، والصور، والتصميم، والشعارات بشكل
            فعال الشركة على التميز عن المنافسين وإقامة علاقة قوية مع العملاء.
          </p>
          <h4 
            ref={addToHeadingsRefs}
            className="mt-4 text-textColor font-medium text-[1.3rem]"
          >
            زيادة تحويل المبيعات
          </h4>
          <p 
            ref={addToParagraphsRefs}
            className="text-[1.1rem] font-light text-body mt-4"
          >
            يمكن أن يؤدي توظيف وكالة تصميم وتطوير المواقع الإلكترونية في المملكة
            العربية السعودية إلى زيادة المبيعات من خلال إنشاء موقع ويب سهل
            الاستخدام يتواصل بشكل فعال ويقنع الزوار بأن يصبحوا مشتركين وزبائن دون
            أن يكون ذلك عدوانيًا للغاية.
          </p>
          <h4 
            ref={addToHeadingsRefs}
            className="mt-4 text-textColor font-medium text-[1.3rem]"
          >
            تحكم آمن وموثوق
          </h4>
          <p 
            ref={addToParagraphsRefs}
            className="text-[1.1rem] font-light text-body mt-4"
          >
            إن إنشاء صفحات الويب باستخدام كود مخصص يساعد على زيادة الأمان من خلال
            تقليل احتمالية الثغرات، وهو أمر أساسي لحماية موثوقية موقعك ومعلومات
            العملاء، مما يعزز من مصداقيتك.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection2;