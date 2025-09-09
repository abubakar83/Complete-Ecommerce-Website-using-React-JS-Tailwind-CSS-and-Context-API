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
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl max-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
