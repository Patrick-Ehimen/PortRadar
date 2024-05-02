export const styles = {
  navbar: "flex items-center justify-between",
  logoMainDiv: "flex m-[20px] ml-[20px] md:ml-[80px]",
  logoTextMainDiv: "font-poppins font-black text-xl pt-[10px] px-[10px]",

  desktopMainDiv:
    "lg:flex hidden font-inter items-center justify-between mr-[80px]",
  desktopSpanDiv:
    "text-lg text-[#A4A8AB] hover:text-white hover:border-b-2 border-[#0caf60]",
  desktopButton: "bg-[#0caf60] p-2 rounded-lg -mt-2",
  desktopNavLinks: "text-white hover:text-[#e8eaec]",

  smallScreenMainDiv:
    "lg:hidden flex items-center flex-1 font-inter justify-end px-[20px] mr-[10px]",
  smallScreenBlur:
    "fixed top-0 left-0 w-full h-full backdrop-blur-xl bg-primary-2/30 bg-opacity-75 z-20 transform transition-transform duration-700 ease-in-out lg:hidden",
  smallScreenMenuDiv:
    "flex flex-col justify-center items-center h-full space-y-4 border-b-4",
  smallScreenSpanDiv:
    "text-lg text-[#A4A8AB] hover:text-white hover:border-b-2 border-[#0caf60]",

  toggleMenuImgDiv: "w-[28px] h-[28px] object-contain z-50 mt-2 cursor-pointer",
};
