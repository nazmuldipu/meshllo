import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "var(--primary)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        meshllo: "var(--meshllo)",
      },
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        "secondary-8": "var(--secondary-8)",
        "secondary-hover": "var(--secondary-hover)",
        border: "var(--border)",
        "main-text": "var(--main-text)",
        "main-text-hover": "var(--main-text-hover)",
        "secondary-text": "var(--secondary-text)",
        "secondary-text-hover": "var(--secondary-text-hover)",
        "accent-text": "var(--accent-text)",
        "accent-light": "var(--accent-light)",
        tertiary: "var(--tertiary)",
        background: "var(--background)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        serif: ["var(--font-roboto-serif)"],
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      maxWidth: {
        "430": "107.5rem",
        "3.5xl": "52rem",
      },
      spacing: {
        "12.5": "3.125rem",
        "92.5": "23.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
