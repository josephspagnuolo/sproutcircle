import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprout Circle",
  description: "Leaders in Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white text-gray-900 sr">
      <body className={`${inter.className} h-full flex flex-col`}>
        <Toaster />
        <NavBar />
        <main className="pt-20 p-4 grow">
          {children}
        </main>
        <Footer />
      </body>
    </html >
  );
}
