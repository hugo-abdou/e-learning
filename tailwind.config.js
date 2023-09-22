const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/views/**/*.blade.php", "./resources/js/**/*.vue", "./resources/editor/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans]
            }
        }
    },

    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("tailwind-scrollbar")]
};
