import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Table = ({ headers, action  , editLink , viewLink}) => {
  return (
    <table className="w-full mt-5 text-center">
      <thead>
        <tr className="bg-main bg-opacity-10 ">
          <th className="py-6  text-textColor text-[0.8rem] font-light">
            رقم تسلسلي
          </th>

          {headers.map((data, index) => (
            <th className="py-6 text-textColor text-[0.8rem] font-light">
              {data.title}
            </th>
          ))}
          {action && (
            <th className="py-6 text-textColor text-[0.8rem] font-light">
              الاجراءات
            </th>
          )}
        </tr>
      </thead>
      <tbody className="bg-white">
        {Array.from({ length: 5 }).map((data, index) => (
          <tr className="border-b border-stroke">
            <td className="py-8 text-textColor text-[0.8rem] font-light">
              {index + 1}
            </td>
            {[
              '"جيري جيبسون-ميلر',
              "Jerry.Gibson-Miller@gmail.com",
              "01018883449",
              "3",
              "نشط",
            ].map((data, index) => (
              <td className="py-8 text-textColor text-[0.8rem] font-light">
                {data}
              </td>
            ))}
            <td className="py-8 flex items-center justify-center gap-2 text-textColor text-[0.8rem] font-light">
          {editLink &&

            <Link href={editLink} className="w-[28px] h-[28px] border rounded flex items-center justify-center border-[#FF9B00] hover:bg-[#FF9B00] duration-500 group">
                <Icon
                  className="text-textColor group-hover:text-white"
                  icon="la:edit-solid"
                  width="18"
                  height="18"
                  />
              </Link>
                }
          {viewLink &&

            <Link href={viewLink} className="w-[28px] h-[28px] border rounded flex items-center justify-center border-main hover:bg-main duration-500 group">
                <Icon
                  className="text-textColor group-hover:text-white"
                  icon="clarity:eye-show-line"
                  width="18"
                  height="18"
                  />
              </Link>
                }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
