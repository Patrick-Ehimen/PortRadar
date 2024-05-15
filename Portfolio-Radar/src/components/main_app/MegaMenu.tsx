import React, { useState, useEffect } from "react";
import { hoverMenuItems } from "../../constants";
import { MegaMenue, Apple, Android } from "../../assets";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".hover-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative hover-menu m-[10px] mt-[13px]">
      <div className="cursor-pointer" onClick={toggleMenu}>
        <img src={MegaMenue} />
      </div>
      {isMenuOpen && (
        <div
          className="absolute font-inter left-0 mt-2 w-[600px] z-20 rounded-md shadow-lg bg-[#161D26] ring-1 ring-black ring-opacity-5 overflow-hidden"
          onClick={closeMenu}
        >
          <div
            className="py-1 grid grid-cols-2 gap-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {hoverMenuItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.link}
                className="flex items-center px-4 py-2 "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`${
                    index === 0 ? "bg-[#674AFF] p-[5px] rounded-lg" : ""
                  } w-6 h-6} ${
                    index === 1 ? "bg-[#FB774A] p-[5px] rounded-lg" : ""
                  }`}
                />
                <div
                  className={`ml-4 cursor-pointer hover:border-b-2 border-[#0caf60] ${
                    index === 0 || index === 1 ? "mt-[10px]" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-sm text-[#A4A8AB] mb-2">{item.para}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex">
            <button className="flex bg-[#252D37] w-[200px] cursor-pointer text-left rounded-lg m-[20px] px-[15px] py-[10px] transform transition duration-500 ease-in-out hover:scale-110">
              <img src={Apple} alt="Apple" className="mr-[5px] mt-[8px]" />
              <div className="flex flex-col">
                <div className="text-gray-400 text-[14px]">Get on the</div>
                <div className="font-bold text-white text-[20px]">
                  App Store
                </div>
              </div>
            </button>
            <button className="flex bg-[#252D37] w-[200px] cursor-pointer text-left rounded-lg m-[20px] px-[15px] py-[10px] transform transition duration-500 ease-in-out hover:scale-110">
              <img src={Android} alt="Android" className="mr-[5px] mt-[8px]" />
              <div className="flex flex-col">
                <div className="text-gray-400 text-[14px]">Get on the</div>
                <div className="text-[20px] font-bold text-white">
                  App Store
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
