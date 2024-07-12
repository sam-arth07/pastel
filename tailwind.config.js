import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ["var(--font-heading)", ...fontFamily.sans],
				body: ["var(--font-body)", ...fontFamily.sans],
			},
			colors: {
				border: "hsl(240,5.9%,90%)",
				input: "hsl(240,5.9%,90%)",
				ring: "hsl(346.8,77.2%,49.8%)",
				background: "hsl(0, 0 ,100%)",
				foreground: "hsl(240, 10%, 3.9%)",
				primary: {
					DEFAULT: "hsl(346.8 ,77.2%, 49.8%)",
					foreground: "hsl(355.7, 100%, 99%)",
				},
				secondary: {
					DEFAULT: "hsl(240, 4.8% , 95.9%)",
					foreground: "hsl(240 ,5.9%, 10%)",
				},
				destructive: {
					DEFAULT: "hsl(0,72%,51%)",
					foreground: "hsl(0,0,98%)",
				},
				muted: {
					DEFAULT: "hsl(240,4.8%,95.9%)",
					foreground: "hsl(240,3.8%,45%)",
				},
				accent: {
					DEFAULT: "hsl(240,4.8%,95.9%)",
					foreground: "hsl(240,5.9%,10%)",
				},
				popover: {
					DEFAULT: "hsl(0, 0 ,100%)",
					foreground: "hsl(240,10%,3.9%)",
				},
				card: {
					DEFAULT: "hsl(0, 0 ,100%)",
					foreground: "hsl(240,10%,3.9%)",
				},
			},
			borderRadius: {
				xl: `calc(var(--radius) + 4px)`,
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: `calc(var(--radius) - 4px)`,
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: {
					height: "0",
				},
				to: {
					height: "var(--radix-accordion-content-height)",
				},
			},
			"accordion-up": {
				from: {
					height: "var(--radix-accordion-content-height)",
				},
				to: {
					height: "0",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("tailwindcss-animate")],
};
