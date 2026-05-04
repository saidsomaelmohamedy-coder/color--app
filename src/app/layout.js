import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "دليل الألوان في التصميم الجرافيكي",
  description:
    "موقع تعليمي تفاعلي لذوي صعوبات التعلم حول الألوان ودلالتها في التصميم الجرافيكي.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  document.documentElement.classList.remove("dark");
                  document.documentElement.style.colorScheme = "light";
                  localStorage.removeItem("theme");
                  localStorage.setItem("theme", "light");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className={cairo.className}>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}