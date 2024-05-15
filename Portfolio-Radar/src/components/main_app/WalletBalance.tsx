import { useState } from "react";
import { Erc20Currency, ArrUpDown } from "../../assets";

const WalletBalance = ({ balances }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(balances.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current balances
  const indexOfLastBalance = currentPage * itemsPerPage;
  const indexOfFirstBalance = indexOfLastBalance - itemsPerPage;
  const currentBalances = balances.slice(
    indexOfFirstBalance,
    indexOfLastBalance
  );

  const startingNumber = (currentPage - 1) * itemsPerPage + 1;

  const tableArr = [
    { id: 1, head: "Asset" },
    { id: 2, head: "Price" },
    { id: 3, head: "Balance" },
    { id: 4, head: "24hr%" },
    { id: 5, head: "Profit/Loss" },
  ];

  const dropDownButton = [
    { id: 1, head: "Crypto" },
    { id: 2, head: "NFTs" },
    { id: 3, head: "DeFi" },
  ];

  return (
    <div className="relative font-inter mx-8 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-[#12181F]">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex mx-[10px] items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <span className="sr-only">Action Button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div
              id="dropdownAction"
              className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                {dropDownButton.map((button) => (
                  <li key={button.id}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {button.head}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>

        <div className="relative mx-[10px]">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for cryptos"
          />
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  type="number"
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  value={startingNumber}
                />
                <label htmlFor="number-input" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {tableArr.map((item) => (
              <th key={item.id} className=" px-6 py-3" scope="col">
                <div className="flex cursor-pointer">
                  <div className="hover:text-white">{item.head}</div>
                  {<img src={ArrUpDown} className="px-3" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentBalances.map((balance, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              <td className="w-4 p-4">
                {/* <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div> */}
                <div className="flex items-center">
                  <div className="text-gray-400">{startingNumber + index}</div>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={balance.logo || Erc20Currency}
                  alt={balance.name}
                  className="w-10 h-10 rounded-full"
                />

                <div className="ps-3">
                  <div className="text-white text-base font-semibold">
                    {balance.name}
                  </div>
                  <div className="font-normal text-gray-500">
                    {balance.symbol}
                  </div>
                </div>
              </th>

              <td className="px-6 py-4">
                {parseFloat(balance.priceinUsd).toFixed(4)}
              </td>

              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="">
                  <div className="text-white">
                    {parseFloat(balance.tokenBalance).toFixed(
                      balance.tokenBalance.split(".")[1]?.startsWith("00000")
                        ? 1
                        : 7
                    )}
                  </div>
                  <div className="text-gray-500">
                    {parseFloat(balance.usdValue).toFixed(3)}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {balance.percentageChange
                  ? `${balance.percentageChange.toFixed(2)}%`
                  : "N/A"}
              </td>
              <td className="px-6 py-4">
                {balance.usdPrice24hrChange
                  ? `${balance.usdPrice24hrChange.toFixed(2)}`
                  : 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-[30px] flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalletBalance;
