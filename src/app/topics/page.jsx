import Link from "next/link";

export default function TopicsPage() {
  return (
    <section className="py-10">
      <div className="page-container">
        {/* Header */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl dark:border-white/10 dark:bg-white/10">
          <div className="bg-linear-to-l from-blue-50 via-white to-pink-50 px-6 py-10 text-center dark:from-black/30 dark:via-black/20 dark:to-black/30">
<div className="badge mb-5">
  <span className="badge-icon">🎯</span>
  <span>فكرة الموقع</span>
</div>

            <h1 className="mt-5 text-4xl font-black leading-[1.4] text-black md:text-5xl dark:text-white">
              دروس دليل الألوان في التصميم الجرافيكي
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-black/70 dark:text-white/80">
              اختر الدرس المناسب للبدء في تعلم الألوان ودلالتها داخل التصميم
              الجرافيكي بطريقة بسيطة وواضحة.
            </p>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {/* Lesson 1 */}
          <Link
            href="/topics/what-are-colors"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
              <img
                src="https://i.pinimg.com/736x/11/6b/af/116bafd9b41dc1a8fcaa75139988b248.jpg"
                alt="ما هي الألوان؟"
                className="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md">
                درس 1
              </div>
            </div>

            <div className="flex flex-1 flex-col pt-6">
              <div className="mb-4 flex min-h-20 items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm">
                  🎨
                </div>

                <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                  ما هي الألوان؟
                </h2>
              </div>

              <p className="min-h-32 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                تعرف على معنى الألوان وأمثلة عليها من البيئة مثل السماء
                والأشجار والشمس.
              </p>

              <div className="mt-auto flex items-center justify-between rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-sm font-black text-white shadow-lg">
                <span>افتح الدرس</span>
                <span className="text-xl">⬅️</span>
              </div>
            </div>
          </Link>

          {/* Lesson 2 */}
          <Link
            href="/topics/color-wheel"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
              <img
                src="https://i.pinimg.com/1200x/28/87/e5/2887e51c843ebec6a644572279bfd794.jpg"
                alt="دائرة الألوان"
                className="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md">
                درس 2
              </div>
            </div>

            <div className="flex flex-1 flex-col pt-6">
              <div className="mb-4 flex min-h-20 items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm">
                  🎡
                </div>

                <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                  دائرة الألوان
                </h2>
              </div>

              <p className="min-h-32 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                تعرف على الألوان الأساسية والثانوية، والألوان الدافئة والباردة.
              </p>

              <div className="mt-auto flex items-center justify-between rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-sm font-black text-white shadow-lg">
                <span>افتح الدرس</span>
                <span className="text-xl">⬅️</span>
              </div>
            </div>
          </Link>

          {/* Lesson 3 */}
          <Link
            href="/topics/color-meanings"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
              <img
                src="https://i.pinimg.com/736x/16/d6/a1/16d6a19ba3fc1c2af75a04e77ec05c9f.jpg"
                alt="دلالات الألوان"
                className="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md">
                درس 3
              </div>
            </div>

            <div className="flex flex-1 flex-col pt-6">
              <div className="mb-4 flex min-h-20 items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm">
                  💡
                </div>

                <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                  دلالات الألوان
                </h2>
              </div>

              <p className="min-h-32 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                تعرف على معنى كل لون مثل الأحمر للخطر، والأزرق للهدوء،
                والأخضر للأمان.
              </p>

              <div className="mt-auto flex items-center justify-between rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-sm font-black text-white shadow-lg">
                <span>افتح الدرس</span>
                <span className="text-xl">⬅️</span>
              </div>
            </div>
          </Link>

          {/* Lesson 4 */}
          <Link
            href="/topics/colors-in-design"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
              <img
                src="https://i.pinimg.com/736x/71/dd/47/71dd478f3a21f8a73ddcd0a2e7aa2ae5.jpg"
                alt="استخدام الألوان في التصميم"
                className="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md">
                درس 4
              </div>
            </div>

            <div className="flex flex-1 flex-col pt-6">
              <div className="mb-4 flex min-h-20 items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm">
                  🖌️
                </div>

                <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                  استخدام الألوان في التصميم
                </h2>
              </div>

              <p className="min-h-32 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                تعرف على كيف تجعل الألوان التصميم جميلًا وواضحًا وسهل الفهم.
              </p>

              <div className="mt-auto flex items-center justify-between rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-sm font-black text-white shadow-lg">
                <span>افتح الدرس</span>
                <span className="text-xl">⬅️</span>
              </div>
            </div>
          </Link>

          {/* Lesson 5 */}
          <Link
            href="/topics/color-mistakes"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
              <img
                src="https://i.pinimg.com/736x/a0/17/87/a01787405df4da675437c2448634a664.jpg"
                alt="أخطاء شائعة في اختيار الألوان"
                className="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-2 text-sm font-black text-blue-700 shadow-md">
                درس 5
              </div>
            </div>

            <div className="flex flex-1 flex-col pt-6">
              <div className="mb-4 flex min-h-20 items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl shadow-sm">
                  ⚠️
                </div>

                <h2 className="text-2xl font-black leading-[1.4] text-black dark:text-white">
                  أخطاء شائعة في اختيار الألوان
                </h2>
              </div>

              <p className="min-h-32 text-base font-bold leading-8 text-black/70 dark:text-white/80">
                تعرف على أخطاء اختيار الألوان مثل كثرة الألوان وضعف وضوح النص.
              </p>

              <div className="mt-auto flex items-center justify-between rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-sm font-black text-white shadow-lg">
                <span>افتح الدرس</span>
                <span className="text-xl">⬅️</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/activities" className="main-btn">
            عرض الأنشطة
            <span>🧩</span>
          </Link>

          <Link href="/exam" className="soft-btn">
            الاختبار النهائي
            <span>✅</span>
          </Link>
        </div>
      </div>
    </section>
  );
}