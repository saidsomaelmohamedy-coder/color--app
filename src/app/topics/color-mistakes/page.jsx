import Link from "next/link";

const imageUrl =
  "https://i.pinimg.com/736x/a0/17/87/a01787405df4da675437c2448634a664.jpg";

/* ✅ رابط الفيديو بصيغة embed عشان يشتغل داخل iframe */
const videoUrl = "https://www.youtube.com/embed/wHCauzqO3kk";

const lessonGoals = [
  "أن يتعرف الطالب على أخطاء اختيار الألوان في التصميم.",
  "أن يميز الطالب بين الألوان الواضحة والألوان المزعجة.",
];

const mistakes = [
  {
    number: "1",
    icon: "🌈",
    title: "استخدام ألوان كثيرة جدًا",
    image:
      "https://i.pinimg.com/736x/2c/3a/e6/2c3ae660a9091f24c353b993b15c0eff.jpg",
    problem:
      "عندما نستخدم ألوانًا كثيرة في نفس التصميم، يصبح الشكل مزعجًا وصعب الفهم.",
    solution: "استخدم عددًا قليلًا من الألوان المتناسقة.",
    bg: "bg-red-500/10",
    badge: "bg-red-100 text-red-700",
  },
  {
    number: "2",
    icon: "👁️",
    title: "اختيار ألوان متشابهة جدًا",
    image:
      "https://i.pinimg.com/474x/34/51/0a/34510a13b7abdbb60381f7dabc0a722d.jpg",
    problem:
      "بعض الألوان تكون قريبة من بعضها، لذلك يصعب رؤية الكلمات أو الصور بوضوح.",
    solution: "اختر ألوانًا واضحة ومتباينة.",
    bg: "bg-yellow-500/10",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    number: "3",
    icon: "⚡",
    title: "استخدام ألوان قوية ومزعجة",
    image:
      "https://i.pinimg.com/736x/1f/bf/b5/1fbfb5483c6e81a8367a447f5388bb00.jpg",
    problem:
      "الألوان القوية جدًا قد تتعب العين، خاصة عند استخدامها معًا في مساحة كبيرة.",
    solution: "استخدم ألوانًا هادئة ومريحة للعين.",
    bg: "bg-orange-500/10",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    number: "4",
    icon: "✍️",
    title: "كتابة النص بلون غير واضح",
    image:
      "https://i.pinimg.com/736x/b2/a3/31/b2a331cd63f8be75911f22032cb58f30.jpg",
    problem:
      "مثل كتابة كلمات صفراء على خلفية بيضاء، فيصبح النص صعب القراءة.",
    solution: "اجعل لون النص واضحًا مثل الأسود على الأبيض.",
    bg: "bg-blue-500/10",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    number: "5",
    icon: "🎯",
    title: "عدم مناسبة اللون للمعنى",
    image:
      "https://i.pinimg.com/736x/fd/a1/b6/fda1b62a5e2efbe3a8f8f18d1305f36a.jpg",
    problem:
      "اختيار لون لا يناسب معنى التصميم يجعل الرسالة غير واضحة للطالب.",
    solution: "اختر لونًا يناسب معنى التصميم والرسالة المطلوبة.",
    bg: "bg-green-500/10",
    badge: "bg-green-100 text-green-700",
  },
];

const reminders = [
  {
    icon: "🎨",
    text: "استخدم ألوانًا قليلة ومنظمة",
  },
  {
    icon: "👁️",
    text: "اجعل النص واضحًا وسهل القراءة",
  },
  {
    icon: "💡",
    text: "اختر لونًا يناسب معنى التصميم",
  },
];

function hasRealImage(src) {
  return src && (src.startsWith("http") || src.startsWith("/"));
}

function MistakeImage({ src, alt, icon }) {
  return (
    <div className="mistake-image-box mt-5 overflow-hidden rounded-3xl bg-white/80 p-3 shadow-md dark:bg-slate-900">
      {hasRealImage(src) ? (
        <img
          src={src}
          alt={alt}
          className="h-56 w-full rounded-[1.2rem] bg-white object-contain shadow-sm dark:bg-slate-800"
        />
      ) : (
        <div className="flex h-56 w-full flex-col items-center justify-center rounded-[1.2rem] bg-white text-center shadow-sm dark:bg-slate-800">
          <div className="text-6xl">{icon}</div>

          <p className="mt-4 px-4 text-base font-black leading-7 text-slate-600 dark:text-slate-200">
            ضعي رابط صورة هذا الخطأ هنا
          </p>
        </div>
      )}
    </div>
  );
}

