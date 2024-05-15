import { useState, useEffect } from "react";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import { getNFTsFromWalletAddress } from "../../../apis/getNFTBalances";
import { NFT } from "../types";

const NftBalanceDashboard = ({ nftDashboardClicked }) => {
  const [nfts, setNfts] = useState<NFT[]>([]);

  const address = useAddress();
  const networKId = useChainId();

  // fetch NFTs from wallet address

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchNFTs = async () => {
      const chainId = networKId;
      const walletAddress = address;
      if (chainId && walletAddress) {
        console.log(walletAddress);
        console.log(chainId);
        const { nfts } = await getNFTsFromWalletAddress(
          chainId.toString(),
          walletAddress
        );
        console.log("fetched NFTs:", nfts);
        setNfts(nfts);
      }
    };

    if (nftDashboardClicked) {
      fetchNFTs();
    }
  }, [networKId, address, nftDashboardClicked]);

  return (
    <div className="mx-[30px]">
      <h2>NFT Balance Dashboard</h2>
      {nfts.length > 0 ? (
        nfts.map((nft) => (
          <div key={nft.tokenId}>
            <h3>{nft.name}</h3>
            <p>Token ID: {nft.tokenId}</p>
            <p>Contract Address: {nft.contractAddress}</p>
            <img src={nft.imageUrl} alt={nft.name} />
          </div>
        ))
      ) : (
        <p>No NFTs found.</p>
      )}
    </div>
  );
};

export default NftBalanceDashboard;
