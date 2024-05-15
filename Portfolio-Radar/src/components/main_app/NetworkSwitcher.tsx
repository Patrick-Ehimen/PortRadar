import { useState, useRef, useEffect, useContext } from "react";
import { switchNetwork, networks } from "../../utils/addNetworksToMetamask";
import {
  Polygon,
  Arbitrum,
  Avalance,
  BinanceSmartChain,
  Ethereum,
  Optimism,
  Base,
  ArrowIcon,
  Sepolia,
  Mumbai,
} from "../../assets";
import ChainContext from "../../context/ChainContext";

const networkIcons = [
  { id: 1, icon: Ethereum, name: "Ethereum" },
  { id: 2, icon: Polygon, name: "Polygon" },
  { id: 3, icon: BinanceSmartChain, name: "Binance" },
  { id: 4, icon: Arbitrum, name: "Arbitrum" },
  { id: 5, icon: Optimism, name: "Optimism" },
  { id: 6, icon: Avalance, name: "Avalanche" },
  { id: 7, icon: Base, name: "Base" },
  { id: 8, icon: Sepolia, name: "Sepolia" },
  { id: 9, icon: Mumbai, name: "Mumbai" },
];

const NetworkSwitcher = () => {
  const { selectedChain, setSelectedChain } = useContext(ChainContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(networkIcons[0]); // Defaults to the first network
  const dropdownRef = useRef(null);

  const toggleDropdown = async (network) => {
    setSelectedNetwork(network); // Update the selected network
    setShowDropdown(!showDropdown);

    setSelectedChain(network.name.toLowerCase());

    const chainId = networks[network.name.toLowerCase()]?.chainId;
    if (chainId) {
      try {
        await switchNetwork(chainId);
      } catch (error) {
        console.error("Failed to switch network:", error);
      }
    } else {
      console.error("Network not found:", network.name);
    }
  };

  // Close the dropdown when clicking outside
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
    <div className="relative font-inter bg-[#161D26] p-2 pt-[12px]  px-3 rounded-lg ml-[20px]">
      <button className="flex items-center">
        {/* Assuming you want to show the first icon by default */}
        <img
          src={selectedNetwork.icon}
          alt={networkIcons[0].name}
          className="w-8 h-8"
        />
        <img
          src={ArrowIcon}
          className="w-1/2 pl-4"
          onClick={() => toggleDropdown(selectedNetwork)}
        />
      </button>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 w-48 text-gray-400 z-20 rounded-md shadow-lg bg-[#161D26]"
        >
          {networkIcons.map((network) => (
            <div
              key={network.id}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-gray-300"
              onClick={() => toggleDropdown(network)}
            >
              <img src={network.icon} alt={network.name} className="w-8 h-8" />
              <span className="ml-2">{network.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NetworkSwitcher;
