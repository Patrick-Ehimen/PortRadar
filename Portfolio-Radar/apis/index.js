import Moralis from "moralis";

try {
  await Moralis.start({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YjcyNWVlLWRlOTUtNDFlYi1iYmVlLWJjYTNlYzdiYmFjOCIsIm9yZ0lkIjoiMzg3NjIyIiwidXNlcklkIjoiMzk4Mjg5IiwidHlwZUlkIjoiZGQxZWUxOWUtOWE1ZS00ZGQwLWI2ZTEtMzM2ZTNiNGQ3ODBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTI5MTA2MzYsImV4cCI6NDg2ODY3MDYzNn0.XAFqoMSR-37HglrQllKc0TRsfzG7SyLDPln11zURQ9w",
  });

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: "0x1",
    address: "0xDE790418F66EfF671D5F3cDde945CB6f8Aa876CD",
  });

  console.log("Raw Moralis response:", response);

  // Extract and return the desired data structure
  const formattedResponse = response.result.map((nft) => ({
    name: nft.name,
    tokenId: nft.tokenId,
    contractAddress: nft.tokenAddress?._value || "N/A",
    imageUrl: nft.tokenUri,
    metadata: nft.metadata,
  }));

  console.log("Formatted response:", formattedResponse);
} catch (e) {
  console.error(e);
}
