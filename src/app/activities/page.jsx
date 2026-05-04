"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ✅ صورة الطفل تظهر في واجهة الأنشطة الرئيسية فقط */
const thinkingChildImage =
  "https://i.pinimg.com/736x/f6/5e/1e/f65e1eb42e1d2d33ba4c313ab0bb4f57.jpg";

const topics = [
  {
    slug: "what-are-colors",
    title: " نشاط: ما هي الألوان؟",
    icon: "📘",
    desc: "تدريب الطالب على التعرف على الألوان وربطها بالأشياء.",
  },
  {
    slug: "color-wheel",
    title: "  نشاط : دائرة الألوان",
    icon: "🎨",
    desc: "تدريب الطالب على فهم ترتيب الألوان وتصنيفها.",
  },
  {
    slug: "color-meanings",
    title: "نشاط : دلالات الألوان",
    icon: "🌈",
    desc: "تدريب الطالب على ربط اللون بالمعنى المناسب.",
  },
  {
    slug: "colors-in-design",
    title: " نشاط :استخدام الألوان في التصميم",
    icon: "🖌️",
    desc: "تدريب الطالب على اختيار ألوان واضحة ومريحة.",
  },
  {
    slug: "color-mistakes",
    title: "  نشاط :أخطاء اختيار الألوان",
    icon: "⚠️",
    desc: "تدريب الطالب على اكتشاف أخطاء الألوان وتصحيحها.",
  },
];

export default function ActivitiesPage() {
  return (
    <Suspense fallback={<ActivitiesLoading />}>
      <ActivitiesContent />
    </Suspense>
  );
}

function ActivitiesContent() {
  const searchParams = useSearchParams();
  const topicSlug = searchParams.get("topic");

  if (!topicSlug) return <ActivitiesList />;

  if (topicSlug === "what-are-colors") return <LessonOneActivity />;
  if (topicSlug === "color-wheel") return <LessonTwoActivity />;
  if (topicSlug === "color-meanings") return <LessonThreeActivity />;
  if (topicSlug === "colors-in-design") return <LessonFourActivity />;
  if (topicSlug === "color-mistakes") return <LessonFiveActivity />;

  return <ActivitiesList />;
}

/* =========================
   Shared Layout
========================= */

function PageBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />
    </>
  );
}

function hasRealImage(src) {
  return src && !src.includes("حطي هنا") && !src.includes("URL");
}

function MainCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-4xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function SmartImage({
  src,
  alt,
  icon = "🖼️",
  label = "صورة",
  className = "",
}) {
  if (hasRealImage(src)) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div className="flex min-h-65 w-full flex-col items-center justify-center rounded-[1.7rem] bg-white p-6 text-center shadow-xl dark:bg-slate-800">
      <div className="text-7xl">{icon}</div>

      <p className="mt-5 text-lg font-black leading-8 text-slate-700 dark:text-slate-100">
        {label}
      </p>

      <p className="mt-2 rounded-2xl bg-blue-600/10 px-4 py-2 text-sm font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
        ضعي رابط الصورة هنا
      </p>
    </div>
  );
}

