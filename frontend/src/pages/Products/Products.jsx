import React, { useContext, useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import apiUrl from "../../../apiUrl.json";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import Loader from "../../components/Loader";
import {
  showErrorToast,
  showSuccessToast,
} from "../../components/Toaster";

import ProductHero from "./ProductHero";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";

import { Funnel } from "lucide-react";

const Products = () => {
  const navigate = useNavigate();

  const { fetchCartCount } = useContext(CartContext);

  // ---------------- STATES ----------------

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [minPrice, setMinPrice] = useState(0);

  const [maxPrice, setMaxPrice] = useState(60000);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState("featured");

  // ---------------- FETCH PRODUCTS ----------------

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get(apiUrl.GetProducts);

      setProducts(res.data);

      setFilteredProducts(res.data);

      const uniqueCategories = [
        ...new Set(res.data.map((item) => item.category)),
      ];

      setCategories(uniqueCategories);

      const prices = res.data.map((item) => item.price);

      setMinPrice(Math.min(...prices));

      setMaxPrice(Math.max(...prices));

      setLoading(false);
    } catch (err) {
      console.log(err);

      setError("Failed to load products");

      setLoading(false);
    }
  };

  // ---------------- PRODUCT DETAILS ----------------

  const handleClick = (productId) => {
    navigate(`/product/${productId}`, {
      state: {
        productId,
      },
    });
  };

  // ---------------- ADD TO CART ----------------

  const addToCart = async (product) => {
    const user = localStorage.getItem("user");

    if (!user) {
      showErrorToast(
        "Please login to add items to your cart"
      );
      return;
    }

    try {
      await api.post(apiUrl.AddToCart, {
        productId: product._id,
        qty: 1,
      });

      showSuccessToast("Item added to cart");

      fetchCartCount();
    } catch (err) {
      showErrorToast(
        err.response?.data?.message ||
        "Failed to add to cart"
      );
    }
  };

  // ---------------- CATEGORY ----------------

  const handleCategoryChange = (category) => {
    let updated = [...selectedCategories];

    if (updated.includes(category)) {
      updated = updated.filter(
        (item) => item !== category
      );
    } else {
      updated.push(category);
    }

    setSelectedCategories(updated);
  };

  // ---------------- FILTER + SORT ----------------

  useEffect(() => {
    let filtered = [...products];

    // CATEGORY

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // PRICE

    filtered = filtered.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice
    );

    // SORT

    switch (sortBy) {
      case "low":
        filtered.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "high":
        filtered.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "az":
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        filtered.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedCategories,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  // ---------------- LOADING ----------------

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      {/* <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-8">
        <ProductHero />
      </div> */}

      {/* Mobile Filter Overlay */}

      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 flex gap-8">

        {/* Sidebar */}

        <div
          className={`fixed lg:sticky top-20 lg:top-24 left-0 h-[calc(100vh-5rem)] lg:h-fit w-80 lg:w-72 bg-white lg:bg-transparent z-40 transform transition-transform duration-300 overflow-y-auto
           ${isFilterOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
            }`}
        >
          <div className="lg:hidden flex justify-between items-center p-5 border-b">
            <h2 className="text-xl font-bold">
              Filters
            </h2>

            <button
              onClick={() =>
                setIsFilterOpen(false)
              }
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="p-5 lg:p-0">
            <ProductFilter
              categories={categories}
              selectedCategories={
                selectedCategories
              }
              handleCategoryChange={
                handleCategoryChange
              }
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              products={products}
              filteredProducts={
                filteredProducts
              }
              setSelectedCategories={
                setSelectedCategories
              }
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>

        {/* Products */}

        <div className="flex-1">

          {/* Toolbar */}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Our Products
              </h2>

              <p className="text-gray-500 mt-1">
                Showing{" "}
                <span className="font-semibold text-indigo-600">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

            </div>

            <button
              onClick={() =>
                setIsFilterOpen(true)
              }
              className="lg:hidden flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl"
            >
              <Funnel size={18} />

              Filters
            </button>

          </div>

          {/* Products Grid */}

          {filteredProducts.length === 0 ? (

            <div className="bg-white rounded-3xl p-20 text-center shadow">

              <h3 className="text-2xl font-bold text-gray-700">
                No Products Found
              </h3>

              <p className="text-gray-500 mt-3">
                Try changing your filters.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    handleClick={
                      handleClick
                    }
                    addToCart={addToCart}
                  />
                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Products;