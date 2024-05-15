import Moralis from "moralis";

export async function getErc20TokenWalletBalances(
  chainId: string,
  walletAddress: string
) {
  try {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk2YjcyNWVlLWRlOTUtNDFlYi1iYmVlLWJjYTNlYzdiYmFjOCIsIm9yZ0lkIjoiMzg3NjIyIiwidXNlcklkIjoiMzk4Mjg5IiwidHlwZUlkIjoiZGQxZWUxOWUtOWE1ZS00ZGQwLWI2ZTEtMzM2ZTNiNGQ3ODBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTI5MTA2MzYsImV4cCI6NDg2ODY3MDYzNn0.XAFqoMSR-37HglrQllKc0TRsfzG7SyLDPln11zURQ9w",
    });

    const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
      chain: chainId,
      address: walletAddress,
    });
    // {balance.symbol} {balance.percentageChange}

    console.log("Raw Moralis response:", response);

    // Extract and return the desired data structure
    const formattedResponse = response.result.map((token) => ({
      name: token.name,
      symbol: token.symbol,
      logo: token.logo,
      tokenBalance: token.balanceFormatted,
      usdValue: token.usdValue || "N/A",
      priceinUsd: token.usdPrice,
      percentageChange: token.usdPrice24hrPercentChange,
      usdPrice24hrChange: token.usdPrice24hrUsdChange,
      tokenAddress: token.tokenAddress?._value || "N/A",
    }));

    console.log("Formatted response:", formattedResponse);

    const totalUsdValue = formattedResponse.reduce((sum, item) => {
      return (
        sum +
        (item.usdValue !== "N/A" ? parseFloat(item.usdValue.toString()) : 0)
      );
    }, 0);

    return { balances: formattedResponse, totalUsdValue };
  } catch (e) {
    console.error(e);
    return { balances: [], totalUsdValue: 0 };
  }
}
