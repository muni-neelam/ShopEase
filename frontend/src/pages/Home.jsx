import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import apiUrl from "../../apiUrl.json";
import Banner from "../components/Banner";

const Home = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get(apiUrl.GetProducts);
        setFeatured(res.data.slice(19, 23));
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-800">
      {/* ================= HERO ================= */}
      <section>
        <Banner />
      </section>

      {/* ================= SHOPPING BENEFITS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {/* Benefit 1 */}
            <div className="flex items-center gap-3 px-4 py-5 md:px-6">
              <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-xl">
                🚚
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Free Delivery
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  On orders above ₹499
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-3 px-4 py-5 md:px-6">
              <div className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center text-xl">
                ↩️
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Easy Returns
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  7-day return policy
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-3 px-4 py-5 md:px-6">
              <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center text-xl">
                🔒
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Secure Payment
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  100% secure checkout
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center gap-3 px-4 py-5 md:px-6">
              <div className="w-11 h-11 rounded-full bg-pink-50 flex items-center justify-center text-xl">
                ⭐
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Quality Products
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Trusted by customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-indigo-600">
              Explore More
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            View All
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            {
              name: "Mobiles",
              icon: "📱",
              discount: "Up to 40% Off",
            },
            {
              name: "Electronics",
              icon: "🎧",
              discount: "Up to 50% Off",
            },
            {
              name: "Fashion",
              icon: "👕",
              discount: "Up to 60% Off",
            },
            {
              name: "Home",
              icon: "🛋️",
              discount: "Up to 40% Off",
            },
            {
              name: "Beauty",
              icon: "🧴",
              discount: "Up to 35% Off",
            },
            {
              name: "Sports",
              icon: "⚽",
              discount: "Up to 45% Off",
            },
            {
              name: "Toys",
              icon: "🧸",
              discount: "Up to 50% Off",
            },
          ].map((category) => (
            <Link
              to="/products"
              key={category.name}
              className="group bg-white rounded-2xl border border-slate-100 p-4 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              <h3 className="font-semibold text-sm mt-3 text-slate-800">
                {category.name}
              </h3>

              <p className="text-[11px] text-slate-500 mt-1">
                {category.discount}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-sm font-medium text-indigo-600">
              Handpicked for you
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              Featured Products
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            View All Products
            <span className="text-lg">→</span>
          </Link>
        </div>

        {featured.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 py-20 text-center">
            <div className="text-4xl mb-3">🛍️</div>

            <p className="text-slate-500">
              Loading Featured Products...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Image */}
                <Link
                  to={`/product/${item._id}`}
                  className="block relative bg-white"
                >
                  <div className="h-60 p-6 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>

                  <button
                    type="button"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-slate-500 hover:text-red-500 transition"
                  >
                    ♡
                  </button>
                </Link>

                {/* Product Details */}
                <div className="px-5 pb-5">
                  <h3 className="font-semibold text-slate-900 truncate">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 line-clamp-2 `min-h-[40px]`">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-lg font-bold text-indigo-600">
                        ₹{item.price}
                      </span>

                      <span className="ml-2 text-xs text-slate-400 line-through">
                        ₹{(item.price * 1.15).toFixed(0)}
                      </span>
                    </div>

                    <Link
                      to={`/product/${item._id}`}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
                    >
                      View →
                    </Link>
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-xs text-slate-500">
                    <span className="text-yellow-500">★</span>
                    <span>4.5</span>
                    <span>•</span>
                    <span>120 reviews</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8 sm:hidden">
          <Link
            to="/products"
            className="px-6 py-2.5 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ================= PROMOTIONAL BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-700 via-purple-600 to-pink-500">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />
          <div className="absolute -bottom-28 right-40 w-80 h-80 bg-white/10 rounded-full" />

          <div className="relative px-7 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-medium mb-4">
                Weekend Special Offers
              </span>

              <h2 className="text-3xl md:text-4xl font-bold">
                Big Savings Are Waiting
              </h2>

              <p className="mt-3 text-white/80 max-w-lg">
                Discover amazing deals on top products and enjoy exclusive
                discounts available only on ShopEase.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-6 bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Shop Now
                <span>→</span>
              </Link>
            </div>

            <div className="text-7xl md:text-9xl opacity-90">
              🛍️
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLASH SALE ================= */}
      <FlashSale featured={featured} />

      {/* ================= TRUST SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>

              <h4 className="font-semibold text-slate-800">
                100% Original
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                Genuine products
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="text-3xl mb-3">🚚</div>

              <h4 className="font-semibold text-slate-800">
                Fast Delivery
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                On time, every time
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="text-3xl mb-3">↩️</div>

              <h4 className="font-semibold text-slate-800">
                7-Day Returns
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                Easy returns
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="text-3xl mb-3">💰</div>

              <h4 className="font-semibold text-slate-800">
                Best Prices
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                Guaranteed savings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================
   FLASH SALE
========================================================= */

const FlashSale = ({ featured }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-14 bg-linear-to-b from-red-50 to-white border-y border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Flash Sale
              </h2>
            </div>

            <p className="text-sm text-slate-500 mt-1">
              Grab these deals before they're gone!
            </p>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-red-600">
              Ends In:
            </span>

            <div className="flex items-center gap-1">
              <span className="bg-white border border-red-100 shadow-sm rounded-lg px-3 py-2 text-red-600 font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>

              <span className="font-bold text-red-500">:</span>

              <span className="bg-white border border-red-100 shadow-sm rounded-lg px-3 py-2 text-red-600 font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>

              <span className="font-bold text-red-500">:</span>

              <span className="bg-white border border-red-100 shadow-sm rounded-lg px-3 py-2 text-red-600 font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl border border-red-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 p-5 flex items-center justify-center">
                <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  20% OFF
                </span>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="px-5 pb-5">
                <h3 className="font-semibold text-slate-800 truncate">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                  <span className="text-yellow-500">★</span>
                  <span>4.5</span>
                  <span>•</span>
                  <span>120 reviews</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-red-600">
                      ₹{(item.price * 0.8).toFixed(0)}
                    </span>

                    <span className="ml-2 text-xs text-slate-400 line-through">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-medium transition shadow-sm hover:shadow-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          {/* Extra Offer Card */}
          <div className="rounded-2xl bg-linear-to-br from-pink-50 to-red-50 border border-red-100 p-6 flex flex-col justify-center">
            <span className="text-red-500 text-sm font-semibold">
              Limited Time Offer
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Extra 10% OFF
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Get an additional discount on prepaid orders.
            </p>

            <div className="mt-5">
              <span className="inline-block bg-white border border-red-200 rounded-lg px-3 py-2 text-sm font-semibold text-red-600">
                PREPAID10
              </span>
            </div>

            <Link
              to="/products"
              className="mt-5 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Explore Deals →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;