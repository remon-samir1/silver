"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Sidbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState();
  const SideData = [
    {
      title: "لوحة التحكم",
      icon: "ep:menu",
      link: "/admin",
    },
    {
      title: "العملاء",
      icon: "ph:user-bold",
      link: "/admin/users",
    },
    {
      title: "ادارة المشاريع",
      icon: "bytesize:work",
      link: "/admin/projects",
    },
    {
      title: "الخدمات",
      icon: "famicons:server-outline",
      link: "/admin/services",
    },
  ];
  const SecondData = [
    {
      title: "ادارة المحتوي",
      icon: "streamline-ultimate-color:layout-content",
      link: "/admin/content",
    },
    {
      title: "الفواتير",
      icon: "stash:invoice",
      link: "/admin/invoices",
    },
    {
      title: "الدعم",
      icon: "proicons:chat",
      link: "/admin/help",
    },
    {
      title: "الاعدادات",
      icon: "weui:setting-outlined",
      link: "/admin/settings",
    },
  ];

  return (
    <div className="bg-[#F0F9F4] w-[290px] p-4">
      <Image
        src="/silver.png"
        width={52}
        height={67}
        className="mt-6 mb-10 mx-auto"
      />
      {SideData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className={`flex mt-1 items-center gap-2 group duration-300 cursor-pointer hover:bg-main w-full p-3  rounded ${
            pathname === data.link && "bg-main"
          }`}
        >
          <Icon
            className={`text-body group-hover:text-white duration-300 cursor-pointer ${
              pathname === data.link && "text-white"
            }`}
            icon={data.icon}
            width="15"
            height="15"
          />
          <span
            className={`text-sm font-light text-body duration-300 cursor-pointer group-hover:text-white ${
              pathname === data.link && "text-white"
            }`}
          >
            {data.title}
          </span>
        </Link>
      ))}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between gap-2 group duration-300 cursor-pointer hover:bg-main w-full p-3  rounded ${
          open && "bg-main"
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon
            className={`text-body group-hover:text-white duration-300 cursor-pointer ${
              open && "text-white"
            }`}
            icon="lsicon:order-outline"
            width="15"
            height="15"
          />
          <span
            className={`text-sm font-light text-body duration-300 cursor-pointer group-hover:text-white ${
              open && "text-white"
            }`}
          >
            ادارة الطلبات
          </span>
        </div>
        <Icon
          className={`text-body ${
            open ? "rotate-90 text-white" : "rotate-180"
          } group-hover:text-white duration-300 cursor-pointer`}
          icon="weui:arrow-outlined"
          width="22"
          height="22"
        />
      </button>
      <div
        className={`flex flex-col  gap-3 mr-3 duration-300 overflow-hidden ${
          open ? "h-12  my-2 " : "h-0 "
        }`}
      >
        <Link
          className={`text-sm font-light text-body hover:text-main duration-200 mr-6 ${
            pathname === "/admin/orders" && "text-main"
          }`}
          href="admin/orders"
        >
          الطلبات
        </Link>
        <Link
          className={`text-sm font-light text-body hover:text-main duration-200 mr-6 ${
            pathname === "/admin/orders-completed" && "text-main"
          }`}
          href="admin/orders-completed"
        >
          الطلبات المكتملة
        </Link>
      </div>
      {SecondData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className={`flex mt-1 ${
            pathname === data.link && "bg-main"
          } items-center gap-2 group duration-300 cursor-pointer hover:bg-main w-full p-3 ${
            index === 3 && "mt-10"
          } rounded`}
        >
          <Icon
            className={`text-body group-hover:text-white duration-300 cursor-pointer ${
              pathname === data.link && "text-white"
            }`}
            icon={data.icon}
            width="15"
            height="15"
          />
          <span
            className={`text-sm font-light text-body duration-300 cursor-pointer group-hover:text-white ${
              pathname === data.link && "bg-main"
            }`}
          >
            {data.title}
          </span>
        </Link>
      ))}
      <button className="flex items-center gap-2 group duration-300 cursor-pointer hover:bg-main w-full p-3  rounded">
        <Icon
          className="text-body group-hover:text-white duration-300 cursor-pointer"
          icon="clarity:logout-line"
          width="15"
          height="15"
        />
        <span className="text-sm font-light text-body duration-300 cursor-pointer group-hover:text-white">
          تسجيل الخروج
        </span>
      </button>
    </div>
  );
};

export default Sidbar;
