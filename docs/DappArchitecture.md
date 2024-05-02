## Intro

This documentation will serve as a guide to understanding the flow and interactions within the DApp, focusing on its frontend and backend components, as well as the external APIs it integrates with.

<details>
  <summary>Dapp Archietcture diagram source</summary>
To document the provided Mermaid code, which represents the architecture of a Decentralized Application (DApp) named "PortRadar", we'll break down the components and interactions within the system.

```mermaid
flowchart TB
    subgraph DApp ["Decentralized Application"]
        subgraph Frontend ["Frontend"]
            WalletConnect[("Connect Wallet\n(Thirdweb SDK)")]
            NetworkChange[("Change Network")]
            Dashboard["Dashboard"]
            CoinInfo["Coin Info Page\n(CoinMarketCap API)"]
            CoinDetails["Coin Details Page"]
            DexInfo["DEX & Protocols Info Page\n(0x API)"]
            SwapTokens["Token Swap Page\n(1inch)"]
            CrossChainExchange["Cross-Chain Exchange Page\n(Chainlink CCIP)"]
            NewsPage["Daily News Page\n(CoinTelegraph API)"]
            ProfilePage["Profile Page"]
            WalletStatus["Wallet Status"]
        end

        subgraph Backend ["Backend"]
            API_CMC["CoinMarketCap API"]
            API_0x["0x API"]
            API_1inch["1inch API"]
            API_Chainlink["Chainlink CCIP"]
            API_CoinTelegraph["CoinTelegraph API"]
            IPFS["IPFS Storage"]
            API_Alchemy_Moralis["Alchemy/Moralis API"]
        end

        WalletConnect -->|Retrieve wallet balance| Dashboard
        WalletConnect -->|User selects network| NetworkChange
        NetworkChange -->|Switch network| WalletConnect
        WalletConnect -->|Check if new user| ProfilePage
        ProfilePage -->|New user? Prompt for image/name| IPFS
        ProfilePage -->|Existing user? Load profile| IPFS
        ProfilePage -->|Update image/name| IPFS
        WalletConnect -->|Check wallet connection| WalletStatus
        WalletStatus -->|Connected: Show ERC20/ERC721 balances| API_Alchemy_Moralis
        WalletStatus -->|Not connected: Show alternative view| Dashboard
        Dashboard --> CoinInfo
        CoinInfo -->|Fetch list of coins| API_CMC
        CoinInfo -->|User selects a coin| CoinDetails
        CoinDetails -->|Fetch detailed coin data| API_CMC
        Dashboard --> DexInfo
        Dashboard --> SwapTokens
        Dashboard --> CrossChainExchange
        Dashboard --> NewsPage

        CoinInfo -->|Fetch coin data| API_CMC
        DexInfo -->|Fetch DEX & protocol data| API_0x
        SwapTokens -->|Execute token swap| API_1inch
        CrossChainExchange -->|Perform cross-chain exchange| API_Chainlink
        NewsPage -->|Get latest news| API_CoinTelegraph
    end
```

</details>

## Decentralized Application (DApp) Architecture Overview

The DApp, named "PortRadar", is designed to provide a comprehensive platform for managing and tracking cryptocurrency and NFT holdings. The architecture is divided into two main sections: the Frontend and the Backend. The Frontend is responsible for the user interface and interactions, while the Backend handles data management and external API integrations.

### Frontend Components

The Frontend of the DApp is composed of several key components, each serving a specific purpose:

- WalletConnect: Allows users to connect their wallets using the Thirdweb SDK. This is the entry point for users to interact with the DApp.
- NetworkChange: Enables users to switch between different blockchain networks.
- Dashboard: The main interface where users can view their portfolio and access various features.
- CoinInfo: Displays information about different cryptocurrencies, utilizing the CoinMarketCap API.
- CoinDetails: Provides detailed information about a selected cryptocurrency.
- DexInfo: Offers insights into decentralized exchanges (DEX) and protocols, leveraging the 0x API.
- SwapTokens: Facilitates token swaps, utilizing the 1inch API.
- CrossChainExchange: Allows for cross-chain exchanges, leveraging the Chainlink CCIP.
- NewsPage: Presents the latest news related to cryptocurrencies, using the CoinTelegraph API.
- ProfilePage: Manages user profiles, including image and name updates, with data stored on IPFS.
- WalletStatus: Monitors the connection status of the user's wallet and displays relevant information

### Backend Components

The Backend of the DApp is responsible for managing data and integrating with external APIs:

- CoinMarketCap API: Provides data on cryptocurrencies.
- 0x API: Offers information on decentralized exchanges and protocols.
- 1inch API: Facilitates token swaps.
- Chainlink CCIP: Enables cross-chain exchanges.
- CoinTelegraph API: Delivers the latest news on cryptocurrencies.
- IPFS Storage: Stores user profile data.
- Alchemy/Moralis API: Manages wallet connections and retrieves ERC20/ERC721 balances.

### Interactions and Flow

The DApp follows a specific flow of interactions between its components and external APIs:

- Wallet Connection: Users connect their wallets using WalletConnect. This triggers the retrieval of the wallet balance and checks if the user is new or existing.
- Network Selection: Users can change the blockchain network through NetworkChange.
- Profile Management: New users are prompted to provide an image and name, while existing users can update their profile information.
- Wallet Status Check: The DApp checks the wallet connection status and displays either the ERC20/ERC721 balances or an alternative view.
- Dashboard Access: Users can access various features from the Dashboard, including viewing coin information, swapping tokens, accessing DEX information, and more.
- Data Fetching: The DApp fetches data from external APIs to display information on coins, DEXs, token swaps, cross-chain exchanges, and news.

This documentation provides a overly simplified and structured overview of the "PortRadar" DApp's architecture, detailing its components, interactions, and the external APIs it integrates with. Understanding this architecture is crucial for developers and users alike, as it lays the foundation for the DApp's functionality and user experience.
