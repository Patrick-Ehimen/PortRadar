import React, { useState } from "react";

interface ModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  tokenList: any[];
}

const TokenModal: React.FC<ModalProps> = ({
  isModalOpen,
  toggleModal,
  tokenList,
}) => {
  const [searchInput, setSearchInput] = useState("");

  if (!isModalOpen) return null;

  // Filter tokens based on search input
  const filteredTokens = tokenList.filter((token) =>
    token.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="fixed mt-[100px] z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-[#0f3144] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-[#212f3f] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 justify-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-white ml-[150px]"
                  id="modal-title"
                >
                  Select a Token
                </h3>
                {/* Search input */}
                <input
                  type="text"
                  placeholder="Search by token name"
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="mt-2">
                  <ul className="h-[300px] overflow-y-auto">
                    {filteredTokens.map((token, index) => (
                      <li key={index} className="flex">
                        <img
                          src={token.logoURI}
                          className="p-2 m-2 rounded-full bg-gray-700"
                        />
                        <div className="flex flex-col text-white font-bold">
                          {token.name}
                          <div className="font-normal text-gray-400">
                            {token.symbol}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;
