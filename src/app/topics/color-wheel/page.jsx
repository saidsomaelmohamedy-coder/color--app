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
    name: "اختار درجة لون",
    hex: "#00c2ff",
    hue: null,
    type: "اضغط على أي درجة داخل الدائرة",
    description: "ستظهر هنا معلومات اللون الذي تختارينه من دائرة الألوان.",
    hasSelection: false,
    pointerX: 50,
    pointerY: 50,
  });

  const lessonGoals = [
    "أن يتعرف الطالب على دائرة الألوان بطريقة تفاعلية.",
    "أن يميز بين الألوان الأساسية والثانوية والدافئة والباردة.",
    "أن يستخدم الطالب الألوان بشكل صحيح في التصميم.",
  ];

  const infoCards = [
    {
      title: "1- الألوان الأساسية",
      icon: "🎨",
      image: primaryColorsImage,
      text: "هي الألوان التي لا نستطيع الحصول عليها من خلط ألوان أخرى، وهي:",
      items: ["الأحمر", "الأزرق", "الأصفر"],
      bg: "bg-blue-50",
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
      bg: "bg-violet-50",
    },
    {
      title: "3- الألوان الدافئة",
      icon: "🔥",
      image: warmColorsImage,
      text: "تعطي إحساسًا بالحرارة والنشاط، مثل:",
      items: ["الأحمر", "البرتقالي", "الأصفر"],
      bg: "bg-orange-50",
    },
    {
      title: "4- الألوان الباردة",
      icon: "❄️",
      image: coolColorsImage,
      text: "تعطي إحساسًا بالهدوء والراحة، مثل:",
      items: ["الأزرق", "الأخضر", "البنفسجي"],
      bg: "bg-cyan-50",
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
  ];

  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-800 dark:text-white";

  const colorStops = [
    { angle: 0, hex: "#00c2ff", name: "الأزرق السماوي" },
    { angle: 35, hex: "#0066ff", name: "الأزرق" },
    { angle: 70, hex: "#5b2cff", name: "الأزرق البنفسجي" },
    { angle: 105, hex: "#9b2cff", name: "البنفسجي" },
    { angle: 140, hex: "#ff2fb3", name: "الوردي" },
    { angle: 175, hex: "#ff2f4f", name: "الأحمر" },
    { angle: 210, hex: "#ff6b00", name: "البرتقالي" },
    { angle: 250, hex: "#ffd000", name: "الأصفر" },
    { angle: 290, hex: "#b7ff00", name: "الأخضر المصفر" },
    { angle: 325, hex: "#23d160", name: "الأخضر" },
    { angle: 360, hex: "#00c2ff", name: "الأزرق السماوي" },
  ];

  function hexToRgb(hex) {
    const cleanHex = hex.replace("#", "");

    return {
      r: parseInt(cleanHex.slice(0, 2), 16),
      g: parseInt(cleanHex.slice(2, 4), 16),
      b: parseInt(cleanHex.slice(4, 6), 16),
    };
  }

  function rgbToHex(r, g, b) {
    const toHex = (value) =>
      Math.round(value).toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function mixHexColors(hex1, hex2, amount) {
    const c1 = hexToRgb(hex1);
    const c2 = hexToRgb(hex2);

    return rgbToHex(
      c1.r + (c2.r - c1.r) * amount,
      c1.g + (c2.g - c1.g) * amount,
      c1.b + (c2.b - c1.b) * amount
    );
  }

  function getNearestColorStop(angle) {
    let nearest = colorStops[0];
    let minDiff = 360;

    colorStops.forEach((stop) => {
      const diff = Math.abs(stop.angle - angle);
      if (diff < minDiff) {
        minDiff = diff;
        nearest = stop;
      }
    });

    return nearest;
  }

  function getExactColorFromAngle(angle, saturationRatio) {
    const currentStopIndex = colorStops.findIndex((stop, index) => {
      const nextStop = colorStops[index + 1];
      return nextStop && angle >= stop.angle && angle <= nextStop.angle;
    });

    const start = colorStops[currentStopIndex];
    const end = colorStops[currentStopIndex + 1];

    const range = end.angle - start.angle;
    const amount = range === 0 ? 0 : (angle - start.angle) / range;

    const mixedColor = mixHexColors(start.hex, end.hex, amount);

    const centerSoftness = Math.max(0.35, saturationRatio);
    const finalColor = mixHexColors("#ffffff", mixedColor, centerSoftness);

    return finalColor;
  }

  function getColorName(angle) {
    return getNearestColorStop(angle).name;
  }

  function getColorType(angle) {
    if (angle >= 140 && angle < 290) return "لون دافئ";
    return "لون بارد";
  }

  function getColorDescription(angle) {
    if (angle < 35) return "درجة باردة تعطي إحساسًا بالهدوء والثقة.";
    if (angle < 70) return "درجة باردة تساعد على الشعور بالاستقرار والراحة.";
    if (angle < 105) return "درجة تجمع بين هدوء الأزرق وعمق البنفسجي.";
    if (angle < 140) return "درجة عميقة وجذابة ترتبط بالخيال والجمال.";
    if (angle < 175) return "درجة ناعمة ومبهجة تلفت الانتباه.";
    if (angle < 210) return "درجة قوية وملفتة تساعد على التنبيه وجذب الانتباه.";
    if (angle < 250) return "درجة دافئة ونشيطة تعطي إحساسًا بالحركة والطاقة.";
    if (angle < 290) return "درجة مشرقة تساعد على الشعور بالبهجة والانتباه.";
    if (angle < 325) return "درجة طبيعية ومريحة ترتبط بالنشاط والحياة.";
    return "درجة هادئة ومريحة ترتبط بالطبيعة والراحة.";
  }

  function getColorInfo(angle, saturationRatio, pointerX, pointerY) {
    const hex = getExactColorFromAngle(angle, saturationRatio);

    return {
      name: getColorName(angle),
      hex,
      hue: Math.round(angle),
      type: getColorType(angle),
      description: getColorDescription(angle),
      hasSelection: true,
      pointerX,
      pointerY,
    };
  }

  function handleWheelPointer(event) {
    if (!wheelRef.current) return;

    const rect = wheelRef.current.getBoundingClientRect();

    const size = Math.min(rect.width, rect.height);
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = size / 2;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dx = x - centerX;
    const dy = y - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > radius) return;

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    angle = (angle + 90 + 360) % 360;

    const saturationRatio = Math.min(1, Math.max(0, distance / radius));

    const pointerX = (x / rect.width) * 100;
    const pointerY = (y / rect.height) * 100;

    setSelectedColor(getColorInfo(angle, saturationRatio, pointerX, pointerY));
  }

  const wheelGradient = `
    radial-gradient(
      circle at center,
      rgba(255,255,255,0.18) 0%,
      rgba(255,255,255,0.10) 16%,
      rgba(255,255,255,0.04) 34%,
      rgba(255,255,255,0) 56%
    ),
    conic-gradient(
      from 0deg,
      #00c2ff 0deg,
      #0066ff 35deg,
      #5b2cff 70deg,
      #9b2cff 105deg,
      #ff2fb3 140deg,
      #ff2f4f 175deg,
      #ff6b00 210deg,
      #ffd000 250deg,
      #b7ff00 290deg,
      #23d160 325deg,
      #00c2ff 360deg
    )
  `;

  function ImageBox({ src, alt }) {
    return (
      <div className="group flex h-full min-h-75 items-center justify-center overflow-hidden rounded-4xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900">
        <img
          src={src}
          alt={alt}
          className="mx-auto h-auto max-h-108 w-auto max-w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <>
      <style>{`
        html.dark .wheel-info-card {
          background: #0f172a !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        html.dark .wheel-info-image {
          background: #111827 !important;
        }

        html.dark .wheel-info-body {
          background: #0f172a !important;
          color: #ffffff !important;
        }

        html.dark .wheel-info-title,
        html.dark .wheel-info-text {
          color: #ffffff !important;
        }

        html.dark .wheel-info-item {
          background: #111827 !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.24) !important;
        }

        .smooth-color-wheel {
          box-shadow:
            0 22px 48px rgba(15, 23, 42, 0.24),
            inset 0 0 42px rgba(255, 255, 255, 0.16),
            inset 0 0 55px rgba(0, 0, 0, 0.08);
          filter: saturate(1.22) contrast(1.06);
          touch-action: none;
        }

        .smooth-color-wheel:hover {
          transform: scale(1.012);
        }

        .wheel-pointer {
          animation: pulsePointer 1.4s ease-in-out infinite;
        }

        @keyframes pulsePointer {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        .video-like-first-lesson {
          width: 100%;
          height: 18rem;
        }

        @media (min-width: 768px) {
          .video-like-first-lesson {
            height: 28.75rem;
          }
        }
      `}</style>

      <section className="relative overflow-hidden py-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-sky-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />

        <div className="page-container">
          <div className="rounded-4xl border border-white/70 bg-white/85 px-6 py-10 text-center shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:px-10">
            <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
              🎡 موضوع تفاعلي
            </div>

            <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-normal text-slate-900 dark:text-white md:text-5xl">
              دائرة الألوان
              <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-violet-300 dark:to-pink-300">
                في التصميم الجرافيكي
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
              دائرة الألوان تساعدنا على فهم العلاقات بين الألوان، ومعرفة الألوان
              المتناسقة والمناسبة في التصميم والرسم.
            </p>
          </div>

          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:bg-green-500/20 dark:text-green-100">
                🎯 أهداف الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                بعد دراسة هذا الموضوع يكون الطالب قادرًا على:
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
              {lessonGoals.map((goal, index) => (
                <div key={goal} className={smallCard}>
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

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:[direction:ltr]">
            <ImageBox src={colorWheelIntroImage} alt="صورة دائرة الألوان" />

            <div className="flex h-full flex-col justify-center rounded-4xl border border-white/70 bg-white/85 p-6 text-right shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:p-8 lg:[direction:rtl]">
              <div className="inline-flex w-fit rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:bg-violet-500/20 dark:text-violet-100">
                📘 تعريف دائرة الألوان
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                ما هي دائرة الألوان؟
              </h2>

              <p className="mt-5 text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
                دائرة الألوان هي شكل دائري يجمع الألوان بطريقة منظمة، ويوضح
                العلاقة بين الألوان الأساسية والثانوية والدافئة والباردة.
              </p>

              <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-300/30 dark:bg-blue-500/20">
                <p className="font-bold leading-8 text-slate-700 dark:text-blue-100">
                  يستخدم المصممون دائرة الألوان لاختيار ألوان متناسقة وجميلة في
                  التصميمات، كما تساعد الطالب على فهم الألوان بطريقة بصرية سهلة.
                </p>
              </div>
            </div>
          </div>

          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:bg-violet-500/20 dark:text-violet-100">
                🎡 دائرة الألوان الكاملة
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                اضغط على أي درجة لون داخل الدائرة ثم تعرف على نوع اللون
              </h2>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:[direction:ltr]">
              <div className="rounded-4xl border border-slate-100 bg-slate-100 p-5 shadow-xl dark:border-white/20 dark:bg-slate-800">
                <div className="mx-auto max-w-125">
                  <div
                    ref={wheelRef}
                    onPointerDown={handleWheelPointer}
                    onPointerMove={(event) => {
                      if (event.buttons === 1) handleWheelPointer(event);
                    }}
                    className="smooth-color-wheel relative mx-auto aspect-square w-full cursor-pointer overflow-hidden rounded-full transition duration-300"
                    style={{ background: wheelGradient }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_30%,rgba(255,255,255,0)_64%)]" />

                    {selectedColor.hasSelection && (
                      <div
                        className="wheel-pointer pointer-events-none absolute z-20 h-8 w-8 rounded-full border-4 border-white shadow-2xl ring-4 ring-black/20"
                        style={{
                          left: `${selectedColor.pointerX}%`,
                          top: `${selectedColor.pointerY}%`,
                          backgroundColor: selectedColor.hex,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-slate-100 bg-slate-50 p-6 text-right shadow-xl dark:border-white/20 dark:bg-slate-800 lg:[direction:rtl]">
                <div className="text-center">
                  <div
                    className="mx-auto h-28 w-28 rounded-full border-8 border-white shadow-xl"
                    style={{ backgroundColor: selectedColor.hex }}
                  />

                  <h3 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                    {selectedColor.name}
                  </h3>

                  <p className="mt-2 text-lg font-black text-blue-700 dark:text-blue-100">
                    {selectedColor.type}
                  </p>

                  <p className="mt-2 font-bold text-slate-500 dark:text-slate-200">
                    {selectedColor.hasSelection ? selectedColor.hex : "—"}
                  </p>

                  <p className="mx-auto mt-4 max-w-md text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
                    {selectedColor.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-pink-600/10 px-5 py-2 text-sm font-black text-pink-700 dark:bg-pink-500/20 dark:text-pink-100">
                🌈 محتوى الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                أنواع الألوان في دائرة الألوان
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className={`wheel-info-card flex h-full flex-col overflow-hidden rounded-4xl border border-white/70 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/20 ${card.bg}`}
                >
                  <div className="wheel-info-image flex min-h-62.5 items-center justify-center bg-white/80 p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="mx-auto h-auto max-h-65 w-auto max-w-full rounded-3xl object-contain shadow-md"
                    />
                  </div>

                  <div className="wheel-info-body flex flex-1 flex-col p-6 text-right">
                    <div className="text-4xl">{card.icon}</div>

                    <h3 className="wheel-info-title mt-4 text-2xl font-black text-slate-900">
                      {card.title}
                    </h3>

                    <p className="wheel-info-text mt-3 font-bold leading-8 text-slate-700">
                      {card.text}
                    </p>

                    <div className="mt-4 space-y-3">
                      {card.items.map((item) => (
                        <div
                          key={item}
                          className="wheel-info-item rounded-2xl border border-white/70 bg-white/75 p-4 text-center text-lg font-black text-slate-800 shadow-sm"
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

          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-black text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-100">
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
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600/10 text-3xl dark:bg-blue-500/20">
                      {item.icon}
                    </div>

                    <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-bold leading-8 text-slate-700 dark:text-slate-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                🎬 فيديو الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                شاهد الشرح بطريقة مبسطة
              </h2>

              <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-200">
                في هذا الفيديو ستتعرف على دائرة الألوان بطريقة سهلة وواضحة.
              </p>
            </div>

            <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/20 dark:bg-slate-800">
              <iframe
                src={videoUrl}
                title="فيديو دائرة الألوان"
                className="video-like-first-lesson w-full rounded-2xl bg-black shadow-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/topics" className="soft-btn">
              مشاهدة باقي الموضوعات
            </Link>

            <Link href="/activities?topic=color-wheel" className="main-btn">
              نشاط هذا الموضوع
              <span>🧩</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}