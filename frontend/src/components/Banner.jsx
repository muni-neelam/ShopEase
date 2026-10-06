import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../assets/Hero-Image.png";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-4">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-linear-to-r from-indigo-700 via-purple-600 to-pink-500 shadow-xl">
        {/* Decorative Background Circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />

        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-white/5 rounded-full" />

        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl" />

        {/* Main Content */}
        <div className="relative min-h-[430px] flex flex-col md:flex-row items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full md:w-[55%] px-6 sm:px-10 lg:px-12 py-12 md:py-14 text-white">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-medium mb-5">
              <span>✨</span>
              Big Savings on Top Brands
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Welcome to{" "}
              <span className="text-orange-400">ShopEase</span>
            </h1>

            {/* Sub Heading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">
              Your One-Stop Destination for Smart Shopping
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
              Discover trending products, unbeatable prices, and fast delivery.
              Shop your favorites with ease and comfort, only on ShopEase.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-7">
              <button
                onClick={() => navigate("/products")}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Shop Now
                <span className="text-lg">→</span>
              </button>

              <button
                onClick={() => navigate("/products")}
                className="inline-flex items-center gap-2 border border-white/60 hover:bg-white hover:text-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                Explore Deals
                <span>→</span>
              </button>
            </div>

            {/* Benefits */}
            {/* <div className="flex flex-wrap gap-x-7 gap-y-4 mt-9">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  🚚
                </div>

                <div>
                  <p className="text-xs font-semibold">Free Delivery</p>
                  <p className="text-[10px] text-white/70">
                    On orders above ₹499
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  ↩️
                </div>

                <div>
                  <p className="text-xs font-semibold">Easy Returns</p>
                  <p className="text-[10px] text-white/70">
                    7-day return policy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  🔒
                </div>

                <div>
                  <p className="text-xs font-semibold">Secure Payment</p>
                  <p className="text-[10px] text-white/70">
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="hidden md:flex w-[45%] h-full min-h-[430px] items-center justify-center relative">
            {/* Offer Badge */}
            <div className="absolute top-10 right-8 lg:right-12 z-10 bg-linear-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-xl shadow-lg transform rotate-2">
              <p className="text-lg font-extrabold leading-none">
                🔥 Flat 50% OFF
              </p>

              <p className="text-[11px] text-center font-medium mt-1">
                on First Order!
              </p>
            </div>

            {/* Image Glow */}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <img
              src={BannerImage}
              alt="ShopEase Banner Illustration"
              className="relative z-10 w-[85%] max-w-[500px] h-[380px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Slider-style Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="w-6 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}

export default Banner;