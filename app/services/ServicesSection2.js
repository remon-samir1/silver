import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection2 = () => {
  const boxes = [
    {
      title:"تطوير الويب",
      image:"/servicesbox1.png",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيسرونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم"
    },
    {
      title:"تصميم التطبيقات",
      image:"/servicesbox2.png",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيسرونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم"
    },
    {
      title:"تصميم واجهة المستخدم وتجربة المستخدم",
      image:"/servicesbox3.png",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيسرونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم"
    },
    {
      title:"الامن",
      image:"/servicesbox4.png",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيسرونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم"
    },
    {
      title:"ادخال البيانات",
      image:"/servicesbox5.png",
      disc:"لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيسرونكوس. فيرمنتوم إن نونك فولبوت ديم أك أولتريسييس. كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم"
    },
  ]
  return (
    <section className="px-[5%] py-20 flex items-start flex-wrap gap-5">
      <div style={{ flex: "1 1 40%" }}>
        <h4 className="text-main text-[1.1rem]  font-medium">ما نقدمه</h4>
        <h3 className="text-textColor text-[1.9rem] font-medium mt-4">
          حلولنا
        </h3>
        <p className="text-[1.1rem] text-body font-light mt-4">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت إنيم لوبرتيس
          رونكوس. فيرمنتوم إن نون1.ك فولبوت ديم أك أولتريسييس. كورابيتور إنيم
          ماوريس أك إنتردوم لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت
          إنيم كورابيتور إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيتكورابيتور
          إنيم ماوريس أك إنتردوم لوريم إيبسوم دولور سيت.
        </p>
      </div>
  {
    boxes.map((data , index)=>(
      <Link 
      href={`/services/${data.title}`}
      key={index}
      style={{ flex: "1 1 40%" }}
      className="bg-[#F0F9F4] p-5 h-[21.5rem] rounded-md"
    >
      <Image src={data.image} width={98} height={98} />
      <h3 className="text-textColor text-[1.3rem] font-bold mt-3">
        {data.title}
      </h3>
      <p className="text-[1.1rem] text-body font-light mt-4 max-w-[90%]">
    {data.disc}
      </p>
      <div className="mt-5 flex items-center gap-2 border-b border-textColor/80 w-max">
        <span className="text-[1.1rem] text-textColor font-medium">أقرأ المزيد</span>
        {">"}
      </div>
    </Link>
    ))
  }
    </section>
  );
};

export default ServicesSection2;
