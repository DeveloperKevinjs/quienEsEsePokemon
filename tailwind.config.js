/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "3px 3px 10px",
                "4xl": "0px 0px 2px 2px rgba(0,0,0,0.2)",
            },
            transitionProperty: {
                "2xke": ".5s ease all",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
