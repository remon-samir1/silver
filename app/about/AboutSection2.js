import Image from "next/image";
import React from "react";

const AboutSection2 = () => {
  return (
    <div className="px-[5%] py-20 bg-[#EEF8F2]">
      <div className="relative h-[40rem] w-full">
        <div className="absolute right-[13%]">
          <h3 className="text-textColor text-[1.9rem] font-medium">
            نجاحك هو رحلتنا في سيلفر أرابيا
          </h3>
          <p className="text-[1.1rem] font-light text-textColor mt-4 w-[73%]">
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
            رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
            ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
            إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
            سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
          </p>
        </div>
        <Image
          src="/about-silver.png"
          height={100}
          alt="about silver"
          width={100}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AboutSection2;
