"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setSent(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      _subject: "رسالة جديدة من موقع دليل الألوان",
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/99703fb1cb0c969113db851528afbb9b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("فشل إرسال الرسالة");
      }

      setSent(true);
      form.reset();
    } catch (error) {
      setErrorMessage("حصل خطأ أثناء الإرسال. جرّبي مرة تانية.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen py-10">
      <div className="page-container">
        {/* Header */}
        <div className="mb-10 overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white shadow-xl dark:border-white/20 dark:bg-slate-900">
          <div className="px-6 py-10 text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-black text-blue-700 dark:border-blue-300/30 dark:bg-blue-500/20 dark:text-blue-100">
              <span>🎯</span>
              <span>فكرة الموقع</span>
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.4] text-slate-950 dark:text-white md:text-5xl">
              يسعدنا تواصلك معنا
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-700 dark:text-slate-200">
              يمكنك إرسال رسالة أو ملاحظة حول موقع دليل الألوان في التصميم
              الجرافيكي، أو اقتراح يساعد على تحسين تجربة التعلم.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image Card */}
          <div className="rounded-[2.5rem] border border-blue-100 bg-white p-7 shadow-xl dark:border-white/20 dark:bg-slate-900">
            <div className="flex min-h-140 flex-col justify-between rounded-4xl border border-blue-100 bg-blue-50 p-6 dark:border-white/20 dark:bg-slate-800">
              <div className="text-center">
                <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl dark:bg-slate-900">
                  <img
                    src="https://i.pinimg.com/1200x/56/fd/91/56fd917b9b850ca89e03804ac4a87817.jpg"
                    alt="صورة تواصل معنا وخدمة عملاء"
                    className="h-80 w-full rounded-3xl object-cover"
                  />
                </div>

                <h2 className="mt-6 text-3xl font-black leading-[1.4] text-slate-950 dark:text-white">
                  نحن هنا لمساعدتك
                </h2>

                <p className="mt-4 text-base font-bold leading-8 text-slate-700 dark:text-slate-200">
                  يمكنك التواصل معنا لإرسال الملاحظات أو الاستفسارات أو
                  الاقتراحات الخاصة بتجربة التعلم داخل الموقع.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm dark:border-white/20 dark:bg-slate-900">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-500/20">
                    👩‍🎓
                  </div>

                  <div>
                    <p className="text-sm font-black text-blue-700 dark:text-blue-200">
                      الفئة المستهدفة
                    </p>
                    <p className="font-bold text-slate-700 dark:text-slate-200">
                      الطلاب من ذوي صعوبات التعلم
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-white p-4 shadow-sm dark:border-white/20 dark:bg-slate-900">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-100 text-2xl dark:bg-violet-500/20">
                    🎯
                  </div>

                  <div>
                    <p className="text-sm font-black text-violet-700 dark:text-violet-200">
                      هدف التواصل
                    </p>
                    <p className="font-bold text-slate-700 dark:text-slate-200">
                      استقبال الملاحظات والاقتراحات
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm dark:border-white/20 dark:bg-slate-900">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-pink-100 text-2xl dark:bg-pink-500/20">
                    📚
                  </div>

                  <div>
                    <p className="text-sm font-black text-pink-700 dark:text-pink-200">
                      محتوى الموقع
                    </p>
                    <p className="font-bold text-slate-700 dark:text-slate-200">
                      الألوان ودلالتها في التصميم الجرافيكي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2.5rem] border border-blue-100 bg-white p-7 shadow-xl dark:border-white/20 dark:bg-slate-900">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-black text-pink-700 dark:border-pink-300/30 dark:bg-pink-500/20 dark:text-pink-100">
                <span>✉️</span>
                <span>نموذج التواصل</span>
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-950 dark:text-white">
                أرسل رسالة
              </h2>

              <p className="mt-3 text-base font-bold leading-8 text-slate-700 dark:text-slate-200">
                اكتب بياناتك ورسالتك، ثم اضغط على إرسال. ستصل الرسالة إلى
                البريد الإلكتروني الخاص بالموقع.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-lg font-black text-slate-950 dark:text-white">
                  الاسم
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="اكتب الاسم هنا"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-bold text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/20 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-black text-slate-950 dark:text-white">
                  البريد الإلكتروني
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-bold text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/20 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-black text-slate-950 dark:text-white">
                  الرسالة
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-bold leading-8 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/20 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-8 py-4 text-lg font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                <span className="text-2xl">📨</span>
              </button>
            </form>

            {sent && (
              <div className="mt-6 rounded-4xl border border-green-500/30 bg-green-50 p-5 text-center text-xl font-black text-green-700 dark:bg-green-500/20 dark:text-green-200">
                ✅ تم إرسال الرسالة بنجاح
              </div>
            )}

            {errorMessage && (
              <div className="mt-6 rounded-4xl border border-red-500/30 bg-red-50 p-5 text-center text-base font-black text-red-700 dark:bg-red-500/20 dark:text-red-200">
                {errorMessage}
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                الرجوع للرئيسية
                <span>🏠</span>
              </Link>

              <Link
                href="/topics"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-linear-to-l from-blue-600 to-violet-600 px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-1"
              >
                الذهاب للدروس
                <span>📚</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}