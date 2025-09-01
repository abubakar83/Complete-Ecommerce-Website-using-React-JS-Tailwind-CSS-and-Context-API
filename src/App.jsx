import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contacts/>}/>
    <Route path="/cart" element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App