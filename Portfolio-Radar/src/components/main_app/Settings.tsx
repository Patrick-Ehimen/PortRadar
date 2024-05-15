import React, { useState, useRef, useEffect } from "react";
import {
  SettingsIcon,
  RightArrowIcon,
  USD,
  LightIcon,
  DarkIcon,
} from "../../assets";

const Settings = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSettingsClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-[] font-inter">
      <div
        className="flex rounded-lg bg-[#161D26] p-[10px] py-[15px] cursor-pointer"
        onClick={handleSettingsClick}
      >
        <img src={SettingsIcon} alt="settings" className="" />
      </div>

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 w-[305px] font-inter mt-2 h-fit z-20 rounded-md shadow-lg bg-[#161D26] gap-4"
        >
          {/* Example dropdown content */}
          <div className="flex items-center justify-center py-4 ">
            <div className="border-b-2 gap-20 border-[#1C242F] flex py-3">
              <p className="text-white font-bold">Curreny </p>
              <div className="flex flex-row px-[10px] cursor-pointer">
                <img src={USD} />
                <p className="py-[5px] px-[10px] text-white font-bold">USD</p>
                <img src={RightArrowIcon} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-4 ">
            <div className="border-b-2 gap-10 border-[#1C242F] flex py-3">
              <p className="text-white pt-1 font-bold">Theme </p>
              <div className="flex flex-row pl-[10px] bg-[#12181F] rounded-lg cursor-pointer">
                <div className="flex p-2 text-white">
                  <img src={LightIcon} className="pr-[5px]" />
                  Light
                </div>
                <div className="flex bg-[#0CAF60] p-2 rounded-lg text-white">
                  <img src={DarkIcon} className="pr-[5px]" />
                  Dark
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-[15px]">
            <p className="px-2 font-bold text-white text-[14px]">
              All Settings
            </p>
            <img src={RightArrowIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
