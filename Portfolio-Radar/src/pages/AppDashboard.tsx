import React, { useState } from "react";
import { Sidebar, AppNavbar } from "../components";

import ActivePageContext from "../context/ActivePageContext";
import { SidebarProvider } from "../context/SidebarContext";
import { ThemeProvider } from "../context/ThemeContext";
import ChainContext from "../context/ChainContext";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  trustWallet,
  zerionWallet,
  rainbowWallet,
  phantomWallet,
} from "@thirdweb-dev/react";

import {
  Exchange,
  MarketPrice,
  News,
  NftMarket,
  Wallet,
  Dashboard,
  Swap,
  Stake,
  Bridge,
} from ".";

const AppDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<number | null>(1);
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ThemeProvider>
      <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
        <ThirdwebProvider
          activeChain={selectedChain}
          clientId="7f3c72d3ab1d9ad498d352ea796720c7"
          // locale={en()}
          supportedWallets={[
            metamaskWallet({ recommended: true }),
            coinbaseWallet({ recommended: true }),
            walletConnect(),
            safeWallet({
              personalWallets: [
                metamaskWallet({ recommended: true }),
                coinbaseWallet({ recommended: true }),
                walletConnect(),
                localWallet(),
                trustWallet(),
                zerionWallet(),
                rainbowWallet(),
                phantomWallet(),
              ],
            }),
            localWallet(),
            trustWallet(),
            zerionWallet(),
            rainbowWallet(),
            phantomWallet(),
          ]}
        >
          <section className="dark:bg-[#161D26] bg-[#EEEEEE] flex flex-frow">
            <ActivePageContext.Provider value={{ activePage, setActivePage }}>
              <SidebarProvider>
                {/* <ThemeProvider> */}
                {/* <div className="flex"> */}
                <Sidebar />
                <div>
                  <AppNavbar />
                  {activePage === 1 && <Dashboard />}
                  {activePage === 2 && <MarketPrice />}
                  {activePage === 3 && <Wallet />}
                  {activePage === 4 && <Exchange />}
                  {activePage === 5 && <NftMarket />}
                  {activePage === 6 && <Swap />}
                  {activePage === 7 && <Bridge />}
                  {activePage === 8 && <Stake />}
                  {activePage === 9 && <News />}
                </div>
                {/* </div> */}
                {/* </ThemeProvider> */}
              </SidebarProvider>
            </ActivePageContext.Provider>
          </section>
        </ThirdwebProvider>
      </ChainContext.Provider>
    </ThemeProvider>
  );
};

export default AppDashboard;
