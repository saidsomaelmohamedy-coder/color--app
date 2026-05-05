import Link from "next/link";

/* الصورة الرئيسية على الشمال بجانب العنوان */
const imageUrl =
  "https://i.pinimg.com/736x/16/d6/a1/16d6a19ba3fc1c2af75a04e77ec05c9f.jpg";

/* فيديو الدرس: حطي لينك YouTube عادي أو embed */
const videoUrl = "https://youtu.be/_fUbpKNiTZA?si=K5QlB1LgcFJLxclZ";

const colorCards = [
  {
    title: "اللون الأحمر",
    icon: "🔴",
    color: "#ef4444",
    image:
      "https://i.pinimg.com/736x/01/68/2a/01682aec7416550e2fc456ac1886fb23.jpg",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "text-red-700 bg-red-100",
    meanings: ["الخطر", "التوقف", "النار"],
    example: "نتوقف عند اللون الأحمر في إشارة المرور.",
  },
  {
    title: "اللون الأزرق",
    icon: "🔵",
    color: "#2563eb",
    image:
      "https://i.pinimg.com/474x/da/4a/e2/da4ae206976c7318d10a08f1fd6484ba.jpg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "text-blue-700 bg-blue-100",
    meanings: ["الهدوء", "السماء", "الماء"],
    example: "نرى اللون الأزرق في البحر والسماء.",
  },
  {
    title: "اللون الأخضر",
    icon: "🟢",
    color: "#16a34a",
    image:
      "https://i.pinimg.com/736x/af/3d/53/af3d53e78e987bcb970026c5b6cfd2e3.jpg",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "text-green-700 bg-green-100",
    meanings: ["الأمان", "الطبيعة", "النباتات"],
    example: "نتحرك عند الإشارة الخضراء.",
  },
  {
    title: "اللون الأصفر",
    icon: "🟡",
    color: "#eab308",
    image:
      "https://i.pinimg.com/736x/37/40/df/3740dfc2aeaa3e3eda5afc1d5d360723.jpg",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "text-yellow-700 bg-yellow-100",
    meanings: ["الانتباه", "الشمس", "الحذر"],
    example: "الشمس لونها أصفر وساطع.",
  },
  {
    title: "اللون الأسود",
    icon: "⚫",
    color: "#111827",
    image:
      "https://i.pinimg.com/736x/2f/f4/7a/2ff47abaabb2ec74a49e2373d096738c.jpg",
    bg: "bg-slate-50",
    border: "border-slate-200",
    badge: "text-slate-800 bg-slate-100",
    meanings: ["الليل", "القوة", "الحزن أحيانًا"],
    example: "لون السماء يكون أسود في الليل.",
  },
  {
    title: "اللون الأبيض",
    icon: "⚪",
    color: "#f8fafc",
    image:
      "https://i.pinimg.com/736x/8f/e8/6f/8fe86f22e6ab88536f67b9be1ad95657.jpg",
    bg: "bg-white",
    border: "border-slate-200",
    badge: "text-slate-700 bg-slate-100",
    meanings: ["النظافة", "السلام", "النقاء"],
    example: "يرتبط اللون الأبيض بالنظافة والهدوء.",
  },
  {
    title: "اللون البرتقالي",
    icon: "🟠",
    color: "#f97316",
    image:
      "https://i.pinimg.com/736x/10/9d/ae/109daea9504a51f8bb450f80e745f5ca.jpg",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "text-orange-700 bg-orange-100",
    meanings: ["النشاط", "الطاقة", "الحماس"],
    example: "نرى اللون البرتقالي في البرتقال والجزر.",
  },
  {
    title: "اللون البنفسجي",
    icon: "🟣",
    color: "#7c3aed",
    image:
      "https://i.pinimg.com/736x/24/39/d5/2439d569599c1fed3b7ed37d50c3cbcd.jpg",
    bg: "bg-violet-50",
    border: "border-violet-200",
    badge: "text-violet-700 bg-violet-100",
    meanings: ["الجمال", "الهدوء", "الخيال"],
    example: "نرى اللون البنفسجي في بعض الزهور الجميلة.",
  },
];

const objectives = [
  "أن يتعرف الطالب على دلالة كل لون بطريقة بسيطة.",
  "أن يربط الطالب بين اللون والمعنى المناسب له.",
  "أن يستخدم الطالب الألوان بشكل صحيح في التصميم الجرافيكي.",
];

const reminderCards = [
  {
    icon: "🔴",
    title: "الأحمر",
    text: "يدل على الخطر أو التوقف.",
    className: "bg-red-50 text-red-700",
  },
  {
    icon: "🟢",
    title: "الأخضر",
    text: "يدل على الأمان والطبيعة.",
    className: "bg-green-50 text-green-700",
  },
  {
    icon: "🔵",
    title: "الأزرق",
    text: "يدل على الهدوء والراحة.",
    className: "bg-blue-50 text-blue-700",
  },
];

