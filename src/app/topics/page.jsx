import Link from "next/link";

const lessons = [
  {
    href: "/topics/what-are-colors",
    badge: "درس 1",
    icon: "🎨",
    title: "ما هي الألوان؟",
    image:
      "https://i.pinimg.com/736x/11/6b/af/116bafd9b41dc1a8fcaa75139988b248.jpg",
    alt: "ما هي الألوان؟",
    desc: "تعرف على معنى الألوان وأمثلة عليها من البيئة مثل السماء والأشجار والشمس.",
    imagePadding: "8px",
  },
  {
    href: "/topics/color-wheel",
    badge: "درس 2",
    icon: "🎡",
    title: "دائرة الألوان",
    image:
      "https://i.pinimg.com/1200x/28/87/e5/2887e51c843ebec6a644572279bfd794.jpg",
    alt: "دائرة الألوان",
    desc: "تعرف على الألوان الأساسية والثانوية، والألوان الدافئة والباردة.",
    imagePadding: "18px",
  },
  {
    href: "/topics/color-meanings",
    badge: "درس 3",
    icon: "💡",
    title: "دلالات الألوان",
    image:
      "https://i.pinimg.com/736x/16/d6/a1/16d6a19ba3fc1c2af75a04e77ec05c9f.jpg",
    alt: "دلالات الألوان",
    desc: "تعرف على معنى كل لون مثل الأحمر للخطر، والأزرق للهدوء، والأخضر للأمان.",
    imagePadding: "8px",
  },
  {
    href: "/topics/colors-in-design",
    badge: "درس 4",
    icon: "🖌️",
    title: "استخدام الألوان في التصميم",
    image:
      "https://i.pinimg.com/736x/71/dd/47/71dd478f3a21f8a73ddcd0a2e7aa2ae5.jpg",
    alt: "استخدام الألوان في التصميم",
    desc: "تعرف على كيف تجعل الألوان التصميم جميلًا وواضحًا وسهل الفهم.",
    imagePadding: "8px",
  },
  {
    href: "/topics/color-mistakes",
    badge: "درس 5",
    icon: "⚠️",
    title: "أخطاء شائعة في اختيار الألوان",
    image:
      "https://i.pinimg.com/736x/a0/17/87/a01787405df4da675437c2448634a664.jpg",
    alt: "أخطاء شائعة في اختيار الألوان",
    desc: "تعرف على أخطاء اختيار الألوان مثل كثرة الألوان وضعف وضوح النص.",
    imagePadding: "14px",
  },
];

export default function TopicsPage() {
  return (
    <>
      <style>{`
        .topic-card-fixed {
          height: 660px;
        }

        .topic-image-box {
          height: 290px;
        }

        .topic-title-box {
          height: 88px;
        }

        .topic-desc-box {
          height: 128px;
        }

        .topic-image-full {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          background-color: #ffffff;
        }

        @media (max-width: 767px) {
          .topic-card-fixed {
            height: auto;
            min-height: 620px;
          }

          .topic-image-box {
            height: 260px;
          }

          .topic-title-box {
            height: auto;
            min-height: 82px;
          }

          .topic-desc-box {
            height: auto;
            min-height: 120px;
          }
        }
      `}</style>

      <section className="py-10">
        <div className="page-container">
          {/* Header */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl dark:border-white/20 dark:bg-slate-900">
            <div className="px-6 py-10 text-center dark:bg-slate-900">
              <div className="badge mb-5">
                <span className="badge-icon">🎯</span>
                <span>فكرة الموقع</span>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.4] text-black md:text-5xl dark:text-white">
                موضوعات دليل الألوان في التصميم الجرافيكي
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-black/70 dark:text-slate-200">
                اختر الدرس المناسب للبدء في تعلم الألوان ودلالتها داخل التصميم
                الجرافيكي بطريقة بسيطة وواضحة.
              </p>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid auto-rows-fr gap-7 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.href}
                href={lesson.href}
                className="topic-card-fixed group flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/20 dark:bg-slate-900"
              >
                {/* Image Fixed Size */}
                <div className="topic-image-box relative shrink-0 overflow-hidden rounded-3xl border border-blue-100 bg-white p-3 dark:border-white/20 dark:bg-slate-800">
                  <img
                    src={lesson.image}
                    alt={lesson.alt}
                    className="topic-image-full rounded-2xl shadow-md transition duration-300 group-hover:scale-105"
                    style={{
                      padding: lesson.imagePadding,
                    }}
                  />

                  <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md dark:bg-slate-950 dark:text-blue-100">
                    {lesson.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-6">
                  <div className="topic-title-box mb-4 flex shrink-0 items-center gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm dark:bg-blue-500/20">
                      {lesson.icon}
                    </div>

                    <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                      {lesson.title}
                    </h2>
                  </div>

                  <p className="topic-desc-box text-base font-bold leading-8 text-black/70 dark:text-slate-200">
                    {lesson.desc}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-5">
                    <div
                      className="rounded-2xl px-5 py-4 text-center text-sm font-black text-white shadow-lg transition duration-300 group-hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(to left, #2563eb, #7c3aed, #ec4899)",
                      }}
                    >
                      افتح الدرس ⬅️
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/activities" className="main-btn">
              عرض الأنشطة
              <span>🧩</span>
            </Link>

            <Link href="/exam" className="soft-btn">
              الاختبار النهائي
              <span>✅</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}