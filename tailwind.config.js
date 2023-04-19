/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	important: true,
	mode: "jit",
	theme: {
		screens: {
			xs: {
				min: "300px",
				max: "374px",
			},
			sm: {
				min: "375px",
				max: "767px",
			},

			md: {
				min: "768px",
				max: "1023px",
			},
			lg: {
				min: "1024px",
				max: "1365px",
			},
			xl: { min: "1366px" },
			xxl: { min: "1920px" },
		},
		extend: {
			fontFamily: {
				sans: ["Inter var"],
				clash: ["Clash Display", "sans-serif"],
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss"), require("daisyui"), require("@tailwindcss/line-clamp")],
};
