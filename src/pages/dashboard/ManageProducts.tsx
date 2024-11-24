
import { MdDelete } from "react-icons/md";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { useState } from "react";

const ManageProducts = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const { data, isLoading } = useGetAllProductsQuery({ search, category });

  const handleReset = () => {
    setSearch("");
    setCategory("");
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto p-4">
      <div className="my-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 dark:text-white dark:bg-gray-700 border rounded-lg shadow-sm focus:ring-indigo-600"
          placeholder="Search by name"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 dark:text-white dark:bg-gray-700 border rounded-lg shadow-sm focus:ring-indigo-600"
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
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-900 dark:bg-gray-700 text-white  text-xl">
            <th className="p-4 text-center">Name</th>
            <th className="p-4 text-center">Price</th>
            <th className="p-4 text-center">Available</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product: TProducts) => (
            <tr
              key={product?._id}
              className="border-t  dark:bg-gray-900  border-gray-300 hover:bg-gray-100 transition"
            >
              <td className="p-4">
                <div className="flex items-center gap-4 justify-start">
                  <div className="w-12 h-12">
                    <img
                      src={product?.image}
                      alt={product?.name}
                      className="object-cover rounded-full w-12 h-12"
                    />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-gray-700   dark:text-white uppercase">
                      {product?.name}
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center text-gray-700 dark:text-white">
                ${product?.price}
              </td>
              <td className="p-4 text-center">
                <span
                  className={`font-semibold ${
                    product.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.available ? "Yes" : "No"}
                </span>
              </td>
              <td className="p-4 text-center">
                <button className="text-red-500 hover:text-red-700 transition text-2xl">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
