import { FaHeart } from "react-icons/fa";
import ThemeToggle from "../../Components/ThemeToggle";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Search />

      <div className="flex gap-x-3 items-center">
        <ThemeToggle />

        <div className="bg-gray-200 py-2 p-4 flex items-center gap-3 cursor-pointer rounded-full dark:bg-gray-800">
          <FaHeart className="text-red-500 " />
          <span>Favourites</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
