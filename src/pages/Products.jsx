import React, { useEffect } from "react";
import { useData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";

const Products = () => {
  const { data, fetchingAllProducts } = useData();
  useEffect(() => {
    fetchingAllProducts();
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection />
            <div>{}</div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
