import React, { createContext, useState, useEffect, useContext } from "react";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import { getErc20TokenWalletBalances } from "../../apis/getErc20TokenBalances";
import { getNFTsFromWalletAddress } from "../../apis/getNFTBalances";
import { WalletData, NFT, Balance } from "../components/types";

interface WalletDataContextProps {
  nfts: NFT[];
  balances: Balance[];
  totalUsdValue: number;
}

export const WalletDataContext = createContext<
  WalletDataContextProps | undefined
>(undefined);

export const WalletDataProvider: React.FC = ({ children }) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [balances, setBalances] = useState<Balance[]>([]);
  const [totalUsdValue, setTotalUsdValue] = useState<number>(0);
  const address = useAddress();
  const chainId = useChainId();

  useEffect(() => {
    const fetchData = async () => {
      if (chainId && address) {
        const nftData = await getNFTsFromWalletAddress(
          chainId.toString(),
          address
        );
        const balanceData = await getErc20TokenWalletBalances(
          chainId.toString(),
          address
        );
        setNfts(nftData.nfts);
        setBalances(balanceData.balances);
        setTotalUsdValue(balanceData.totalUsdValue);
      }
    };
    fetchData();
  }, [chainId, address]);

  return (
    <WalletDataContext.Provider value={{ nfts, balances, totalUsdValue }}>
      {children}
    </WalletDataContext.Provider>
  );
};
