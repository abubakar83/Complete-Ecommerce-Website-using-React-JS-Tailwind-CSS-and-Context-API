import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-8 md:px-6 lg:px-12">
          <Breadcrums title={singleProduct.title} />

          {/* Grid Container */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-6">
            {/* Product Image */}
            <div className="flex justify-center items-start">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-2xl shadow-md bg-gray-50 p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              {/* Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              {/* Short Info */}
              <div className="text-sm sm:text-base text-gray-700">
                {singleProduct.category}
              </div>

              {/* Price */}
              <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-bold">
                ${singleProduct.price - 3}{" "}
                <span className="line-through text-gray-700 ml-1">
                  ${singleProduct.price}
                </span>
                <span className="ml-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  3% discount
                </span>
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {singleProduct.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  id="quantity"
                  className="w-16 sm:w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                >
                  <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Loading State */
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop className="w-20 sm:w-32 md:w-40">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

