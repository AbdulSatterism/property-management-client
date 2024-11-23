/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/api/baseApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addProduct] = useAddProductMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const imageHostingToken = import.meta.env.VITE_APP_image_token;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData.data.display_url;

      // Post product with image URL
      const { name, category, price, rating } = data;
      const product = {
        name,
        category,
        image: imgURL,
        price: parseFloat(price),
        rating: parseFloat(rating),
        available: true,
      };
      await addProduct(product);
      reset();
      Swal.fire({
        icon: "success",
        title: "New product added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error uploading image or adding product", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="text-center mb-2">
        <h1 className="text-2xl font-serif text-center uppercase text-indigo-600 p-4">
          Add Product
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Product Name*
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("name", { required: true, maxLength: 120 })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Select Category*
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-600"
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Price*
            </label>
            <input
              type="number"
              placeholder="Enter price"
              {...register("price", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Rating*
            </label>
            <input
              type="number"
              placeholder="Enter rating"
              {...register("rating", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-600"
            />
          </div>
        </div>

        <div className="w-full mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Product Image*
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
