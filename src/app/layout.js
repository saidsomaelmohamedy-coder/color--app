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

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem("theme");

                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>

      <body className={cairo.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}