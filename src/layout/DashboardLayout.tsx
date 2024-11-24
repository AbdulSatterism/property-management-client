/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home, LayoutDashboard, Menu, PlusCircle, Settings } from "lucide-react";
import { useEffect, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {

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


  // Active link style function
  const getLinkStyle = ({ isActive }:any) => 
    isActive 
      ? "bg-indigo-600 text-white font-medium" 
      : "text-gray-300 hover:bg-gray-700/50 hover:text-white";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-white hover:bg-gray-100 border-none shadow-sm drawer-button lg:hidden"
        >
          <Menu size={24} className="text-gray-700" />
        </label>
        <Outlet></Outlet>
      </div>
      
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        
        <div className="menu p-4 w-72 min-h-full bg-gray-900 dark:bg-gray-800 text-base-content">
          {/* Logo Area */}
          <div className="flex items-center gap-3 px-2 py-5 mb-6 border-b border-gray-700">
            <LayoutDashboard className="text-indigo-500" size={28} />
            <span className="text-xl font-bold text-white tracking-wide">PropertyHub</span>
          </div>

          {/* Navigation Section */}
          <div className="mb-4">
           
            <ul className="space-y-1.5">
            <li>
                <NavLink 
                  to="/dashboard"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${getLinkStyle}`}
                >
                  <Home size={20} className="text-indigo-400" />
                  <span>Dashboard Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard/add-products"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${getLinkStyle}`}
                >
                  <PlusCircle size={20} className="text-indigo-400" />
                  <span>Add Products</span>
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/dashboard/manage-products"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${getLinkStyle}`}
                >
                  <Settings size={20} className="text-indigo-400" />
                  <span>Manage Products</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="divider before:bg-gray-700 after:bg-gray-700 my-6"></div>

{/* return home */}
          <div>
           
            <ul>
              <li>
                <NavLink 
                  to="/"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${getLinkStyle}`}
                >
                  <Home size={20} className="text-indigo-400" />
                  <span>Home</span>
                </NavLink>
              </li>
            </ul>
          
            <button
              className="p-2 my-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;







//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content  ">
//         <label
//           htmlFor="my-drawer-2"
//           className="btn  btn-active btn-ghost drawer-button lg:hidden"
//         >
//           <FaBars></FaBars>{" "}
//         </label>
//         {/* Page content here */}
//         <Outlet></Outlet>
//       </div>
//       <div className=" drawer-side lg:bg-[#04211c]">
//         <label
//           htmlFor="my-drawer-2"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu p-4 w-80 bg-[#04211c]  opacity-50  min-h-full text-xl">
//           {/* Sidebar content here */}

//           <li className="text-white">
//             <NavLink to="/dashboard/add-products">
//               <MdSportsTennis />
//               Add Products
//             </NavLink>
//           </li>
//           <li className="text-white">
//             <NavLink to="/dashboard/manage-products">
//               <MdManageAccounts />
//               Manage Products
//             </NavLink>
//           </li>

//           <div className="divider divider-neutral"></div>

//           <li className="text-white">
//             <NavLink to="/">
//               <FaHome />
//               Home

//             </NavLink>
            
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };









// import { NavLink, Outlet } from "react-router-dom";
// import { Home, Menu, PlusCircle, Settings, LayoutDashboard, Building2, Users, FileText, LogOut, CreditCard } from 'lucide-react';

// const DashboardLayout = () => {
//   const navLinkClasses = ({ isActive }:any) => 
//     `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//       isActive 
//         ? 'bg-blue-600 text-white' 
//         : 'text-gray-300 hover:bg-blue-500/10 hover:text-white'
//     }`;

//   return (
//     <div className="min-h-screen">
//       {/* Mobile Drawer */}
//       <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="fixed hidden lg:flex flex-col w-64 min-h-screen bg-gray-900 text-gray-100 shadow-lg">
//           {/* Logo Area */}
//           <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
//             <Building2 className="text-blue-500" size={28} />
//             <span className="text-xl font-bold">PropertyHub</span>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 py-6 px-4 space-y-1">
//             <NavLink to="/dashboard" end className={navLinkClasses}>
//               <LayoutDashboard size={20} />
//               <span>Dashboard</span>
//             </NavLink>

//             <div className="pt-4 pb-2">
//               <p className="px-4 text-xs font-semibold text-gray-400 uppercase">Property Management</p>
//             </div>

//             <NavLink to="/dashboard/add-property" className={navLinkClasses}>
//               <PlusCircle size={20} />
//               <span>Add Property</span>
//             </NavLink>

//             <NavLink to="/dashboard/properties" className={navLinkClasses}>
//               <Building2 size={20} />
//               <span>Properties</span>
//             </NavLink>

//             <NavLink to="/dashboard/transactions" className={navLinkClasses}>
//               <CreditCard size={20} />
//               <span>Transactions</span>
//             </NavLink>

//             <div className="pt-4 pb-2">
//               <p className="px-4 text-xs font-semibold text-gray-400 uppercase">Admin</p>
//             </div>

//             <NavLink to="/dashboard/users" className={navLinkClasses}>
//               <Users size={20} />
//               <span>Users</span>
//             </NavLink>

//             <NavLink to="/dashboard/reports" className={navLinkClasses}>
//               <FileText size={20} />
//               <span>Reports</span>
//             </NavLink>

//             <NavLink to="/dashboard/settings" className={navLinkClasses}>
//               <Settings size={20} />
//               <span>Settings</span>
//             </NavLink>
//           </nav>

//           {/* Bottom Actions */}
//           <div className="border-t border-gray-800 p-4">
//             <NavLink to="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-500/10 hover:text-white transition-colors">
//               <Home size={20} />
//               <span>Back to Home</span>
//             </NavLink>
//             <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full mt-2">
//               <LogOut size={20} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </aside>

//         {/* Mobile Header */}
//         <div className="lg:hidden fixed w-full bg-gray-900 text-white z-10">
//           <div className="flex items-center justify-between px-4 py-3">
//             <div className="flex items-center gap-2">
//               <Building2 className="text-blue-500" size={24} />
//               <span className="text-lg font-bold">PropertyHub</span>
//             </div>
//             <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
//               <Menu size={24} />
//             </label>
//           </div>
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 lg:ml-64 min-h-screen bg-gray-50">
//           <div className="p-6 lg:p-8">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Mobile Drawer Content */}
//       <div className="drawer-side">
//         <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
//         <aside className="w-64 min-h-screen bg-gray-900 text-gray-100">
//           {/* Mobile drawer content - same as desktop sidebar */}
//           <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
//             <Building2 className="text-blue-500" size={28} />
//             <span className="text-xl font-bold">PropertyHub</span>
//           </div>
//           {/* Copy the same nav content as desktop */}
//           <nav className="flex-1 py-6 px-4 space-y-1">
//             {/* Same NavLinks as desktop */}
//           </nav>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Home, LayoutDashboard, Menu, PlusCircle, Settings } from "lucide-react";
// import { useEffect, useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   // Function to get active link styling
//   const getLinkStyle = ({ isActive }: any) =>
//     isActive
//       ? "bg-indigo-600 text-white font-medium"
//       : "text-gray-300 dark:text-gray-400 hover:bg-gray-700/50 hover:text-white";

//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//         {/* Drawer toggle for small screens */}
//         <label
//           htmlFor="my-drawer-2"
//           className="btn bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border-none shadow-sm drawer-button lg:hidden"
//         >
//           <Menu size={24} className="text-gray-700 dark:text-gray-300" />
//         </label>
//         {/* Main content area */}
//         <Outlet />
//       </div>

//       <div className="drawer-side">
//         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//         <div className="menu p-4 w-72 min-h-full bg-gray-900 text-base-content">
//           {/* Logo and branding */}
//           <div className="flex items-center gap-3 px-2 py-5 mb-6 border-b border-gray-700">
//             <LayoutDashboard className="text-indigo-500" size={28} />
//             <span className="text-xl font-bold text-white tracking-wide">
//               PropertyHub
//             </span>
//           </div>

//           {/* Navigation links */}
//           <div className="mb-4">
//             <ul className="space-y-1.5">
//               <li>
//                 <NavLink
//                   to="/dashboard"
//                   className={getLinkStyle}
//                 >
//                   <Home size={20} className="text-indigo-400" />
//                   <span>Dashboard Home</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/add-products"
//                   className={getLinkStyle}
//                 >
//                   <PlusCircle size={20} className="text-indigo-400" />
//                   <span>Add Products</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manage-products"
//                   className={getLinkStyle}
//                 >
//                   <Settings size={20} className="text-indigo-400" />
//                   <span>Manage Products</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="divider before:bg-gray-700 after:bg-gray-700 my-6"></div>

//           {/* Return to home and theme toggle */}
//           <div>
//             <ul>
//               <li>
//                 <NavLink
//                   to="/"
//                   className={getLinkStyle}
//                 >
//                   <Home size={20} className="text-indigo-400" />
//                   <span>Home</span>
//                 </NavLink>
//               </li>
//             </ul>

//             {/* Theme toggle button */}
//             <button
//               className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-white mt-4"
//               onClick={toggleTheme}
//             >
//               {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
