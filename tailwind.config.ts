import type { Config } from "tailwindcss";
import * as animate from "tailwindcss-animate";
export default {
darkMode: ["class"],
content: ["./pages/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./app/**/*.{ts,tsx}","./src/**/*.{ts,tsx}"],
prefix: "",
theme: {
container: {
center: true,
padding: "2rem",
screens: {"2xl": "1400px"}},
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
DEFAULT: "hsl(var(--primary))",
foreground: "hsl(var(--primary-foreground))"},
secondary: {
DEFAULT: "hsl(var(--secondary))",
foreground: "hsl(var(--secondary-foreground))"},
destructive: {
DEFAULT: "hsl(var(--destructive))",
foreground: "hsl(var(--destructive-foreground))"},
muted: {
DEFAULT: "hsl(var(--muted))",
foreground: "hsl(var(--muted-foreground))"},
accent: {
DEFAULT: "hsl(var(--accent))",
foreground: "hsl(var(--accent-foreground))"},
popover: {
DEFAULT: "hsl(var(--popover))",
foreground: "hsl(var(--popover-foreground))"},
card: {
DEFAULT: "hsl(var(--card))",
foreground: "hsl(var(--card-foreground))"},
gamer: {
primary: "#FF0066",
secondary: "#00FF66",
accent: "#9933FF",
background: "#1A1A2E",
text: "#E6E6E6"}},
fontFamily: {
gamer: ["'Press Start 2P'", "cursive"]},
keyframes: {
"accordion-down": {from: {height: "0"},to: {height: "var(--radix-accordion-content-height)"}},
"accordion-up": {from: {height: "var(--radix-accordion-content-height)"},to: {height: "0"}},
"fade-in": {"0%": {opacity: "0"},"100%": {opacity: "1"}},
"neon-pulse": {"0%, 100%": {textShadow: "0 0 10px #FF0066, 0 0 20px #FF0066, 0 0 30px #FF0066"},"50%": {textShadow: "none"}}},
animation: {
"accordion-down": "accordion-down 0.2s ease-out",
"accordion-up": "accordion-up 0.2s ease-out",
"fade-in": "fade-in 0.5s ease-out",
"neon-pulse": "neon-pulse 2s infinite"}}}},
plugins: [animate]} satisfies Config;