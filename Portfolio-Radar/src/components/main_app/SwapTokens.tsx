// import { useEffect, useState } from "react";
// import { ExchangeSwap, ArrowIcon } from "../../assets";
// import { TokenModal } from "..";
// import { fetchTokenList } from "../../apis/getAllErc20TokenList";

// const SwapTokens = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [tokenList, setTokenList] = useState<any[]>([]);

//   useEffect(() => {
//     const loadTokenList = async () => {
//       const data = await fetchTokenList();
//       setTokenList(data);
//     };

//     loadTokenList();
//   }, []);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <main>
//       <section className="bg-[#161D26] flex font-inter rounded-lg -mb-3">
//         <div className="flex-row flex m-2 p-2 gap-56">
//           <div>
//             <div className="text-[14px] text-gray-400 ">You pay</div>
//             <div
//               onClick={toggleModal}
//               className="bg-[#0caf60] p-2 flex rounded-lg cursor-pointer"
//             >
//               Select Token
//               <img src={ArrowIcon} />
//             </div>
//             <div>Token Name</div>
//           </div>
//           <div>
//             <div>Token amount</div>
//             <div>Token price</div>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-center items-center z-20">
//         <div className=" bg-gray-600 rounded-lg m-2">
//           <img src={ExchangeSwap} className="" />
//         </div>
//       </div>
//       <section className="bg-[#161D26] flex rounded-lg -mt-3">
//         <div className="flex-row flex m-2 p-2 gap-56">
//           <div>
//             <div>You pay</div>
//             <div
//               onClick={toggleModal}
//               className="bg-[#0caf60] p-2 flex rounded-lg cursor-pointer"
//             >
//               Select Token
//               <img src={ArrowIcon} />
//             </div>
//             <div>Token Name</div>
//           </div>
//           <div>
//             <div>Token amount</div>
//             <div>Token price</div>
//           </div>
//         </div>
//       </section>
//       <TokenModal
//         isModalOpen={isModalOpen}
//         toggleModal={toggleModal}
//         tokenList={tokenList}
//       />{" "}
//       {/* Use the Modal component */}
//     </main>
//   );
// };

// export default SwapTokens;

const SwapTokens = () => {
  return <div>SwapTokens</div>;
};

export default SwapTokens;
