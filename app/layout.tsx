import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "DeRPLe",
  description: "Showcase and discover your projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-gray-900 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
