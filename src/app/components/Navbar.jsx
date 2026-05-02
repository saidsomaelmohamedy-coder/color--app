import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الموقع" },
  { href: "/topics", label: "الدروس" },
  { href: "/activities", label: "الأنشطة" },
  { href: "/exam", label: "الاختبار النهائي" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav className="glass mx-auto flex max-w-7xl flex-col gap-4 rounded-4xl px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-blue-600 via-violet-600 to-pink-500 text-2xl text-white shadow-lg">
            🎨
          </span>

          <div>
            <h1 className="text-lg font-black">
              دليل الألوان في التصميم الجرافيكي
            </h1>
            <p className="text-xs font-bold text-muted">
              تعلم نشط لصعوبات التعلم
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}