import React, { useState, useEffect } from "react";
import { LightIcon, DarkIcon } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

// const ToggleThemeButton = ({ isExpanded }) => {
const ToggleThemeButton: React.FC<{ isExpanded: boolean }> = ({
  isExpanded,
}) => {
  const [lightBgColor, setLightBgColor] = useState(""); // State for Light div background color
  const [darkBgColor, setDarkBgColor] = useState("bg-[#0caf60] rounded-xl"); // State for Dark div background color

  const { theme, toggleTheme } = useTheme();

  const applyTheme = () => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  };

  React.useEffect(() => {
    applyTheme();
  }, [theme]);

  const handleToggle = (desiredTheme: "light" | "dark") => {
    toggleTheme(desiredTheme);
  };

  const handleLightClick = () => {
    setLightBgColor("bg-[#0caf60] rounded-xl"); // Set Light div background color
    setDarkBgColor(""); // Remove Dark div background color
  };

  const handleDarkClick = () => {
    setDarkBgColor("bg-[#0caf60] rounded-xl"); // Set Dark div background color
    setLightBgColor(""); // Remove Light div background color
  };

  const toggleDarkTheme = () => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  };

  // Inside your ToggleThemeButton component
  useEffect(() => {
    toggleDarkTheme(); // Apply dark mode by default
  }, []); // Empty dependency array ensures this runs only once on mount

  // Determine which image to show based on the current background color
  const currentIcon = lightBgColor ? LightIcon : DarkIcon;

  if (!isExpanded) {
    return (
      <div className="font-inter flex bg-[#161D26] mx-[10px] my-[20px] py-[10px] px-[px] rounded-xl">
        <div
          className={`flex px-[10px] cursor-pointer py-[10px] ${lightBgColor}`}
          onClick={handleLightClick}
        >
          <img src={currentIcon} className="px-[5px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter flex bg-[#161D26] mx-[10px] my-[20px] py-[10px] px-[px] rounded-xl">
      <div onClick={() => handleToggle("light")}>
        <div
          className={`flex ml-[5px] px-[10px] cursor-pointer py-[10px] ${lightBgColor}`}
          onClick={handleLightClick}
        >
          <img src={LightIcon} className="px-[px]" />
          <div className="pl-[5px]">Light</div>
        </div>
      </div>
      <div onClick={() => handleToggle("dark")}>
        <div
          className={`flex py-[10px] cursor-pointer px-[10px] ${darkBgColor}`}
          onClick={handleDarkClick}
        >
          <img src={DarkIcon} className="px-[5px]" />
          <div className="pl-[2px]">Dark</div>
        </div>
      </div>
    </div>
  );
};

export default ToggleThemeButton;
