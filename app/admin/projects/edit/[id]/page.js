"use client";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const clickRef = useRef();
  const clickRef2 = useRef();
  const handleClick = () => {
    clickRef.current.click();
  };
  const handleClick2 = () => {
    clickRef.current.click();
  };
  return (
    <div className="border mt-3 border-stroke px-5 py-6 rounded">
      <h3 className="text-[1.3rem] font-bold text-textColor">
      تعديل المشروع
      </h3>
      <form>
        <div className="mt-4 border border-stroke rounded px-4 py-5">
          <div className="mt-4">
            <label
              htmlFor="name"
              className="text-textColor text-base font-medium"
            >
              عنوان المشروع
            </label>
            <input
              type="text"
              id="name"
              placeholder="ادخل عنوان المشروع"
              className="w-full py-3 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="discription"
              className="text-textColor text-base font-medium"
            >
              وصف المشروع
            </label>
            <textarea
              id="discription"
              placeholder="ادخل وصف المشروع"
              className="w-full py-3 px-5 h-32 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="status"
              className="text-textColor text-base font-medium"
            >
              حالة المشروع
            </label>
            <select
              id="status"
              className="w-full py-3 px-5   text-body rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            >
              <option value="">نشط</option>
              <option value="">مكتمل</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="start"
              className="text-textColor text-base font-medium"
            >
              تاريخ البدء
            </label>
            <input
              type="date"
              id="start"
              placeholder="ادخل عنوان المشروع"
              className="w-full py-3 text-body flex-row-reverse text-right   px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="end"
              className="text-textColor text-base font-medium"
            >
              تاريخ الانتهاء
            </label>
            <input
              type="date"
              id="end"
              placeholder="ادخل عنوان المشروع"
              className="w-full py-3 text-body flex-row-reverse text-right   px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="team"
              className="text-textColor text-base font-medium"
            >
              اعضاء الفريق المعينين
            </label>
            <textarea
              id="team"
              className="w-full py-3 px-5 h-32 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="file"
              className="text-textColor text-base font-medium"
            >
              رفع الملفات
            </label>
            <input ref={clickRef} type="file" id="file" hidden />
            <div className="w-full py-3 flex items-center gap-4 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light">
              <button
                onClick={handleClick}
                className="px-6  duration-300 py-1 text-base font-medium bg-textColor text-white"
              >
                اختر ملف
              </button>
              <span className="text-body text-base font-medium">
                لا يوجد ملف مختار
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 border border-stroke rounded px-4 py-5">
          <div className="mt-4">
            <label
              htmlFor="seo name"
              className="text-textColor text-base font-medium"
            >
              عنوان تحسين محركات البحث
            </label>
            <input
              type="text"
              id="seo name"
              placeholder=" ادخل عنوان تحسين محركات البحث هنا..."
              className="w-full py-3 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="seo disc"
              className="text-textColor text-base font-medium"
            >
              وصف تحسين محركات البحث
            </label>
            <input
              type="text"
              id="seo disc"
              placeholder="ادخل وصف تحسين محركات البحث هنا..."
              className="w-full py-3 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="file"
              className="text-textColor text-base font-medium"
            >
              صورة تحسين محركات البحث
            </label>
            <input ref={clickRef2} type="file" id="file" hidden />
            <div
              onClick={handleClick2}
              className="w-full py-4 flex items-center justify-center border-dashed gap-4 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            >
              <span className="text-body text-base font-medium">
                انقر لرفع الصورة
              </span>
            </div>
          </div>
           
          <div className="mt-4">
            <label
              htmlFor="head"
              className="text-textColor text-base font-medium"
            >
        كود الرأس
            </label>
            <input
              type="text"
              id="head"
              className="w-full py-3 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
        </div>
          <div className="mt-4">
            <label
              htmlFor="body"
              className="text-textColor text-base font-medium"
            >
        كود الجسم
            </label>
            <input
              type="text"
              id="body"
              className="w-full py-3 px-5 rounded border border-stroke bg-transparent mt-3 outline-none focus:border-main placeholder:text-body placeholder:font-light"
            />
        </div>
        </div>

        <div className="mt-8 flex gap-5 item-center">
          <button className="text-base font-medium text-white bg-main border border-main px-7 hover:bg-white hover:text-main duration-500 py-2 rounded-sm">حفظ التغييرات</button>
          <Link href='/admin/projects' className="text-base font-medium text-main bg-white border border-main px-14 py-2 rounded-sm hover:bg-main hover:text-white duration-500">الغاء</Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
