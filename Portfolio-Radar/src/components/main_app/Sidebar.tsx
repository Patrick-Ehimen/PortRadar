import { useContext } from "react";
import ActivePageContext from "../../context/ActivePageContext";
import { useSidebar } from "../../context/SidebarContext";

import { ToggleThemeButton } from "..";

import {
  Logo,
  DashboardIcon,
  PriceIcon,
  ExhangeIcon,
  WalletIcon,
  NftMarkets,
  NewsIcon,
  Swap,
  StakeIcon,
  BridgeIcon,
  DefaultAvatar,
} from "../../assets";

const sideBarrArr = [
  { id: 1, menu: "Dashboard", icon: DashboardIcon },
  { id: 2, menu: "Live Prices", icon: PriceIcon },
  { id: 3, menu: "Wallet", icon: WalletIcon },
  { id: 4, menu: "Exchanges", icon: ExhangeIcon },
  {
    id: 5,
    menu: "NFT Market",
    icon: NftMarkets,
  },
  { id: 6, menu: "Swap Token", icon: Swap },
  { id: 7, menu: "Bridges", icon: BridgeIcon },
  { id: 8, menu: "Stake", icon: StakeIcon },
  { id: 9, menu: "News", icon: NewsIcon },
];

const Sidebar = () => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const { isExpanded, toggleSidebar } = useSidebar();
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  return (
    <section
      className={`flex flex-col w-16 border-r-2 bg-[#12181F] border-[#161D26] font-inter text-white h-screen fixed top-0 left-0 z-30  overflow-y-auto ${
        isExpanded ? "lg:w-[210px] md1:w-[220px] md:w-[350px]" : ""
      }`}
      onMouseEnter={toggleSidebar} // Call toggleSidebar on mouse enter
      onMouseLeave={toggleSidebar}
      // onMouseEnter={() => setIsExpanded(true)}
      // onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`flex justify-center border-[#161D26] border-b-2 px-[15px] pb-4 my-[30px] items-center`}
      >
        <img src={Logo} className="mb-[15px] cursor-pointer" />
        <div
          className={`${
            isExpanded ? "inline" : "hidden"
          } ml-[5px] text-[20px] font-bold mt-[5px] cursor-pointer`}
        >
          <span>Port</span>
          <span className="text-[#0caf60]">Radar</span>
        </div>
      </div>
      <div>
        <img
          src={DefaultAvatar}
          className={`flex ${
            isExpanded
              ? "w-[100px] flex justify- itms- ml-[50px] -mt-[20px]"
              : ""
          }`}
        />
        <div
          className={`${
            isExpanded ? "inline" : "hidden"
          } flex justify-center items-center my-[10px] text-[20px]`}
        >
          <div className="border-b-2 border-[#0caf60]">0xOse</div>
        </div>
      </div>
      {sideBarrArr.map((item, index) => (
        <div
          key={item.id}
          className={`${index === 0 ? "mt-[15px]" : ""} flex items-center ${
            activePage === item.id ? "bg-[#1f784d] rounded-lg" : ""
          } p-2 my-[7px] cursor-pointer rounded-lg ${
            isExpanded ? "hover:bg-[#0caf60] ml-2 w-[200px]" : ""
          }`}
          onClick={() => handlePageChange(item.id)}
        >
          <img src={item.icon} className="mr-2 ml-[10px]" />
          <div className={`${isExpanded ? "inline" : "hidden"}`}>
            {item.menu}
          </div>
        </div>
      ))}

      <div className="mt-[100px]">
        <ToggleThemeButton isExpanded={isExpanded} />
      </div>
    </section>
  );
};

export default Sidebar;
