"use client";

import { useState } from "react";
import Link from "next/link";

/* ✅ حطي هنا URL صورة طفل بيفكر */
const heroImageUrl = "https://i.pinimg.com/1200x/61/be/85/61be854df73dc47a7fe51e85edc76f4d.jpg";

const examQuestions = [
  {
    question: " اللون ...",
    options: [
      "هو شكل الأشياء",
      "هو إحساس نراه بالعين يميز الأشياء",
      "هو حجم الأشياء",
      "هو صوت الأشياء",
    ],
    correct: 1,
  },
  {
    question: "من الألوان الأساسية...",
    options: ["أخضر", "بنفسجي", "أحمر", "برتقالي"],
    correct: 2,
  },
  {
    question: "التفاحة غالبا لونها...",
    options: ["أزرق", "أحمر", "رمادي", "أسود"],
    correct: 1,
  },
  {
    question: "اهمية الالوان فى حياتنا هى...",
    options: [
      "تجعل الأشياء تختفي",
      "تساعدنا على التمييز والجمال",
      "تجعل الأشياء بلا معنى",
      "تقلل من وضوح الأشياء",
    ],
    correct: 1,
  },
  {
   question: "دائرة الالوان هى...",
    options: [
      "لعبة للأطفال",
      "شكل يوضح ترتيب الألوان معًا",
      "صورة طبيعة",
      "لون واحد فقط",
    ],
    correct: 1,
  },
  {
   question: "من الالوان الباردة...",
    options: ["أحمر", "برتقالي", "أزرق", "أصفر"],
    correct: 2,
  },
  {
   question: "نستخدم الالوان فى التصميم...",
    options: [
      "لجعل التصميم غير واضح",
      "لجذب الانتباه وجعل التصميم جميل",
      "لإخفاء المحتوى",
      "لتقليل الجمال",
    ],
    correct: 1,
  },
  {
    question: "اللون الاحمر يدل غالبا على...",
    options: ["الهدوء", "الخطر أو الانتباه", "البرودة", "النوم"],
    correct: 1,
  },
  {
   question: "اللون الاخضر يدل على...",
    options: ["الطبيعة والحياة", "الخطر", "الحزن", "الظلام"],
    correct: 0,
  },
  {
    question: "عند اختيار لون في التصميم يجب أن يكون...",
    options: ["عشوائي", "غير واضح", "مناسب للمعنى", "مزعج للعين"],
    correct: 2,
  },
];

function hasRealUrl(url) {
  return url && !url.includes("حطي هنا");
}

function getOptionLetter(index) {
  const letters = ["أ", "ب", "ج", "د"];
  return letters[index] || "";
}

function getResultMessage(score) {
  if (score >= 14) {
    return "ممتاز جدًا! أنت فهمت الألوان ودلالتها واستخدامها في التصميم بشكل رائع.";
  }

  if (score >= 10) {
    return "جيد جدًا! لديك فهم جيد، ويمكنك مراجعة بعض النقاط البسيطة.";
  }

  if (score >= 6) {
    return "جيد، لكن تحتاج إلى مراجعة بعض الدروس والأنشطة مرة أخرى.";
  }

  return "حاول مراجعة الدروس والأنشطة بهدوء، ثم أجب مرة أخرى بثقة.";
}

function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function ExamStat({ icon, title, value, className }) {
  return (
    <div className={`rounded-3xl p-5 text-center shadow-sm ${className}`}>
      <div className="text-3xl">{icon}</div>
      <p className="mt-2 text-sm font-black opacity-80">{title}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-4 shadow-inner dark:from-white/10 dark:via-white/5 dark:to-white/10">
      {hasRealUrl(heroImageUrl) ? (
        <img
          src={heroImageUrl}
          alt="طفل يفكر في الاختبار"
          className="h-96 w-full rounded-3xl bg-white object-contain p-3 shadow-xl dark:bg-white/10"
        />
      ) : (
        <div className="flex h-96 flex-col items-center justify-center rounded-3xl bg-white/85 p-6 text-center shadow-xl dark:bg-white/10">
          <div className="text-8xl">🤔</div>

          <p className="mt-5 max-w-sm text-lg font-black leading-8 text-slate-600 dark:text-slate-300">
            حطي هنا URL صورة طفل بيفكر في المتغير:
          </p>

          <p className="mt-3 rounded-2xl bg-blue-600/10 px-4 py-3 text-sm font-black text-blue-700 dark:text-blue-300">
            heroImageUrl
          </p>
        </div>
      )}
    </div>
  );
}

