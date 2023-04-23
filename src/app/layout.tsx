import { Navbar } from "./components/Navbar";
import "./globals.css";
import { Rosario } from "next/font/google";

const rosario = Rosario({
  variable: "--font-rosario",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rosario.variable}`}>
      <body className="dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
