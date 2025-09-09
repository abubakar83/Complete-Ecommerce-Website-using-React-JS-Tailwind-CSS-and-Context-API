import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  //   fetching all products from API
  const fetchingAllProducts = async () => {
    try {
        // const res = await axios.get("https://fakestoreapi.in/api/products?limit=150")
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res)
        const productsData = res.data
        // console.log(productsData)
        setData(productsData)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider value={{ data, setData, fetchingAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

// create custom hook 
export const useData = () => useContext(DataContext)