export default function ColorMistakesPage() {
  return (
    <>
      <style>{`
        html.dark .mistake-section-card {
          background: #0f172a !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .mistake-hero-image-wrap {
          background: linear-gradient(135deg, #1e293b, #0f172a) !important;
        }

        html.dark .mistake-goal-card {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .mistake-card {
          background: #0f172a !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .mistake-card h3,
        html.dark .mistake-card p {
          color: #ffffff !important;
        }

        html.dark .mistake-icon-box,
        html.dark .mistake-badge {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .mistake-image-box {
          background: #111827 !important;
          border: 1px solid rgba(255, 255, 255, 0.18) !important;
        }

        html.dark .mistake-solution {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .reminder-card-fixed {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .reminder-card-fixed p {
          color: #ffffff !important;
        }

        html.dark .video-box-fixed {
          background: #111827 !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />

        <div className="page-container">
          {/* Hero Section */}
          <div className="mistake-section-card overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900">
            <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[1fr_0.95fr]">
              {/* Text */}
              <div className="text-right">
                <div className="inline-flex rounded-full bg-red-500/10 px-5 py-2 text-sm font-black text-red-700 dark:bg-red-500/20 dark:text-red-100">
                  ⚠️ موضوع تعليمي
                </div>

                <h1 className="mt-5 text-4xl font-black leading-[1.4] text-slate-900 dark:text-white md:text-5xl">
                  أخطاء شائعة
                  <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-violet-300 dark:to-pink-300">
                    في اختيار الألوان
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
                  اختيار الألوان بطريقة غير مناسبة قد يجعل التصميم مزعجًا أو
                  صعب القراءة. في هذا الموضوع سنتعرف على أشهر الأخطاء وكيف نتجنبها
                  بطريقة بسيطة وواضحة.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mistake-hero-image-wrap rounded-4xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-4 shadow-inner">
                <img
                  src={imageUrl}
                  alt="صورة أخطاء اختيار الألوان"
                  className="h-96 w-full rounded-3xl bg-white object-contain p-2 shadow-xl dark:bg-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="mistake-section-card mt-8 rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:p-8">
            <div className="text-center">
              <div className="mx-auto inline-flex rounded-full bg-green-500/10 px-5 py-2 text-sm font-black text-green-700 dark:bg-green-500/20 dark:text-green-100">
                🎯 أهداف الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                بعد دراسة هذا الموضوع يكون الطالب قادرًا على:
              </h2>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {lessonGoals.map((goal, index) => (
                <div
                  key={goal}
                  className="mistake-goal-card flex h-full items-start gap-4 rounded-3xl bg-blue-50/80 p-5 shadow-md"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-base font-black text-white shadow-md">
                    {index + 1}
                  </div>

                  <p className="text-base font-black leading-8 text-slate-700 dark:text-slate-200">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Mistakes Cards */}
          <div className="mistake-section-card mt-8 rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:bg-pink-500/20 dark:text-pink-100">
                🎨 محتوى الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                ما الأخطاء التي يجب أن نتجنبها؟
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
              {mistakes.map((item) => (
                <div
                  key={item.title}
                  className={`mistake-card relative flex h-full flex-col rounded-4xl border border-white/80 ${item.bg} p-6 pt-24 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* Number Right */}
                  <div
                    className={`mistake-badge absolute right-6 top-6 rounded-full px-5 py-3 text-sm font-black shadow-md ${item.badge}`}
                  >
                    خطأ {item.number}
                  </div>

                  {/* Icon Left */}
                  <div className="mistake-icon-box absolute left-6 top-6 grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-md">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-black leading-[1.4] text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <MistakeImage
                    src={item.image}
                    alt={item.title}
                    icon={item.icon}
                  />

                  <p className="mt-5 text-base font-bold leading-8 text-slate-600 dark:text-slate-200">
                    {item.problem}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="mistake-solution rounded-3xl bg-white/85 p-5 text-base font-black leading-8 text-slate-800 shadow-sm">
                      ✅ الأفضل: {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reminder */}
          <div className="mistake-section-card mt-8 rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:p-8">
            <div className="text-center">
              <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-100">
                ⭐ تذكّر جيدًا
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                قواعد بسيطة لاختيار الألوان
              </h2>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {reminders.map((item) => (
                <div
                  key={item.text}
                  className="reminder-card-fixed rounded-3xl bg-white/80 p-6 text-center shadow-md"
                >
                  <div className="text-5xl">{item.icon}</div>

                  <p className="mt-4 text-xl font-black leading-8 text-slate-900 dark:text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mistake-section-card mt-8 rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:p-8">
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                🎬 فيديو الموضوع
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
                شاهد الشرح بطريقة مبسطة
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-base font-bold leading-8 text-slate-600 dark:text-slate-200">
                في هذا الفيديو ستتعرف على  الاخطاء الشائعة فى اختيار الألوان بطريقة سهلة وواضحة.

              </p>
            </div>

            {videoUrl ? (
              <div className="video-box-fixed mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/20 dark:bg-slate-800">
                <div className="lesson-video-wrap">
                  <iframe
                    src={videoUrl}
                    title="فيديو أخطاء اختيار الألوان"
                    className="lesson-video-frame rounded-3xl bg-black shadow-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="video-box-fixed mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-900 p-3 text-white shadow-xl dark:border-white/20">
                <div className="lesson-video-wrap flex items-center justify-center p-6 text-center text-lg font-black leading-8">
                  حطي لينك الفيديو بصيغة embed في المتغير videoUrl أعلى الكود
                </div>
              </div>
            )}
          </div>

          {/* Bottom Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/topics" className="soft-btn">
              مشاهدة باقي الموضوعات
            </Link>

            <Link href="/activities?topic=color-mistakes" className="main-btn">
              نشاط هذا الموضوع
              <span>🧩</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}