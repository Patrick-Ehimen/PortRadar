// types.ts
export interface NFT {
  name: string;
  tokenId: string;
  contractAddress: string;
  imageUrl: string;
  // metadata: string;
}

export interface Balance {
  name: string;
  symbol: string;
  logo: string;
  tokenBalance: number;
  usdValue: number;
  priceinUsd: number;
  percentageChange: number;
  tokenAddress: string;
}

export interface WalletData {
  nfts: NFT[];
  balances: Balance[];
  totalUsdValue: number;
}
