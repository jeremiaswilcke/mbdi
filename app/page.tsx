import { BentoCard } from "@/components/BentoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary-light selection:text-primary-dark">

      {/* 
        ========================================
        HERO SECTION (Latest Video / Stream) 
        ========================================
      */}
      <section id="hero" className="w-full relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient/image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-slate-900 -z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col justify-end h-full">
          <div className="mb-4">
            <span className="inline-block bg-accent-magenta text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              🔴 Live
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Sonntagsgottesdienst
          </h1>
          <p className="text-primary-light font-medium text-xl md:text-2xl drop-shadow-md mb-8 max-w-2xl">
            Feiere den Gottesdienst live aus der Pfarr- und Wallfahrtskirche Mariabrunn mit uns.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/videos" className="bg-primary-light text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-xl">
              Alle Videos ansehen
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        NÄCHSTE MESSEN SECTION
        ========================================
      */}
      <section id="gottesdienste" className="w-full py-20 bg-card border-y border-card-border relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
            Nächste Gottesdienste
          </h2>

          {/* Horizontal or Grid list of upcoming masses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:border-accent-green/50 transition-colors">
              <p className="text-accent-green font-bold text-lg mb-1">Heute, 09:30</p>
              <p className="text-2xl font-bold text-slate-100">Heilige Messe</p>
              <p className="text-slate-400 mt-2">Gestaltet vom Kirchenchor</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:border-primary-light/50 transition-colors">
              <p className="text-primary-light font-bold text-lg mb-1">Mittwoch, 18:00</p>
              <p className="text-2xl font-bold text-slate-100">Abendmesse</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:border-primary-light/50 transition-colors">
              <p className="text-primary-light font-bold text-lg mb-1">Sonntag, 09:30</p>
              <p className="text-2xl font-bold text-slate-100">Pfarrgottesdienst</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        BENTO GRID: MITMACHEN & FAKTEN
        ========================================
      */}
      <section id="entdecken" className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10">
            Pfarre Entdecken
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">

            {/* Mitmachen (Large) */}
            <BentoCard
              href="/mitmachen"
              className="md:col-span-2 bg-gradient-to-r from-accent-rose/20 to-accent-magenta/20 border-accent-rose/30 hover:border-accent-magenta/50 group"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4 group-hover:text-accent-rose transition-colors">
                    Mitmachen
                  </h3>
                  <p className="text-lg text-slate-300 max-w-md">
                    Werde Teil der Pfarre Mariabrunn. Entdecke Gruppen, Chöre, Jugendangebote und ehrenamtliche Tätigkeiten.
                  </p>
                </div>
                <div className="self-end mt-4 bg-white/10 p-4 rounded-full group-hover:bg-accent-magenta group-hover:text-white transition-all transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
            </BentoCard>

            {/* Über Mariabrunn */}
            <BentoCard href="/ueber-uns" className="bg-card group">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent-green transition-colors">
                    Kirchenfakten
                  </h3>
                  <p className="text-slate-400">
                    Architektur, Geschichte und Kunst in Mariabrunn.
                  </p>
                </div>
                <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity self-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green"><path d="M4 22h16" /><path d="M4 2v20" /><path d="M20 2v20" /><path d="M8 22v-4a4 4 0 0 1 8 0v4" /><path d="M12 2v16" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h8" /></svg>
                </div>
              </div>
            </BentoCard>

            {/* Workshops */}
            <BentoCard href="/workshops" className="bg-slate-800 border-slate-700 hover:bg-slate-700/80 group">
              <div className="flex flex-col h-full justify-center items-center text-center">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Workshops</h3>
                <p className="text-slate-400 text-sm">Kurse, Gruppen & Seminare</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-6 text-slate-500 group-hover:text-primary-light transition-colors"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
              </div>
            </BentoCard>

            {/* Kirchenführung QR */}
            <BentoCard href="/fuehrung" className="md:col-span-2 border-primary-light/30 bg-primary-dark/20 group hover:bg-primary-dark/40">
              <div className="flex flex-col md:flex-row items-center justify-between h-full p-4">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-heading font-bold text-primary-light mb-2">
                    Interaktive Kirchenführung
                  </h3>
                  <p className="text-slate-300 max-w-sm">
                    QR Code in der Kirche scannen und die Audio-Tour starten. Erfahre mehr über die Geschichte direkt vor Ort.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(109,192,210,0.4)] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#155277" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>
                </div>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

    </main>
  );
}
