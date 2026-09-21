import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#090a0d", panel: "#111318", line: "#24262d", lime: "#c9ff63" }, boxShadow: { glow: "0 0 32px rgba(201,255,99,.12)" } } }, plugins: [] } satisfies Config;
