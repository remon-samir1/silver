import Image from "next/image";
import React from "react";

const AboutSection4 = () => {
  return (
    <div className="px-[5%] py-20">
      <div className="text-center">
        <h3 className="text-textColor text-[1.9rem] font-medium">فريقنا</h3>
        <p className="text-body text-[1.1rem] font-light mt-3">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. هندريت سيت.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-6">
        {Array.from({ length: 4 }).map((data, index) => (
          <div
            className="flex-1 relative rounded-3xl overflow-hidden h-[450px]"
            key={index}
          >
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgb(20, 152, 79 , 0.8) 0%, rgba(0, 35, 63, 0) 60.77%)",
              }}
              className="absolute bottom-0 w-full h-[270px]  flex items-start p-[10%] flex-col justify-end"
            >
              <h3 className="text-[1.1rem] font-medium text-white">جالين كالين</h3>
              <p className="text-white text-[0.9rem] font-light mt-3">مؤسس ميدياهاوس</p>
            </div>
            <Image
              src="/silver-team.png"
              alt="silver team"
              height={100}
              width={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection4;
