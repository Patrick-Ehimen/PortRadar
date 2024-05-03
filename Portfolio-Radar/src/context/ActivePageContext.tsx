import React from "react";

interface ActivePageContextType {
  activePage: number | null;
  setActivePage: (page: number | null) => void;
}

const ActivePageContext = React.createContext<ActivePageContextType>({
  activePage: null,
  setActivePage: () => {},
});

export default ActivePageContext;
