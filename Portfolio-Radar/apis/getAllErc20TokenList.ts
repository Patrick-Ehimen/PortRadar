export const fetchTokenList = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      "https://tokens.coingecko.com/uniswap/all.json"
    );
    const data = await response.json();
    console.log("listing available tokens: ", data);
    const tokens = data.tokens;
    console.log("tokens:", tokens);
    return tokens;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
