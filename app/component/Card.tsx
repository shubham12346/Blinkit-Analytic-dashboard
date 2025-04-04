import Image from "next/image";
import HelpImage from "../assets/help.svg";
export default function Card({
  title,
  children,
  showTitle = true,
}: {
  title: string;
  children: React.ReactNode;
  showTitle?: boolean;
}) {
  return (
    <div className=" bg-white rounded-xl shadow-md border border-gray-200">
      {showTitle && (
        <div className=" border-b-[1px]  border-gray-200">
          <div className="flex items-center justify-between  p-[12px]">
            <h2 className="text-lg font-[600] text-[14px]  text-[#515153] mb-3 ">
              {title}
            </h2>
            <Image src={HelpImage} alt={HelpImage} />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
