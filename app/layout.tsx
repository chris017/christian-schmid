import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {Navbar} from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });
import { Web3Modal } from '../context/Web3Modal'
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Christian Schmid Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Web3Modal>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <main>
        {children}
        </main>
        </ThemeProvider>
        </Web3Modal>
        </body>
    </html>
  );
}
