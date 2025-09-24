import Image from "next/image";
import React from "react";

const ContactSection3 = () => {
  return (
    <div className="px-[5%] pb-20">
      <div className="h-[450px] w-full rounded-md flex items-start flex-row-reverse bg-[#F0F9F4]">
        <div className="flex-1 h-full">
          <Image
            src="/silver-map.png"
            width={100}
            height={100}
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 px-[3%] py-[5%]">
          <form>
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 rounded border bg-[#F8FEFB] border-[#DDE4E9] outline-none mt-4"
            />
            <input
              type="email"
              placeholder="البريد الالكتروني"
              className="w-full p-3 rounded border bg-[#F8FEFB] border-[#DDE4E9] outline-none mt-4"
            />
            <textarea
              placeholder="رسالتك"
              className="w-full p-3 h-40 rounded border bg-[#F8FEFB] border-[#DDE4E9] outline-none mt-4"
            />
            <button type="submit" className="px-12 mt-4 hover:shadow-light duration-300 py-2 rounded-md bg-main text-white text-[1.1rem] font-medium">إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection3;
