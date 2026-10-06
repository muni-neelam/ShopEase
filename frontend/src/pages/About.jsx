import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  CreditCard,
  Truck,
  Lock,
  Headphones,
  Users,
  Package,
  Star,
} from "lucide-react";

import User from "../assets/image.jpg";
import who from "../assets/who.png";
import what from "../assets/what2.png";
import aboutimg from "../assets/About.png"

const About = () => {
  return (
    <div className="bg-linear-to-b from-indigo-50 via-white to-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-indigo-600">ShopEase</span>
            </h1>

            <div className="w-20 h-1 bg-indigo-600 rounded-full my-5"></div>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              We are dedicated to making online shopping easy,
              affordable and enjoyable for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-xl p-4 shadow-md">
                <ShieldCheck className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">Trusted</h4>
                <p className="text-sm text-gray-500">
                  100% Secure Platform
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md">
                <BadgeCheck className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">Affordable</h4>
                <p className="text-sm text-gray-500">
                  Best Prices Everyday
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md">
                <HeartHandshake className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">Customer First</h4>
                <p className="text-sm text-gray-500">
                  Satisfaction Guaranteed
                </p>
              </div>

            </div>
          </div>

          <img
            src={aboutimg}
            alt=""
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={who}
            alt=""
            className="rounded-3xl shadow-xl h-90"
          />

          <div>

            <h2 className="text-4xl font-bold mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              ShopEase started with a simple mission to provide
              high-quality products at fair prices delivered to your
              doorstep. We've grown into a trusted brand that values
              quality, innovation and customer satisfaction.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="text-center">
                <Users className="mx-auto text-indigo-600 mb-2" />
                <h3 className="font-bold text-2xl">50K+</h3>
                <p className="text-gray-500 text-sm">
                  Happy Customers
                </p>
              </div>

              <div className="text-center">
                <Package className="mx-auto text-indigo-600 mb-2" />
                <h3 className="font-bold text-2xl">10K+</h3>
                <p className="text-gray-500 text-sm">
                  Products
                </p>
              </div>

              <div className="text-center">
                <Star className="mx-auto text-indigo-600 mb-2" />
                <h3 className="font-bold text-2xl">99%</h3>
                <p className="text-gray-500 text-sm">
                  Positive Reviews
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* What We Do */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              What We Do
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              We offer electronics, groceries, fashion and daily
              essentials with secure payments, fast delivery and
              excellent customer support.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-xl shadow">
                <CreditCard className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">
                  Easy Payments
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <Truck className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">
                  Fast Delivery
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <Lock className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">
                  Secure Checkout
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <Headphones className="text-indigo-600 mb-2" />
                <h4 className="font-semibold">
                  24/7 Support
                </h4>
              </div>

            </div>

          </div>

          <img
            src={what}
            alt=""
            className="rounded-3xl shadow-xl"
          />

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-indigo-50 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                icon: ShieldCheck,
                title: "Quality Products",
                text: "Trusted suppliers"
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "Quick shipping"
              },
              {
                icon: Lock,
                title: "Secure Shopping",
                text: "Protected payments"
              },
              {
                icon: Headphones,
                title: "Customer Support",
                text: "Always available"
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
                >
                  <Icon
                    className="mx-auto text-indigo-600 mb-4"
                    size={40}
                  />

                  <h3 className="font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Team */}

      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              name: "Muni Neelam",
              role: "Founder & CEO",
              img: User,
            },
            {
              name: "Priya Verma",
              role: "UI/UX Designer",
              img: "https://randomuser.me/api/portraits/women/40.jpg",
            },
            {
              name: "Ajay Kumar",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <img
                src={member.img}
                alt=""
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-indigo-100"
              />

              <h3 className="mt-5 font-bold text-xl">
                {member.name}
              </h3>

              <p className="text-indigo-600">
                {member.role}
              </p>

              <p className="text-gray-500 mt-3 text-sm">
                Passionate about creating seamless shopping
                experiences for our customers.
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <Link
            to="/products"
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-4 rounded-xl shadow-lg"
          >
            Start Shopping →
          </Link>
        </div>

      </section>

    </div>
  );
};

export default About;