import { useState } from "react";
import { fetchTokenBalances } from "../../../apis/fetchAddressAndENS";

const SearchWalletAddress = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = async () => {
    const walletAddress = document.querySelector("#walletAddress").value;

    try {
      const tokenBalances = await fetchTokenBalances(walletAddress);
      setResult(tokenBalances);
      setShowResult(true);
      document.querySelector("#walletAddress").value = "";
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show a message to the user
    }
  };

  return (
    <section className="">
      <form className="" name="create-profile-form" method="POST" action="#">
        <label className="" htmlFor="walletAddress">
          Add ERC20 Wallet Address
        </label>
        <input
          className="backdrop:"
          type="text"
          id="walletAddress"
          name="walletAddress"
          maxLength="120"
          required
        />
      </form>
      <button className="" onClick={handleSubmit}>
        Submit Address
      </button>
      <section className="placeholder:">
        {showResult &&
          result.map((token, index) => {
            return (
              <section className="" key={index}>
                <img src={token.thumbnail} />
                <p className="">{token.name}</p>
                <p className="">
                  {(token.balance / 10 ** token.decimals).toFixed(2)}
                </p>
              </section>
            );
          })}
      </section>
    </section>
  );
};

export default SearchWalletAddress;
