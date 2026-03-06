import type { Metadata } from "next";
import { ServiceSchedule } from "@/components/ServiceSchedule";

export const metadata: Metadata = {
  title: "Gottesdienste",
  description:
    "Gottesdienstordnung der Pfarre Mariabrunn – Messzeiten, Rosenkranz, Andachten und Veranstaltungen.",
};

async function getScheduleData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mariabrunn-digital.at";
  try {
    const res = await fetch(`${baseUrl}/data/gottesdienste.json`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) return res.json();
  } catch {
    // fallback below
  }

  const data = await import("@/public/data/gottesdienste.json");
  return data.default ?? data;
}

export default async function GottesdienstePage() {
  const data = await getScheduleData();

  const from = new Date(data.source.period.from).toLocaleDateString("de-AT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const to = new Date(data.source.period.to).toLocaleDateString("de-AT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-6xl text-white">
            Gottesdienste
          </h1>
          <p className="text-white/70 text-lg mt-4 font-body">
            Gottesdienstordnung der Pfarre {data.parish}
          </p>
          <p className="text-secondary font-subheading mt-2">
            {from} – {to}
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <ServiceSchedule data={data} />
      </section>
    </>
  );
}
