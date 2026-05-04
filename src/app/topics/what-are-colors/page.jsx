import Link from "next/link";

export default function WhatAreColorsPage() {
  const sectionCard =
    "mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-800 dark:text-white";

  const imageCard =
    "group flex h-full items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900";

  const goals = [
    "أن يتعرف الطالب على معنى اللون بطريقة بسيطة.",
    "أن يميز الطالب بين بعض الألوان الأساسية.",
    "أن يربط الطالب بين الألوان والأشياء الموجودة حوله.",
    "أن يذكر الطالب أهمية الألوان في الحياة اليومية.",
  ];

  const colorExamples = [
    {
      name: "الأحمر",
      icon: "🔴",
      bg: "bg-red-50 text-red-800",
    },
    {
      name: "الأزرق",
      icon: "🔵",
      bg: "bg-blue-50 text-blue-800",
    },
    {
      name: "الأصفر",
      icon: "🟡",
      bg: "bg-yellow-50 text-yellow-800",
    },
    {
      name: "الأخضر",
      icon: "🟢",
      bg: "bg-green-50 text-green-800",
    },
    {
      name: "الأبيض",
      icon: "⚪",
      bg: "bg-white text-slate-900",
    },
    {
      name: "الأسود",
      icon: "⚫",
      bg: "bg-zinc-100 text-zinc-900",
    },
  ];

  const environmentExamples = [
    {
      title: "السماء",
      text: "لونها أزرق",
      image:
        "https://i.pinimg.com/736x/1a/2b/5a/1a2b5a04ed2268eb883b94a93b2b35db.jpg",
      fit: "cover",
      padding: "0px",
    },
    {
      title: "الأشجار",
      text: "لونها أخضر",
      image:
        "https://i.pinimg.com/736x/b7/22/d7/b722d7266a21eced03a525bebe051130.jpg",
      fit: "contain",
      padding: "8px",
    },
    {
      title: "الشمس",
      text: "لونها أصفر",
      image:
        "https://i.pinimg.com/1200x/63/64/df/6364df3fd7b4ec9c7ef0ea3cd431a513.jpg",
      fit: "contain",
      padding: "8px",
    },
  ];

  const benefits = [
    {
      icon: "👀",
      title: "تمييز الأشياء",
      text: "الألوان تساعدنا على معرفة الفرق بين الأشياء بسهولة.",
    },
    {
      icon: "🎨",
      title: "جمال التصميم",
      text: "الألوان تجعل التصميم أكثر جمالًا ووضوحًا وجاذبية.",
    },
    {
      icon: "💭",
      title: "التعبير عن الأفكار",
      text: "نستخدم الألوان للتعبير عن المشاعر والمعاني المختلفة.",
    },
    {
      icon: "🌈",
      title: "تنظيم المحتوى",
      text: "الألوان تساعد على ترتيب المعلومات وجذب الانتباه.",
    },
  ];

  return (
    <>
      <style>{`
        .lesson-main-image {
          width: 100%;
          height: 390px;
          object-fit: contain;
          object-position: center;
          display: block;
          background: #ffffff;
          padding: 10px;
        }

        .environment-image-box {
          height: 240px;
          background: #ffffff;
        }

        .environment-image {
          width: 100%;
          height: 100%;
          object-position: center;
          display: block;
          background: #ffffff;
        }

        .lesson-video-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .lesson-video-frame {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .lesson-main-image {
            height: 300px;
            padding: 8px;
          }

          .environment-image-box {
            height: 220px;
          }

          .lesson-video-wrap {
            aspect-ratio: 16 / 10;
          }
        }

        html.dark body .color-example-card.color-example-card {
          background: #0f172a !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.28) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35) !important;
        }

        html.dark body .color-example-card.color-example-card span {
          color: #ffffff !important;
        }

        html.dark body .color-example-card.color-example-card:hover {
          background: #111c33 !important;
        }

        html.dark .lesson-main-image,
        html.dark .environment-image,
        html.dark .environment-image-box {
          background: #0f172a !important;
        }
      `}</style>

      <section className="relative overflow-hidden py-10">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-sky-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />

        <div className="page-container">
          {/* Title */}
          <div className="rounded-4xl border border-slate-200 bg-white px-6 py-10 text-center text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:px-10">
            <div className="mx-auto inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-black text-blue-700 dark:border-blue-300/30 dark:bg-blue-500/20 dark:text-blue-100">
              🎨 موضوع تفاعلي
            </div>

            <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-normal text-slate-900 dark:text-white md:text-5xl">
              ما هي الألوان؟
              <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-violet-300 dark:to-pink-300">
                في التصميم الجرافيكي
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-700 dark:text-slate-200">
              الألوان جزء مهم من حياتنا اليومية، فهي تساعدنا على رؤية الأشياء
              وتمييزها، كما تجعل التصميمات أجمل وأكثر وضوحًا.
            </p>
          </div>

          {/* Goals */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-black text-green-700 dark:border-green-300/30 dark:bg-green-500/20 dark:text-green-100">
                🎯 أهداف الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                بعد دراسة هذا الموضوع يكون الطالب قادرًا على:
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
              {goals.map((goal, index) => (
                <div key={index} className={smallCard}>
                  <div className="flex h-full items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
                      {index + 1}
                    </div>

                    <p className="font-bold leading-8 text-slate-700 dark:text-slate-200">
                      {goal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is color */}
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
            <div className={imageCard}>
              <img
                src="https://i.pinimg.com/736x/11/6b/af/116bafd9b41dc1a8fcaa75139988b248.jpg"
                alt="تعريف اللون"
                className="lesson-main-image rounded-3xl shadow-md transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex h-full flex-col justify-center rounded-4xl border border-slate-200 bg-white p-6 text-right text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8 lg:[direction:rtl]">
              <div className="inline-flex w-fit rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-black text-pink-700 dark:border-pink-300/30 dark:bg-pink-500/20 dark:text-pink-100">
                📘 تعريف اللون
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                ما هو اللون؟
              </h2>

              <p className="mt-5 text-lg font-bold leading-9 text-slate-700 dark:text-slate-200">
                اللون هو صفة نراها في الأشياء من حولنا، مثل لون السماء، ولون
                الأشجار، ولون الشمس. يساعدنا اللون على معرفة الأشياء وتمييزها
                بسهولة.
              </p>

              <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-300/30 dark:bg-blue-500/20">
                <p className="font-bold leading-8 text-slate-700 dark:text-blue-100">
                  عندما ننظر إلى أي شيء حولنا، فإننا نلاحظ لونه أولًا، وهذا
                  يساعدنا على فهمه والتعرف عليه بسرعة.
                </p>
              </div>
            </div>
          </div>

          {/* Colors around us */}
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
            <div className={imageCard}>
              <img
                src="https://i.pinimg.com/736x/fc/69/7d/fc697d7075364cdd54c641d6df91cdef.jpg"
                alt="الألوان من حولنا"
                className="lesson-main-image rounded-3xl shadow-md transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex h-full flex-col justify-center rounded-4xl border border-slate-200 bg-white p-6 text-right text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8 lg:[direction:rtl]">
              <div className="inline-flex w-fit rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-black text-violet-700 dark:border-violet-300/30 dark:bg-violet-500/20 dark:text-violet-100">
                🌈 الألوان من حولنا
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                أمثلة على الألوان
              </h2>

              <p className="mt-5 text-lg font-bold leading-9 text-slate-700 dark:text-slate-200">
                نرى الألوان في كل مكان حولنا: في الطبيعة، والملابس، والأطعمة،
                والألعاب، والأدوات. ولكل لون اسم وشكل يميزه.
              </p>

              <div className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
                {colorExamples.map((color) => (
                  <div
                    key={color.name}
                    className={`color-example-card flex min-h-16 items-center justify-center rounded-2xl border border-slate-200 p-4 text-center text-lg font-black shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${color.bg}`}
                  >
                    <span>{color.name}</span>
                    <span className="mr-2">{color.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Environment examples */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-sm font-black text-yellow-700 dark:border-yellow-300/30 dark:bg-yellow-500/20 dark:text-yellow-100">
                🌿 أمثلة من البيئة
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                أين نرى الألوان؟
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
              {environmentExamples.map((item) => (
                <div
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/20 dark:bg-slate-800 dark:text-white"
                >
                  <div className="environment-image-box overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="environment-image transition duration-300 group-hover:scale-105"
                      style={{
                        objectFit: item.fit,
                        padding: item.padding,
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-5 text-center">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-bold text-slate-700 dark:text-slate-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Importance */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-black text-blue-700 dark:border-blue-300/30 dark:bg-blue-500/20 dark:text-blue-100">
                ⭐ أهمية الألوان
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                لماذا الألوان مهمة؟
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className={smallCard}>
                  <div className="flex h-full flex-col">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600/10 text-3xl dark:bg-blue-500/20">
                      {benefit.icon}
                    </div>

                    <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 font-bold leading-8 text-slate-700 dark:text-slate-200">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video at the end */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-black text-pink-700 dark:border-pink-300/30 dark:bg-pink-500/20 dark:text-pink-100">
                🎬 فيديو الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                شاهد الشرح بطريقة مبسطة
              </h2>

              <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-700 dark:text-slate-200">
                في هذا الفيديو ستتعرف على الألوان بطريقة سهلة وواضحة.
              </p>
            </div>

            <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/20 dark:bg-slate-800">
              <div className="lesson-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/-Q9J7QYR0uA"
                  title="فيديو درس ما هي الألوان"
                  className="lesson-video-frame rounded-2xl bg-black shadow-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/topics" className="soft-btn">
              مشاهدة باقي الموضوعات
            </Link>

            <Link href="/activities?topic=what-are-colors" className="main-btn">
              نشاط هذا الدرس
              <span>🧩</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}