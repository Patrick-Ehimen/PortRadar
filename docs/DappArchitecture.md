  <summary>diagram source</summary>
  This details block is collapsed by default when viewed in GitHub. This hides the mermaid graph definition, while the rendered image
  linked above is shown. The details tag has to follow the image tag. (newlines allowed)

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
