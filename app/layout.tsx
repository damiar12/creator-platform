import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Nexo — Creator Platform", description: "Todo tu negocio digital, en un solo lugar." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="min-h-screen antialiased">{children}</body></html>; }
