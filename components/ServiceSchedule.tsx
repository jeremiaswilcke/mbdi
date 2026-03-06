"use client";

import { motion } from "framer-motion";

interface Service {
  date: string;
  weekday: string;
  season?: string;
  time: string;
  title: string;
  type: string;
  intention?: string;
  notes?: string;
}

interface PfarrEvent {
  date: string;
  time: string;
  title: string;
}

interface ScheduleData {
  parish: string;
  period: string;
  services: Service[];
  events: PfarrEvent[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
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
    case "liturgie":
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
    case "liturgie":
      return "Liturgie";
    default:
      return type;
  }
}

export function ServiceSchedule({ data }: { data: ScheduleData }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split("T")[0];

  // Filter: only services from today onwards
  const futureServices = data.services.filter((s) => s.date >= todayStr);
  const futureEvents = data.events.filter((ev) => ev.date >= todayStr);

  // Group services by date
  const grouped = futureServices.reduce<Record<string, { weekday: string; season?: string; services: Service[] }>>(
    (acc, s) => {
      if (!acc[s.date]) {
        acc[s.date] = { weekday: s.weekday, season: s.season, services: [] };
      }
      if (s.season && !acc[s.date].season) {
        acc[s.date].season = s.season;
      }
      acc[s.date].services.push(s);
      return acc;
    },
    {}
  );

  const dates = Object.keys(grouped).sort();

  if (dates.length === 0 && futureEvents.length === 0) {
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
      {/* Gottesdienste */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dates.map((date, i) => {
            const group = grouped[date];
            return (
              <motion.div
                key={date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                {/* Date header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-heading text-lg text-primary">
                        {group.weekday}, {formatDate(date)}
                      </span>
                    </div>
                  </div>
                  {group.season && (
                    <p className="text-sm text-secondary font-subheading mt-1">
                      {group.season}
                    </p>
                  )}
                </div>

                {/* Services */}
                <div className="divide-y divide-gray-50">
                  {group.services.map((s, j) => (
                    <div key={j} className="px-6 py-4 flex gap-4">
                      <div className="flex-shrink-0 w-14 text-right">
                        <span className="font-subheading text-sm text-anthracite">
                          {s.time}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-subheading text-anthracite">
                            {s.title}
                          </span>
                          <span
                            className={`${typeColor(s.type)} text-white text-xs px-2 py-0.5 rounded-full font-body`}
                          >
                            {typeLabel(s.type)}
                          </span>
                        </div>
                        {s.intention && (
                          <p className="text-sm text-anthracite/60 mt-1 italic">
                            {s.intention}
                          </p>
                        )}
                        {s.notes && (
                          <p className="text-sm text-secondary mt-1">
                            {s.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Veranstaltungen */}
      {futureEvents.length > 0 && (
        <div>
          <h3 className="font-heading text-2xl text-primary mb-8 text-center">
            Veranstaltungen & Termine
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  {formatDate(ev.date)} · {ev.time} Uhr
                </p>
                <p className="font-subheading text-anthracite mt-2">
                  {ev.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
