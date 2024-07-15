import { useContext, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Transactions from './Components/Transactions';
import Customers from './Components/Customers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Components/Themecontext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header toggleTheme={() => setDarkMode(!darkMode)} />
            <div className="p-2">
              <Routes>
                <Route path="/" exact element={<Dashboard/>} />
                <Route path="/transactions" element={<Transactions/>} />
                <Route path="/customers" element={<Customers/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