function HeroSection({
  badge,
  title,
  description,
  chips = [],
  imageUrl = thinkingChildImage,
  showImage = true,
}) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white">
      <div
        className={`grid items-center gap-8 p-6 md:p-8 ${
          showImage ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
        }`}
        style={{ direction: "ltr" }}
      >
        {showImage && (
          <div>
            <div className="rounded-4xl border border-blue-100 bg-blue-50 p-4 shadow-inner dark:border-white/20 dark:bg-slate-800">
              <SmartImage
                src={imageUrl}
                alt="طفل يفكر"
                icon="🤔"
                label="صورة طفل يفكر"
                className="h-90 w-full rounded-[1.6rem] bg-white object-contain p-3 shadow-xl dark:bg-slate-900"
              />
            </div>
          </div>
        )}

        <div
          className={showImage ? "text-center lg:text-right" : "text-center"}
          style={{ direction: "rtl" }}
        >
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-black text-blue-700 dark:border-blue-300/30 dark:bg-blue-500/20 dark:text-blue-100">
            {badge}
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.4] text-slate-900 dark:text-white md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-slate-700 dark:text-slate-200">
            {description}
          </p>

          {chips.length > 0 && (
            <div className="mx-auto mt-7 grid max-w-3xl gap-4 sm:grid-cols-3">
              {chips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-black text-slate-700 shadow-sm dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                >
                  {chip}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ActivitiesLoading() {
  return (
    <section className="relative overflow-hidden py-10">
      <PageBackground />

      <div className="page-container">
        <MainCard className="text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-blue-600/10 text-5xl dark:bg-blue-500/20">
            🧩
          </div>

          <h1 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
            جاري تحميل الأنشطة...
          </h1>
        </MainCard>
      </div>
    </section>
  );
}

/* =========================
   Activities List
========================= */

function ActivitiesList() {
  return (
    <section className="relative overflow-hidden py-10">
      <PageBackground />

      <div className="page-container">
        <HeroSection
          badge="🧩 الأنشطة التفاعلية"
          title="اختاري نشاط الموضوع وابدئي التدريب"
          description="كل موضوع يحتوي على نشاطين تفاعليين بطريقة واضحة وسهلة، تساعد الطالب على مراجعة الموضوع والتطبيق خطوة بخطوة."
          chips={["نشاطان لكل موضوع", "تغذية راجعة مباشرة", "تصميم واضح وممتع"]}
          showImage={true}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => (
            <Link
              key={topic.slug}
              href={`/activities?topic=${topic.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 text-right text-slate-900 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/20 dark:bg-slate-900 dark:text-white"
            >
              <div
                className="flex items-center justify-between gap-4"
                style={{ direction: "ltr" }}
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-600/10 text-4xl shadow-sm dark:bg-blue-500/20">
                  {topic.icon}
                </div>

                <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-black text-slate-700 shadow-sm dark:border-white/20 dark:bg-slate-800 dark:text-white">
                  نشاط {index + 1}
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-black leading-9 text-slate-900 dark:text-white">
                {topic.title}
              </h2>

              <p className="mt-3 min-h-22.5 font-bold leading-8 text-slate-700 dark:text-slate-200">
                {topic.desc}
              </p>

              <div className="mt-auto pt-5">
                <div className="rounded-2xl bg-linear-to-l from-blue-600 via-violet-600 to-pink-500 px-5 py-4 text-center text-sm font-black text-white shadow-lg transition duration-300 group-hover:scale-[1.02]">
                  فتح النشاط ⬅️
                </div>
              </div>
            </Link>
          ))}
        </div>

        <BottomLinks />
      </div>
    </section>
  );
}

/* =========================
   Lesson 1
========================= */

function LessonOneActivity() {
  const [imageAnswers, setImageAnswers] = useState({});
  const [placements, setPlacements] = useState({
    rose: "",
    cucumber: "",
    banana: "",
  });

  const firstDone =
    imageAnswers.apple && imageAnswers.sun && imageAnswers.tree;

  const firstCorrect =
    imageAnswers.apple === "red" &&
    imageAnswers.sun === "yellow" &&
    imageAnswers.tree === "green";

  const secondDone =
    placements.rose && placements.cucumber && placements.banana;

  const secondCorrect =
    placements.rose === "red" &&
    placements.cucumber === "green" &&
    placements.banana === "yellow";

  const answeredCount = Number(Boolean(firstDone)) + Number(Boolean(secondDone));
  const correctCount =
    Number(Boolean(firstCorrect)) + Number(Boolean(secondCorrect));

  function chooseImageColor(item, color) {
    setImageAnswers((prev) => ({
      ...prev,
      [item]: color,
    }));
  }

  function dropColor(place, color) {
    setPlacements((prev) => {
      const next = { ...prev };

      Object.keys(next).forEach((key) => {
        if (next[key] === color) next[key] = "";
      });

      next[place] = color;
      return next;
    });
  }

  return (
    <ActivityShell
      title="نشاط :  ما هي الألوان؟"
      topicTitle="ما هي الألوان؟"
      answeredCount={answeredCount}
      correctCount={correctCount}
      total={2}
    >
      <ActivityBlock number="1" icon="🎨" title="نشاط اختيار اللون">
        <Hint>اختار اللون الصحيح لكل صورة.</Hint>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <ImageChoiceCard
            title="تفاحة"
            imageAlt="صورة تفاحة"
            imageSrc="https://i.pinimg.com/736x/e5/e5/5b/e5e55b8721140ee5e0acd37eeabae523.jpg"
            selected={imageAnswers.apple}
            correctColor="red"
            onChoose={(color) => chooseImageColor("apple", color)}
          />

          <ImageChoiceCard
            title="شمس"
            imageAlt="صورة شمس"
            imageSrc="https://i.pinimg.com/1200x/63/64/df/6364df3fd7b4ec9c7ef0ea3cd431a513.jpg"
            selected={imageAnswers.sun}
            correctColor="yellow"
            onChoose={(color) => chooseImageColor("sun", color)}
          />

          <ImageChoiceCard
            title="شجرة"
            imageAlt="صورة شجرة"
            imageSrc="https://i.pinimg.com/1200x/c9/d9/71/c9d9719fbde49743c47ee6998d2d9923.jpg"
            selected={imageAnswers.tree}
            correctColor="green"
            onChoose={(color) => chooseImageColor("tree", color)}
          />
        </div>

        {firstDone && (
          <FeedbackBox
            correct={Boolean(firstCorrect)}
            text={
              firstCorrect
                ? "ممتاز! اخترت اللون الصحيح لكل صورة."
                : "حاول مرة أخرى، يوجد لون غير صحيح."
            }
          />
        )}
      </ActivityBlock>

      <ActivityBlock number="2" icon="🧩" title="نشاط مطابقة اللون بالصورة">
        <Hint>
          اسحب اللون المناسب وضعه على الصورة الصحيحة. سيظهر التصحيح أسفل كل صورة.
        </Hint>

        <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">
          <DropImageCard
            title="وردة"
            imageSrc="https://i.pinimg.com/736x/4f/cf/4a/4fcf4ab3a7594fd54ad3ac8d76415a3a.jpg"
            imageAlt="وردة"
            currentColor={placements.rose}
            correctColor="red"
            onDropColor={(color) => dropColor("rose", color)}
          />

          <DropImageCard
            title="خيار"
            imageSrc="https://i.pinimg.com/736x/43/bd/81/43bd81e1e023c060fc4463f053b1553b.jpg"
            imageAlt="خيار"
            currentColor={placements.cucumber}
            correctColor="green"
            onDropColor={(color) => dropColor("cucumber", color)}
          />

          <DropImageCard
            title="موزة"
            imageSrc="https://i.pinimg.com/736x/e5/e7/47/e5e7473a66af0f47921721421d73b14f.jpg"
            imageAlt="موزة"
            currentColor={placements.banana}
            correctColor="yellow"
            onDropColor={(color) => dropColor("banana", color)}
          />
        </div>

        <div className="mt-7 rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/20 dark:bg-slate-800">
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            الألوان المتاحة
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ColorImageDrag
              color="red"
              used={Object.values(placements).includes("red")}
              imageSrc=""
              alt="اللون الأحمر"
            />

            <ColorImageDrag
              color="green"
              used={Object.values(placements).includes("green")}
              imageSrc=""
              alt="اللون الأخضر"
            />

            <ColorImageDrag
              color="yellow"
              used={Object.values(placements).includes("yellow")}
              imageSrc=""
              alt="اللون الأصفر"
            />
          </div>
        </div>

        {secondDone && (
          <FeedbackBox
            correct={Boolean(secondCorrect)}
            text={
              secondCorrect
                ? "أحسنت! كل لون في مكانه الصحيح."
                : "حاول مرة أخرى، راجع التصحيح أسفل كل صورة."
            }
          />
        )}
      </ActivityBlock>
    </ActivityShell>
  );
}

/* =========================
   Lesson 2
========================= */

function LessonTwoActivity() {
  const wheelTasks = [
    { key: "primary", instruction: "اضغط على لون أساسي", target: "red" },
    { key: "secondary", instruction: "اضغط على لون ثانوي", target: "green" },
    { key: "warm", instruction: "اضغط على لون دافئ", target: "orange" },
    { key: "cool", instruction: "اضغط على لون بارد", target: "blue" },
  ];

  const [wheelStep, setWheelStep] = useState(0);
  const [wheelAnswers, setWheelAnswers] = useState({});

  const [classify, setClassify] = useState({
    red: "",
    green: "",
    orange: "",
    blue: "",
  });

  const firstDone = Object.keys(wheelAnswers).length === wheelTasks.length;

  const firstCorrect = wheelTasks.every(
    (task) => wheelAnswers[task.key] === task.target
  );

  const secondDone =
    classify.red && classify.green && classify.orange && classify.blue;

  const secondCorrect =
    classify.red === "primary" &&
    classify.green === "secondary" &&
    classify.orange === "warm" &&
    classify.blue === "cool";

  const answeredCount = Number(Boolean(firstDone)) + Number(Boolean(secondDone));
  const correctCount =
    Number(Boolean(firstCorrect)) + Number(Boolean(secondCorrect));

  function chooseWheelColor(color) {
    const currentTask = wheelTasks[wheelStep];

    if (!currentTask) return;

    setWheelAnswers((prev) => ({
      ...prev,
      [currentTask.key]: color,
    }));

    if (wheelStep < wheelTasks.length - 1) {
      setWheelStep((prev) => prev + 1);
    }
  }

  function resetWheelGame() {
    setWheelStep(0);
    setWheelAnswers({});
  }

  function dropCategory(color, category) {
    setClassify((prev) => ({
      ...prev,
      [color]: category,
    }));
  }

  return (
    <ActivityShell
      title="نشاط : دائرة الألوان"
      topicTitle="دائرة الألوان"
      answeredCount={answeredCount}
      correctCount={correctCount}
      total={2}
    >
      <ActivityBlock number="1" icon="🎡" title="لعبة دائرة الألوان">
        <Hint>
          اقرأ المطلوب، ثم اضغط على اللون المناسب من الدائرة. كل مرة سيظهر سؤال
          جديد.
        </Hint>

        <InteractiveWheelGame
          tasks={wheelTasks}
          currentIndex={wheelStep}
          answers={wheelAnswers}
          onChoose={chooseWheelColor}
          onReset={resetWheelGame}
        />

        {firstDone && (
          <FeedbackBox
            correct={Boolean(firstCorrect)}
            text={
              firstCorrect
                ? "ممتاز! اخترت الألوان المناسبة في اللعبة."
                : "حاول مرة أخرى، راجع نوع كل لون في دائرة الألوان."
            }
          />
        )}
      </ActivityBlock>

      <ActivityBlock number="2" icon="📦" title="نشاط تصنيف الألوان">
        <Hint>اسحب كل لون إلى صندوقه الصحيح: أساسي – ثانوي – دافئ – بارد.</Hint>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <CategoryDrop
            title="أساسي"
            category="primary"
            colors={classify}
            onDropCategory={dropCategory}
          />

          <CategoryDrop
            title="ثانوي"
            category="secondary"
            colors={classify}
            onDropCategory={dropCategory}
          />

          <CategoryDrop
            title="دافئ"
            category="warm"
            colors={classify}
            onDropCategory={dropCategory}
          />

          <CategoryDrop
            title="بارد"
            category="cool"
            colors={classify}
            onDropCategory={dropCategory}
          />
        </div>

        <div className="mt-7 rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/20 dark:bg-slate-800">
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            الألوان المتاحة
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <ColorChipDrag id="red" label="أحمر" colorClass="bg-red-500" />
            <ColorChipDrag id="green" label="أخضر" colorClass="bg-green-500" />
            <ColorChipDrag
              id="orange"
              label="برتقالي"
              colorClass="bg-orange-500"
            />
            <ColorChipDrag id="blue" label="أزرق" colorClass="bg-blue-500" />
          </div>
        </div>

        {secondDone && (
          <FeedbackBox
            correct={Boolean(secondCorrect)}
            text={
              secondCorrect
                ? "ممتاز! تم تصنيف الألوان بشكل صحيح."
                : "حاول مرة أخرى، يوجد لون في صندوق غير صحيح."
            }
          />
        )}
      </ActivityBlock>
    </ActivityShell>
  );
}

/* =========================
   Lesson 3
========================= */

function LessonThreeActivity() {
  const [meaningAnswers, setMeaningAnswers] = useState({});
  const [imageMeaningAnswers, setImageMeaningAnswers] = useState({});

  const firstDone =
    meaningAnswers.red && meaningAnswers.blue && meaningAnswers.green;

  const firstCorrect =
    meaningAnswers.red === "danger" &&
    meaningAnswers.blue === "calm" &&
    meaningAnswers.green === "safe";

  const secondDone =
    imageMeaningAnswers.stop &&
    imageMeaningAnswers.hospital &&
    imageMeaningAnswers.nature;

  const secondCorrect =
    imageMeaningAnswers.stop === "danger" &&
    imageMeaningAnswers.hospital === "calm" &&
    imageMeaningAnswers.nature === "safe";

  const answeredCount = Number(Boolean(firstDone)) + Number(Boolean(secondDone));
  const correctCount =
    Number(Boolean(firstCorrect)) + Number(Boolean(secondCorrect));

  return (
    <ActivityShell
      title="نشاط : دلالات الألوان"
      topicTitle="دلالات الألوان"
      answeredCount={answeredCount}
      correctCount={correctCount}
      total={2}
    >
      <ActivityBlock number="1" icon="💬" title="نشاط اختيار معنى اللون">
        <Hint>اختار معنى كل لون من خلال الضغط على الإجابة الصحيحة.</Hint>

        <MeaningCard
          colorName="الأحمر"
          colorClass="bg-red-500"
          selected={meaningAnswers.red}
          onChoose={(value) =>
            setMeaningAnswers((prev) => ({ ...prev, red: value }))
          }
          correctValue="danger"
          options={[
            { label: "خطر أو توقف", value: "danger" },
            { label: "هدوء", value: "calm" },
            { label: "نظافة", value: "clean" },
          ]}
        />

        <MeaningCard
          colorName="الأزرق"
          colorClass="bg-blue-500"
          selected={meaningAnswers.blue}
          onChoose={(value) =>
            setMeaningAnswers((prev) => ({ ...prev, blue: value }))
          }
          correctValue="calm"
          options={[
            { label: "هدوء", value: "calm" },
            { label: "خطر", value: "danger" },
            { label: "طاقة", value: "energy" },
          ]}
        />

        <MeaningCard
          colorName="الأخضر"
          colorClass="bg-green-500"
          selected={meaningAnswers.green}
          onChoose={(value) =>
            setMeaningAnswers((prev) => ({ ...prev, green: value }))
          }
          correctValue="safe"
          options={[
            { label: "أمان وطبيعة", value: "safe" },
            { label: "نار", value: "fire" },
            { label: "حزن", value: "sad" },
          ]}
        />

        {firstDone && (
          <FeedbackBox
            correct={Boolean(firstCorrect)}
            text={
              firstCorrect
                ? "رائع! اخترت معنى كل لون بشكل صحيح."
                : "راجع دلالة كل لون وحاول مرة أخرى."
            }
          />
        )}
      </ActivityBlock>

      <ActivityBlock number="2" icon="🖼️" title="نشاط معنى الصورة">
        <Hint>
          انظر إلى الصورة، ثم اختار المعنى المناسب لها: خطر أو هدوء أو أمان.
        </Hint>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <ImageMeaningCard
            title="إشارة توقف"
            imageSrc="https://i.pinimg.com/474x/01/68/2a/01682aec7416550e2fc456ac1886fb23.jpg"
            selected={imageMeaningAnswers.stop}
            correctValue="danger"
            onChoose={(value) =>
              setImageMeaningAnswers((prev) => ({ ...prev, stop: value }))
            }
          />

          <ImageMeaningCard
            title="سماء"
            imageSrc="https://i.pinimg.com/736x/da/4a/e2/da4ae206976c7318d10a08f1fd6484ba.jpg"
            selected={imageMeaningAnswers.hospital}
            correctValue="calm"
            onChoose={(value) =>
              setImageMeaningAnswers((prev) => ({ ...prev, hospital: value }))
            }
          />

          <ImageMeaningCard
            title="حديقة "
            imageSrc="https://i.pinimg.com/1200x/82/76/b1/8276b1976566f4f7e57ade0033768ca2.jpg"
            selected={imageMeaningAnswers.nature}
            correctValue="safe"
            onChoose={(value) =>
              setImageMeaningAnswers((prev) => ({ ...prev, nature: value }))
            }
          />
        </div>

        {secondDone && (
          <FeedbackBox
            correct={Boolean(secondCorrect)}
            text={
              secondCorrect
                ? "ممتاز! ربطت كل صورة بالمعنى الصحيح."
                : "حاول مرة أخرى، راجع معنى كل صورة."
            }
          />
        )}
      </ActivityBlock>
    </ActivityShell>
  );
}

/* =========================
   Lesson 4
========================= */

function LessonFourActivity() {
  const [bestDesign, setBestDesign] = useState("");
  const [designColors, setDesignColors] = useState({
    background: "",
    text: "",
    button: "",
  });

  const firstDone = Boolean(bestDesign);
  const firstCorrect = bestDesign === "good";

  const secondDone =
    designColors.background && designColors.text && designColors.button;

  const secondCorrect =
    designColors.background === "white" &&
    designColors.text === "black" &&
    designColors.button === "blue";

  const answeredCount = Number(Boolean(firstDone)) + Number(Boolean(secondDone));
  const correctCount =
    Number(Boolean(firstCorrect)) + Number(Boolean(secondCorrect));

  return (
    <ActivityShell
      title="نشاط  : استخدام الألوان في التصميم"
      topicTitle="استخدام الألوان في التصميم"
      answeredCount={answeredCount}
      correctCount={correctCount}
      total={2}
    >
      <ActivityBlock number="1" icon="🖼️" title="نشاط اختيار التصميم الأفضل">
        <Hint>اختار التصميم الأفضل والأسهل في الفهم.</Hint>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setBestDesign("good")}
            className={`rounded-4xl border p-5 text-right shadow-xl transition hover:-translate-y-1 ${
              bestDesign === "good"
                ? "border-green-500 bg-green-500/10"
                : "border-slate-200 bg-white dark:border-white/20 dark:bg-slate-800"
            }`}
          >
            <DesignPreview good />
            <p className="mt-4 text-xl font-black text-slate-900 dark:text-white">
              تصميم منظم بألوان مناسبة
            </p>
          </button>

          <button
            type="button"
            onClick={() => setBestDesign("bad")}
            className={`rounded-4xl border p-5 text-right shadow-xl transition hover:-translate-y-1 ${
              bestDesign === "bad"
                ? "border-red-500 bg-red-500/10"
                : "border-slate-200 bg-white dark:border-white/20 dark:bg-slate-800"
            }`}
          >
            <DesignPreview />
            <p className="mt-4 text-xl font-black text-slate-900 dark:text-white">
              تصميم مزدحم وغير واضح
            </p>
          </button>
        </div>

        {firstDone && (
          <FeedbackBox
            correct={Boolean(firstCorrect)}
            text={
              firstCorrect
                ? "أحسنت! التصميم المنظم أسهل في الفهم."
                : "حاول مرة أخرى، التصميم المزدحم ليس الأفضل."
            }
          />
        )}
      </ActivityBlock>

      <ActivityBlock number="2" icon="🖌️" title="نشاط اختيار ألوان التصميم">
        <Hint>
          اختار ألوانًا مناسبة للخلفية والنص والزر حتى يصبح الإعلان واضحًا.
        </Hint>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <ColorSelectGroup
              title="لون الخلفية"
              selected={designColors.background}
              onChoose={(value) =>
                setDesignColors((prev) => ({ ...prev, background: value }))
              }
              options={[
                { label: "أبيض", value: "white" },
                { label: "أصفر فاتح", value: "yellow" },
                { label: "أحمر قوي", value: "red" },
              ]}
            />

            <ColorSelectGroup
              title="لون النص"
              selected={designColors.text}
              onChoose={(value) =>
                setDesignColors((prev) => ({ ...prev, text: value }))
              }
              options={[
                { label: "أسود", value: "black" },
                { label: "أصفر", value: "yellow" },
                { label: "أبيض", value: "white" },
              ]}
            />

            <ColorSelectGroup
              title="لون الزر"
              selected={designColors.button}
              onChoose={(value) =>
                setDesignColors((prev) => ({ ...prev, button: value }))
              }
              options={[
                { label: "أزرق", value: "blue" },
                { label: "أبيض", value: "white" },
                { label: "أحمر قوي", value: "red" },
              ]}
            />
          </div>

          <AdPreview selected={designColors} />
        </div>

        {secondDone && (
          <FeedbackBox
            correct={Boolean(secondCorrect)}
            text={
              secondCorrect
                ? "ممتاز! الألوان واضحة ومناسبة للتصميم."
                : "حاول مرة أخرى، اختار خلفية بيضاء ونص أسود وزر أزرق."
            }
          />
        )}
      </ActivityBlock>
    </ActivityShell>
  );
}

/* =========================
   Lesson 5
========================= */

function LessonFiveActivity() {
  const [errorChoice, setErrorChoice] = useState("");
  const [fixChoice, setFixChoice] = useState("");

  const firstDone = Boolean(errorChoice);
  const firstCorrect = errorChoice === "text";

  const secondDone = Boolean(fixChoice);
  const secondCorrect = fixChoice === "clear";

  const answeredCount = Number(Boolean(firstDone)) + Number(Boolean(secondDone));
  const correctCount =
    Number(Boolean(firstCorrect)) + Number(Boolean(secondCorrect));

  return (
    <ActivityShell
      title="نشاط : أخطاء شائعة في اختيار الألوان"
      topicTitle="أخطاء اختيار الألوان"
      answeredCount={answeredCount}
      correctCount={correctCount}
      total={2}
    >
      <ActivityBlock number="1" icon="⚠️" title="نشاط اكتشاف الخطأ">
        <Hint>حدد الخطأ الموجود في التصميم.</Hint>

        <div className="mt-6 rounded-4xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/20 dark:bg-slate-800">
          <div className="rounded-3xl bg-white p-5 shadow-inner">
            <h3 className="text-3xl font-black text-yellow-300">
              عنوان غير واضح
            </h3>

            <p className="mt-4 text-lg font-bold text-slate-700">
              هذا مثال لتصميم فيه خطأ في اختيار لون النص.
            </p>

            <div className="mt-5 inline-block rounded-2xl bg-red-500 px-6 py-3 font-black text-white">
              زر مهم
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <ChoiceButton
              label="لون النص غير واضح"
              selected={errorChoice === "text"}
              correct
              onClick={() => setErrorChoice("text")}
            />

            <ChoiceButton
              label="الخلفية مناسبة"
              selected={errorChoice === "background"}
              correct={false}
              onClick={() => setErrorChoice("background")}
            />

            <ChoiceButton
              label="الزر واضح"
              selected={errorChoice === "button"}
              correct={false}
              onClick={() => setErrorChoice("button")}
            />
          </div>
        </div>

        {firstDone && (
          <FeedbackBox
            correct={Boolean(firstCorrect)}
            text={
              firstCorrect
                ? "صحيح! لون النص غير واضح على الخلفية."
                : "حاول مرة أخرى، الخطأ في لون النص."
            }
          />
        )}
      </ActivityBlock>

      <ActivityBlock number="2" icon="✅" title="نشاط تصحيح التصميم">
        <Hint>اختار التصميم الصحيح بعد تعديل اللون غير الواضح.</Hint>

        <div
          className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          dir="rtl"
        >
          <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6 text-right dark:border-white/20 dark:bg-slate-800">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              اختار التعديل الأفضل
            </h3>

            <div className="mt-5 grid gap-4">
              <DesignFixOption
                title="نص أسود على خلفية بيضاء"
                previewTitleClass="text-black"
                previewBgClass="bg-white"
                selected={fixChoice === "clear"}
                correct
                onClick={() => setFixChoice("clear")}
              />

              <DesignFixOption
                title="نص أصفر على خلفية بيضاء"
                previewTitleClass="text-yellow-300"
                previewBgClass="bg-white"
                selected={fixChoice === "yellow-white"}
                correct={false}
                onClick={() => setFixChoice("yellow-white")}
              />

              <DesignFixOption
                title="نص أبيض على خلفية صفراء"
                previewTitleClass="text-white"
                previewBgClass="bg-yellow-300"
                selected={fixChoice === "white-yellow"}
                correct={false}
                onClick={() => setFixChoice("white-yellow")}
              />
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-6 text-right shadow-xl dark:border-white/20 dark:bg-slate-800">
            <p className="text-lg font-black text-slate-600 dark:text-slate-200">
              {fixChoice ? "التصميم بعد الاختيار:" : "التصميم قبل التعديل:"}
            </p>

            <div
              className={`mt-4 rounded-3xl p-6 shadow-inner ${
                fixChoice === "white-yellow" ? "bg-yellow-300" : "bg-white"
              }`}
            >
              <h3
                className={`text-3xl font-black ${
                  fixChoice === "clear"
                    ? "text-black"
                    : fixChoice === "white-yellow"
                    ? "text-white"
                    : "text-yellow-300"
                }`}
              >
                عنوان التصميم
              </h3>

              <p
                className={`mt-3 font-bold ${
                  fixChoice === "white-yellow"
                    ? "text-white"
                    : "text-slate-600"
                }`}
              >
                {fixChoice === "clear"
                  ? "الآن النص واضح وسهل القراءة."
                  : fixChoice
                  ? "ما زال التصميم غير واضح بشكل كافٍ."
                  : "النص الأصفر على الخلفية البيضاء صعب القراءة."}
              </p>

              <div
                className={`mt-5 inline-block rounded-2xl px-6 py-3 font-black ${
                  fixChoice === "clear"
                    ? "bg-blue-600 text-white"
                    : fixChoice === "white-yellow"
                    ? "bg-white text-yellow-500"
                    : "bg-red-500 text-white"
                }`}
              >
                زر التصميم
              </div>
            </div>

            {fixChoice && (
              <div
                className={`mt-4 rounded-2xl px-5 py-4 text-base font-black ${
                  fixChoice === "clear"
                    ? "bg-green-500/10 text-green-700 dark:text-green-200"
                    : "bg-red-500/10 text-red-700 dark:text-red-200"
                }`}
              >
                {fixChoice === "clear"
                  ? "✅ هذا هو التعديل الصحيح، النص أصبح واضحًا."
                  : "❌ هذا التعديل غير مناسب، اختار تصميمًا أوضح."}
              </div>
            )}
          </div>
        </div>

        {secondDone && (
          <FeedbackBox
            correct={Boolean(secondCorrect)}
            text={
              secondCorrect
                ? "رائع! النص الأسود واضح ومناسب على الخلفية البيضاء."
                : "حاول مرة أخرى، المطلوب اختيار تصميم واضح ومريح للعين."
            }
          />
        )}
      </ActivityBlock>
    </ActivityShell>
  );
}

/* =========================
   Components
========================= */

function ActivityShell({
  title,
  topicTitle,
  answeredCount,
  correctCount,
  total,
  children,
}) {
  const safeAnsweredCount = Number.isFinite(answeredCount) ? answeredCount : 0;
  const safeCorrectCount = Number.isFinite(correctCount) ? correctCount : 0;
  const safeTotal = Number.isFinite(total) && total > 0 ? total : 2;
  const wrongCount = Math.max(safeAnsweredCount - safeCorrectCount, 0);

  return (
    <section className="relative overflow-hidden py-10">
      <PageBackground />

      <div className="page-container">
        <HeroSection
          badge="🧩 نشاط خاص بالموضوع"
          title={title}
          description={`هذا النشاط مرتبط بموضوع: ${topicTitle}، ويحتوي على تدريبين لمساعدة الطالب على التطبيق بطريقة سهلة ومنظمة.`}
          chips={[
            `الأنشطة: ${safeTotal}`,
            `الإجابات الصحيحة: ${safeCorrectCount}`,
            `الإجابات غير الصحيحة: ${wrongCount}`,
          ]}
          showImage={false}
        />

        <div className="mt-8 space-y-7">{children}</div>

        <MainCard className="mt-8 text-center">
          <div className="mx-auto inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-black text-green-700 dark:border-green-300/30 dark:bg-green-500/20 dark:text-green-100">
            ✅ نتيجة النشاط
          </div>

          <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
            نتيجة النشاط
          </h2>

          <div className="mx-auto mt-7 grid max-w-3xl gap-5 md:grid-cols-3">
            <div className="rounded-[1.7rem] border border-blue-100 bg-blue-50 p-5 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
              <div className="text-4xl">📝</div>
              <p className="mt-2 text-sm font-black text-blue-700 dark:text-blue-100">
                تم الحل
              </p>
              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {safeAnsweredCount} / {safeTotal}
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-green-100 bg-green-50 p-5 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
              <div className="text-4xl">✅</div>
              <p className="mt-2 text-sm font-black text-green-700 dark:text-green-100">
                صحيح
              </p>
              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {safeCorrectCount}
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-red-100 bg-red-50 p-5 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
              <div className="text-4xl">❌</div>
              <p className="mt-2 text-sm font-black text-red-700 dark:text-red-100">
                غير صحيح
              </p>
              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {wrongCount}
              </p>
            </div>
          </div>
        </MainCard>

        <BottomLinks />
      </div>
    </section>
  );
}

function ActivityBlock({ number, icon = "🧩", title, children }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white text-slate-900 shadow-xl backdrop-blur-xl dark:border-white/20 dark:bg-slate-900 dark:text-white">
      <div className="border-b border-slate-200 bg-blue-50 p-6 dark:border-white/20 dark:bg-slate-800">
        <div
          className="flex items-start justify-between gap-4"
          style={{ direction: "ltr" }}
        >
          {icon && (
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.4rem] bg-white text-3xl shadow-lg dark:bg-slate-900">
              {icon}
            </div>
          )}

          <div className="w-full text-right" style={{ direction: "rtl" }}>
            <p className="mb-2 text-sm font-black text-slate-600 dark:text-slate-300">
              نشاط {number}
            </p>

            <h2 className="text-2xl font-black leading-10 text-slate-900 dark:text-white">
              {title}
            </h2>
          </div>

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.4rem] bg-linear-to-br from-blue-600 to-violet-600 text-xl font-black text-white shadow-lg">
            {number}
          </div>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
}

function Hint({ children }) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 text-lg font-black leading-9 text-blue-800 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-100">
      {children}
    </div>
  );
}

function FeedbackBox({ correct, text }) {
  return (
    <div
      className={`mt-5 rounded-3xl border p-5 text-xl font-black leading-9 ${
        correct
          ? "border-green-500/40 bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-100"
          : "border-red-500/40 bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-100"
      }`}
    >
      {correct ? "✅ " : "❌ "}
      {text}
    </div>
  );
}

function BottomLinks() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Link href="/topics" className="soft-btn">
        الرجوع للموضوعات
        <span>📚</span>
      </Link>

      <Link href="/activities" className="main-btn">
        الرجوع للأنشطة
        <span>🧩</span>
      </Link>
    </div>
  );
}

/* =========================
   Buttons and Cards
========================= */

function ChoiceButton({ label, selected, correct, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-5 text-center text-lg font-black leading-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
        selected
          ? correct
            ? "border-green-500/40 bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-100"
            : "border-red-500/40 bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-100"
          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-blue-50 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
      }`}
    >
      {selected ? (correct ? "✅ " : "❌ ") : ""}
      {label}
    </button>
  );
}

function ImageChoiceCard({
  title,
  imageSrc,
  imageAlt,
  selected,
  correctColor,
  onChoose,
}) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
      <SmartImage
        src={imageSrc}
        alt={imageAlt}
        icon="🖼️"
        label={title}
        className="h-44 w-full rounded-3xl bg-white object-contain p-3 shadow-md dark:bg-slate-900"
      />

      <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 grid gap-3">
        <ChoiceButton
          label="أحمر"
          selected={selected === "red"}
          correct={correctColor === "red"}
          onClick={() => onChoose("red")}
        />

        <ChoiceButton
          label="أصفر"
          selected={selected === "yellow"}
          correct={correctColor === "yellow"}
          onClick={() => onChoose("yellow")}
        />

        <ChoiceButton
          label="أخضر"
          selected={selected === "green"}
          correct={correctColor === "green"}
          onClick={() => onChoose("green")}
        />
      </div>
    </div>
  );
}

function DropImageCard({
  title,
  imageSrc,
  imageAlt,
  currentColor,
  correctColor,
  onDropColor,
}) {
  const hasAnswer = Boolean(currentColor);
  const isCorrect = hasAnswer && currentColor === correctColor;

  return (
    <div className="flex h-full min-h-108 flex-col rounded-4xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
      <div className="flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-md dark:bg-slate-900">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mt-4 min-h-8 text-xl font-black text-slate-900 dark:text-white">
        {title}
      </h3>

      <div
        className={`mt-auto rounded-3xl border-2 border-dashed p-4 ${
          isCorrect
            ? "border-green-400 bg-green-50 dark:bg-green-500/20"
            : hasAnswer
            ? "border-red-400 bg-red-50 dark:bg-red-500/20"
            : "border-blue-300 bg-white dark:border-blue-500/40 dark:bg-slate-900"
        }`}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          const color = event.dataTransfer.getData("text/plain");
          if (color) onDropColor(color);
        }}
      >
        {hasAnswer ? (
          <div className="rounded-2xl bg-blue-600/10 p-3 text-lg font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
            {getColorArabicName(currentColor)}
          </div>
        ) : (
          <span className="text-base font-black text-slate-600 dark:text-slate-200">
            اسحب اللون هنا
          </span>
        )}
      </div>

      {hasAnswer && (
        <div
          className={`mt-3 min-h-13 rounded-2xl px-4 py-3 text-sm font-black ${
            isCorrect
              ? "bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-100"
              : "bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-100"
          }`}
        >
          {isCorrect
            ? "✅ صحيح"
            : `❌ غير صحيح، اللون المناسب هو ${getColorArabicName(
                correctColor
              )}`}
        </div>
      )}
    </div>
  );
}

