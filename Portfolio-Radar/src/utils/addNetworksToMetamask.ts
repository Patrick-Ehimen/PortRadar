interface NetworkDetails {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  blockExplorerUrls: string[];
}

export const networks: Record<string, NetworkDetails> = {
  ethereum: {
    chainId: "0x1",
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    chainName: "Ethereum Mainnet",
    nativeCurrency: { name: "ETH", symbol: "MATIC", decimals: 18 },
    blockExplorerUrls: ["https://etherscan.io"],
  },
  polygon: {
    chainId: "0x89",
    rpcUrls: ["https://polygon.llamarpc.com"],
    chainName: "Polygon Mainnet",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  binance: {
    chainId: "0x38",
    rpcUrls: ["https://binance.llamarpc.com"],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
    blockExplorerUrls: ["https://bscscan.com/"],
  },
  avalanche: {
    chainId: "0xa86a",
    rpcUrls: ["https://1rpc.io/avax/c"],
    chainName: "Avalanche Network C-Chain",
    nativeCurrency: { name: "AVAX", symbol: "AVAX", decimals: 18 },
    blockExplorerUrls: ["https://snowtrace.io/"],
  },
  optimism: {
    chainId: "0xa",
    rpcUrls: ["https://optimism.llamarpc.com"],
    chainName: "OP Mainnet",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
    blockExplorerUrls: ["https://optimistic.etherscan.io/"],
  },
  arbitrum: {
    chainId: "0xa4b1",
    rpcUrls: ["https://arbitrum.llamarpc.com"],
    chainName: "Arbitum One",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
    blockExplorerUrls: ["https://explorer.arbitrum.io"],
  },
  base: {
    chainId: "0x2105",
    rpcUrls: ["https://base.llamarpc.com"],
    chainName: "Base Mainnet",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
    blockExplorerUrls: ["https://basescan.org"],
  },
};

export async function switchNetwork(chainId: string) {
  if (window.ethereum) {
    try {
      // Attempt to switch to the network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    } catch (switchError) {
      // If the network is not added to MetaMask, add it
      if (switchError.code === 4902) {
        const networkKey = Object.keys(networks).find(
          (key) => networks[key].chainId === chainId
        );
        if (networkKey) {
          const network = networks[networkKey];
          try {
            // Ensure chainId is a string with "0x" prefix for wallet_addEthereumChain
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: network.chainId, // Use the chainId as a string with "0x" prefix
                  chainName: network.chainName,
                  nativeCurrency: network.nativeCurrency,
                  rpcUrls: network.rpcUrls,
                  blockExplorerUrls: network.blockExplorerUrls,
                },
              ],
            });
          } catch (addError) {
            console.error("Failed to add network:", addError);
          }
        }
      } else {
        console.error("Failed to switch to the network:", switchError);
      }
    }
  } else {
    console.error("MetaMask is not installed.");
  }
}
