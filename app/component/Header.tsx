"use client";
import { useState } from "react";
import { ChevronDownIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import BlinktImage from "../assets/blinkt.png";
import zeptoImage from "../assets/zepto.png";
import instamart from "../assets/swiggy.png";
import ToggleCard from "./ToggleSwitch";

export default function Header() {
  const [selectedDate, setSelectedDate] = useState(
    "Aug 01, 024 - Aug 03, 2024"
  );
  const tabs = ["BlinkIt", "Zepto", "Instamart"];
  const Images = [BlinktImage, zeptoImage, instamart];
  const [activeTab, setActiveTab] = useState("BlinkIt");

  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-white  border-[1px] rounded-t-[10px] border-[#0000001F]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[14px]  font-[500] text-gray-900">
            Quick Commerce
          </span>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-4">
          <ToggleCard />
          <button className="flex items-center gap-2 px-4 py-2 border-[1px] border-[#D9D9D9] rounded-[12px] hover:bg-gray-200 transition-all">
            <CalendarIcon size={18} className="text-gray-600" />
            <span className="text-gray-700">{selectedDate}</span>
            <ChevronDownIcon size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex justify-start p-4 border-b-[1px] border-[#0000001F]">
        {/* Tabs */}
        <div className="flex gap-4 border-[0.5px] border-[#031B151A]  rounded-[12px] p-1 ">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-[6px]  rounded-[10px] text-sm font-medium transition-all ${
                index === 0
                  ? " bg-[rgb(223,234,232)] text-[rgb(2, 112, 86)] "
                  : " text-[rgb(3, 27, 21)] opacity-[0.3]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="flex gap-1 items-center">
                <Image
                  src={Images[index]}
                  alt={"image"}
                  className="h-[16px] w-[16px]"
                />
                {tab}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
