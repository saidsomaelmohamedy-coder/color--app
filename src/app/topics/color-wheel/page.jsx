"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function ColorWheelPage() {
  const videoUrl = "https://www.youtube.com/embed/8QrxsZubkE4";

  const colorWheelIntroImage =
    "https://i.pinimg.com/1200x/28/87/e5/2887e51c843ebec6a644572279bfd794.jpg";

  const primaryColorsImage =
    "https://i.pinimg.com/736x/45/79/a2/4579a2c425ce933308098ab8fdea4602.jpg";

  const secondaryColorsImage =
    "https://i.pinimg.com/736x/ea/df/f1/eadff1c16c99eb4d2a41159c0a268b2b.jpg";

  const warmColorsImage =
    "https://i.pinimg.com/736x/2a/dd/00/2add00d3adbf3edfbfb92b76c5c967d0.jpg";

  const coolColorsImage =
    "https://i.pinimg.com/736x/71/01/e2/7101e26d6646ea0c873998d3aab15f4f.jpg";

  const wheelRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState({
    name: "الأصفر",
    hex: "#fff000",
    hue: 0,
    type: "لون أساسي / دافئ",
    description: "لون مشرق يعبر عن الضوء والبهجة.",
  });

  const lessonGoals = [
    "أن يتعرف الطالب على دائرة الألوان بطريقة تفاعلية.",
       "أن يميز بين الألوان الأساسية والثانوية والدافئة والباردة.",
  " أن يستخدم الطالب الألوان بشكل صحيح في التصميم.",
  ];

  const infoCards = [
    {
      title: "1- الألوان الأساسية",
      icon: "🎨",
      image: primaryColorsImage,
      text: "هي الألوان التي لا نستطيع الحصول عليها من خلط ألوان أخرى، وهي:",
      items: ["الأحمر", "الأزرق", "الأصفر"],
      bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      title: "2- الألوان الثانوية",
      icon: "🖌️",
      image: secondaryColorsImage,
      text: "نحصل عليها من خلط لونين أساسيين:",
      items: [
        "أحمر + أصفر = برتقالي",
        "أصفر + أزرق = أخضر",
        "أزرق + أحمر = بنفسجي",
      ],
      bg: "bg-violet-50 dark:bg-violet-500/10",
    },
    {
      title: "3- الألوان الدافئة",
      icon: "🔥",
      image: warmColorsImage,
      text: "تعطي إحساسًا بالحرارة والنشاط، مثل:",
      items: ["الأحمر", "البرتقالي", "الأصفر"],
      bg: "bg-orange-50 dark:bg-orange-500/10",
    },
    {
      title: "4- الألوان الباردة",
      icon: "❄️",
      image: coolColorsImage,
      text: "تعطي إحساسًا بالهدوء والراحة، مثل:",
      items: ["الأزرق", "الأخضر", "البنفسجي"],
      bg: "bg-cyan-50 dark:bg-cyan-500/10",
    },
  ];

  const importanceCards = [
    {
      icon: "🌈",
      title: "فهم الألوان",
      text: "تساعد الطالب على التعرف على الألوان وتدرجاتها المختلفة.",
    },
    {
      icon: "🎯",
      title: "اختيار الألوان المتناسقة",
      text: "تجعل اختيار الألوان المناسبة في التصميم أسهل وأوضح.",
    },
    {
      icon: "💡",
      title: "فهم العلاقات بين الألوان",
      text: "توضح كيف ترتبط الألوان ببعضها داخل دائرة الألوان.",
    },
    {
      icon: "🧠",
      title: "التعلم التفاعلي",
      text: "الضغط على الألوان يجعل التعلم ممتعًا وأسهل للطالب.",
    },
  ];

  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5";

  function getColorInfo(angle) {
    const hue = ((Math.round(angle) % 360) + 360) % 360;

    if (hue >= 345 || hue < 15) {
      return {
        name: "الأصفر",
        hex: "#fff000",
        hue,
        type: "لون أساسي / دافئ",
        description: "لون مشرق يعبر عن الضوء والبهجة.",
      };
    }

    if (hue < 45) {
      return {
        name: "أصفر برتقالي",
        hex: "#ffd400",
        hue,
        type: "لون دافئ",
        description: "لون بين الأصفر والبرتقالي ويعطي إحساسًا بالطاقة.",
      };
    }

    if (hue < 75) {
      return {
        name: "البرتقالي",
        hex: "#ff9f1c",
        hue,
        type: "لون ثانوي / دافئ",
        description: "لون ناتج من خلط الأحمر مع الأصفر.",
      };
    }

    if (hue < 105) {
      return {
        name: "برتقالي محمر",
        hex: "#ff5a1f",
        hue,
        type: "لون دافئ",
        description: "لون بين البرتقالي والأحمر ويعطي إحساسًا بالحركة.",
      };
    }

    if (hue < 135) {
      return {
        name: "الأحمر",
        hex: "#ff1f2d",
        hue,
        type: "لون أساسي / دافئ",
        description: "لون قوي وملفت للنظر ويعبر عن النشاط والحيوية.",
      };
    }

    if (hue < 165) {
      return {
        name: "أحمر بنفسجي",
        hex: "#b52aa0",
        hue,
        type: "لون انتقالي",
        description: "لون بين الأحمر والبنفسجي ويظهر كتدرج جميل.",
      };
    }

    if (hue < 195) {
      return {
        name: "البنفسجي",
        hex: "#5b2e91",
        hue,
        type: "لون ثانوي / بارد",
        description: "لون ناتج من خلط الأحمر مع الأزرق.",
      };
    }

    if (hue < 225) {
      return {
        name: "أزرق بنفسجي",
        hex: "#403f9f",
        hue,
        type: "لون بارد",
        description: "لون يقع بين الأزرق والبنفسجي.",
      };
    }

    if (hue < 255) {
      return {
        name: "الأزرق",
        hex: "#1f55b5",
        hue,
        type: "لون أساسي / بارد",
        description: "لون يعبر عن الهدوء والثقة والاستقرار.",
      };
    }

    if (hue < 285) {
      return {
        name: "أزرق مخضر",
        hex: "#14a7a0",
        hue,
        type: "لون بارد",
        description: "لون بين الأزرق والأخضر ويعطي إحساسًا بالراحة.",
      };
    }

    if (hue < 315) {
      return {
        name: "الأخضر",
        hex: "#17a34a",
        hue,
        type: "لون ثانوي / بارد",
        description: "لون مريح للعين ويرتبط بالطبيعة.",
      };
    }

    return {
      name: "أصفر مخضر",
      hex: "#95c74f",
      hue,
      type: "لون انتقالي",
      description: "لون بين الأصفر والأخضر ويظهر في النباتات.",
    };
  }

  function handleWheelClick(event) {
    if (!wheelRef.current) return;

    const rect = wheelRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = rect.width / 2;

    if (distance > radius) return;

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    angle = (angle + 90 + 360) % 360;

    const info = getColorInfo(angle);
    setSelectedColor(info);
  }

  const wheelGradient = `
    conic-gradient(
      from 0deg,
      #fff000 0deg,
      #ffd400 30deg,
      #ff9f1c 60deg,
      #ff5a1f 90deg,
      #ff1f2d 120deg,
      #b52aa0 150deg,
      #5b2e91 180deg,
      #403f9f 210deg,
      #1f55b5 240deg,
      #14a7a0 270deg,
      #17a34a 300deg,
      #95c74f 330deg,
      #fff000 360deg
    )
  `;

  function ImageBox({ src, alt }) {
    return (
      <div className="group flex h-full min-h-75 items-center justify-center overflow-hidden rounded-4xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="mx-auto h-auto max-h-108 w-auto max-w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex min-h-62.5 w-full items-center justify-center rounded-3xl bg-slate-100 p-6 text-center text-lg font-black leading-8 text-slate-500 dark:bg-white/10 dark:text-slate-300">
            حطي هنا لينك الصورة
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-sky-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />

      <div className="page-container">
        {/* Top buttons */}
        {/* Hero */}
        <div className="rounded-4xl border border-white/70 bg-white/85 px-6 py-10 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10">
          <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:text-blue-300">
            🎡 درس تفاعلي
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-normal text-slate-900 dark:text-white md:text-5xl">
            دائرة الألوان
            <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
              بتدرجات كاملة وواقعية
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
            دائرة الألوان تساعدنا على فهم العلاقات بين الألوان، ومعرفة الألوان
            المتناسقة والمناسبة في التصميم والرسم.
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

        {/* Definition */}
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
          <ImageBox src={colorWheelIntroImage} alt="صورة دائرة الألوان" />

          <div className="flex h-full flex-col justify-center rounded-4xl border border-white/70 bg-white/85 p-6 text-right shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8 lg:[direction:rtl]">
            <div className="inline-flex w-fit rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:text-violet-300">
              📘 تعريف دائرة الألوان
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              ما هي دائرة الألوان؟
            </h2>

            <p className="mt-5 text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
              دائرة الألوان هي شكل دائري يجمع الألوان بطريقة منظمة، ويوضح
              العلاقة بين الألوان الأساسية والثانوية والدافئة والباردة.
            </p>

            <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-white/10 dark:bg-blue-500/10">
              <p className="font-bold leading-8 text-slate-700 dark:text-slate-300">
                يستخدم المصممون دائرة الألوان لاختيار ألوان متناسقة وجميلة في
                التصميمات، كما تساعد الطالب على فهم الألوان بطريقة بصرية سهلة.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Wheel - left */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:text-violet-300">
              🎡 دائرة الألوان الكاملة
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              اضغط على أي مكان في دائرة الألوان
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-300">
              تم وضع دائرة التفاعل على الشمال، ومعلومات اللون المختار على اليمين.
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:[direction:ltr]">
            {/* LEFT: Interactive wheel */}
            <div className="rounded-4xl border border-slate-100 bg-slate-100 p-5 shadow-xl dark:border-white/10 dark:bg-white/5">
              <div className="mx-auto max-w-140">
                <div
                  ref={wheelRef}
                  onClick={handleWheelClick}
                  className="relative mx-auto aspect-square w-full max-w-125 cursor-pointer rounded-full shadow-2xl"
                  style={{ background: wheelGradient }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),rgba(255,255,255,0.08)_35%,rgba(255,255,255,0)_62%)]" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                    <div
                      className="mb-1 h-7 w-7 rounded-full border border-white shadow"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      اضغط
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300">
                      على اللون
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-white p-5 text-center shadow-sm dark:bg-white/10">
                <p className="text-2xl font-black text-slate-900 dark:text-white">
                  اسم اللون: {selectedColor.name}
                </p>

                <div
                  className="mx-auto mt-4 h-10 w-10 rounded-full border-2 border-white shadow"
                  style={{ backgroundColor: selectedColor.hex }}
                />

                <p className="mt-3 font-bold text-slate-600 dark:text-slate-300">
                  درجة اللون: {selectedColor.hue}°
                </p>
              </div>
            </div>

            {/* RIGHT: color info */}
            <div className="rounded-4xl border border-slate-100 bg-slate-50 p-6 text-right shadow-xl dark:border-white/10 dark:bg-white/5 lg:[direction:rtl]">
              <div className="text-center">
                <div
                  className="mx-auto h-28 w-28 rounded-full border-8 border-white shadow-xl"
                  style={{ backgroundColor: selectedColor.hex }}
                />

                <h3 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                  {selectedColor.name}
                </h3>

                <p className="mt-2 text-lg font-black text-blue-700 dark:text-blue-300">
                  {selectedColor.type}
                </p>

                <p className="mt-2 font-bold text-slate-500 dark:text-slate-300">
                  {selectedColor.hex}
                </p>

                <p className="mx-auto mt-4 max-w-md text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
                  {selectedColor.description}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { name: "الأصفر", angle: 0 },
                  { name: "البرتقالي", angle: 60 },
                  { name: "الأحمر", angle: 120 },
                  { name: "البنفسجي", angle: 180 },
                  { name: "الأزرق", angle: 240 },
                  { name: "الأخضر", angle: 300 },
                ].map((item) => {
                  const info = getColorInfo(item.angle);

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedColor(info)}
                      className="flex min-h-15.5 items-center justify-center rounded-2xl border border-white/70 bg-white p-3 text-center font-black text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                    >
                      <span
                        className="ml-2 inline-block h-5 w-5 rounded-full shadow-sm"
                        style={{ backgroundColor: info.hex }}
                      />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:text-pink-300">
              🌈 محتوى الدرس
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              أنواع الألوان في دائرة الألوان
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className={`flex h-full flex-col overflow-hidden rounded-4xl border border-white/70 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 ${card.bg}`}
              >
                <div className="flex min-h-62.5 items-center justify-center bg-white/80 p-4 dark:bg-white/5">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="mx-auto h-auto max-h-65 w-auto max-w-full rounded-3xl object-contain shadow-md"
                    />
                  ) : (
                    <div className="flex min-h-52 w-full items-center justify-center rounded-3xl bg-white p-6 text-center text-base font-black leading-8 text-slate-500 dark:bg-white/10 dark:text-slate-300">
                      حطي هنا صورة {card.title}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 text-right">
                  <div className="text-4xl">{card.icon}</div>

                  <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 font-bold leading-8 text-slate-700 dark:text-slate-300">
                    {card.text}
                  </p>

                  <div className="mt-4 space-y-3">
                    {card.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/70 bg-white/75 p-4 text-center text-lg font-black text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Importance */}
        <div className={sectionCard}>
          <div className="mb-7 text-center">
            <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:text-yellow-300">
              ⭐ أهمية دائرة الألوان
            </div>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              لماذا نستخدم دائرة الألوان؟
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {importanceCards.map((item) => (
              <div key={item.title} className={smallCard}>
                <div className="flex h-full flex-col">
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

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              شاهد الشرح بطريقة مبسطة
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-300">
              يساعد الفيديو على فهم دائرة الألوان بطريقة سهلة وواضحة.
            </p>
          </div>

          {videoUrl ? (
            <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-white p-3 shadow-xl dark:bg-white/10">
              <iframe
                src={videoUrl}
                title="فيديو دائرة الألوان"
                className="h-72 w-full rounded-2xl bg-black shadow-md md:h-115"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="mx-auto flex h-72 max-w-5xl items-center justify-center rounded-4xl bg-slate-900 p-6 text-center text-lg font-black leading-8 text-white shadow-xl md:h-115">
              حطي لينك الفيديو بصيغة embed في المتغير videoUrl أعلى الكود
            </div>
          )}
        </div>

        {/* Bottom buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/topics" className="soft-btn">
            مشاهدة باقي الدروس
          </Link>

          <Link href="/activities?topic=color-wheel" className="main-btn">
            نشاط هذا الدرس
            <span>🧩</span>
          </Link>
        </div>
      </div>
    </section>
  );
}