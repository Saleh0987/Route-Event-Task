import { useContext } from 'react';
import { ThemeContext } from '../Components/Themecontext';
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-gray-800 dark:text-white">Route Task</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 rounded"
      >
         {theme === 'dark' ? <FaSun /> : <MdDarkMode /> } 
      </button>
    </div>
  );
};

export default Header;
