import React from "react";

const ChainContext = React.createContext({
  selectedChain: "ethereum",
  setSelectedChain: () => {},
});

export default ChainContext;
