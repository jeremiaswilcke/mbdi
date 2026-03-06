"use client";

import { motion } from "framer-motion";

interface Celebration {
  time: string;
  title: string;
  type: string;
  intention?: string | null;
  notes?: string;
}

interface Readings {
  l1: string;
  psalm: string;
  l2: string;
  gospel: string;
}

interface ServiceDay {
  date: string;
  weekday: string;
  day_title?: string | null;
  special_day?: string | null;
  collections?: string[];
  readings?: Readings | null;
  celebrations: Celebration[];
}

interface PfarrEvent {
  date: string;
  weekday?: string;
  time?: string | null;
  title: string;
  subtitle?: string;
  location?: string | null;
}

interface Notice {
  title: string;
  text: string;
}

interface ScheduleData {
  parish: string;
  source: {
    type: string;
    title: string;
    period: { from: string; to: string };
  };
  contact?: {
    name: string;
    address: string;
    phone: string;
    office_hours: string[];
    email: string;
    website: string;
  };
  services: ServiceDay[];
  events: PfarrEvent[];
  notices?: Notice[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("de-AT", { day: "numeric", month: "long" });
}

function typeColor(type: string): string {
  switch (type) {
    case "messe":
      return "bg-primary";
    case "rosenkranz":
      return "bg-secondary";
    case "kinderkirche":
      return "bg-amber-500";
    case "aschenkreuzfeier":
      return "bg-violet-600";
    default:
      return "bg-gray-500";
  }
}

function typeLabel(type: string): string {
  switch (type) {
    case "messe":
      return "Messe";
    case "rosenkranz":
      return "Rosenkranz";
    case "kinderkirche":
      return "Kinderkirche";
    case "aschenkreuzfeier":
      return "Feier";
    default:
      return type;
  }
}

export function ServiceSchedule({ data }: { data: ScheduleData }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split("T")[0];

  const futureServices = data.services.filter((s) => s.date >= todayStr);
  const futureEvents = data.events.filter((ev) => ev.date >= todayStr);

  if (futureServices.length === 0 && futureEvents.length === 0 && (!data.notices || data.notices.length === 0)) {
    return (
      <div className="text-center py-16">
        <p className="font-subheading text-lg text-anthracite/60">
          Derzeit keine anstehenden Gottesdienste eingetragen.
        </p>
        <p className="text-sm text-anthracite/40 mt-2">
          Die Gottesdienstordnung wird in Kürze aktualisiert.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hinweise */}
      {data.notices && data.notices.length > 0 && (
        <div className="space-y-4">
          {data.notices.map((notice, i) => (
            <div
              key={i}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-6"
            >
              <h3 className="font-subheading text-amber-800 font-semibold">
                {notice.title}
              </h3>
              <p className="text-sm text-amber-700 mt-2 font-body leading-relaxed">
                {notice.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Gottesdienste */}
      {futureServices.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureServices.map((day, i) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                {/* Date header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading text-lg text-primary">
                      {day.weekday}, {formatDate(day.date)}
                    </span>
                    {day.special_day && (
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-subheading">
                        {day.special_day}
                      </span>
                    )}
                  </div>
                  {day.day_title && (
                    <p className="text-sm text-secondary font-subheading mt-1">
                      {day.day_title}
                    </p>
                  )}
                </div>

                {/* Celebrations */}
                <div className="divide-y divide-gray-50">
                  {day.celebrations.map((c, j) => (
                    <div key={j} className="px-6 py-4 flex gap-4">
                      <div className="flex-shrink-0 w-14 text-right">
                        <span className="font-subheading text-sm text-anthracite">
                          {c.time}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-subheading text-anthracite">
                            {c.title}
                          </span>
                          <span
                            className={`${typeColor(c.type)} text-white text-xs px-2 py-0.5 rounded-full font-body`}
                          >
                            {typeLabel(c.type)}
                          </span>
                        </div>
                        {c.intention && (
                          <p className="text-sm text-anthracite/60 mt-1 italic">
                            {c.intention}
                          </p>
                        )}
                        {c.notes && (
                          <p className="text-sm text-secondary mt-1">
                            {c.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Readings */}
                {day.readings && (
                  <div className="px-6 py-3 bg-gray-50/50 border-t border-gray-100">
                    <p className="text-xs text-anthracite/50 font-body">
                      <span className="font-semibold">Lesungen:</span>{" "}
                      {day.readings.l1} · Ps {day.readings.psalm} · {day.readings.l2} · Ev: {day.readings.gospel}
                    </p>
                  </div>
                )}

                {/* Collections */}
                {day.collections && day.collections.length > 0 && (
                  <div className="px-6 py-3 bg-amber-50/50 border-t border-gray-100">
                    <p className="text-xs text-amber-700 font-body">
                      <span className="font-semibold">Sammlung:</span>{" "}
                      {day.collections.join(", ")}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Veranstaltungen */}
      {futureEvents.length > 0 && (
        <div>
          <h3 className="font-heading text-2xl text-primary mb-8 text-center">
            Veranstaltungen & Termine
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureEvents.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-subheading text-sm text-secondary">
                  {ev.weekday && `${ev.weekday}, `}
                  {formatDate(ev.date)}
                  {ev.time && ` · ${ev.time} Uhr`}
                </p>
                <p className="font-subheading text-anthracite mt-2">
                  {ev.title}
                </p>
                {ev.subtitle && (
                  <p className="text-sm text-anthracite/60 mt-1 italic font-body">
                    {ev.subtitle}
                  </p>
                )}
                {ev.location && (
                  <p className="text-xs text-anthracite/50 mt-2 font-body">
                    Ort: {ev.location}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Kontakt */}
      {data.contact && (
        <div className="text-center text-sm text-anthracite/50 font-body space-y-1">
          <p className="font-subheading text-anthracite/70">{data.contact.name}</p>
          <p>{data.contact.address} · Tel: {data.contact.phone}</p>
          <p>Bürozeiten: {data.contact.office_hours.join(" / ")}</p>
        </div>
      )}
    </div>
  );
}
