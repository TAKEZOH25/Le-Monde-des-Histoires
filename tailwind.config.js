/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fredoka', 'sans-serif'],
            },
            colors: {
                'brand-pink': '#FF6B6B',
                'brand-pastel': '#FFF0F0',
                'brand-blue': '#4ECDC4',
            }
        },
    },
    plugins: [],
}
