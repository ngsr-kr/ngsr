import "./globals.css";
import type { Metadata } from "next";
import Header from "../component/layout/Header";

export const metadata: Metadata = {
  title: "니가사라",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className=" bg-white">
        <Header />
        <main className="mt-[50px] mx-auto relative max-w-[1280px] w-full min-h-screen md:mt-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}
