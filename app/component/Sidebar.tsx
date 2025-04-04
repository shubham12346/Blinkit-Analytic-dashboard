import { useState } from "react";
import {
  Home,
  ChevronDown,
  HelpCircle,
  Settings,
  ChevronsUpDown,
  Users,
  ChevronLeft,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { ChevronsLeft } from "lucide-react";
import DashBoard from "../assets/dashboard.png";
import Creative from "../assets/creativeLogo.png";
import Channel from "../assets/perfomance.png";

import { Avatar } from "@mui/material";
import { Menu, MenuItem, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Company from "./Company";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Test_brand");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex h-screen bg-[rgba(255, 255, 255, 1)] mr-3">
      <div className="flex flex-col items-center justify-between space-y-1 shadow py-2">
        <Company />

        <div className="flex flex-col gap-3 items-center justify-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md  mt-2">
          <div className="flex items-center  justify-center   ps-2  cursor-pointer">
            <Users size={20} className=" text-[#031B15CC]" />
          </div>
          <div className="w-[28px] h-[28px] bg-[#9106FF] text-white flex items-center justify-center rounded-full">
            SS
          </div>
        </div>
      </div>
      {/* side nav 2  */}
      <div className="flex flex-col px-2 space-y-2  pb-2 shadow py-2">
        <div className="flex items-center justify-between w-full px-2 ">
          <div className=" border border-[#0000001F] rounded-[12px]">
            <button
              onClick={handleClick}
              className="flex items-center justify-between gap-4  px-3 py-1.5 rounded-xl "
            >
              <div className="flex gap-2">
                <Avatar
                  sx={{
                    bgcolor: "#309E96",
                    fontWeight: "600",
                    fontSize: "11px",
                    padding: "3px",
                    height: "24px",
                    width: "24px",
                    borderRadius: "8px",
                  }}
                  className=" text-white"
                >
                  SS
                </Avatar>
                <span className="text-[14px] font-[600]  mr-2  ">
                  Test_brand
                </span>
              </div>

              <ChevronsUpDown className="w-4 h-4" />
            </button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Brand 1</MenuItem>
              <MenuItem onClick={handleClose}>Brand 2</MenuItem>
              <MenuItem onClick={handleClose}>Brand 3</MenuItem>
            </Menu>
          </div>

          <ChevronsLeft className="w-5 h-5 text-teal-600 ml-5" />
        </div>

        {/* Middle Section: Navigation */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {/* Overview */}
            <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-[rgb(223,234,232)] cursor-pointer">
              <Image src={DashBoard} alt="overview" />
              {!isCollapsed && (
                <span className="text-gray text-[#031B15] font-[500] text-[14px] ">
                  Overview
                </span>
              )}
            </li>

            {/* Channels - Collapsible */}
            <li className="cursor-pointer">
              <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-[rgb(223,234,232)] cursor-pointer">
                <div className="flex justify-between w-full">
                  <div className="flex gap-2">
                    <Image src={Channel} alt="Channel" />
                    {!isCollapsed && (
                      <span className="text-[#031B15] font-[500] text-[14px]">
                        Channels
                      </span>
                    )}
                  </div>
                  {!isCollapsed && <ChevronDown size={14} />}
                </div>
              </div>
              {/* Submenu */}
              <ul className="pl-6 space-y-1">
                <li className="text-sm text-gray-700 cursor-pointer p-2 hover:bg-[rgb(223,234,232)]">
                  Meta Ads
                </li>
                <li className="text-sm text-gray-700 cursor-pointer p-2 hover:bg-[rgb(223,234,232)]">
                  Google Ads
                </li>
                <li className="text-sm !bg-[#DFEAE8] text-[#027056] p-2 rounded-md font-medium">
                  Quick Commerce
                </li>
              </ul>
            </li>

            {/* Creatives */}
            <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-[rgb(223,234,232)] cursor-pointer">
              <Image src={Creative} alt="Creative" />
              {!isCollapsed && (
                <span className="text-[#031B15] font-[500] text-[14px]">
                  Creatives
                </span>
              )}
            </li>
          </ul>
        </nav>

        {/* Bottom Section: Settings & Help */}
        <div className=" pt-2 flex flex-col space-y-2 w-full">
          <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100  text-[14px] font-[500] text-[#031B15CC]">
            <HelpCircle size={18} />
            {!isCollapsed && <span>Help</span>}
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 text-[14px] font-[500] text-[#031B15CC]">
            <Settings size={18} />
            {!isCollapsed && <span>Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
