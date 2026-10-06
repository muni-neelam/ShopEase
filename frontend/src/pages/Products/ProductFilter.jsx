import React from "react";
import {
    SlidersHorizontal,
    Tag,
    IndianRupee,
    RotateCcw,
    Gift,
} from "lucide-react";

const ProductFilter = ({
    categories,
    selectedCategories,
    handleCategoryChange,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    products,
    setSelectedCategories,
    filteredProducts,
    sortBy,
    setSortBy,
}) => {
    const clearFilters = () => {
        setSelectedCategories([]);

        const prices = products.map((p) => p.price);

        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
        setSortBy("featured");
    };

    return (
        // <aside className="lg:w-80 w-full lg:sticky lg:top-24 h-fit">
        <aside className="w-full h-full overflow-y-auto pr-2"
        // style={{
        //     scrollbarWidth: "thin",
        // }}
        >

            {/* Filter Card */}
            <div
                className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 h-[calc(100vh-8rem)] overflow-y-auto"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-indigo-100 p-2 rounded-xl">
                        <SlidersHorizontal
                            className="text-indigo-600"
                            size={20}
                        />
                    </div>

                    <h2 className="text-xl font-bold">
                        Filters
                    </h2>
                </div>

                {/* Product Count */}

                <div className="bg-indigo-50 rounded-xl p-4 mb-6">

                    <p className="text-gray-500 text-sm">
                        Showing
                    </p>

                    <h3 className="text-2xl font-bold text-indigo-600">
                        {filteredProducts.length}
                    </h3>

                    <p className="text-sm text-gray-500">
                        Products
                    </p>

                </div>

                {/* Categories */}

                <div>

                    <div className="flex items-center gap-2 mb-4">

                        <Tag
                            className="text-indigo-600"
                            size={18}
                        />

                        <h3 className="font-semibold">
                            Categories
                        </h3>

                    </div>

                    <div className="space-y-3">

                        {categories.map((cat) => (
                            <label
                                key={cat}
                                className="flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">

                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() =>
                                            handleCategoryChange(cat)
                                        }
                                        className="accent-indigo-600 w-4 h-4"
                                    />

                                    <span className="group-hover:text-indigo-600 transition">
                                        {cat}
                                    </span>

                                </div>

                            </label>
                        ))}

                    </div>

                </div>

                {/* Price */}

                <div className="mt-8">

                    <div className="flex items-center gap-2 mb-4">

                        <IndianRupee
                            className="text-indigo-600"
                            size={18}
                        />

                        <h3 className="font-semibold">
                            Price Range
                        </h3>

                    </div>

                    <div className="flex gap-3">

                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) =>
                                setMinPrice(Number(e.target.value))
                            }
                            className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) =>
                                setMaxPrice(Number(e.target.value))
                            }
                            className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    <input
                        type="range"
                        min={0}
                        max={60000}
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(Number(e.target.value))
                        }
                        className="w-full mt-5 accent-indigo-600"
                    />

                </div>

                {/* Sort */}

                <div className="mt-8">

                    <h3 className="font-semibold mb-3">
                        Sort By
                    </h3>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                        className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="featured">
                            Featured
                        </option>

                        <option value="low">
                            Price : Low to High
                        </option>

                        <option value="high">
                            Price : High to Low
                        </option>

                        <option value="az">
                            Name : A-Z
                        </option>

                        <option value="za">
                            Name : Z-A
                        </option>

                    </select>

                </div>

                {/* Clear */}

                <button
                    onClick={clearFilters}
                    className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                    <RotateCcw size={18} />

                    Clear Filters
                </button>

            </div>

            {/* Offer Card */}

            {/* <div className="mt-6 rounded-3xl overflow-hidden bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-lg p-6">

        <Gift
          size={34}
          className="mb-4"
        />

        <h3 className="text-2xl font-bold">
          30% OFF
        </h3>

        <p className="mt-2 text-indigo-100">
          On selected premium products.
        </p>

        <button className="mt-6 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition">
          Shop Now
        </button>

      </div> */}

        </aside>
    );
};

export default ProductFilter;