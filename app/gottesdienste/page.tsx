import type { Metadata } from "next";
import { ServiceSchedule } from "@/components/ServiceSchedule";

export const metadata: Metadata = {
  title: "Gottesdienste",
  description:
    "Gottesdienstordnung der Pfarre Mariabrunn – Messzeiten, Rosenkranz, Andachten und Veranstaltungen.",
};

function normalizeData(raw: Record<string, unknown>): Record<string, unknown> {
  const data = { ...raw };

  // Handle both formats: { source: { period } } and { period }
  if (!data.source && data.period) {
    data.source = {
      type: "pdf",
      title: "Pfarrkalender der Pfarre Mariabrunn",
      period: data.period,
    };
  }

  // Ensure arrays exist
  if (!data.events) data.events = [];
  if (!data.notices) data.notices = [];
  if (!data.services) data.services = [];

  return data;
}

async function getScheduleData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mariabrunn-digital.at";
  try {
    const res = await fetch(`${baseUrl}/data/gottesdienste.json`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const raw = await res.json();
      return normalizeData(raw);
    }
  } catch {
    // fallback below
  }

  try {
    const data = await import("@/public/data/gottesdienste.json");
    return normalizeData(data.default ?? data);
  } catch {
    return null;
  }
}

export default async function GottesdienstePage() {
  const data = await getScheduleData();

  if (!data) {
    return (
      <>
        <section className="relative bg-primary pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-6xl text-white">
              Gottesdienste
            </h1>
          </div>
        </section>
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
          <p className="font-subheading text-lg text-anthracite/60">
            Die Gottesdienstordnung wird gerade aktualisiert.
          </p>
          <p className="text-sm text-anthracite/40 mt-2">
            Bitte schau in Kürze wieder vorbei.
          </p>
        </section>
      </>
    );
  }

  const source = data.source as
    | { period?: { from?: string; to?: string } }
    | undefined;
  const periodFrom = source?.period?.from;
  const periodTo = source?.period?.to;

  const dateOpts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const from = periodFrom
    ? new Date(periodFrom).toLocaleDateString("de-AT", dateOpts)
    : null;
  const to = periodTo
    ? new Date(periodTo).toLocaleDateString("de-AT", dateOpts)
    : null;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-6xl text-white">
            Gottesdienste
          </h1>
          <p className="text-white/70 text-lg mt-4 font-body">
            Gottesdienstordnung der Pfarre {(data.parish as string) || "Mariabrunn"}
          </p>
          {from && to && (
            <p className="text-secondary font-subheading mt-2">
              {from} – {to}
            </p>
          )}
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <ServiceSchedule data={data as never} />
      </section>
    </>
  );
}
