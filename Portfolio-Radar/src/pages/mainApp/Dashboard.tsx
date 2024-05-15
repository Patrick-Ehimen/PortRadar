import { useConnectionStatus } from "@thirdweb-dev/react";
import {
  ConnectWalletButton,
  // DashBoardWalletConnnected,
  WalletDashboard,
} from "../../components";
import { useTheme } from "../../context/ThemeContext";
import { WhaleSlang, WhaleSlangWhite } from "../../assets";

const Dashboard = () => {
  const connectionStatus = useConnectionStatus();
  const { theme } = useTheme();

  const whaleImage = theme === "light" ? WhaleSlangWhite : WhaleSlang;

  return (
    <div className="mb-10">
      {connectionStatus === "connected" ? (
        <>
          <WalletDashboard />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center font-inter">
          <img src={whaleImage} alt="whales" className="w-4/12 my-[30px]" />

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px] bg-gradient-to-r from-orange-500 via-green-400 to-[#0caf60] bg-clip-text text-transparent">
              Oops..Your Wallet <br /> is not connected!!
            </h2>
            <p className={`text-black text-[18px] my-4 dark:text-white`}>
              Connect your Wallet to use our Dapp
            </p>
            <div className="my-3">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
