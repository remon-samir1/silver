import Link from "next/link";
import React from "react";

const Page = () => {
  const team = [
    "أحمد - مدير المشروع",
    "ندى - مصممة واجهة المستخدم وتجربة المستخدم",
    "عمر - مطور الواجهة الأمامية",
    "محمد - مطور الواجهة الخلفية",
  ];
  return (
    <div className="border border-stroke px-5 py-6 rounded">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.4rem] font-bold text-textColor">
          منصة التجارة الإلكترونية
        </h3>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/projects/edit/id"
            className="text-base text-textColor font-medium border border-stroke px-5 hover:bg-main hover:text-white duration-500 py-1 "
          >
            تعديل
          </Link>
          <button className="text-base text-[#E80054] font-medium bg-[#E80054] bg-opacity-10 px-5 hover:text-white hover:bg-opacity-100 duration-500 py-1 ">
            حذف
          </button>
        </div>
      </div>
      <h3 className="text-[1.1rem] font-medium text-textColor mt-6">
        معلومات أساسية
      </h3>
      <p className="mt-5 text-body text-base font-light">
        {" "}
        <span className="text-textColor font-medium">الوصف: </span> إعادة تصميم
        موقع الشركة لتحسين تجربة المستخدم.
      </p>
      <p className="mt-5 text-body text-base font-light">
        {" "}
        <span className="text-textColor font-medium">تاريخ البدء: </span>
        1/9/2025
      </p>
      <p className="mt-5 text-body text-base font-light">
        {" "}
        <span className="text-textColor font-medium">تاريح الانتهاء: </span>
        10/5/2025
      </p>
      <p className="mt-5 text-body text-base font-light">
        {" "}
        <span className="text-textColor font-medium">الاولوية: </span>عالية
      </p>
      <select className="bg-[#6CAF80] text-[0.8rem] mt-5 outline-none border border-main text-white px-5 py-[5px] rounded-3xl">
        <option value="">نشط</option>
        <option value="">مكتمل</option>
        {/* <option value="">قيد الانتظار</option> */}
      </select>
      <h4 className="text-[1.1rem] font-medium text-main mt-6">أعضاء الفريق</h4>
      <ul>
        {team.map((data, index) => (
          <li
            key={index}
            className="text-base text-textColor font-light mt-3 list-disc mx-4"
          >
            {data}
          </li>
        ))}
      </ul>
      <h4 className="text-[1.1rem] font-medium text-main mt-6">
        الملفات والمرفقات
      </h4>
      <div className="mt-4 border border-stroke rounded p-4 text-[0.9rem] text-body font-light">
        المتطلبات.pdf
      </div>
      <div className="mt-4 border border-stroke rounded p-4 text-[0.9rem] text-body font-light">
        المتطلبات.pdf
      </div>
      <button className="text-white bg-main font-medium mt-5 px-6 py-2 rounded hover:shadow-light duration-300">حفظ التغييرات</button>
    </div>
  );
};

export default Page;
