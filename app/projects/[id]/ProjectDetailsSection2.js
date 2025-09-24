import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const ProjectDetailsSection2 = () => {
  const attributes = [
    {
      text1: "  الدعم والتحديثات",
      text2: "التوثيق متضمن التحديثات متضمنة الدعم الشخصي غير متضمن",
    },
    {
      text1: "انواع الملفات",
      text2: "تصميم موبايل",
    },
    {
      text1: "اضافة",
      text2: "متجاوب الشاشات",
    },
    {
      text1: "متوافق مع",
      text2: "وردبريس",
    },
  ];
  return (
    
    <div className="px-[5%] py-20 flex items-start flex-col-reverse md:flex-row-reverse gap-8">
      <div className="w-full md:w-[395px]">
        <h3 className="text-[1.8rem] font-bold text-textColor">
          تطبيق شراء ملابس
        </h3>
        <div className="mt-4 border border-main rounded py-8 px-5">
          <h3 className="text-[1.7rem] font-bold text-textColor">
            تنزيلات غير محدودة من 16.50 دولارًا شهريًا
          </h3>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3 mt-4">
              <Icon
                className="text-textColor"
                icon="ri:checkbox-circle-line"
                width="24"
                height="24"
              />
              <span className="text-[0.8rem] font-light text-textColor">
                لوريم إيبسوم دولور سيت أميت كونسيكتتور لوريم إيبسوم.{" "}
              </span>
            </div>
          ))}
          <button className="text-white bg-main p-3 rounded text-center w-full mt-5 hover:shadow-light duration-200  text-base font-medium">
            اشترك للتنزيل
          </button>
        </div>
        <div className="mt-5  cursor-pointer border border-main p-3 flex justify-center items-center gap-3">
          <span className="text-base text-textColor font-medium">
            معاينة مباشرة
          </span>
          <Icon
            className="text-textColor"
            icon="lucide:eye"
            width="24"
            height="24"
          />
        </div>
        <div className="mt-5 cursor-pointer border border-main p-3 flex justify-center items-center gap-3">
          <span className="text-base text-textColor font-medium">
            اضف الي المجموعة
          </span>
          <Icon
            className="text-textColor"
            icon="stash:save-ribbon"
            width="24"
            height="24"
          />
        </div>
        <h4 className="text-[1.2rem] font-bold text-textColor mt-4">السمات</h4>
        {attributes.map((data, index) => (
          <div key={index} className="flex mt-4 pl-12 items-start gap-12">
            <span className="text-[0.95rem] flex-1 text-body font-light">
              {data.text1}
            </span>
            <span className="text-[0.95rem] flex-1 text-textColor font-light max-w-[180px]">
              {data.text2}
            </span>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <Image
          src="/silver-project.png"
          width={100}
          height={656}
          className="w-full"
        />
        <h3 className="text-[1.9rem] font-medium text-textColor mt-6">الوصف</h3>
        <p className="text-textColor text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <h3 className="text-[1.3rem] font-medium text-textColor mt-4">ميزات</h3>
        <h3 className="text-[1.9rem] font-medium text-textColor mt-4">
          ثورة السلادير
        </h3>
        <p className="text-textColor text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <h3 className="text-[1.9rem] font-medium text-textColor mt-4">
          نموذج الاتصال 7
        </h3>
        <p className="text-textColor text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <h3 className="text-[1.9rem] font-medium text-textColor mt-4">
        ووكومورس
        </h3>
        <p className="text-textColor text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <p className="text-textColor text-[1.1rem] font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
        <h3 className="text-[1.9rem] font-medium text-textColor mt-4">
علامات العناصر
        </h3>
        <div className="flex items-center gap-3 flex-wrap mt-4">
        {
          Array.from({length:8}).map((_,index)=>(
            <div key={index} className="bg-[#F0F9F4] text-textColor text-[1.1rem] font-medium rounded-3xl px-10 py-2 border border-textColor">
        تطوير الويب
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection2;
