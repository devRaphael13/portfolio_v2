/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-green-600",
    "bg-cyan-600",
    "bg-purple-600",
    "bg-teal-600",
    "bg-emerald-600",
    "bg-sky-600",
    "bg-blue-600",
    "bg-orange-600",
    "bg-red-600"
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        dropShadow: {
          glow: [
            "0 0px 5px rgba(45, 212, 191, 0.35)",
            "0 0px 10px rgba(45, 212, 191, 0.2)"
          ]
        }
    },
  },
  plugins: [],
};
