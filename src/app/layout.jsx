import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import ClickSpark from "../blocks/Animations/ClickSpark/ClickSpark";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "ICMACC | 2026",
  description: "Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50">
        <ClickSpark sparkColor="#3b82f6" sparkCount={12} sparkRadius={20} />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
