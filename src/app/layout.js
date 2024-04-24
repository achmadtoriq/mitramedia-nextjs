import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainBar from "@/components/navigation/mainBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainBar />
          {children}
          <section
            id="footer-section"
            className="bg-black text-white px-20 py-10"
          >
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
