import { useEffect } from "react";
import { useData } from "../context/DataContext";

const Category = () => {
  const { data, fetchingAllProducts } = useData();
  const getUniqueCategory = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  console.log(categoryOnlyData);

  useEffect(() => {
    fetchingAllProducts();
  }, []);
  return <div></div>;
};

export default Category;
