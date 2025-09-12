import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm"
import Breadcrums from "../components/Breadcrums";
const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      console.log(product);
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
            <img src={singleProduct.image} alt={singleProduct.title} className="rounded-2xl w-full object-cover" />
            </div>
            {/* products detail */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
              <div className='text-gray-700'></div>
              <p className="text-xl text-red-500 font-bold">${singleProduct.price -3} <span className="line-through text-gray-700">${singleProduct.price}</span></p>
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
