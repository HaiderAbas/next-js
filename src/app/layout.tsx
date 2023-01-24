import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
