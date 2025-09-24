import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  const projects = [
    {
      id: 1,
      status: "مكتمل",
      title: "إعادة تصميم الموقع الإلكتروني",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
    {
      id: 2,
      status: "قيد الانتظار",
      title: "تطوير التطبيقات الهاتفية المحمولة",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
    {
      id: 3,
      status: "نشط",
      title: "منصة التجارة الإلكترونية",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
    {
      id: 4,
      status: "نشط",
      title: "إعادة تصميم الموقع الإلكتروني",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
    {
      id: 5,
      status: "قيد الانتظار",
      title: "تطوير التطبيقات الهاتفية المحمولة",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
    {
      id: 6,
      status: "مكتمل",
      title: "منصة التجارة الإلكترونية",
      date: "25/6",
      client:"نك كورب",
      orderNumber: 245,
      support: "الدعم الفني",
    },
  ];

  const filters = [
    {
      text: "الكل",
      value: "all",
    },
    {
      text: "موافقة",
      value: "all",
    },
    {
      text: "قيد الانتظار",
      value: "all",
    },
    {
      text: "مرفوضة",
      value: "all",
    },
  ];
  return (
    <div className="mt-3">
      <h3 className="text-textColor text-[1.4rem] font-bold">إدارة المشاريع</h3>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center px-4 justify-start gap-3 flex-row-reverse border rounded w-[300px] h-max border-[#DDE4E9]">
            <input
              type="text"
              placeholder="بحث"
              className="flex-1 border-none outline-none text-textColor bg-transparent p-2"
            />
            <Icon
              className="text-body"
              icon="ep:search"
              width="18"
              height="18"
            />
          </div>
          <div className="flex items-center gap-2 border border-stroke rounded p-2">
            {filters.map((data, index) => (
              <button
                key={index}
                className="text-[0.8rem] text-body px-5 py-1 hover:text-white hover:bg-main duration-200"
              >
                {data.text}
              </button>
            ))}
          </div>
        </div>
        <Link
          href="/admin/projects/add"
          className="flex items-center gap-3 py-2 px-4 rounded text-white bg-main hover:bg-white hover:text-main duration-500  border border-main"
        >
          <Icon icon="ic:sharp-add" width="18" height="18" />
          <span>اضافة مشروع جديد</span>
        </Link>
      </div>
      <div className="mt-7 flex items-center flex-wrap gap-4">
        {projects.map((data, index) => (
          <div
            style={{
              background:
                "linear-gradient(360deg, rgba(20, 152, 79, 0.05) 0%, rgba(228, 229, 255, 0) 100%)",
            }}
            className="flex-1 min-w-[250px] py-5 px-3 border border-stroke rounded-lg"
          >
            <span
              className={` ${
                data.status === "مكتمل"
                  ? "bg-[#3952AA] border-[#3952AA]"
                  : data.status === "قيد الانتظار"
                  ? "bg-[#BAA219] border-[#BAA219] !text-textColor"
                  : data.status === "نشط" &&
                    "bg-[#6CAF80] !bg-opacity-100 border-[#2F8E4C]"
              } bg-opacity-80 px-6 py-1 text-[0.7rem] font-medium text-white rounded-3xl border`}
            >
              {data.status}
            </span>
            <h4 className="text-textColor text-base font-medium mt-4">{data.title}</h4>
            <p className="mt-4 text-[0.85rem] font-medium text-textColor">العمبل: {data.client}</p>
            <p className=" text-[0.85rem] font-medium text-textColor">تاريخ البدء: {data.date}</p>
            <p className=" text-[0.85rem] font-medium text-textColor">تاريخ الانتهاء: {data.date}</p>
            <p className="mt-5 text-body text-[0.75rem] font-light max-w-[215px]">
              {data.title}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <button className="flex items-center justify-center gap-3 flex-1 p-2 hover:shadow-light duration-300 bg-main rounded-sm border border-main">
              <Icon className="text-white" icon="majesticons:eye-line" width="18" height="18" />
              <span className="text-white text-[0.8rem] font-medium">عرض التفاصيل</span>
              </button>
              <Link href='/admin/projects/view/id' className="flex items-center justify-center gap-3 flex-1 p-2 bg-transparent hover:bg-main group duration-300 rounded-sm border border-main">
              <Icon className="text-main group-hover:text-white" icon="fa-regular:edit" width="18" height="18" />
              <span className="text-main group-hover:text-white text-[0.8rem] font-medium">عرض التفاصيل</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
