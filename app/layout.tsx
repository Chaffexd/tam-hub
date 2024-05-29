import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchNavbar } from "@/lib/contentful";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAM Hub",
  description: "The home of information for Technical Account Managers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = await fetchNavbar();
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <Navbar navData={navData} />
        <main className="max-w-screen-xl m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
