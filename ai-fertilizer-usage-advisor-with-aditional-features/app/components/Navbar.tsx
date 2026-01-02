import { Leaf } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur border-b">
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600 w-7 h-7" />
          <span className="text-xl font-bold text-green-700">
            AI Fertilizer Advisor
          </span>
        </div>

        <Link
          href="/get-started"
          className="px-5 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
