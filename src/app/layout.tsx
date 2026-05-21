import "./globals.css";
import { Geist } from "next/font/google";
import { cairo } from "../components/fonts";
import MicrosoftClarity from "@/src/components/MicrosoftClarity";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en" className={geist.variable}>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="CCE2CTQbIIKS011HcE3JI_wflaLZGIwIWwh52Lhg2Kc"
      />

      <body className={cairo + " antialiased"}>{children}
        <MicrosoftClarity />
      </body>
    </html>
  );
}
