/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            borderWidth: {
                1.5: "1.5px",
                3: "3px",
            },
            boxShadow: {
                "hard-sm": "0.25rem 0.25rem",
                hard: "0.5rem 0.5rem",
                "hard-md": "0.625rem 0.625rem",
                "hard-lg": "0.75rem 0.75rem",
                "hard-xl": "1rem 1rem",
                "hard-none": "0px",
            },
            fontFamily: {
                regular: "'Inter', sans-serif",
                display: "'', cursive",
            },
        },
    },
    plugins: [],
};
