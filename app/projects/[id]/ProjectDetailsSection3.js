import Image from "next/image";
import React from "react";

const ProjectDetailsSection3 = () => {
  return (
    <div className="px-[5%] py-20">
      <div className="flex items-center justify-between">
        <h3 className="text-textColor text-[1.9rem] font-medium">
          عناصر مشابه
        </h3>
        <div className="mt-5 cursor-pointer flex items-center gap-2 border-b border-transparent hover:border-textColor/80 w-max">
        <span className="text-[1.1rem] text-textColor font-medium">أقرأ المزيد</span>
        {">"}
      </div>
      </div>
      <div className="flex items-center gap-4 mt-5">
        {
          Array.from({length:3}).map((_,index)=>(
            <Image src='/silver-project.png' width={100} height={310} className='flex-1 '/>
          ))
        }
      </div>
    </div>
  );
};

export default ProjectDetailsSection3;
