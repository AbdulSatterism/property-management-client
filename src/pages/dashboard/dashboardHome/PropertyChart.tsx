import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// static data for the properties
const data = [
  {
    name: "Total Apartment",
    count: 500,
    price: 2000000,
    sellPrice: 1800000,
    clients: 150,
  },
  {
    name: "Total House",
    count: 300,
    price: 3000000,
    sellPrice: 2700000,
    clients: 120,
  },
  {
    name: "Total Land",
    count: 200,
    price: 1000000,
    sellPrice: 900000,
    clients: 80,
  },
];

export const PropertyChart = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl text-indigo-600 mb-2">Property Statistics</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 15,
            right: 15,
            left: 15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="count" fill="#4B0082" name="Total Properties" />
          <Bar dataKey="price" fill="#A9A9A9" name="Total Price" />
          <Bar dataKey="sellPrice" fill="#708090" name="Total Sell Price" />
          <Bar dataKey="clients" fill="#483D8B" name="Total Clients" /> 
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
