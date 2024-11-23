
import { PropertyChart } from "./PropertyChart";
import { PropertyStat } from "./PropertyStat";

const DashboardHome = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-serif text-center uppercase text-indigo-600 p-4 ">Welcome to Property management system</h1>
     <PropertyStat/>
     <PropertyChart/>
    </div>
  );
};

export default DashboardHome;
