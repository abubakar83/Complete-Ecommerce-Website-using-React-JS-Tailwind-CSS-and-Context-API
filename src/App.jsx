import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url, {
          headers: {
            "User-Agent": "MyApp/1.0 (myemail@example.com)",
          },
        });

        const exactLocation = location.data.address;
        setLocation(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
