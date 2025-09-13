import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm"
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const {addToCart} = useCart()
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
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title }/>
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
            <img src={singleProduct.image} alt={singleProduct.title} className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg object-contain rounded-2xl shadow-md bg-gray-50 p-4 transition-transform duration-300 hover:scale-105" />
            </div>
            {/* products detail */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
              <div className='text-gray-700'>{singleProduct.title}</div>
              <p className="text-xl text-red-500 font-bold">${singleProduct.price -3} <span className="line-through text-gray-700"> ${singleProduct.price} </span><span className="bg-red-500 text-white mx-2 px-4 py-2 rounded-full">{3}% discount</span></p>
              <p className="text-gray-600">{singleProduct.description}</p>

              {/* quantity selector */}
              <div className="flex items-center gap-4">
              <label htmlFor="" className="text-sm font-medium text-gray-700">Quantity:</label>
              <input type="number" min={1} value={1 } className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={() => addToCart(singleProduct)} className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md"><IoCartOutline className="w-6 h-6"/>Add to Cart</button>
            </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
