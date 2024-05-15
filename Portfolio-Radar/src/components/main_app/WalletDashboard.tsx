import { useState, useEffect } from "react";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import {
  WalletBalance,
  CurrentWalletBalance,
  NftBalanceDashboard,
  SearchWalletAddress,
} from "..";
import { getErc20TokenWalletBalances } from "../../../apis/getErc20TokenBalances";

const WalletDashboard = () => {
  const [balances, setBalances] = useState([]);
  const [totalUsdValue, setTotalUsdValue] = useState(0);
  const [currentView, setCurrentView] = useState("WalletBalance");
  // const [nftDashboardClicked, setNftDashboardClicked] = useState(false);

  const address = useAddress();
  const networKId = useChainId();

  // This useEffect hook is used to fetch the ERC20 token wallet balances when the network ID or wallet address changes.
  useEffect(() => {
    // The fetchBalances function is an async function that fetches the balances.
    const fetchBalances = async () => {
      const chainId = networKId;
      const walletAddress = address;
      // If both the chainId and walletAddress are truthy, the ERC20 token wallet balances are fetched.
      if (chainId && walletAddress) {
        // The getErc20TokenWalletBalances function is called with the chainId and walletAddress as arguments.
        const { balances, totalUsdValue } = await getErc20TokenWalletBalances(
          chainId.toString(),
          walletAddress
        );
        // The balances state is updated with the fetched balances.
        setBalances(balances);
        setTotalUsdValue((prevTotalUsdValue) => totalUsdValue);
      }
    };

    // The fetchBalances function is called when the network ID or wallet address changes.
    fetchBalances();
  }, [networKId, address, setTotalUsdValue, currentView]);

  return (
    <div className="ml-[50px]">
      <CurrentWalletBalance totalUsdValue={totalUsdValue} />
      <div className="m-[30px] font-inter text-white bg-[#12181F] w-fit px-[15px] rounded-lg border-gray-900 border-4">
        <button
          onClick={() => {
            setCurrentView("WalletBalance");
          }}
          className={`${
            currentView === "WalletBalance" ? "bg-gray-600" : ""
          } p-2 rounded-md`}
        >
          Token Balances
        </button>
        {/* <button
          onClick={() => {
            setCurrentView("NftBalanceDashboard");
          }}
          className={`${
            currentView === "NftBalanceDashboard" ? "bg-gray-600" : ""
          } p-2 rounded-md`}
        >
          NFT Balance
        </button> */}
        <button
          onClick={() => setCurrentView("SearchWalletAddress")}
          className={`${
            currentView === "SearchWalletAddress" ? "bg-gray-600" : ""
          } p-2 rounded-md`}
        >
          Address or ENS
        </button>
      </div>
      {currentView === "WalletBalance" && <WalletBalance balances={balances} />}
      {/* {currentView === "NftBalanceDashboard" && (
        <NftBalanceDashboard nftDashboardClicked={nftDashboardClicked} />
      )} */}
      {currentView === "SearchWalletAddress" && <SearchWalletAddress />}
    </div>
  );
};

export default WalletDashboard;
