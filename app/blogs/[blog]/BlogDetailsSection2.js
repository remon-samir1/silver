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
              <div key={index} className="mt-4 flex items-center gap-4">
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
          <div>
            <div className="h-[500px] w-full">
              <Image
                src="/silver-blog.png"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3 pl-[10%] pb-12 pr-3 ">
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
              <p className="text-body text-base font-light mt-5">
                لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
                رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور
                إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور.
                هندريت سيت إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم
                دولور سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
                سيت.
              </p>
            </div>
          </div>
          <div className="mt-5 flex  h-40 bg-[#F0F9F4]">
            <div className="bg-main flex justify-center items-center p-5">
              <Icon
                icon="ri:double-quotes-r"
                width="70"
                height="70"
                style={{ color: "#fff" }}
              />
            </div>
            <div className="flex-1 py-8 px-5">
              <p className="text-base font-medium text-textColor max-w-[85%]">
                "من الحقائق المعروفة أن القارئ سيتشتت انتباهه بمحتوى الصفحة
                القابل للقراءة عند النظر إلى تصميمها."
              </p>

              <p className="flex items-center gap-1 mt-5">
                <span className="h-[0.8px] w-6 bg-main origin-left "></span>
                <span className="text-[1rem]  text-main font-light">فرويد</span>
              </p>
            </div>
          </div>
          <p className="text-body text-base font-light mt-5">
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
            رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
            ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
            إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
            سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
          </p>
          <p className="text-body text-base font-light mt-5">
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
            رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
            ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
            إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
            سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
          </p>

          <h3 className="text-[1.4rem] font-medium text-textColor mt-6">
            معرض صور التطبيقات
          </h3>
          <div className="flex items-center gap-3 mt-4">
            {Array.from({ length: 3 }).map((data, index) => (
              <Image
                width={100}
                height={160}
                src="/silver-blog.png"
                className="flex-1"
              />
            ))}
          </div>
          <p className="text-body text-base font-light mt-5">
            لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
            رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
            ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
            إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور
            سيتكورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <h3 className="text-[1.2rem] font-medium text-textColor">
              العلامات:
            </h3>
            {Array.from({ length: 4 }).map((data, index) => (
              <span className="bg-[#C9EBD8] px-6 py-2 rounded-xl text-textColor text-[0.8rem] font-light">
                الويب
              </span>
            ))}
          </div>
          <div className="mt-7 border border-[#DDE4E9] p-4 pb-16">
            <div className="mt-4 flex items-center gap-3">
              <Icon
                icon="uil:comments"
                width="40"
                height="40"
                className="text-main"
              />
              <p className="text-textColor text-[1.4rem] font-medium">
                التعليقات
              </p>
            </div>
            <div className="w-[80%] mt-10 flex flex-col relative justify-center items-center border pt-20 p-10 border-[#DDE4E9] h-[70%] m-auto">
              <Image
                src="/silver-comment.png"
                width={103}
                height={103}
                className="absolute -top-14 rounded-full lef-[50%]"
              />
              <h3 className="text-textColor font-medium text-[1.1rem]">
                بترا توماس
              </h3>
              <p className="text-main text-[0.8rem] font-medium mt-4">
                13 سبتمبر 2025، 5:00 مساءً
              </p>
              <p className="text-[0.9rem] text-body font-light mt-4 text-center w-[90%]">
                لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
                رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور
                إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيك إيبسوم
                دولور سيت.
              </p>
              <button className="flex items-center mt-4 gap-2">
                <Icon
                  className="text-main"
                  icon="ri:reply-fill"
                  width="16"
                  height="16"
                />{" "}
                <span className="text-base font-medium text-main">رد</span>
              </button>
            </div>
          </div>
          <form className="mt-7 border px-3 py-5 border-[#DDE4E9]">
            <div className="flex items-center mt-4 gap-2">
              <Icon
                className="text-main "
                icon="ri:reply-fill"
                width="28"
                height="28"
              />{" "}
              <span className="text-[1.4rem] font-medium text-textColor">
                اترك تعليقا
              </span>
            </div>
            <p className="text-body text-[0.9rem] font-medium">
              لن يتم نشر عنوان بريدك الإلكتروني. الحقول المطلوبة محددة بعلامة *
            </p>
            <div className="flex mt-4 items-center gap-4">
              <input type="text" placeholder="الاسم" className="p-3 border border-main/80 rounded bg-transparent outline-none flex-1"/>
              <input type="email" placeholder="البريد الالكتروني" className="p-3 border border-main/80 rounded bg-transparent outline-none flex-1"/>
            </div>
            <input type="text" placeholder="موقع الويب" className="p-3 border border-main/80 rounded bg-transparent outline-none w-full mt-4"/>
            <textarea placeholder="اترك تعليقا" className="p-3 border border-main/80 rounded bg-transparent outline-none w-full mt-4 h-40"/>
        <button type="submit" className="text-white bg-main px-8 text-[1.1rem] font-medium mt-4 rounded-md py-2">اضف تعليقا</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSection2;
