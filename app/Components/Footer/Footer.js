import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Logo from "../Logo/Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";
const Footer = () => {
  const callUsData = [
    {
      icon:"ic:sharp-phone",
      text:"01018883449"
    },
    {
      icon:"clarity:email-solid",
      text:"Petrapeter@gmail.com"
    },
    {
      icon:"mdi:location",
      text:"19 شارع مصطفى النحاس , مدينة نصر"
    },
  ]
  const Links = [
    {
      name: "الرئيسية",
      to: "/",
    },
    {
      name: "الخدمات",
      to: "/services",
    },
    {
      name: "الاعمال",
      to: "/projects",
    },
    {
      name: "من نحن",
      to: "/about",
    },
    {
      name: "تواصل معنا",
      to: "/",
    },
    {
      name: "مقالات",
      to: "/",
    },
  ];
  return (
    <div className="h-[405px] footer px-[5%] pt-[8%] flex items-start justify-center gap-16">
      <div>
        <Logo />
        <p className="text-sm font-light text-white/80 mt-6 max-w-[314px]">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. أليكام ليكتوس فيت كومودو ماجنا
          أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو.
        </p>
        <div className="flex items-center gap-6 mt-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 hover:bg-main hover:shadow-light group cursor-pointer duration-300 flex justify-center items-center rounded-full bg-white"
            >
              <Icon className="w-4 h-4 text-main group-hover:text-white" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-[1.1rem] font-bold text-white">روابط</h3>
        {Links.map((data, index) => (
          <Link
            href={data.to}
            key={index}
            className="text-white/80 block text-sm font-light mt-3 hover:text-main duration-200"
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className="w-max">
        <h3 className="text-[1.1rem] font-bold text-white">النشرة الاخبارية</h3>
        <p className="text-sm font-light text-white/80 mt-6 max-w-[280px]">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. أليكام ليكتوس فيت كومودو ماجنا
          أورناري. نولا إيبسوم فيفيرا ليكتوس تورتور إيد يو.
        </p>
        <div className="mt-5 flex items-center gap-1">
          <input
            type="text"
            className="flex-1 bg-white p-3 outline-none"
            placeholder="أدخل بريدك الإلكتروني"
          />
          <div className="bg-main py-3 px-4 hover:shadow-light duration-300 cursor-pointer">
            <Icon
              className="shrink-0 text-white -rotate-90"
              icon="bitcoin-icons:share-outline"
              width="24"
              height="24"
            />
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <label
            className="text-[0.8rem] text-white font-light"
            htmlFor="check"
          >
            أوافق على جميع الشروط والسياسات الخاصة بالشركة
          </label>
          <input
            type="checkbox"
            id="check"
            className="rounded-full accent-main"
          />
        </div>
      </div>
      <div>
      <h3 className="text-[1.1rem] font-bold text-white">اتصل بنا</h3>
{
  callUsData.map((data , index)=>(
    <div className="flex items-center gap-2 mt-4">
      <Icon icon={data.icon} width="18" height="18" className="text-main"/>
      <span className="text-white font-light text-[0.9rem]">{data.text}</span>
    </div>
  ))
}
      </div>
    </div>
  );
};

export default Footer;
