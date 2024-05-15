const SearchBar = () => {
  return (
    <div
      className={`flex items-center border border-[#222c39] ml-[20px] rounded-xl p-2 flex-shrink-0`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="ml-2 flex-grow outline-none bg-[#12181F]"
        placeholder="Search in dashboard..."
      />
    </div>
  );
};

export default SearchBar;
