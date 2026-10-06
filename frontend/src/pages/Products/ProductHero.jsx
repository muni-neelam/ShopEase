import React from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import heroImage from "../../assets/About.png"; // Replace with your own image

const ProductHero = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-50 via-white to-purple-50 shadow-sm border border-indigo-100 mb-8">
            {/* Background Blur */}
            <div className="absolute -top-24 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-8 py-12">

                {/* Left */}
                <div>

                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        Premium Shopping Experience
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Discover Our
                        <span className="text-indigo-600"> Products</span>
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg leading-8 max-w-lg">
                        Explore thousands of quality products across fashion,
                        electronics, furniture, fragrances and much more—all at the
                        best prices.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        {/* <button className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition">
                            Shop Now
                        </button> */}

                        <button className="flex items-center gap-2 border border-indigo-200 text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
                            <ShoppingBag size={18} />
                            Browse Categories
                        </button>

                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-3 gap-8 mt-10">

                        <div>
                            <h3 className="text-2xl font-bold text-indigo-600">10K+</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Products
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-indigo-600">50K+</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Customers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-indigo-600">99%</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Satisfaction
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex justify-center">
                    <img
                        src={heroImage}
                        alt="Shopping"
                        className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
                    />
                </div>

            </div>
        </section>
    );
};

export default ProductHero;