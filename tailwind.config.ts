import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at top left, rgba(255,255,255,0.38), transparent 30%), radial-gradient(circle at top right, rgba(255,255,255,0.24), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      },
    },
  },
  plugins: [],
};

export default config;