export default function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const answeredCount = Object.keys(answers).length;

  const score = examQuestions.reduce((total, question, index) => {
    return answers[index] === question.correct ? total + 1 : total;
  }, 0);

  const percentage = Math.round((score / examQuestions.length) * 100);

  const progress =
    answeredCount === 0
      ? 0
      : Math.max((answeredCount / examQuestions.length) * 100, 8);

  function chooseAnswer(questionIndex, optionIndex) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: optionIndex,
    }));

    setShowResult(false);
    setShowWarning(false);
  }

  function submitExam() {
    if (answeredCount < examQuestions.length) {
      setShowWarning(true);
      setShowResult(false);
      return;
    }

    setShowResult(true);
    setShowWarning(false);
  }

  return (
    <section className="relative overflow-hidden py-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="page-container">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div
            className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr]"
            style={{ direction: "ltr" }}
          >
            {/* Image Left */}
            <HeroImage />

            {/* Text Right */}
            <div className="text-center lg:text-right" style={{ direction: "rtl" }}>
              <div className="inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:text-green-300">
                ✅ الاختبار النهائي
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.4] text-slate-900 dark:text-white md:text-5xl">
                اختبار دليل الألوان
                <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  في التصميم الجرافيكي
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-600 dark:text-slate-300">
                أجب عن الأسئلة التالية لقياس فهمك لمعنى اللون، دائرة الألوان،
                دلالات الألوان، واستخدام الألوان في التصميم.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <ExamStat
                  icon="📝"
                  title="عدد الأسئلة"
                  value={examQuestions.length}
                  className="bg-blue-500/10 text-blue-700 dark:text-blue-300"
                />

                <ExamStat
                  icon="✅"
                  title="نوع الاختبار"
                  value="اختيار"
                  className="bg-green-500/10 text-green-700 dark:text-green-300"
                />

                <ExamStat
                  icon="🎯"
                  title="النتيجة"
                  value="فورية"
                  className="bg-pink-500/10 text-pink-700 dark:text-pink-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Instructions + Progress */}
        <SectionCard className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-blue-600/10 p-6 text-center">
              <div className="text-5xl">📊</div>

              <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
                تقدمك في الاختبار
              </h2>

              <p className="mt-2 font-bold text-slate-600 dark:text-slate-300">
                تم حل {answeredCount} من {examQuestions.length} سؤال
              </p>

              <div className="mt-5 rounded-full bg-white/70 p-2 shadow-sm dark:bg-white/10">
                <div
                  className="rounded-full bg-linear-to-l from-green-600 via-blue-600 to-violet-600 py-2 text-center text-sm font-black text-white transition-all duration-500"
                  style={{ width: `${progress}%` }}
                >
                  {answeredCount} / {examQuestions.length}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 shadow-sm dark:bg-white/10">
              <div className="inline-flex rounded-full bg-violet-600/10 px-5 py-2 text-sm font-black text-violet-700 dark:text-violet-300">
                📌 تعليمات الاختبار
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white p-4 font-black leading-8 text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  1. اقرأ السؤال بهدوء قبل اختيار الإجابة.
                </div>

                <div className="rounded-2xl bg-white p-4 font-black leading-8 text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  2. اختر إجابة واحدة فقط من كل سؤال.
                </div>

                <div className="rounded-2xl bg-white p-4 font-black leading-8 text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  3. اضغط على إرسال الإجابات بعد حل كل الأسئلة.
                </div>
              </div>

              {showWarning && (
                <div className="mt-5 rounded-3xl border border-yellow-500/40 bg-yellow-500/10 p-4 text-center text-lg font-black text-yellow-700 dark:text-yellow-300">
                  من فضلك أجب عن كل الأسئلة قبل إرسال الإجابات.
                </div>
              )}
            </div>
          </div>
        </SectionCard>

        {/* Questions */}
        <div className="mt-8 space-y-6">
          {examQuestions.map((question, questionIndex) => {
            const selectedAnswer = answers[questionIndex];

            return (
              <div
                key={`question-${questionIndex}-${question.question}`}
                className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="border-b border-slate-100 bg-linear-to-l from-blue-50 via-white to-violet-50 p-6 dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/10">
                  <div className="flex items-start gap-4 text-right">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-violet-600 text-xl font-black text-white shadow-lg">
                      {questionIndex + 1}
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-black text-slate-500 dark:text-slate-300">
                        سؤال {questionIndex + 1} من {examQuestions.length}
                      </p>

                      <h2 className="text-2xl font-black leading-10 text-slate-900 dark:text-white">
                        {question.question}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-6 md:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = selectedAnswer === optionIndex;
                    const correct = question.correct === optionIndex;
                    const showCorrect = showResult && correct;
                    const showWrong = showResult && selected && !correct;

                    return (
                      <button
                        key={`option-${questionIndex}-${optionIndex}-${option}`}
                        type="button"
                        onClick={() => chooseAnswer(questionIndex, optionIndex)}
                        className={`rounded-3xl border p-5 text-right text-lg font-black leading-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                          selected
                            ? "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300"
                            : "border-slate-100 bg-slate-50 text-slate-700 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                        } ${
                          showCorrect
                            ? "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300"
                            : ""
                        } ${
                          showWrong
                            ? "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-base shadow-sm ${
                              showCorrect
                                ? "bg-green-500 text-white"
                                : showWrong
                                ? "bg-red-500 text-white"
                                : selected
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-700 dark:bg-white/10 dark:text-blue-200"
                            }`}
                          >
                            {showCorrect
                              ? "✓"
                              : showWrong
                              ? "×"
                              : getOptionLetter(optionIndex)}
                          </span>

                          <span>{option}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit + Result */}
        <SectionCard className="mt-8">
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full bg-green-600/10 px-5 py-2 text-sm font-black text-green-700 dark:text-green-300">
              ✅ إنهاء الاختبار
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              تم حل {answeredCount} من {examQuestions.length} سؤال
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-bold leading-8 text-slate-600 dark:text-slate-300">
              اضغط على إرسال الإجابات بعد التأكد من اختيار إجابة لكل سؤال.
            </p>

            <button type="button" onClick={submitExam} className="main-btn mt-6">
              إرسال الإجابات
              <span>✅</span>
            </button>

            {showResult && (
              <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-green-500/30 bg-white shadow-2xl dark:bg-white/10">
                <div className="bg-linear-to-l from-green-500 via-blue-500 to-violet-500 p-6 text-white">
                  <div className="text-6xl">🎉</div>

                  <h2 className="mt-4 text-4xl font-black">
                    درجتك {score} من {examQuestions.length}
                  </h2>

                  <p className="mt-2 text-2xl font-black">
                    النسبة: {percentage}%
                  </p>
                </div>

                <div className="p-7">
                  <p className="text-lg font-bold leading-8 text-slate-600 dark:text-slate-300">
                    {getResultMessage(score)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* Bottom Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/activities" className="soft-btn">
            الرجوع للأنشطة
            <span>🧩</span>
          </Link>

          <Link href="/contact" className="main-btn">
            تواصل معنا
            <span>📩</span>
          </Link>
        </div>
      </div>
    </section>
  );
}