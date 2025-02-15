// Components
import Header from "./ui/header/header";
// Imports
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
// Styles
import "../styles/globals.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mercatto",
  description: "Mercatto is a marketplace for buying and selling goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.variable}`}>
        <Header loggedIn={true} />
        {children}
      </body>
    </html>
  );
}
