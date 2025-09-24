import Table from "@/app/Components/Table/Table";
import Image from "next/image";
import React from "react";

const Page = () => {
  const boxes = [
    {
      title: "اجمالي المشاريع",
      value: "4",
    },
    {
      title: "اجمالي المدفوعات",
      value: "3000 جنيه مصري",
    },
    {
      title: "اخر تسجيل دخول",
      value: "13-8-2015",
    },
  ];
  const invoices = [
    {
      title: "الفواتير",
      value: "0",
    },
    {
      title: "مدفوع",
      value: "300",
    },
    {
      title: "معلق",
      value: "300",
    },
    {
      title: "متأخر",
      value: "300",
    },
  ];
  return (
    <div className="mt-3">
      <h3 className="text-textColor text-[1.2rem] font-bold">عرض ملف العميل</h3>
      <div className="mt-8 border border-stroke rounded p-5">
        <Image
          src="/user.png"
          width={129}
          height={129}
          className="rounded-full"
        />
        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="text-base text-textColor font-light"
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="ُemail"
              className="text-base text-textColor font-light"
            >
              البريد الالكتروني
            </label>
            <input
              type="ُemail"
              id="ُemail"
              className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="text-base text-textColor font-light"
            >
              رقم الهاتف
            </label>
            <input
              type="text"
              id="phone"
              className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="company"
              className="text-base text-textColor font-light"
            >
              الشركة
            </label>
            <input
              type="text"
              id="company"
              className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start gap-4">
        <div className="flex-1 p-5 rounded border border-stroke">
          <h3 className="text-textColor text-[1.1rem] font-bold">المشاريع</h3>
          <table className="text-center mt-5 w-full">
            <thead>
              <tr className="bg-main">
                <th className="text-white py-4 text-base font-medium ">
                  اسم المشروع
                </th>
                <th className="text-white py-4 text-base font-medium ">
                  الحالة
                </th>
                <th className="text-white py-4 text-base font-medium ">
                  الموعد النهائي
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 4 }).map((data, index) => (
                <tr className="border-b border-stroke">
                  <td className="text-[0.7rem] font-medium text-body py-6">
                    تطبيق الهاتف المحمول
                  </td>
                  <td className="py-6">
                    <span className="text-[0.7rem] font-medium px-4 rounded-3xl py-1  text-white border border-main bg-[#2F8E4C] bg-opacity-70">
                      مكتمل
                    </span>
                  </td>
                  <td className="text-[0.7rem] font-medium text-body py-6">
                    1056468
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1  py-5 px-10 rounded border border-stroke">
          <h3 className="text-textColor text-[1.1rem] font-bold">
            الفواتير والمدفوعات
          </h3>
          <h3 className="mt-5 bg-main text-base font-medium text-white p-4">
            الإجمالي
          </h3>
          {invoices.map((data, index) => (
            <div className="flex items-center justify-between px-4 py-6 border-b border-stroke">
              <span className="text-base font-medium text-body">
                {data.title}
              </span>
              <span className="text-base font-medium text-body">
                {data.value} جنية مصري{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 border border-stroke rounded px-4 py-5">
        <h3 className="text-textColor text-[1.1rem] font-medium">
          الدعم والتواصل
        </h3>
        <p className="mt-4 border w-[500px] border-stroke rounded py-4 px-5 text-[0.85rem] font-medium text-body">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. نام إيجاستس.
        </p>
      </div>
      <div className="mt-5 border border-stroke rounded px-4 py-5">
        <h3 className="text-textColor text-[1.1rem] font-medium">
          احصائيات سريعة
        </h3>
        <div className="flex items-center gap-4 mt-4">
          {boxes.map((data, index) => (
            <div className="flex-1 py-4 px-3 border-r border-stroke bg-card">
              <h4 className="text-[1.2rem] font-medium text-main">
                {data.title}
              </h4>
              <p className="text-[1.1rem] mt-3 font-medium text-body">
                {data.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
