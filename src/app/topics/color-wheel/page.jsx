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
    name: "اختاري درجة لون",
    hex: "#ffffff",
    hue: null,
    type: "اضغطي على أي درجة داخل الدائرة",
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
    {
      icon: "🧠",
      title: "التعلم التفاعلي",
      text: "الضغط على الألوان يجعل التعلم ممتعًا وأسهل للطالب.",
    },
  ];

  const sectionCard =
    "mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8";

  const smallCard =
    "h-full rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-800 dark:text-white";

  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const toHex = (value) =>
      Math.round(value * 255)
        .toString(16)
        .padStart(2, "0");

    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
  }

  function getColorName(angle) {
    if (angle >= 350 || angle < 25) return "الأخضر المزرق";
    if (angle < 55) return "الأخضر";
    if (angle < 85) return "الأخضر المصفر";
    if (angle < 120) return "الأصفر";
    if (angle < 155) return "الأصفر البرتقالي";
    if (angle < 190) return "البرتقالي";
    if (angle < 225) return "الأحمر";
    if (angle < 260) return "الوردي";
    if (angle < 295) return "البنفسجي";
    if (angle < 330) return "الأزرق";
    return "الأزرق السماوي";
  }

  function getColorType(angle) {
    if (angle >= 85 && angle < 225) return "لون دافئ";
    if (angle >= 225 && angle < 350) return "لون بارد";
    return "لون طبيعي / مريح";
  }

  function getColorDescription(angle) {
    if (angle >= 350 || angle < 55) {
      return "درجة هادئة ومريحة ترتبط بالطبيعة والراحة.";
    }

    if (angle < 120) {
      return "درجة مشرقة تساعد على لفت الانتباه والشعور بالبهجة.";
    }

    if (angle < 190) {
      return "درجة دافئة ونشيطة تعطي إحساسًا بالحركة والطاقة.";
    }

    if (angle < 225) {
      return "درجة قوية وملفتة تساعد على التنبيه وجذب الانتباه.";
    }

    if (angle < 295) {
      return "درجة عميقة وجذابة ترتبط بالخيال والجمال.";
    }

    return "درجة باردة تعطي إحساسًا بالهدوء والثقة والاستقرار.";
  }

  function getColorHueForAngle(angle) {
    if (angle >= 350 || angle < 25) return 175;
    if (angle < 55) return 135;
    if (angle < 85) return 90;
    if (angle < 120) return 55;
    if (angle < 155) return 42;
    if (angle < 190) return 28;
    if (angle < 225) return 355;
    if (angle < 260) return 325;
    if (angle < 295) return 275;
    if (angle < 330) return 225;
    return 195;
  }

  function getColorInfo(angle, saturationRatio, pointerX, pointerY) {
    if (saturationRatio < 0.1) {
      return {
        name: "الأبيض",
        hex: "#ffffff",
        hue: 0,
        type: "لون محايد",
        description: "مركز الدائرة فاتح جدًا ويعطي إحساسًا بالنقاء والهدوء.",
        hasSelection: true,
        pointerX,
        pointerY,
      };
    }

    const hue = getColorHueForAngle(angle);
    const saturation = Math.round(40 + saturationRatio * 60);
    const lightness = Math.round(90 - saturationRatio * 38);
    const hex = hslToHex(hue, saturation, lightness);

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

    if (distance > radius * 0.97) return;

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
      #ffffff 0%,
      #fffdf2 4%,
      rgba(255,255,255,0.92) 10%,
      rgba(255,255,255,0.72) 22%,
      rgba(255,255,255,0.48) 36%,
      rgba(255,255,255,0.25) 52%,
      rgba(255,255,255,0.10) 68%,
      rgba(255,255,255,0) 86%
    ),
    conic-gradient(
      from 0deg,
      #17c7c4 0deg,
      #18c98a 28deg,
      #32c95f 50deg,
      #8bdd32 75deg,
      #f3e719 105deg,
      #ffd12c 132deg,
      #ff9e26 160deg,
      #ff681f 190deg,
      #ef233c 220deg,
      #d21a7b 250deg,
      #922fc4 280deg,
      #2e49c9 315deg,
      #179bd7 342deg,
      #17c7c4 360deg
    )
  `;

  function ImageBox({ src, alt }) {
    return (
      <div className="group flex h-full min-h-75 items-center justify-center overflow-hidden rounded-4xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="mx-auto h-auto max-h-108 w-auto max-w-full rounded-3xl object-contain shadow-md transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex min-h-62.5 w-full items-center justify-center rounded-3xl bg-slate-100 p-6 text-center text-lg font-black leading-8 text-slate-500 dark:bg-slate-800 dark:text-slate-200">
            حطي هنا لينك الصورة
          </div>
        )}
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
          {/* Hero */}
          <div className="rounded-4xl border border-white/70 bg-white/85 px-6 py-10 text-center shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 md:px-10">
            <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
              🎡 موضوع تفاعلي
            </div>

            <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-normal text-slate-900 dark:text-white md:text-5xl">
              دائرة الألوان
              <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-violet-300 dark:to-pink-300">
                بتدرجات كاملة وناعمة
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-200">
              دائرة الألوان تساعدنا على فهم العلاقات بين الألوان، ومعرفة الألوان
              المتناسقة والمناسبة في التصميم والرسم.
            </p>
          </div>

          {/* Goals */}
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

          {/* Definition */}
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

          {/* Interactive Wheel */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:bg-violet-500/20 dark:text-violet-100">
                🎡 دائرة الألوان الكاملة
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                 اضغط على أي درجة لون داخل الدائرة ثم تعرف على نوع اللون              </h2>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:[direction:ltr]">
              <div className="rounded-4xl border border-slate-100 bg-slate-100 p-5 shadow-xl dark:border-white/20 dark:bg-slate-800">
                <div className="mx-auto max-w-125">
                  <div
                    ref={wheelRef}
                    onClick={handleWheelClick}
                    className="smooth-color-wheel relative mx-auto aspect-square w-full cursor-pointer overflow-hidden rounded-full transition duration-300"
                    style={{ background: wheelGradient }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.23),rgba(255,255,255,0.07)_30%,rgba(255,255,255,0)_64%)]" />

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

                <div className="mt-6 rounded-3xl bg-white p-5 text-center shadow-sm dark:bg-slate-900">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">
                    {selectedColor.hasSelection
                      ? `اسم اللون: ${selectedColor.name}`
                      : "اضغطي على أي درجة داخل الدائرة"}
                  </p>

                  <div
                    className="mx-auto mt-4 h-10 w-10 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: selectedColor.hex }}
                  />

                  <p className="mt-3 font-bold text-slate-600 dark:text-slate-200">
                    {selectedColor.hasSelection
                      ? `درجة اللون: ${selectedColor.hue}°`
                      : "اختاري درجة من دائرة الألوان"}
                  </p>
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

          {/* Info cards */}
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
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="mx-auto h-auto max-h-65 w-auto max-w-full rounded-3xl object-contain shadow-md"
                      />
                    ) : (
                      <div className="flex min-h-52 w-full items-center justify-center rounded-3xl bg-white p-6 text-center text-base font-black leading-8 text-slate-500">
                        حطي هنا صورة {card.title}
                      </div>
                    )}
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

          {/* Importance */}
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

          {/* Video */}
          <div className={sectionCard}>
            <div className="mb-7 text-center">
              <div className="mx-auto inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                🎬 فيديو الموضوع
              </div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
                شاهد الشرح بطريقة مبسطة
              </h2>

              <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-200">
                في هذا الفيديو ستتعرف على  دائرةالألوان بطريقة سهلة وواضحة.
              </p>
            </div>

            {videoUrl ? (
              <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/20 dark:bg-slate-800">
                <iframe
                  src={videoUrl}
                  title="فيديو دائرة الألوان"
                  className="video-like-first-lesson w-full rounded-2xl bg-black shadow-md"
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