import { FaHeart } from "react-icons/fa";
import Logo from "../../Components/Logo";
import ThemeToggle from "../../Components/ThemeToggle";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex fixed z-10 w-[80%] my-4 rounded-full mx-auto  top-0 left-[50%] translate-x-[-50%] justify-between  bg-gray-300/60 dark:bg-gray-700/60 filter-bg-blur items-center py-6 px-[5%]">
    <div className="flex items-center justify-between gap-x-3">
    <Logo />
      <Search />
    </div>

      <div className="flex gap-x-3 items-center">
        <ThemeToggle />

        <div className="bg-gray-200 py-2 p-4 flex items-center gap-3 cursor-pointer rounded-full dark:bg-gray-800">
          <FaHeart className="text-red-500 " />
          <span className='hidden md:block'>Favourites</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
