import React from "react";

const Page = () => {
  return (
    <div className="mt-3">
      <h3 className="text-textColor text-[1.2rem] font-bold">
        اضافة عميل جدبد
      </h3>
      <form className="mt-5 border border-stroke rounded px-4 pb-6">
        <div className="mt-5">
          <label htmlFor="name" className="text-base text-textColor font-light">
            الاسم الكامل
          </label>
          <input type="text" id="name" className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent" />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="text-base text-textColor font-light">
    البريد الالكتروني
          </label>
          <input type="email" id="email" className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent" />
        </div>
        <div className="mt-5">
          <label htmlFor="phone" className="text-base text-textColor font-light">
            الهاتف
          </label>
          <input type="text" id="phone" className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent" />
        </div>
        <div className="mt-5">
          <label htmlFor="company" className="text-base text-textColor font-light">
          الشركة
          </label>
          <input type="text" id="company" className="p-2 w-full border focus:border-main border-stroke rounded mt-2 outline-none bg-transparent" />
        </div>
        <button type="submit" className="mt-10 bg-main p-2 w-full text-[1rem] font-medium rounded hover:shadow-light duration-300 text-white">حفظ</button>
      </form>
    </div>
  );
};

export default Page;
