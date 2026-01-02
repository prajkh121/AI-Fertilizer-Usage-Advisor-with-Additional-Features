"use client";

import { useState } from "react";
import axios from "axios";
import { SendHorizonal, Loader2 } from "lucide-react";

export default function GetStartedPage() {
  const [form, setForm] = useState({
    crop: "",
    stage: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    landSize: "",
    landUnit: "acre",
    language: "English",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const typeEffect = (text: string) => {
    setTypingText("");
    let i = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 20);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTypingText("");

    try {
      const response = await axios.post("/api/recommend", {
        ...form,
        nitrogen: Number(form.nitrogen),
        phosphorus: Number(form.phosphorus),
        potassium: Number(form.potassium),
        ph: Number(form.ph),
        landSize: Number(form.landSize),
      });

      typeEffect(response.data.data);
    } catch (error) {
      console.error(error);
      typeEffect("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border p-8">
        <h1 className="text-3xl font-bold text-center text-green-700">
          Get Fertilizer Recommendation 🌱
        </h1>
        <p className="text-center text-gray-700 mt-2">
          Enter crop and soil details to get AI-powered advice
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="crop"
              placeholder="Crop Type (e.g. Rice)"
              className="input"
              onChange={handleChange}
              required
            />
            <select
              name="stage"
              className="input"
              onChange={handleChange}
              required
            >
              <option value="">Select Growth Stage</option>
              <option>Seedling</option>
              <option>Vegetative</option>
              <option>Flowering</option>
              <option>Fruiting</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              name="nitrogen"
              placeholder="Nitrogen (N)"
              className="input"
              type="number"
              required
            />
            <input
              name="phosphorus"
              placeholder="Phosphorus (P)"
              className="input"
              type="number"
              required
            />
            <input
              name="potassium"
              placeholder="Potassium (K)"
              className="input"
              type="number"
              required
            />
          </div>

          <input
            name="ph"
            placeholder="Soil pH (e.g. 6.5)"
            className="input"
            type="number"
            step="0.1"
            required
          />

          <div className="grid grid-cols-3 gap-4">
            <input
              name="landSize"
              placeholder="Land Size"
              className="input col-span-2"
              type="number"
              required
            />
            <select name="landUnit" className="input" onChange={handleChange}>
              <option value="acre">Acre</option>
              <option value="hectare">Hectare</option>
            </select>
          </div>

          <select name="language" className="input" onChange={handleChange}>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>

          <textarea
            name="additionalInfo"
            placeholder="Additional info (budget, organic preference, irrigation timing)"
            className="input h-24 resize-none"
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            {loading ? <Loader2 className="animate-spin" /> : <SendHorizonal />}
            {loading ? "Analyzing..." : "Generate Recommendation"}
          </button>
        </form>

        {typingText && (
          <div className="mt-8 p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="font-semibold text-green-700 mb-3">
              AI Recommendation
            </h3>
            <p className="whitespace-pre-wrap text-gray-900 text-sm leading-relaxed">
              {typingText}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #d1d5db;
          color: #000;
          background: #fff;
        }

        .input::placeholder {
          color: #374151;
          opacity: 1;
        }

        .input:focus {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.25);
          outline: none;
        }
      `}</style>
    </main>
  );
}
