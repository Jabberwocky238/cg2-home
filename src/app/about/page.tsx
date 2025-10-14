"use client";

import { useTexts } from "../../hooks/useTexts";

export default function AboutPage() {
  const { t } = useTexts();
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">{t.aboutTitle}</h1>
        <p>{t.aboutMission}</p>
        <p>{t.aboutWhatWeDo}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{t.aboutTeamTitle}</h2>
        <ul className="grid sm:grid-cols-3 gap-4">
          {t.teamMembers.map((m) => (
            <li key={m.name} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <p className="font-medium">{m.name}</p>
              <p className="text-sm opacity-60">{m.role}</p>
              <p className="mt-2 text-sm">{m.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


