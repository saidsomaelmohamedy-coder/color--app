import Link from "next/link";

/* ✅ الصورة الرئيسية بجانب العنوان */
const imageUrl =
  "https://i.pinimg.com/736x/71/dd/47/71dd478f3a21f8a73ddcd0a2e7aa2ae5.jpg";

/* ✅ فيديو الدرس: ينفع رابط يوتيوب عادي أو embed */
const videoUrl = "https://youtu.be/pSBC3GaF4rU?si=2e8_azZYWwwbpV96";

const lessonGoals = [
  "أن يتعرف الطالب على أهمية الألوان في التصميم.",
  "أن يحدد الطالب الألوان المناسبة عند تصميم.",
  "أن يستخدم الطالب الألوان لتمييز العناصر المهمة.",
  "أن ينسق الطالب الألوان بشكل بسيط.",
];

const designRules = [
  {
    number: "1",
    title: "ألوان مريحة للعين",
    icon: "👀",
    image:
      "https://i.pinimg.com/736x/48/f6/64/48f664abdf9f9e20406f78b9de4c62e3.jpg",
    text: "نختار ألوانًا هادئة وواضحة حتى يستطيع الطالب النظر إلى التصميم بسهولة دون تعب.",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    number: "2",
    title: "ألوان واضحة للنص والخلفية",
    icon: "📝",
    image:
      "https://i.pinimg.com/736x/d4/88/21/d488212518eee80f62170019164674dc.jpg",
    text: "يجب أن يكون لون الكتابة واضحًا على الخلفية، مثل كتابة سوداء على خلفية بيضاء.",
    bg: "bg-violet-50 dark:bg-violet-500/10",
  },
  {
    number: "3",
    title: "ألوان لتمييز الأشياء المهمة",
    icon: "🎯",
    image:
      "https://i.pinimg.com/736x/96/7b/23/967b239735eb7048135cc161d858f3c5.jpg",
    text: "نستخدم لونًا مختلفًا للعناصر المهمة حتى ينتبه لها الطالب بسهولة.",
    bg: "bg-orange-50 dark:bg-orange-500/10",
  },
  {
    number: "4",
    title: "ألوان متناسقة",
    icon: "🌈",
    image:
      "https://i.pinimg.com/736x/20/1b/df/201bdfdd52839a301328c7a43bebf36f.jpg",
    text: "ننسق الألوان معًا حتى يكون الشكل جميلًا ومنظمًا، وليس مزدحمًا أو مزعجًا.",
    bg: "bg-pink-50 dark:bg-pink-500/10",
  },
];

