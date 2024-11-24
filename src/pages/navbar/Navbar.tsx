import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useEffect, useState } from "react";


const Navbar = () => {
 
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  const navItem = (
    <>
      <li className="text-xl text-white  hover:text-indigo-500">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl text-white  hover:text-indigo-500">
        <Link to="/dashboard">Dashboard</Link>
      </li>
     
    </>
  );

  return (
    <>
      <div className="navbar bg-gray-900  max-w-screen-xl mx-auto print:hidden">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-gray-900 z-10 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="avatar w-20 text-white  items-center">
            <img className="" src={logo} alt="" />
           
            <span className="text-xl font-bold text-white tracking-wide">PropertyHub</span>
          </div>
        </div>
        <div className="hidden navbar-center  lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <button
            className="p-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
