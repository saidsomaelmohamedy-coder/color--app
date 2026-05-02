"use client";

import Link from "next/link";
import { siteInfo } from "../data/colorsData";

const collegeLogo =
  "https://i.pinimg.com/736x/e6/b4/4e/e6b44ea9390eb96fa5f5a2bf76b52a5f.jpg";

const departmentLogo =
  "https://i.pinimg.com/736x/6a/e3/16/6ae316f40d46150f5c5e176bc1dc048d.jpg";

const studentImage =
  "https://i.pinimg.com/736x/13/89/a1/1389a144d50e1e9394e189dd6ac0d794.jpg";

const fallbackImage =
  "https://placehold.co/600x400/dbeafe/111827?text=Image";

function SafeImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = fallbackImage;
      }}
    />
  );
}

const siteSteps = [
  {
    icon: "🏠",
    title: "ابدأ من الرئيسية",
    text: "تعرّف على فكرة الموقع والموضوعات التعليمية.",
  },
  {
    icon: "📚",
    title: "انتقل إلى الدروس",
    text: "اختر الدرس المناسب وابدأ التعلم خطوة بخطوة.",
  },
  {
    icon: "🎨",
    title: "شاهد وتعلّم",
    text: "استخدم الصور والفيديو لفهم دلالات الألوان.",
  },
  {
    icon: "🧩",
    title: "نفّذ النشاط",
    text: "بعد كل درس يوجد نشاط يساعدك على التطبيق.",
  },
  {
    icon: "✅",
    title: "ادخل الاختبار",
    text: "في النهاية أجب عن الاختبار النهائي لقياس الفهم.",
  },
  {
    icon: "🧭",
    title: "تنقّل بسهولة",
    text: "استخدم الأزرار الموجودة في الموقع للانتقال بين الصفحات.",
  },
];

const goals = [
  {
    icon: "👁️",
    title: "تعلم بصري",
    text: "الاعتماد على الصور والألوان لتسهيل الفهم.",
  },
  {
    icon: "🧠",
    title: "تبسيط المحتوى",
    text: "جمل قصيرة وخطوات واضحة تناسب صعوبات التعلم.",
  },
  {
    icon: "📝",
    title: "تطبيق وتقويم",
    text: "أنشطة واختبار نهائي للتأكد من فهم الطالب.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-10">
      <div className="page-container">
        <div className="overflow-hidden rounded-4xl border border-blue-100 bg-white shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="border-b border-blue-100 bg-linear-to-l from-blue-50 via-white to-pink-50 px-6 py-5 dark:border-white/10 dark:from-black/30 dark:via-black/20 dark:to-black/30">
            <div className="grid items-center gap-6 md:grid-cols-[150px_1fr_150px]">
              <div className="flex justify-center">
                <div className="rounded-3xl bg-white p-3 shadow-md dark:bg-white/10">
                  <SafeImage
                    src={collegeLogo}
                    alt="شعار الكلية"
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-black text-blue-700 dark:text-blue-100">
                  مشروع تعليمي تفاعلي
                </p>

                <h1 className="mt-3 text-3xl font-black leading-normal text-black dark:text-white md:text-5xl">
                  {siteInfo?.title || "دليل الألوان في التصميم الجرافيكي"}
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-base font-bold leading-8 text-black/70 dark:text-white/80">
                  موقع تعليمي يساعد الطلاب من ذوي صعوبات التعلم على فهم
                  الألوان ودلالتها بطريقة بسيطة ومنظمة.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="rounded-3xl bg-white p-3 shadow-md dark:bg-white/10">
                  <SafeImage
                    src={departmentLogo}
                    alt="شعار القسم"
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-3">
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/10"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-md dark:bg-white/15">
                  {goal.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-black dark:text-white">
                  {goal.title}
                </h3>

                <p className="mt-2 text-sm font-bold leading-7 text-black/70 dark:text-white/75">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-blue-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="badge mb-5">
            <span className="badge-icon">🎯</span>
            <span>فكرة الموقع</span>
          </div>

          <h2 className="text-3xl font-black leading-normal text-black dark:text-white">
            رحلة بسيطة لفهم الألوان ودلالتها
          </h2>

          <p className="mt-5 text-lg font-bold leading-9 text-black/75 dark:text-white/80">
            صُمم هذا الموقع ليعرض موضوع الألوان في التصميم الجرافيكي بطريقة
            سهلة، من خلال محتوى قصير وواضح مدعوم بالصور والأنشطة.
          </p>

          <p className="mt-4 text-lg font-bold leading-9 text-black/75 dark:text-white/80">
            يساعد الموقع الطالب على التعلم بالتدرج: مشاهدة، فهم، تطبيق، ثم
            تقويم من خلال الاختبار النهائي.
          </p>
        </div>

        <div className="mt-10 rounded-4xl border border-blue-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="text-center">
            <div className="badge mx-auto">
              <span className="badge-icon">🧭</span>
              <span>تعليمات التحرك داخل الموقع</span>
            </div>

            <h2 className="mt-4 text-3xl font-black text-black dark:text-white">
              كيف يستخدم الطالب الموقع؟
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-4xl shadow-md dark:bg-white/15">
                    {step.icon}
                  </div>

                  <div>
                    <p className="text-xs font-black text-blue-700 dark:text-blue-100">
                      خطوة {index + 1}
                    </p>

                    <h3 className="text-xl font-black text-black dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base font-bold leading-8 text-black/70 dark:text-white/75">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-blue-100 bg-white p-7 text-center shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="badge mx-auto">
            <span className="badge-icon">👩‍💻</span>
            <span>بيانات إعداد الموقع</span>
          </div>

          <div className="mx-auto mt-7 max-w-3xl rounded-4xl bg-linear-to-br from-blue-50 via-white to-pink-50 p-7 shadow-md dark:from-white/10 dark:via-white/5 dark:to-white/10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-md dark:bg-white/15">
              ✍️
            </div>

            <h2 className="mt-4 text-3xl font-black text-black dark:text-white">
              إعداد / أسماء محمد سيد سيد
            </h2>

            <div className="mx-auto mt-6 w-fit rounded-4xl bg-white p-3 shadow-lg dark:bg-white/10">
              <SafeImage
                src={studentImage}
                alt="صورة إعداد الموقع"
                className="h-64 w-56 rounded-3xl object-cover"
              />
            </div>

            <div className="mx-auto my-7 h-px max-w-md bg-black/10 dark:bg-white/20" />

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-md dark:bg-white/15">
              👨‍🏫
            </div>

            <h3 className="mt-4 text-2xl font-black text-black dark:text-white">
              تحت إشراف
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-100 px-6 py-5 text-xl font-black text-blue-800 shadow-sm transition dark:bg-blue-950/60 dark:text-blue-100 dark:ring-1 dark:ring-blue-300/20">
                دكتور : محمد عادل
              </div>

              <div className="rounded-2xl bg-pink-100 px-6 py-5 text-xl font-black text-pink-800 shadow-sm transition dark:bg-pink-950/60 dark:text-pink-100 dark:ring-1 dark:ring-pink-300/20">
                دكتور : أمل حسان
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="soft-btn">
            الرجوع للرئيسية
            <span>🏠</span>
          </Link>

          <Link href="/topics" className="main-btn">
            الانتقال للدروس
            <span>📚</span>
          </Link>
        </div>
      </div>
    </section>
  );
}