import { useState, useEffect, useRef } from "react";
import {
  Spanish,
  Chinese,
  English,
  French,
  German,
  Sweedish,
  ArrowIcon,
} from "../../assets";

const languages = [
  { id: 1, flag: English, language: "EN" },
  { id: 2, flag: German, language: "GER" },
  { id: 3, flag: French, language: "FRA" },
  { id: 4, flag: Chinese, language: "CH" },
  { id: 5, flag: Sweedish, language: "SW" },
  { id: 6, flag: Spanish, language: "SP" },
];

const ToggleLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false); // Hide the dropdown after selecting a language
  };

  return (
    <div className="relative ml-[200px] font-inter cursor-pointer">
      <div
        className={`flex ${
          [4, 5].includes(selectedLanguage.id) ? "px-[20.1px]" : ""
        } h-12 rounded-lg bg-[#161D26] py-2 px-4 ${
          [1, 6].includes(selectedLanguage.id) ? "px-[21px]" : ""
        } ${[5].includes(selectedLanguage.id) ? "px-[19.1px]" : ""}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.language}
          className="w-8"
        />
        <p className="text-white py-[5px] px-[8px]">
          {selectedLanguage.language}
        </p>
        <img src={ArrowIcon} className="w-8" />
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="language-dropdown  absolute mt-2 w-[350px] z-20 h-[250px] rounded-md shadow-lg bg-[#161D26] grid grid-cols-3 grid-rows-2 gap-4"
        >
          {languages.map((language) => (
            <div
              key={language.id}
              onClick={() => handleLanguageChange(language)}
              //   className="flex flex-col items-center justify-center py-1"
              className={`flex flex-col items-center justify-center py-1 ${
                selectedLanguage.id === language.id
                  ? "bg-gray-500 m-[10px] rounded-lg"
                  : ""
              }`}
            >
              <img src={language.flag} alt={language.language} />
              <p className="text-white font-thin">{language.language}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleLanguage;
