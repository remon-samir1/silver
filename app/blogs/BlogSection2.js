import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection2 = () => {
  return (
    <div className="px-[5%] py-20">
      <div className="flex items-start gap-4">
        <div className="w-[390px]">
          <div className="bg-[#F0F9F4] p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="ابحث هنا"
                className="flex-1 bg-white outline-none border border-[#DDE4E9] p-3"
              />
              <div className="py-2 px-3 bg-main cursor-pointer">
                <Icon
                  icon="mingcute:search-line"
                  width="32"
                  height="32"
                  className=" shrink-0  rotate-90"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F0F9F4] p-4 mt-5">
            <h3 className="text-textColor text-[1.3rem] font-medium border-b-2 border-main w-max">
              الفئات
            </h3>
            {[
              "تطوير الويب",
              "تصميم التطبيقات",
              "تصميم واجهة المستخدم وتجربة المستخدم",
              "ادخال البيانات",
              "الامن",
            ].map((data, index) => (
              <div
                key={index}
                className="flex mt-5 items-center justify-between"
              >
                <h5 className="text-[1.1rem] font-light text-textColor w-[80%]">
                  {data}
                </h5>
                <Icon
                  icon="material-symbols:arrow-back-rounded"
                  className="text-main"
                  width="24"
                  height="24"
                />
              </div>
            ))}
          </div>
          <div className="bg-[#F0F9F4] p-4 mt-5">
            <h3 className="text-textColor text-[1.3rem] font-medium border-b-2 border-main w-max">
              احدث منشور
            </h3>
            {Array.from({ length: 3 }).map((data, index) => (
              <div  key={index} className="mt-4 flex items-center gap-4">
                <div className="w-[6rem] h-[6rem]">
                  <Image
                    src="/silver-blog.png"
                    width={95}
                    height={100}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base text-textColor font-light w-[90%]">
                    لوريم إيبسوم دولور سيت أميت كونسيكتتور.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Icon
                      className="text-main"
                      icon="uiw:date"
                      width="16"
                      height="16"
                    />
                    <p className="text-textColor text-[0.8rem] font-light">
                      21 يونيو، 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F0F9F4] p-4 mt-5">
            <h3 className="text-textColor text-[1.3rem] font-medium border-b-2 border-main w-max">
              العلامات الشائعة
            </h3>
            <div className="flex items-center gap-2 flex-wrap mt-4">
              {Array.from({ length: 6 }).map((data, index) => (
                <span className="text-[0.9rem] font-light text-textColor border border-[#DDE4E9] px-5 py-2 rounded-3xl">
                  تطوير الويب
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
        {
          Array.from({length:3}).map((data , index)=>(
            <div key={index} className={`${index !== 0 && "mt-5"}`}>
            <div className="h-[500px] w-full">
              <Image
                src="/silver-blog.png"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3 pl-[10%] pb-12 pr-3 bg-[#F0F9F4]">
              <div className="flex items-center gap-4">
                <div className="mt-4 flex items-center gap-3">
                  <Icon
                    className="text-main"
                    icon="uiw:date"
                    width="18"
                    height="18"
                  />
                  <p className="text-textColor text-[0.8rem] font-light">
                    21 يونيو، 2025
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Icon
                    icon="uil:comments"
                    width="22"
                    height="22"
                    className="text-main"
                  />
                  <p className="text-textColor text-[0.8rem] font-light">
                    التعليقات
                  </p>
                </div>
              </div>
              <h3 className="text-[1.4rem] font-medium text-textColor mt-5">
                تصميم التطبيقات
              </h3>
              <p className="text-body text-base font-light mt-5">
                لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
                رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور
                إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور.
                هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم
                دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
                سيت.
              </p>
              <Link href='/blogs/details' className="text-[1.1rem] inline-block font-medium text-main border-b border-main mt-5">أقرأ المزيد</Link>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default BlogSection2;
