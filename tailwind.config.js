/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Adjust if you have different file extensions
];
export const theme = {
  extend: {
    fontFamily: {
      sans: [...fontFamily.sans, "Epilogue", "Titillium Web"],
    },
  },
};
export const plugins = [];
