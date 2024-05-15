import { useState } from "react";
import ChainContext from "../context/ChainContext";
import { AppDashboard } from ".";
import { AppNavbar } from "../components";

const MainLayout = () => {
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <AppNavbar />
      <AppDashboard />
    </ChainContext.Provider>
  );
};

export default MainLayout;