function ColorImageDrag({ color, used, imageSrc, alt }) {
  return (
    <div
      draggable={!used}
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", color);
      }}
      className={`rounded-3xl border p-4 text-center font-black shadow-sm transition ${
        used
          ? "cursor-not-allowed border-slate-200 bg-slate-100 opacity-50 dark:border-white/20 dark:bg-slate-800"
          : "cursor-grab border-slate-200 bg-white hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-900"
      }`}
    >
      {hasRealImage(imageSrc) ? (
        <SmartImage
          src={imageSrc}
          alt={alt}
          icon="🎨"
          label={getColorArabicName(color)}
          className="h-28 w-full rounded-3xl object-contain p-2"
        />
      ) : (
        <div className="grid h-28 place-items-center rounded-3xl bg-slate-50 dark:bg-slate-800">
          <span
            className={`h-16 w-16 rounded-full shadow-lg ${getColorClass(
              color
            )}`}
          />
        </div>
      )}

      <p className="mt-2 text-slate-800 dark:text-white">
        {getColorArabicName(color)}
      </p>
    </div>
  );
}

function ColorChipDrag({ id, label, colorClass }) {
  return (
    <div
      draggable
      onDragStart={(event) => event.dataTransfer.setData("text/plain", id)}
      className="cursor-grab rounded-3xl border border-slate-200 bg-white p-4 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:bg-slate-900"
    >
      <span className={`mx-auto block h-10 w-10 rounded-full ${colorClass}`} />

      <p className="mt-2 text-slate-800 dark:text-white">{label}</p>
    </div>
  );
}