function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  if (url.includes("youtube.com/embed/")) return url;

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([^?&]+)/);
  if (watchMatch?.[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  return url;
}

export default function ColorMeaningsPage() {
  const embedVideoUrl = getYoutubeEmbedUrl(videoUrl);

  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-800 dark:text-white";

  return (
    <>
      <style>{`
        html.dark .meaning-card {
          background: #0f172a !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .meaning-card-media {
          background: #111827 !important;
        }

        html.dark .meaning-card-title,
        html.dark .meaning-card-text {
          color: #ffffff !important;
        }

        html.dark .meaning-badge {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .meaning-chip {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .meaning-example {
          background: #111827 !important;
          color: #e5e7eb !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .meaning-example strong,
        html.dark .meaning-example span {
          color: #ffffff !important;
        }

        html.dark .reminder-card-fixed {
          background: #0f172a !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .reminder-card-fixed h3,
        html.dark .reminder-card-fixed p {
          color: #ffffff !important;
        }

        html.dark .lesson-video-card {
          background: #111827 !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        .lesson-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 1.5rem;
          background: #000;
        }

        .lesson-video-frame {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>

      <section className="relative overflow-hidden py-10">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />

        <div className="page-container">
          {/* Hero */}
          <div className="overflow-hidden rounded-4xl border border-white/70 bg-white/85 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900">
            <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:[direction:ltr]">
              <div className="rounded-4xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-4 shadow-inner dark:from-slate-800 dark:via-slate-800 dark:to-slate-900">
                <img
                  src={imageUrl}
                  alt="صورة دلالات الألوان"
                  className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-108"
                />
              </div>

              <div className="text-center lg:[direction:rtl]">
                <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-100">
                  💡 موضوع تعليمي
                </div>

                <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.4] text-slate-900 dark:text-white md:text-5xl">
                  دلالات الألوان
                  <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-violet-300 dark:to-pink-300">
                    في التصميم الجرافيكي
                  </span>
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
                  لكل لون معنى يساعدنا في فهم الرسالة داخل التصميم. بعض الألوان
                  تدل على الخطر، وبعضها يدل على الهدوء، وبعضها يدل على الأمان أو
                  النشاط.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:bg-green-500/20 dark:text-green-100">
                🎯 أهداف الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                بعد دراسة هذا الموضوع يكون الطالب قادرًا على:
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
              {objectives.map((objective, index) => (
                <div key={objective} className={smallCard}>
                  <div className="flex h-full items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
                      {index + 1}
                    </div>

                    <p className="font-bold leading-8 text-slate-700 dark:text-slate-200">
                      {objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Color Cards */}
          <div className={sectionCard}>
            <div className="mb-8 text-center">
              <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:bg-pink-500/20 dark:text-pink-100">
                🎨 محتوى الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                معاني الألوان في التصميم
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
              {colorCards.map((color) => (
                <div
                  key={color.title}
                  className={`meaning-card group relative flex h-full flex-col overflow-hidden rounded-4xl border ${color.border} ${color.bg} shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className="meaning-card-media bg-white/80 p-3">
                    <img
                      src={color.image}
                      alt={`صورة ${color.title}`}
                      className="h-44 w-full rounded-3xl object-cover shadow-md transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: color.color }}
                  />

                  <div className="flex flex-1 flex-col p-5 text-right">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-5xl transition duration-300 group-hover:scale-110">
                        {color.icon}
                      </div>

                      <div
                        className={`meaning-badge rounded-full px-4 py-2 text-xs font-black ${color.badge}`}
                      >
                        دلالة لون
                      </div>
                    </div>

                    <h3 className="meaning-card-title mt-5 text-2xl font-black text-slate-900">
                      {color.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {color.meanings.map((meaning) => (
                        <span
                          key={meaning}
                          className="meaning-chip rounded-full bg-white/80 px-4 py-2 text-sm font-black text-slate-700 shadow-sm"
                        >
                          {meaning}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <div className="meaning-example rounded-3xl bg-white/80 p-4 text-base font-bold leading-8 text-slate-700 shadow-sm">
                        <span className="font-black text-slate-900">
                          مثال:
                        </span>{" "}
                        {color.example}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remember */}
          <div className={sectionCard}>
            <div className="text-center">
              <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:bg-green-500/20 dark:text-green-100">
                ✅ تذكّر جيدًا
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                أهم دلالات الألوان
              </h2>
            </div>

            <div className="mt-7 grid auto-rows-fr gap-5 md:grid-cols-3">
              {reminderCards.map((item) => (
                <div
                  key={item.text}
                  className={`reminder-card-fixed h-full rounded-3xl p-6 text-center text-xl font-black shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.className}`}
                >
                  <div className="text-4xl">{item.icon}</div>

                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>

                  <p className="mt-2 text-lg leading-8">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                🎬 فيديو الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                شاهد الشرح بطريقة مبسطة
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-base font-bold leading-8 text-slate-600 dark:text-slate-200">
              في هذا الفيديو ستتعرف على دلالات الألوان بطريقة سهلة وواضحة.
              </p>
            </div>

            {embedVideoUrl ? (
              <div className="lesson-video-card mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/20 dark:bg-slate-800">
                <div className="lesson-video-wrap">
                  <iframe
                    src={embedVideoUrl}
                    title="فيديو دلالات الألوان"
                    className="lesson-video-frame rounded-3xl bg-black shadow-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="lesson-video-card mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-900 p-3 text-white shadow-xl dark:border-white/20">
                <div className="lesson-video-wrap flex items-center justify-center p-6 text-center text-lg font-black leading-8">
                  حطي لينك الفيديو في المتغير videoUrl أعلى الكود
                </div>
              </div>
            )}
          </div>

          {/* Bottom Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/topics" className="soft-btn">
              مشاهدة باقي الموضوعات
            </Link>

            <Link href="/activities?topic=color-meanings" className="main-btn">
              نشاط هذا الموضوع
              <span>🧩</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}