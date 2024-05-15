import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export async function fetchTokenBalances(walletAddress) {
  try {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });

    // Check if the input is an ENS domain
    if (walletAddress.endsWith(".eth")) {
      // Resolve ENS domain to address
      const resolvedAddress = await Moralis.Web3API.resolve.resolveENS(
        walletAddress
      );
      walletAddress = resolvedAddress;
    }

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      address: walletAddress,
      chain: EvmChain.ETHEREUM, // Assuming Ethereum for now, adjust as needed
    });

    return response.toJSON();
  } catch (error) {
    console.error("Error fetching token balances:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
