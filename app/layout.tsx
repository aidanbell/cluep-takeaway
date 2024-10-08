import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Cluep Messenger",
  description: "Built by Aidan Bell for Cluep",
};

const BasierCircle = localFont({
  src: [
    {
      path: "../public/Font/Basier Circle/Basier Circle Regular.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Font/Basier Circle/Basier Circle Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/Font/Basier Circle/Basier Circle Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${BasierCircle.className} h-screen flex flex-col-reverse`}>{children}</body>
      </Provider>
    </html>
  );
}
