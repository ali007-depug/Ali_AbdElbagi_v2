import "./globals.css";
import { Geist } from "next/font/google";
import { cairo } from "../components/fonts";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {children : React.ReactNode}) {

  return (
    <html lang="en" className={geist.variable}>
      <body className={cairo + " antialiased"}>
        {children}
      </body>
    </html>
    
  )
}
