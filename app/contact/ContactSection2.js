import { Icon } from "@iconify/react";
import React from "react";

const ContactSection2 = () => {
  const boxes = [
    {
      icon: "gridicons:location",
      title: "our location",
      disc: "19 شارع مصطفى النحاس , مدينة نصر",
    },
    {
      icon: "ic:sharp-phone",
      title: "رقم الهاتف",
      disc: "01018883449",
    },
    {
      icon: "clarity:email-solid",
      title: "Email us",
      disc: "Petrapeter@gmail.com",
    },
    {
      icon: "tdesign:time",
      title: "ساعات العمل",
      disc: "الاثنين - السبت: 9:00 - 17:00",
    },
  ];
  return (
    <div className="px-[5%] py-20">
      <div className="text-center">
        <p className="text-[1.1rem] text-main font-medium">تواصل معنا</p>
        <h3 className="text-textColor text-[1.9rem] font-medium mt-3">
          تواصل مع سيلفر
        </h3>
        <p className="text-[1.1rem] font-light text-body mt-3">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت.
        </p>
      </div>
      <div className="mt-4 flex items-center flex-row-reverse gap-5">
        {boxes.map((data, index) => (
          <div
            className={`flex-1 h-[200px] rounded flex items-center justify-center gap-3 flex-col  ${index % 2 !== 0 ? "bg-[#F0F9F4]" : " bg-main"}`}
          >
            <Icon
              className={` ${index % 2 !== 0 ? "text-main" : " text-white"} `}
              icon={data.icon}
              width="56"
              height="56"
            />
            <h3 className={`text-[1.2rem]  font-bold  ${index % 2 !== 0 ? "text-main" : " text-white"} ${ index === 0 || index === 2 && "!font-sans"}`}>{data.title}</h3>
            <p className={`text-[rem]  font-light  ${index % 2 !== 0 ? "text-main" : " text-white"} `} >{data.disc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection2;