const colorExamples = [
  {
    icon: "🔴",
    title: "الأحمر",
    text: "للتنبيه أو الخطر",
    className: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
  },
  {
    icon: "🟢",
    title: "الأخضر",
    text: "للأمان والطبيعة",
    className:
      "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300",
  },
  {
    icon: "🔵",
    title: "الأزرق",
    text: "للهدوء والثقة",
    className:
      "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  },
  {
    icon: "🟡",
    title: "الأصفر",
    text: "لجذب الانتباه",
    className:
      "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300",
  },
];

const importanceItems = [
  {
    icon: "✨",
    title: "جاذبية التصميم",
    text: "الألوان تجعل التصميم جميلًا ومشجعًا على التعلم.",
  },
  {
    icon: "⚡",
    title: "سرعة الفهم",
    text: "تساعد الألوان الطالب على فهم المعلومات بسرعة.",
  },
  {
    icon: "🎯",
    title: "التركيز والانتباه",
    text: "تجعل العناصر المهمة واضحة وسهلة الملاحظة.",
  },
  {
    icon: "💭",
    title: "التعبير عن الأفكار",
    text: "تساعد الألوان في التعبير عن المشاعر والمعاني.",
  },
];

function hasRealUrl(url) {
  return url && !url.includes("حطي هنا");
}

function getYoutubeEmbedUrl(url) {
  if (!hasRealUrl(url)) return "";

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

export default function ColorsInDesignPage() {
  const embedVideoUrl = getYoutubeEmbedUrl(videoUrl);

  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5";

  return (
    <section className="relative overflow-hidden py-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />

      <div className="page-container">
        {/* Hero */}
        <div className="overflow-hidden rounded-4xl border border-white/70 bg-white/85 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:[direction:ltr]">
            {/* Image Left */}
            <div className="rounded-4xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-4 shadow-inner dark:from-white/10 dark:via-white/5 dark:to-white/10">
              {hasRealUrl(imageUrl) ? (
                <img
                  src={imageUrl}
                  alt="صورة استخدام الألوان في التصميم"
                  className="h-80 w-full rounded-3xl bg-white object-contain p-2 shadow-xl md:h-108"
                />
              ) : (
                <div className="flex h-80 items-center justify-center rounded-3xl bg-white/80 p-6 text-center text-lg font-black leading-8 text-slate-500 shadow-xl dark:bg-white/10 dark:text-slate-300 md:h-108">
                  حطي هنا URL الصورة الرئيسية في المتغير imageUrl
                </div>
              )}
            </div>

            {/* Text Right */}
            <div className="text-center lg:[direction:rtl]">
              <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:text-blue-300">
                🖌️ درس تفاعلي
              </div>

              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.4] text-slate-900 dark:text-white md:text-5xl">
                استخدام الألوان
                <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  في التصميم الجرافيكي
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
                الألوان تساعدنا على فهم الأشياء وتجعل التصميم جميلًا وسهلًا
                للنظر. نستخدم الألوان في التصميم لكي نلفت الانتباه ونوضح
                المعلومات بطريقة بسيطة ومنظمة.
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:text-green-300">
              🎯 أهداف الدرس
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
     بعد دراسة هذا الدرس يكون الطالب قادرًا على:
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {lessonGoals.map((goal, index) => (
              <div key={goal} className={smallCard}>
                <div className="flex h-full items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <p className="font-bold leading-8 text-slate-700 dark:text-slate-300">
                    {goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Intro */}
        <div className={sectionCard}>
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:text-violet-300">
              📘 فكرة الدرس
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              كيف نستخدم الألوان في التصميم؟
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
              نختار الألوان بعناية حتى يكون التصميم جميلًا، واضحًا، ومريحًا
              للعين. اللون المناسب يساعد الطالب على الانتباه وفهم المعلومات
              بسهولة.
            </p>
          </div>
        </div>

        {/* Design Rules */}
        <div className={sectionCard}>
          <div className="mb-8 text-center">
            <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:text-pink-300">
              🎨 محتوى الدرس
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              قواعد استخدام الألوان
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {designRules.map((rule) => (
              <div
                key={rule.title}
                className={`group flex h-full flex-col overflow-hidden rounded-4xl border border-white/70 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 ${rule.bg}`}
              >
                {/* Image Area */}
                <div className="flex h-70 items-center justify-center bg-white/90 p-4 dark:bg-white/5">
                  {hasRealUrl(rule.image) ? (
                    <img
                      src={rule.image}
                      alt={rule.title}
                      className="max-h-full w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white p-6 text-center text-base font-black leading-8 text-slate-500 shadow-md dark:bg-white/10 dark:text-slate-300">
                      حطي هنا URL صورة {rule.title}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 text-right">
                  {/* Icon left - number right */}
                  <div
                    className="flex items-center justify-between gap-4"
                    style={{ direction: "ltr" }}
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/80 text-4xl shadow-sm dark:bg-white/10">
                      {rule.icon}
                    </div>

                    <div className="rounded-full bg-white/90 px-5 py-2 text-sm font-black text-slate-700 shadow-sm dark:bg-white/10 dark:text-white">
                      {rule.number}
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white">
                    {rule.title}
                  </h3>

                  <p className="mt-4 font-bold leading-8 text-slate-700 dark:text-slate-300">
                    {rule.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Examples */}
        <div className={sectionCard}>
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full bg-orange-600/10 px-5 py-2 text-sm font-black text-orange-700 dark:text-orange-300">
              🌈 أمثلة على استخدام الألوان
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              متى أستخدم كل لون؟
            </h2>
          </div>

          <div className="mt-7 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {colorExamples.map((item) => (
              <div
                key={item.title}
                className={`h-full rounded-3xl p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.className}`}
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>

                <p className="mt-2 text-lg font-bold leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Importance */}
        <div className={sectionCard}>
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:text-yellow-300">
              ⭐ أهمية الألوان في التصميم
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              لماذا الألوان مهمة؟
            </h2>
          </div>

          <div className="mt-7 grid auto-rows-fr gap-5 md:grid-cols-2">
            {importanceItems.map((item) => (
              <div key={item.title} className={smallCard}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600/10 text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-bold leading-8 text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:text-blue-300">
              🎬 فيديو الدرس
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              شاهد الشرح بطريقة مبسطة
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-base font-bold leading-8 text-slate-600 dark:text-slate-300">
              فيديو تعليمي قصير يساعد الطالب على فهم استخدام الألوان في التصميم.
            </p>
          </div>

          {embedVideoUrl ? (
            <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-white p-3 shadow-xl dark:bg-white/10">
              <iframe
                src={embedVideoUrl}
                title="فيديو استخدام الألوان في التصميم"
                className="h-72 w-full rounded-3xl bg-black shadow-md md:h-115"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="mx-auto flex h-72 max-w-5xl items-center justify-center rounded-4xl bg-slate-900 p-6 text-center text-lg font-black leading-8 text-white shadow-xl md:h-105">
              حطي لينك الفيديو في المتغير videoUrl أعلى الكود
            </div>
          )}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/topics" className="soft-btn">
            مشاهدة باقي الدروس
          </Link>

          <Link href="/activities?topic=colors-in-design" className="main-btn">
            نشاط هذا الدرس
            <span>🧩</span>
          </Link>
        </div>
      </div>
    </section>
  );
}