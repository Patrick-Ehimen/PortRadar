import Moralis from "moralis";

export async function getNFTsFromWalletAddress(
  chainId: string,
  walletAddress: string
) {
  try {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YjcyNWVlLWRlOTUtNDFlYi1iYmVlLWJjYTNlYzdiYmFjOCIsIm9yZ0lkIjoiMzg3NjIyIiwidXNlcklkIjoiMzk4Mjg5IiwidHlwZUlkIjoiZGQxZWUxOWUtOWE1ZS00ZGQwLWI2ZTEtMzM2ZTNiNGQ3ODBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTI5MTA2MzYsImV4cCI6NDg2ODY3MDYzNn0.XAFqoMSR-37HglrQllKc0TRsfzG7SyLDPln11zURQ9w",
    });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: chainId,
      address: walletAddress,
    });

    console.log("Raw Moralis NFT response:", response);

    // Extract and return the desired data structure
    const formattedResponse = response.result.map((nft) => ({
      name: nft.name,
      tokenId: nft.tokenId,
      contractAddress: nft.tokenAddress,
      imageUrl: nft.tokenUri,
      // metadata: nft.metadata,
    }));

    console.log("Formatted NFT response:", formattedResponse);

    return { nfts: formattedResponse };
  } catch (e) {
    console.error(e);
    return { nfts: [] };
  }
}
