import React, { useState } from "react";
import {
    Heart,
    ShoppingCart,
    Star,
    Eye,
} from "lucide-react";

const ProductCard = ({
    product,
    handleClick,
    addToCart,
}) => {
    const [liked, setLiked] = useState(false);

    // Demo Rating
    const rating = (4 + Math.random()).toFixed(1);

    // Demo Original Price (20% higher)
    const originalPrice = Math.round(product.price * 1.2);

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

            {/* Image Section */}

            <div className="relative bg-gray-50 h-60 overflow-hidden">

                {/* Wishlist */}

                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
                >
                    <Heart
                        size={18}
                        className={
                            liked
                                ? "fill-red-500 text-red-500"
                                : "text-gray-500"
                        }
                    />
                </button>

                {/* Category */}

                <span className="absolute top-4 left-4 bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium z-10 capitalize">
                    {product.category}
                </span>

                {/* Quick View */}

                <button
                    onClick={() => handleClick(product._id)}
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
                >
                    <Eye
                        size={18}
                        className="text-indigo-600"
                    />
                </button>

                {/* Product Image */}

                <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => handleClick(product._id)}
                    className="w-full h-full object-contain p-6 cursor-pointer group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}

            <div className="p-5">

                {/* Title */}

                <h3
                    onClick={() => handleClick(product._id)}
                    className="font-semibold text-gray-800 text-lg line-clamp-2 cursor-pointer hover:text-indigo-600 transition"
                >
                    {product.title}
                </h3>

                {/* Rating */}

                <div className="flex items-center gap-2 mt-3">

                    <div className="flex">

                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                size={15}
                                className="fill-yellow-400 text-yellow-400"
                            />
                        ))}

                    </div>

                    <span className="text-sm text-gray-500">
                        {rating} (126)
                    </span>

                </div>

                {/* Price */}

                <div className="flex items-center gap-3 mt-4">

                    <span className="text-2xl font-bold text-indigo-600">
                        ₹{product.price}
                    </span>

                    <span className="text-gray-400 line-through">
                        ₹{originalPrice}
                    </span>

                    <span className="text-green-600 text-sm font-semibold">
                        20% OFF
                    </span>

                </div>

                {/* Add to Cart */}

                <button
                    onClick={() => addToCart(product)}
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                    <ShoppingCart size={18} />

                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default ProductCard;