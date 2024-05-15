import { ConnectWallet, MediaRenderer } from "@thirdweb-dev/react";
import { Logo, WalletModal } from "../../assets";

const ConnectWalletButton = () => {
  return (
    <div className="h-4 mb-[15px] -mt- mx-[25px]">
      <ConnectWallet
        theme={"dark"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"wide"}
        modalTitle="Connect Wallet"
        modalTitleIconUrl={Logo}
        welcomeScreen={() => {
          return (
            <div style={{ height: "85%", width: "90%" }} className="">
              <MediaRenderer src={WalletModal} height="100%" width="100%" />
              <div className="flex flex-col font-inter justify-center items-center">
                <span className="font-bold pb-1 -mt-[5px] bg-gradient-to-r from-orange-500 via-green-400 to-[#0caf60] bg-clip-text text-transparent text-[20px]">
                  Trade{" "}
                </span>
                <span className="font-bold py-1">anything, anywhere with</span>
                <div className="flex text-[19px]">
                  <span className="font-bold py-[8px]">Port</span>
                  <span className="text-[#0caf60] font-bold py-[8px]">
                    Radar!!
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ConnectWalletButton;
