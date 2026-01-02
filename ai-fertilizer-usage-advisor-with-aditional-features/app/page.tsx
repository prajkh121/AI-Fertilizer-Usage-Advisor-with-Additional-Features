import Link from "next/link";
import { Leaf, Sprout, Globe } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-lime-50">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Smart Fertilizer Decisions
          <span className="block text-green-600">Powered by AI 🌱</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Get accurate fertilizer recommendations based on crop type, soil
          condition, growth stage, and land size — all in your preferred
          language.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/get-started"
            className="px-8 py-3 rounded-full bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition shadow-md"
          >
            Start Now
          </Link>

          <a
            href="#features"
            className="px-8 py-3 rounded-full border border-green-600 text-green-700 text-lg font-semibold hover:bg-green-50 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Farmers Choose This 🌾
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl border hover:shadow-lg transition bg-green-50">
            <Sprout className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Precise Recommendations
            </h3>
            <p className="mt-2 text-gray-600">
              AI analyzes soil nutrients, crop stage, and land size to suggest
              the exact fertilizer and quantity.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition bg-lime-50">
            <Leaf className="w-10 h-10 text-lime-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Cost Saving & Eco-Friendly
            </h3>
            <p className="mt-2 text-gray-600">
              Avoid overuse of fertilizers, reduce costs, and protect long-term
              soil health.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition bg-emerald-50">
            <Globe className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Multi-Language Support
            </h3>
            <p className="mt-2 text-gray-600">
              Get recommendations in your preferred regional language for easy
              understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-lime-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Improve Your Yield?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Start using AI to make smarter fertilizer decisions today.
        </p>

        <Link
          href="/get-started"
          className="inline-block mt-8 px-10 py-3 rounded-full bg-white text-green-700 font-semibold text-lg hover:bg-green-50 transition shadow"
        >
          Get Started
        </Link>
      </section>
      <Footer />
    </main>
  );
}
