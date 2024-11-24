import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import Product from "./Product";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";

const AllProducts = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const { data, isLoading } = useGetAllProductsQuery(
    { search, category }  
  );

  const handleReset = () => {
    setSearch("");
    setCategory("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-3 mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 dark:text-white dark:bg-gray-700  py-2 border rounded-lg shadow-sm focus:ring-indigo-600"
          placeholder="Search by name"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 dark:text-white dark:bg-gray-700  border rounded-lg shadow-sm focus:ring-indigo-600"
        >
          <option value="">All Categories</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Land">Land</option>
         
        </select>

        <button
          className="w-full btn bg-indigo-500 hover:bg-indigo-600 text-xl text-white py-2 px-4 rounded-md flex items-center shadow-md"
          onClick={handleReset}
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {data?.data?.map((item: TProducts) => (
          <Product key={item?._id} {...item}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
