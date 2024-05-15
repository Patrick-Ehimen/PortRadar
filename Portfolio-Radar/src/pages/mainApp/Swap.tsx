import { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../../constants/tokenLists.json";
import axios from "axios";

const Swap = () => {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(0);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(0);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [prices, setPrices] = useState(null);

  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }

  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
    if (e.target.value && prices) {
      setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2));
    } else {
      setTokenTwoAmount(null);
    }
  }

  function switchTokens() {
    // setPrices(null);
    // setTokenOneAmount(null);
    // setTokenTwoAmount(null);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    // fetchPrices(two.address, one.address);
  }

  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(i) {
    // setPrices(null);
    // setTokenOneAmount(null);
    // setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      setChangeToken(tokenList[i]);
      // fetchPrices(tokenList[i].address, tokenTwo.address);
    } else {
      setTokenTwo(tokenList[i]);
      setChangeToken(tokenList[i]);
      // fetchPrices(tokenOne.address, tokenList[i].address);
    }
    setIsOpen(false);
  }

  async function fetchPrices(one, two) {
    const res = await axios.get(`http://localhost:3001/tokenPrice`, {
      params: { addressOne: one, addressTwo: two },
    });
    console.log(res.data);
    setPrices(res.data);
  }

  useEffect(() => {
    fetchPrices(tokenList[0].address, tokenList[1].address);
  }, []);

  const filteredTokenList = tokenList.filter((_, index) =>
    [0, 1, 2, 3, 4, 5].includes(index)
  );

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <>
      {/* {contextHolder} */}
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        // title="Select a token"
        title={<div style={{ fontSize: "32px" }}>Select a token</div>}
      >
        <div className="border-t border-[#363e54] mt-[20px] flex flex-col gap-[10px] h-[400px] overflow-y-auto">
          <Input
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="m-4 h-2 text-[20px] w-[450px]"
          />
          <div className="grid grid-cols-4 mx-5 select">
            {filteredTokenList.map((e, i) => {
              return (
                <div
                  className="flex border cursor-pointer m-1 rounded-lg border-gray-600 p-1"
                  key={i}
                  onClick={() => modifyToken(i)}
                >
                  <img
                    src={e.img}
                    alt={e.ticker}
                    className="h-[30px] w-[30px] "
                  />
                  <div className="my-1 px-1">
                    <div className="">{e.ticker}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="m-4 border-gray-600" />
          {tokenList
            .filter(
              (token) =>
                token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                token.ticker.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((e, i) => {
              return (
                <div
                  className="flex justify-start items-center cursor-pointer hover:bg-[#1f2639] pl-[20px] pt-[10px] pb-[10px] hover:"
                  key={i}
                  onClick={() => modifyToken(i)}
                >
                  <img
                    src={e.img}
                    alt={e.ticker}
                    className="h-[40px] w-[40px] "
                  />
                  <div className="">
                    <div className="ml-[10px] text-[16px] font-medium">
                      {e.name}
                    </div>
                    <div className="ml-[10px] text-[13px] font-light text-[#51596f]">
                      {e.ticker}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>

      <section className="flex justify-center items-center min-h-screen">
        <main className="flex justify-center items-center">
          <div className="w-[500px] mx-20 bg-[#0E111B] border-[2px] border-[#21273a] min-h-[400px] rounded-[15px] flex flex-col justify-start items-start px-[30px]">
            <div className="flex justify-between mt-3 items-center w-[98%]">
              <h4 className="text-white font-bold text-[22px] hover:text-[#0caf60]">
                Swap
              </h4>
              <Popover
                content={settings}
                title="Settings"
                trigger="click"
                placement="bottomRight"
              >
                <SettingOutlined className="text-gray-300 transition-all duration-300 hover:text-white rotate-90 hover:bg-gray-700 rounded-lg p-2" />
              </Popover>
            </div>
            <div className="relative my-5">
              <Input
                placeholder="0"
                value={tokenOneAmount}
                onChange={changeAmount}
                // disabled={!prices}
              />
              <Input placeholder="0" value={tokenTwoAmount} disabled={true} />

              <div
                className="flex justify-center items-center bg-[#3a4157] w-[25px] h-[25px] rounded-[8px] absolute top-[86px] left-[180px] text-[#5F6783] border-[3px] border-[#0E111B] text-[12px] transition-all duration-300 hover:text-white cursor-pointer"
                onClick={switchTokens}
              >
                <ArrowDownOutlined className="switchArrow" />
              </div>

              <div
                className="absolute min-w-[50px] h-[30px] bg-[#3a4157] top-[36px] right-[20px] rounded-full flex justify-start items-center gap-1 font-bold text-[17px] pr-[8px] hover:cursor-pointer text-white"
                onClick={() => openModal(1)}
              >
                <img
                  src={tokenOne.img}
                  alt="assetOneLogo"
                  className="h-[22px] ml-[5px]"
                />
                {tokenOne.ticker}
                <DownOutlined />
              </div>
              <div
                className="absolute min-w-[50px] h-[30px] bg-[#3a4157] top-[135px] right-[20px] rounded-full flex justify-start items-center gap-1 font-bold text-[17px] pr-[8px] hover:cursor-pointer text-white"
                onClick={() => openModal(2)}
              >
                <img
                  src={tokenTwo.img}
                  alt="assetOneLogo"
                  className="h-[22px] ml-[5px]"
                />
                {tokenTwo.ticker}
                <DownOutlined />
              </div>
            </div>
            <div
              className={`cursor-pointer hover:bg-[#3b4874] flex justify-center items-center bg-[#243056] w-full h-[55px] text-[20px] rounded-[12px] text-[#5981F3] font-bold transition-all duration-300 mb-[30px] mt-[8px] ${
                !tokenOneAmount ? "pointer-events-none" : ""
              }`}

              // onClick={fetchDexSwap}
            >
              Swap
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Swap;
