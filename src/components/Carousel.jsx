import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const { data, fetchingAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchingAllProducts();
  }, []);

  // Custom Arrows
  const SamplePrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        style={{ ...style }}
      >
        <AiOutlineArrowLeft className="text-white bg-red-500 p-2 rounded-full text-3xl hover:scale-110 transition-transform" />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        style={{ ...style }}
      >
        <AiOutlineArrowRight className="text-white bg-red-500 p-2 rounded-full text-3xl hover:scale-110 transition-transform" />
      </div>
    );
  };

  // Slider settings
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets & small desktops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // tablets & large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // hide arrows for smaller screens
          dots: true, // show dots for navigation
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] items-center px-4">
              {/* Left content */}
              <div className="space-y-6 max-w-lg text-center md:text-left">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  Powering Your World With the Best in Electronics
                </h3>
                <h1 className="text-2xl md:text-4xl font-bold uppercase line-clamp-3 text-white">
                  {item.title}
                </h1>
                <p className="line-clamp-3 text-gray-400 md:pr-7">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-5 py-2 rounded-md cursor-pointer mt-2 hover:scale-105 transition-transform">
                  Shop Now
                </button>
              </div>

              {/* Right image */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[250px] md:w-[350px] hover:scale-105 transition-transform  shadow-red-200"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

// old code
// import React, { useContext, useEffect } from 'react'
// import { DataContext} from '../context/DataContext'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// const Carousel = () => {
//   const {data, fetchingAllProducts} = useContext(DataContext)
//   console.log(data)
//   useEffect(() => {
//     fetchingAllProducts()
//   },[])

//   // React slick part

//   const SamplePrevArrow = (props) => {
//     const {className, style, onCLick} = props
//     return (
//       <div>
//         <AiOutlineArrowLeft className="arrows"/>
//       </div>
//     )
//   }

//   const SampleNextArrow = (props) => {
//     const {className, style, onCLick} = props
//     return (
//       <div onClick={onclick} className={`arrow ${className}`} style={{zIndex:3}}>
//         <AiOutlineArrowRight className="arrows" style={{...style, display: 'block', borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left:"50px" }}/>
//       </div>
//     )
//   }
//    var settings = {
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow to="Next"/>,
//     prevArrow: <SamplePrevArrow to="prev"/>,
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         {
//           data?.slice(0,7)?.map((item, index) => {
//             return <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
//               <div className="flex gap-10 justify-center h-[600px] items-center px-4">
//                 <div className="space-y-6">
//                   <h3 className="text-red-500 font-semibold font-sans text-sm">Powering Your World With the Best in Electronics</h3>
//                   <h1 className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
//                   <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
//                   <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
//                 </div>
//                 <div>
//                   <img src={item.image} alt={item.title} className='rounded-full w-[350px] hover:scale-105 transition-all shadow-1xl shadow-red-400'/>
//                 </div>
//               </div>
//             </div>
//           })
//         }
//       <div>
//         <h3>1</h3>
//       </div>
//     </Slider>
//     </div>
//   )
// }

// export default Carousel
