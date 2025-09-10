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

  const getUniqueCategory = (data, property) => {
    if (!Array.isArray(data)) return []; // prevent error when data is null
    let newVal = data.map((currElem) => currElem[property]);
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <DataContext.Provider value={{ data, setData, fetchingAllProducts, categoryOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

// create custom hook 
export const useData = () => useContext(DataContext)