function CategoryDrop({ title, category, colors, onDropCategory }) {
  const insideColors = Object.keys(colors).filter(
    (color) => colors[color] === category
  );

  return (
    <div
      className="min-h-45 rounded-4xl border-2 border-dashed border-blue-300 bg-white p-4 text-center dark:border-blue-500/40 dark:bg-slate-800"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        const color = event.dataTransfer.getData("text/plain");
        if (color) onDropCategory(color, category);
      }}
    >
      <h3 className="text-xl font-black text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 space-y-2">
        {insideColors.length === 0 ? (
          <p className="text-sm font-black text-slate-600 dark:text-slate-200">
            اسحب اللون هنا
          </p>
        ) : (
          insideColors.map((color) => (
            <div
              key={color}
              className="rounded-2xl bg-blue-600/10 p-3 font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100"
            >
              {getColorArabicName(color)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* =========================
   Extra Components
========================= */

function InteractiveWheelGame({
  tasks,
  currentIndex,
  answers,
  onChoose,
  onReset,
}) {
  const colors = [
    { id: "red", label: "أحمر", className: "bg-red-500" },
    { id: "yellow", label: "أصفر", className: "bg-yellow-400" },
    { id: "blue", label: "أزرق", className: "bg-blue-500" },
    { id: "green", label: "أخضر", className: "bg-green-500" },
    { id: "orange", label: "برتقالي", className: "bg-orange-500" },
    { id: "violet", label: "بنفسجي", className: "bg-violet-500" },
  ];

  const currentTask = tasks[currentIndex];
  const done = Object.keys(answers).length === tasks.length;

  return (
    <div className="mt-6 rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/20 dark:bg-slate-800">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-4xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/20 dark:bg-slate-900">
          <p className="text-sm font-black text-slate-600 dark:text-slate-300">
            السؤال الحالي
          </p>

          <h3 className="mt-3 text-2xl font-black leading-10 text-slate-900 dark:text-white">
            {done ? "انتهت اللعبة 🎉" : currentTask?.instruction}
          </h3>

          <p className="mt-3 rounded-2xl bg-blue-600/10 px-4 py-3 text-base font-black text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
            اختار اللون المناسب من الدائرة
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {tasks.map((task, index) => (
              <span
                key={task.key}
                className={`grid h-10 w-10 place-items-center rounded-full text-sm font-black ${
                  answers[task.key]
                    ? answers[task.key] === task.target
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : index === currentIndex
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-100"
                }`}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {colors.map((color) => (
            <button
              key={color.id}
              type="button"
              disabled={done}
              onClick={() => onChoose(color.id)}
              className="rounded-4xl border border-slate-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/20 dark:bg-slate-900"
            >
              <span
                className={`mx-auto block h-20 w-20 rounded-full shadow-xl ${color.className}`}
              />
              <span className="mt-4 block text-lg font-black text-slate-900 dark:text-white">
                {color.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {tasks.map((task) => {
          const answer = answers[task.key];
          const isCorrect = answer === task.target;

          return (
            <div
              key={task.key}
              className={`rounded-2xl border p-4 text-center text-sm font-black ${
                !answer
                  ? "border-slate-200 bg-white text-slate-600 dark:border-white/20 dark:bg-slate-900 dark:text-slate-200"
                  : isCorrect
                  ? "border-green-500/30 bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-100"
                  : "border-red-500/30 bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-100"
              }`}
            >
              <p>{task.instruction}</p>
              <p className="mt-2">
                {!answer
                  ? "لم يتم الحل"
                  : isCorrect
                  ? "✅ صحيح"
                  : "❌ حاول مرة أخرى"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MeaningCard({
  colorName,
  colorClass,
  selected,
  correctValue,
  options,
  onChoose,
}) {
  return (
    <div className="mt-5 rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/20 dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <span className={`h-12 w-12 rounded-full ${colorClass}`} />

        <h3 className="text-2xl font-black text-slate-900 dark:text-white">
          {colorName}
        </h3>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {options.map((option) => (
          <ChoiceButton
            key={option.value}
            label={option.label}
            selected={selected === option.value}
            correct={correctValue === option.value}
            onClick={() => onChoose(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

function ImageMeaningCard({
  title,
  imageSrc,
  imageAlt,
  selected,
  correctValue,
  onChoose,
}) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm dark:border-white/20 dark:bg-slate-800">
      <SmartImage
        src={imageSrc}
        alt={imageAlt}
        icon="🖼️"
        label={title}
        className="h-44 w-full rounded-3xl bg-white object-contain p-3 shadow-md dark:bg-slate-900"
      />

      <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 grid gap-3">
        <ChoiceButton
          label="خطر أو توقف"
          selected={selected === "danger"}
          correct={correctValue === "danger"}
          onClick={() => onChoose("danger")}
        />

        <ChoiceButton
          label="هدوء"
          selected={selected === "calm"}
          correct={correctValue === "calm"}
          onClick={() => onChoose("calm")}
        />

        <ChoiceButton
          label="أمان وطبيعة"
          selected={selected === "safe"}
          correct={correctValue === "safe"}
          onClick={() => onChoose("safe")}
        />
      </div>
    </div>
  );
}

function DesignPreview({ good = false }) {
  if (good) {
    return (
      <div className="rounded-3xl bg-white p-5 shadow-inner">
        <h3 className="text-2xl font-black text-slate-900">عنوان واضح</h3>

        <p className="mt-3 text-base font-bold text-slate-600">
          نص واضح ومنظم وسهل القراءة.
        </p>

        <div className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 font-black text-white">
          زر واضح
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-yellow-200 p-5 shadow-inner">
      <h3 className="text-2xl font-black text-yellow-300">عنوان غير واضح</h3>

      <p className="mt-3 text-base font-bold text-red-500">
        ألوان كثيرة وغير مريحة.
      </p>

      <div className="mt-4 inline-block rounded-xl bg-green-500 px-5 py-3 font-black text-red-500">
        زر مزعج
      </div>
    </div>
  );
}

function DesignFixOption({
  title,
  previewTitleClass,
  previewBgClass,
  selected,
  correct,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-4 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        selected
          ? correct
            ? "border-green-500/40 bg-green-50 dark:bg-green-500/20"
            : "border-red-500/40 bg-red-50 dark:bg-red-500/20"
          : "border-slate-200 bg-white dark:border-white/20 dark:bg-slate-900"
      }`}
    >
      <div className={`rounded-2xl p-4 shadow-inner ${previewBgClass}`}>
        <h4 className={`text-2xl font-black ${previewTitleClass}`}>
          عنوان واضح
        </h4>
        <p className="mt-2 font-bold text-slate-600">نص تجريبي للتصميم.</p>
      </div>

      <p className="mt-3 text-lg font-black text-slate-900 dark:text-white">
        {selected ? (correct ? "✅ " : "❌ ") : ""}
        {title}
      </p>
    </button>
  );
}

function ColorSelectGroup({ title, options, selected, onChoose }) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/20 dark:bg-slate-800">
      <h3 className="text-xl font-black text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 grid gap-3">
        {options.map((option) => (
          <ChoiceButton
            key={option.value}
            label={option.label}
            selected={selected === option.value}
            correct
            onClick={() => onChoose(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

function AdPreview({ selected }) {
  const bgClass =
    selected.background === "white"
      ? "bg-white"
      : selected.background === "yellow"
      ? "bg-yellow-200"
      : selected.background === "red"
      ? "bg-red-500"
      : "bg-slate-100";

  const textClass =
    selected.text === "black"
      ? "text-black"
      : selected.text === "yellow"
      ? "text-yellow-300"
      : selected.text === "white"
      ? "text-white"
      : "text-slate-500";

  const buttonClass =
    selected.button === "blue"
      ? "bg-blue-600 text-white"
      : selected.button === "white"
      ? "bg-white text-slate-900"
      : selected.button === "red"
      ? "bg-red-600 text-white"
      : "bg-slate-300 text-slate-700";

  return (
    <div className={`rounded-4xl p-8 shadow-xl ${bgClass}`}>
      <h3 className={`text-3xl font-black ${textClass}`}>إعلان تعليمي</h3>

      <p className={`mt-4 text-lg font-bold ${textClass}`}>
        الألوان المناسبة تجعل التصميم واضحًا ومريحًا للعين.
      </p>

      <div
        className={`mt-5 inline-block rounded-2xl px-6 py-3 font-black ${buttonClass}`}
      >
        ابدأ الآن
      </div>
    </div>
  );
}

function getColorArabicName(color) {
  if (color === "red") return "أحمر";
  if (color === "green") return "أخضر";
  if (color === "yellow") return "أصفر";
  if (color === "blue") return "أزرق";
  if (color === "orange") return "برتقالي";
  if (color === "black") return "أسود";
  if (color === "white") return "أبيض";
  return "";
}

function getColorClass(color) {
  if (color === "red") return "bg-red-500";
  if (color === "green") return "bg-green-500";
  if (color === "yellow") return "bg-yellow-400";
  if (color === "blue") return "bg-blue-500";
  if (color === "orange") return "bg-orange-500";
  if (color === "black") return "bg-black";
  if (color === "white") return "bg-white border border-slate-300";
  return "bg-slate-300";
}