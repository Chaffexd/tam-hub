import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchNavbar } from "@/lib/contentful";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAM Hub",
  description: "The home of information for Technical Account Management, Support trainings and the internal Support knowledge base.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = await fetchNavbar();

  const session = await auth();

  /* if (session === null || !session?.user) {
    redirect("/login")
  } */

  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <>
          {session === null || !session?.user ? null : <Navbar navData={navData} /> }
          <main className="max-w-screen-xl m-auto">{children}</main>
          {session === null || !session?.user ? null : <Footer /> }
        </>
      </body>
      <GoogleAnalytics gaId="G-PL6HE1T8BN" />
    </html>
  );
}
