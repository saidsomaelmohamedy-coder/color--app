"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-10">
      <div className="page-container">
        {/* Header */}
        <div className="mb-10 overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="bg-linear-to-l from-blue-50 via-white to-pink-50 px-6 py-10 text-center dark:from-black/30 dark:via-black/20 dark:to-black/30">
<div className="badge mb-5">
  <span className="badge-icon">🎯</span>
  <span>فكرة الموقع</span>
</div>

            <h1 className="mt-5 text-4xl font-black leading-[1.4] text-black md:text-5xl dark:text-white">
              يسعدنا تواصلك معنا
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-black/70 dark:text-white/80">
              يمكنك إرسال رسالة أو ملاحظة حول موقع دليل الألوان في التصميم
              الجرافيكي، أو اقتراح يساعد على تحسين تجربة التعلم.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image Card */}
          <div className="rounded-[2.5rem] border border-blue-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-white/10">
            <div className="flex min-h-140 flex-col justify-betweenrounded-4xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-6 dark:from-white/10 dark:via-white/5 dark:to-white/10">
              <div className="text-center">
                <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl">
                  <img
                    src="https://i.pinimg.com/1200x/56/fd/91/56fd917b9b850ca89e03804ac4a87817.jpg"
                    alt="صورة تواصل معنا وخدمة عملاء"
                    className="h-80 w-full rounded-3xlobject-cover"
                  />
                </div>

                <h2 className="mt-6 text-3xl font-black leading-[1.4] text-black dark:text-white">
                  نحن هنا لمساعدتك
                </h2>

                <p className="mt-4 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                  يمكنك التواصل معنا لإرسال الملاحظات أو الاستفسارات أو
                  الاقتراحات الخاصة بتجربة التعلم داخل الموقع.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-white/10">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-100 text-2xl">
                    👩‍🎓
                  </div>

                  <div>
                    <p className="text-sm font-black text-blue-700">
                      الفئة المستهدفة
                    </p>
                    <p className="font-bold text-black/75 dark:text-white/80">
                      الطلاب من ذوي صعوبات التعلم
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-white/10">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-100 text-2xl">
                    🎯
                  </div>

                  <div>
                    <p className="text-sm font-black text-violet-700">
                      هدف التواصل
                    </p>
                    <p className="font-bold text-black/75 dark:text-white/80">
                      استقبال الملاحظات والاقتراحات
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-white/10">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-pink-100 text-2xl">
                    📚
                  </div>

                  <div>
                    <p className="text-sm font-black text-pink-700">
                      محتوى الموقع
                    </p>
                    <p className="font-bold text-black/75 dark:text-white/80">
                      الألوان ودلالتها في التصميم الجرافيكي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2.5rem] border border-blue-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-white/10">
            <div className="mb-6">
<div className="badge">
  <span className="badge-icon">✉️</span>
  <span>نموذج التواصل</span>
</div>

              <h2 className="mt-5 text-3xl font-black text-black dark:text-white">
                أرسل رسالة
              </h2>

              <p className="mt-3 text-base font-bold leading-8 text-black/65 dark:text-white/75">
                اكتب بياناتك ورسالتك، ثم اضغط على إرسال. ستظهر رسالة تأكيد بعد
                الإرسال.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-lg font-black text-black dark:text-white">
                  الاسم
                </label>

                <input
                  type="text"
                  required
                  placeholder="اكتب الاسم هنا"
                  className="input-field"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-black text-black dark:text-white">
                  البريد الإلكتروني
                </label>

                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="input-field"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-black text-black dark:text-white">
                  الرسالة
                </label>

                <textarea
                  required
                  rows="6"
                  placeholder="اكتب رسالتك هنا..."
                  className="input-field resize-none leading-8"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-8 py-4 text-lg font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                إرسال الرسالة
                <span className="text-2xl">📨</span>
              </button>
            </form>

            {sent && (
              <div className="mt-6 rounded-4xl border border-green-500/30 bg-green-500/10 p-5 text-center text-xl font-black text-green-700 dark:text-green-300">
                ✅ تم إرسال الرسالة بنجاح
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/" className="soft-btn">
                الرجوع للرئيسية
                <span>🏠</span>
              </Link>

              <Link href="/topics" className="main-btn">
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