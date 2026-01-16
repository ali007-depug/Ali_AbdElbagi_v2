import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali AbdElbagi",
  description: "This is Ali AbdElbagi personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  children ;
}
