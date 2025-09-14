import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="mt-2 rounded-md">
      <div className="bg-gray-100 flex flex-col md:flex-row gap-4 md:gap-7 items-start md:items-center p-4 rounded-md shadow-sm">
        
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-[200px] md:w-60 md:h-60 h-auto rounded-md cursor-pointer object-contain"
          onClick={() => navigate(`/products/${product.id}`)}
        />

        {/* Product Details */}
        <div className="space-y-3 flex-1">
          {/* Title */}
          <h1 className="font-bold text-lg md:text-xl line-clamp-3 hover:text-red-500 transition-colors">
            {product.title}
          </h1>

          {/* Price */}
          <p className="font-semibold flex items-baseline gap-1 md:text-lg text-sm">
            $<span className="md:text-4xl text-2xl">{product.price}</span>
            <span className="text-xs md:text-sm text-green-600 font-medium">(2% off)</span>
          </p>

          {/* Delivery Info */}
          <p className="text-xs md:text-sm leading-relaxed text-gray-700">
            FREE delivery <span className="font-semibold">Fri, 18 Apr</span>
            <br />
            Or fastest delivery <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>

          {/* Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-base transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView
