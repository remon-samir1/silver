import { Icon } from "@iconify/react";
import React from "react";
import Chart from "../Components/Chart/Chart";
import Image from "next/image";

const Page = () => {
  const cards = [
    {
      title: "العملاء",
      value: "120",
      icon: "iconoir:user",
      bg: "rgb(26, 117, 255 , 0.1)",
    },
    {
      title: "المشاريع",
      value: "120",
      icon: "carbon:ibm-cloud-projects",
      bg: "rgb(133, 105, 255,0.1)",
    },
    {
      title: "المشاركات",
      value: "120",
      icon: "mdi:post-it-note-edit-outline",
      bg: "rgb(254, 131, 43 , 0.1)",
    },
    {
      title: "الايردات",
      value: "120",
      icon: "simple-icons:revenuecat",
      bg: "rgb(20, 152, 79 , 0.1)",
    },
  ];
  return (
    <div className="mt-4">
      <h3 className="text-textColor text-[1.2rem] font-bold">
        لوحة التحكم الرئيسية
      </h3>
      <div className="mt-5 flex items-center gap-5">
        {cards.map((data, index) => (
          <div
            key={index}
            className="bg-[#F0F9F4] hover:shadow-inner  duration-200 overflow-hidden relative border rounded border-[#DDE4E9] p-3 flex-1"
          >
            <p className="text-textColor text-[1.2rem] font-light">
              {data.title}
            </p>
            <p className="text-[1.4rem] font-medium text-textColor mt-2">
              {data.value}
            </p>
            <div
              style={{ background: data.bg }}
              className={`absolute  top-[-25px] left-[-25px]  w-[80px] h-[80px] rounded-full flex items-end pb-5 pr-5 justify-start`}
            >
              <Icon
                className="text-main"
                icon={data.icon}
                width="24"
                height="24"
              />
            </div>
          </div>
        ))}
      </div>
      <Chart />
      <div className="flex items-start gap-6 mt-8">
        <div className="flex-1 border-[#DDE4E9] border rounded-md py-4">
          <div className="flex items-center gap-3 px-5">
            <Icon
              className="text-textColor"
              icon="mdi:post-it-note-edit-outline"
              width="20"
              height="20"
            />
            <span className="text-[1.2rem] font-bold text-textColor ">
              أحدث الإشعارات
            </span>
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={`flex items-start justify-between ${index !== 2 && "border-b" } border-[#DDE4E9] p-5`}>
              <div>
                <p className="text-textColor text-[0.9rem] font-medium">
                  تم نشر مشاركة جديدة
                </p>
                <p className="text-body mt-2 text-[0.8rem] font-medium">
                  "أساسيات تصميم واجهة المستخدم" الآن مباشر.
                </p>
              </div>
              <p className="text-body text-[0.8rem] font-medium">منذ ساعتين</p>
            </div>
          ))}
        </div>
        <div className="flex-1 border rounded-md border-[#DDE4E9] py-4">
          <div className="flex items-center gap-3 px-5">
            <Icon
              className="text-textColor"
              icon="mdi:post-it-note-edit-outline"
              width="20"
              height="20"
            />
            <span className="text-[1.2rem] font-bold text-textColor ">
              المشاركات الاخيرة
            </span>
          </div>
          {Array.from({ length: 3 }).map((data, index) => (
            <div className="flex items-end justify-between mt-5 px-5">
              <div className="flex items-start gap-3">
                <Image
                  src="/silver-1.png"
                  width={95}
                  height={70}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-sm text-textColor font-medium">
                    تصميم موقع أزياء
                  </p>
                  <p className="text-[0.8rem] font-light text-body mt-1">
                    15 أغسطس 2025
                  </p>
                  <span className="text-[0.5rem] text-white border border-main rounded-3xl px-3 py-1 bg-[#6CAF80] inline-block mt-3">تم النشر</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-white bg-main px-4 py-1 text-[0.6rem] font-medium rounded-sm">تعديل</button>
                <button className="text-white bg-main px-4 py-1 text-[0.6rem] font-medium rounded-sm">عرض</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
