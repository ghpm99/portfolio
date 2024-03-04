import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio Guilherme H.",
    description: "Portfolio projetos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
