import Link from "next/link";

export default function WhatAreColorsPage() {
  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5";

  const imageCard =
    "group flex h-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5";

  const goals = [
    "أن يتعرف الطالب على معنى اللون بطريقة بسيطة.",
    "أن يميز الطالب بين بعض الألوان الأساسية.",
    "أن يربط الطالب بين الألوان والأشياء الموجودة حوله.",
 " أن يذكر الطالب أهمية الألوان في الحياة اليومية.",
  ];

  const colorExamples = [
    { name: "الأحمر", icon: "🔴", bg: "bg-red-50 dark:bg-red-500/10" },
    { name: "الأزرق", icon: "🔵", bg: "bg-blue-50 dark:bg-blue-500/10" },
    { name: "الأصفر", icon: "🟡", bg: "bg-yellow-50 dark:bg-yellow-500/10" },
    { name: "الأخضر", icon: "🟢", bg: "bg-green-50 dark:bg-green-500/10" },
    { name: "الأبيض", icon: "⚪", bg: "bg-slate-50 dark:bg-white/10" },
    { name: "الأسود", icon: "⚫", bg: "bg-zinc-100 dark:bg-zinc-800/60" },
  ];

  const environmentExamples = [
    {
      title: "السماء",
      text: "لونها أزرق",
      image:
        "https://i.pinimg.com/736x/1a/2b/5a/1a2b5a04ed2268eb883b94a93b2b35db.jpg",
    },
    {
      title: "الأشجار",
      text: "لونها أخضر",
      image:
        "https://i.pinimg.com/736x/b7/22/d7/b722d7266a21eced03a525bebe051130.jpg",
    },
    {
      title: "الشمس",
      text: "لونها أصفر",
      image:
        "https://i.pinimg.com/1200x/63/64/df/6364df3fd7b4ec9c7ef0ea3cd431a513.jpg",
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
    <section className="relative overflow-hidden py-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-sky-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />

      <div className="page-container">
        {/* Top buttons */}
               {/* Title */}
        <div className="rounded-4xl border border-white/70 bg-white/85 px-6 py-10 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10">
          <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:text-blue-300">
            🎨 درس تفاعلي
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-normal text-slate-900 dark:text-white md:text-5xl">
            ما هي الألوان؟
            <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
              في التصميم الجرافيكي
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
            الألوان جزء مهم من حياتنا اليومية، فهي تساعدنا على رؤية الأشياء
            وتمييزها، كما تجعل التصميمات أجمل وأكثر وضوحًا.
          </p>
        </div>

        {/* Goals */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:text-green-300">
              🎯 أهداف الدرس
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
         بعد دراسة هذا الدرس يكون الطالب قادرًا على:
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {goals.map((goal, index) => (
              <div key={index} className={smallCard}>
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

        {/* What is color */}
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
          {/* Image left */}
          <div className={imageCard}>
            <img
              src="https://i.pinimg.com/736x/11/6b/af/116bafd9b41dc1a8fcaa75139988b248.jpg"
              alt="تعريف اللون"
              className="mx-auto h-auto max-h-108 w-auto max-w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text right */}
          <div className="flex h-full flex-col justify-center rounded-4xl border border-white/70 bg-white/85 p-6 text-right shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8 lg:[direction:rtl]">
            <div className="inline-flex w-fit rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:text-pink-300">
              📘 تعريف اللون
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              ما هو اللون؟
            </h2>

            <p className="mt-5 text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
              اللون هو صفة نراها في الأشياء من حولنا، مثل لون السماء، ولون
              الأشجار، ولون الشمس. يساعدنا اللون على معرفة الأشياء وتمييزها
              بسهولة.
            </p>

            <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-white/10 dark:bg-blue-500/10">
              <p className="font-bold leading-8 text-slate-700 dark:text-slate-300">
                عندما ننظر إلى أي شيء حولنا، فإننا نلاحظ لونه أولًا، وهذا
                يساعدنا على فهمه والتعرف عليه بسرعة.
              </p>
            </div>
          </div>
        </div>

        {/* Colors around us */}
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
          {/* Image left */}
          <div className={imageCard}>
            <img
              src="https://i.pinimg.com/736x/fc/69/7d/fc697d7075364cdd54c641d6df91cdef.jpg"
              alt="الألوان من حولنا"
              className="mx-auto h-auto max-h-108 w-auto max-w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text right */}
          <div className="flex h-full flex-col justify-center rounded-4xl border border-white/70 bg-white/85 p-6 text-right shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8 lg:[direction:rtl]">
            <div className="inline-flex w-fit rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:text-violet-300">
              🌈 الألوان من حولنا
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              أمثلة على الألوان
            </h2>

            <p className="mt-5 text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
              نرى الألوان في كل مكان حولنا: في الطبيعة، والملابس، والأطعمة،
              والألعاب، والأدوات. ولكل لون اسم وشكل يميزه.
            </p>

            <div className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {colorExamples.map((color) => (
                <div
                  key={color.name}
                  className={`flex min-h-16 items-center justify-center rounded-2xl border border-white/70 p-4 text-center text-lg font-black text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:text-white ${color.bg}`}
                >
                  <span className="ml-2">{color.icon}</span>
                  {color.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environment examples */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
          <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:text-yellow-300">
              🌿 أمثلة من البيئة
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              أين نرى الألوان؟
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {environmentExamples.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="p-5 text-center">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-bold text-slate-600 dark:text-slate-300">
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
            <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:text-blue-300">
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
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600/10 text-3xl">
                    {benefit.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 font-bold leading-8 text-slate-700 dark:text-slate-300">
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
            <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:text-pink-300">
              🎬 فيديو الدرس
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              شاهد الشرح بطريقة مبسطة
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-300">
              في هذا الفيديو ستتعرف على الألوان بطريقة سهلة وواضحة.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-white p-3 shadow-xl dark:bg-white/10">
           <iframe
  src="https://www.youtube.com/embed/-Q9J7QYR0uA"
  title="فيديو درس ما هي الألوان"
  className="h-72 w-full rounded-2xl bg-black shadow-md md:h-115"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/topics" className="soft-btn">
            مشاهدة باقي الدروس
          </Link>

          <Link href="/activities?topic=what-are-colors" className="main-btn">
            نشاط هذا الدرس
            <span>🧩</span>
          </Link>
        </div>
      </div>
    </section>
  );
}