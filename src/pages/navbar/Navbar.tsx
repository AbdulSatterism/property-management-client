import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";


const Navbar = () => {
 

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
       
      </div>
    </>
  );
};

export default Navbar;
