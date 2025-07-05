import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400','500','600','700']
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Jemson Sayre - Portfolio",
  description: "",
  icons: {
    icon: "/images/logo-icon-dark.png",
    shortcut: "/favicon-16x16.png",
    "favicon-32x32": "/favicon-32x32.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.className} ${poppins.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
