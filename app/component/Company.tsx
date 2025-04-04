import { useState } from "react";
import comany01 from "../assets/company01.svg";
import company02 from "../assets/company02.svg";
import company03 from "../assets/company03.svg";
import Image, { StaticImageData } from "next/image";

const Company = () => {
  const [companies, setCompanies] = useState<StaticImageData[]>([
    comany01,
    company02,
    company03,
  ]);

  return (
    <div className="flex flex-col items-center space-y-1">
      {companies?.map((companyImage: any) => (
        <div className="w-[40px] h-[40px] rounded-[12px] ">
          <Image
            src={companyImage}
            alt="image"
            className="w-[40px] h-[40px] rounded-[12px]"
          />
        </div>
      ))}

      <button className="w-[40px] h-[40px] text-[20px] flex items-center justify-center border-[0.5px] border-[#B4BBB9] rounded-[12px] text-[#1D874F]">
        +
      </button>
    </div>
  );
};

export default Company;
