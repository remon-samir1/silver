import Table from "@/app/Components/Table/Table";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  const headers = [
    {
      title: "الاسم",
      key: "name",
    },
    {
      title: "البريد الالكتروني",
      key: "name",
    },
    {
      title: "رقم الهاتف",
      key: "name",
    },
    {
      title: "المشاريع",
      key: "name",
    },
    {
      title: "الحالة",
      key: "name",
    },
  ];
  const filters = [
    {
      text: "الكل",
      value: "all",
    },
    {
      text: "نشط",
      value: "all",
    },
    {
      text: "غير نشط",
      value: "all",
    },
  ];
  const cards = [
    {
      title: "إجمالي العملاء",
      value: "120",
    },
    {
      title: "المشاريع النشطة",
      value: "120",
    },
    {
      title: "طلبات معلقة",
      value: "120",
    },
  ];
  return (
    <div className="mt-3">
      <h3 className="text-textColor text-[1.2rem] font-bold">ادارة العملاء</h3>
      <div className="mt-5 flex items-center gap-5">
        {cards.map((data, index) => (
          <div
            key={index}
            className="bg-[#F0F9F4] hover:shadow-inner  duration-200 overflow-hidden relative border rounded border-[#DDE4E9] p-3 flex-1"
          >
            <p className="text-textColor text-[1.2rem] font-light">
              {data.title}
            </p>
            <p className="text-[1.4rem] font-medium text-textColor mt-2">
              {data.value}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-textColor mt-5 text-[1.2rem] font-bold">
        قائمة العملاء
      </h3>
      <div className="mt-4 bg-card p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 justify-start gap-3 flex-row-reverse border rounded w-[230px] h-max border-[#DDE4E9]">
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
                  className="text-[0.8rem] text-body px-7 py-1 hover:text-white hover:bg-main duration-200"
                >
                  {data.text}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="/admin/users/add"
            className="flex items-center gap-3 py-2 px-4 rounded text-main hover:bg-main hover:text-white duration-500 hover:shadow-light border border-main"
          >
            <Icon icon="ic:sharp-add" width="18" height="18" />
            <span>اضافة عميل جديد</span>
          </Link>
        </div>
        <Table headers={headers} action editLink="/admin/users/edit/id" viewLink="/admin/users/view/id" />
      </div>
    </div>
  );
};

export default Page;
