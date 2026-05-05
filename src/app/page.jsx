import Link from "next/link";
export default function HomePage() {
  const siteDescription =
    "موقع تعليمي يساعد الطالب على فهم الألوان ودلالتها بطريقة بسيطة وممتعة.";

  const strategySteps = [
    {
      title: "الاكتشاف",
      icon: "🔍",
      description:
        "يشاهد الطالب الصورة أو الفيديو، ويلاحظ اللون أو الموقف، ثم يكتشف المعلومة بنفسه.",
    },
    {
      title: "التطبيق",
      icon: "🧩",
      description:
        "يطبق الطالب ما تعلمه من خلال نشاط بسيط واختيار الإجابة الصحيحة.",
    },
    {
      title: "التقويم التفاعلي",
      icon: "✅",
      description:
        "يجيب الطالب عن أسئلة قصيرة ويحصل على تغذية راجعة مباشرة.",
    },
  ];

  return (
    <section className="py-10">
      <div className="page-container">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-7">
            <div className="badge w-fit">
              🎨 موقع تعليمي لذوي صعوبات التعلم
            </div>

            <div>
              <h1 className="hero-title">
                دليل الألوان
                <span className="block bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  في التصميم الجرافيكي
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-xl font-bold leading-10 text-black dark:text-white">
                {siteDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="main-btn">
                ابدأ الرحلة
                <span>⬅️</span>
              </Link>

              <Link href="/topics" className="soft-btn">
                مشاهدة الموضوعات
                <span>📚</span>
              </Link>
            </div>
          </div>

          {/* Home Image */}
          <div className="glass-strong self-start rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-center rounded-3xl bg-white/40 p-6">
              <img
                src="https://i.pinimg.com/736x/23/0c/7a/230c7a2ebae970e88f8b6db673df74f8.jpg"
                alt="دليل الألوان في التصميم الجرافيكي"
                className="h-90 w-full max-w-lg rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strategySteps.map((step) => (
            <div
              key={step.title}
              className="glass rounded-3xl p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/50 text-3xl shadow-md">
                {step.icon}
              </div>

              <h3 className="mt-4 text-lg font-black text-black dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm font-bold leading-7 text-black dark:text-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}