import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  return (
    <div className="relative h-screen bg-gray-200 dark:bg-gray-800">
      <button
        onClick={toggleSidebar}
        className={`fixed top-[30%] p-2 bg-gray-600 text-white transition-all rounded z-[99999] ${
          !isSidebarOpen ? 'left-[0]' : 'left-[148px]'
        }`}
      >
        {isSidebarOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`absolute w-[150px] bg-gray-200 dark:bg-gray-800 top-[30%] left-0 transition-transform transform z-[9999999] ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav>
          <Link
            to="/"
            className={`block p-3 ${location.pathname === '/' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/customers"
            className={`block p-3 ${location.pathname === '/customers' ? 'active' : ''}`}
          >
            Customers
          </Link>
          <Link
            to="/transactions"
            className={`block p-3 ${location.pathname === '/transactions' ? 'active' : ''}`}
          >
            Transactions
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
