import Image from "next/image";
import React from "react";

const AboutSection3 = () => {
  const numbers = [
    {
      text:"تم التوصيل",
      num:'345'
    },
    {
      text:"مشاريع",
      num:'35'
    },
    {
      text:"أشهر",
      num:'180'
    },
  ]
  return (
    <div className="px-[5%] py-20 bg-[#FAFFFC]">
      <div className="relative">
        <Image
          src="/lines.png"
          height={100}
          alt="silver"

          width={100}
          className=" top-0 right-0 absolute"
        />
        <Image
          src="/lines.png"
          height={100}
          alt="silver"
          width={100}
          className="rotate-180 bottom-0 left-0 absolute"
        />
        <div className="w-full flex flex-row-reverse items-center">
          <div className="flex-1">
            <Image
              src="/about-silver1.png"
              height={420}
              width={100}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[1.9rem] font-medium text-textColor px-[10%]">
              رؤيتنا
            </h3>
            <p className="text-body font-light text-[1.1rem] mt-4 px-[10%]">
              لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
              رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
              ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت
              سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
              سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="flex-1">
            <Image
              src="/about-silver2.png"
              height={420}
              width={100}
              alt="about silver"
              className="w-full"
            />
          </div>
          <div className="flex-1 ">
            <h3 className="text-[1.9rem] font-medium text-textColor px-[10%]">
              مهمتنا
            </h3>
            <p className="text-body font-light text-[1.1rem] mt-4 px-[10%]">
              لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
              رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
              ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت
              سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
              سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-20 px-[5%]">
        {
          numbers.map((data , index)=>(

  <div className="text-center">
<p className="text-textColor font-medium text-[3.5rem]">{data.num}</p>
<p className="text-textColor font-medium text-[1.8rem]">{data.text}</p>
  </div>
          ))
        }
      </div>
    </div>
  );
};

export default AboutSection3;
