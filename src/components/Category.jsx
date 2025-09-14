import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const Category = () => {
  // const {categoryOnlyData } = useData();
  const navigate = useNavigate()
  const {data} = useData()

 const getUniqueCategory = (data, property) => {
    if (!Array.isArray(data)) return []; // prevent error when data is null
    let newVal = data.map((currElem) => currElem[property]);
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category")

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 md:gap-4 lg:gap-6 items-center justify-center md:justify-around py-6 px-4">
        {categoryOnlyData?.map((item, index) => (
          <div key={index}>
            <button onClick={() => navigate(`/category/${item}`)}
              className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-base lg:text-lg hover:scale-105 transition-transform"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
