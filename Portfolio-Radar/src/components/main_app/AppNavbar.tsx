import { useWallet } from "@thirdweb-dev/react";
import {
  MegaMenu,
  SearchBar,
  ToggleLanguage,
  ConnectWalletButton,
  Settings,
  Notification,
  NetworkSwitcher,
} from "..";

import { useSidebar } from "../../context/SidebarContext";

const AppNavbar = () => {
  const isConnected = useWallet();
  const { isExpanded } = useSidebar();

  const baseClass = "flex ml-[]";

  let additionalClass = "";
  if (isExpanded && isConnected) {
    additionalClass =
      "xl:ml-[106.5px] lg1:ml-[60.5px] lg:-ml-[149.5px] md1:-ml-[186px] -ml-[200px]";
  } else if (!isExpanded && isConnected) {
    additionalClass =
      "xl:ml-[142.5px] lg1:ml-[83.5px] lg:-ml-[150.5px] md1:-ml-[166.5px] -ml-[200px]";
  } else if (isExpanded && !isConnected) {
    additionalClass =
      "xl:ml-[140.5px] lg1:ml-[60.5px] lg:-ml-[115.5px] md1:-ml-[152.5px] -ml-[200px]";
  } else {
    additionalClass =
      "xl:ml-[140.5px] lg1:ml-[83.5px] lg:-ml-[115.5px] md1:-ml-[152.5px] -ml-[200px]";
  }

  const searchBarClass = `${baseClass} ${additionalClass}`;

  return (
    <section className="bg-[#12181F] border-[#161D26] border-l-2 flex">
      <div className="flex m-[20px] ml-[70px]">
        <MegaMenu />
        <SearchBar />
        <div className={`flex ml-[] ${searchBarClass}`}>
          <ToggleLanguage />
          <NetworkSwitcher />
          <ConnectWalletButton />
          <Settings />
          <Notification />
        </div>
      </div>
    </section>
  );
};

export default AppNavbar;
