import { BalanceBackground } from "../../assets";
import { WalletChartBalance } from "..";

const CurrentWalletBalance = ({ totalUsdValue }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${BalanceBackground})`,
        backgroundSize: "auto",
        height: "14rem",
      }}
      className="relative bg-no-repeat m-[30px] z-0"
    >
      <div className="absolute inset-0 bg-opacity-50 flex flex-col p-[50px] text-white font-inter items-start justify-start">
        <p className="font-light text-[20px]">Current Balance</p>
        <p className="text-[30px] font-bold ">${totalUsdValue.toFixed(2)}</p>
        <p className="text-[22px] font-semibold">0.00915254 ETH </p>
      </div>

      <div className="ml-[500px]">
        <WalletChartBalance />
      </div>
    </div>
  );
};

export default CurrentWalletBalance;
