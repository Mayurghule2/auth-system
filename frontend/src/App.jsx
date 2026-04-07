import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './App.css';

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Pramyan
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>

      {/* Routes */}
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
