import { BentoCard } from "@/components/BentoCard";
import { motion } from "framer-motion";
import { getLatestVideos } from "@/lib/youtube";
import Image from "next/image";

export default async function Home() {
  const { liveStream, latestVod } = await getLatestVideos();
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            Willkommen bei <span className="text-[#6DC0D2]">Mariabrunn Digital</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Entdecke unsere neuesten Medien, Livestreams und tauche ein in das Leben der Pfarre Mariabrunn.
          </p>
        </motion.div>

        {/* 
          ========================================
          MAIN BENTO GRID 
          ========================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

          {/* 
            === 1. Video-Bento: Aktueller Stream / Letztes Highlight (Hero) ===
            Spans 2 columns, 2 rows on desktop for maximum impact
          */}
          <BentoCard
            colorVariant={liveStream ? "magenta" : "darkBlue"}
            className="md:col-span-2 md:row-span-2 p-0 overflow-hidden group"
            href={liveStream ? `https://youtube.com/watch?v=${liveStream.id}` : (latestVod ? `https://youtube.com/watch?v=${latestVod.id}` : "/videos")}
            delay={0.1}
          >
            <div className="absolute inset-0 z-0 bg-[#0f172a]">
              {/* Background / Thumbnail */}
              {(liveStream?.thumbnailUrl || latestVod?.thumbnailUrl) && (
                <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <img
                    src={liveStream?.thumbnailUrl || latestVod?.thumbnailUrl || ""}
                    alt={liveStream?.title || latestVod?.title || "Video Thumbnail"}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div className="self-start">
                {liveStream ? (
                  <span className="inline-flex items-center gap-2 bg-[#AF3F6C] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-[#AF3F6C]/20 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Live Now
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 bg-[#155277] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
                    Neuestes Video
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 shadow-black drop-shadow-lg line-clamp-2">
                  {liveStream?.title || latestVod?.title || "Mariabrunn Digital"}
                </h2>
                <p className="text-slate-200 font-medium drop-shadow-md lg:line-clamp-none line-clamp-2">
                  {liveStream ? "Wir sind gerade live! Klicke hier um teilzunehmen." : "Aus der Pfarr- und Wallfahrtskirche Mariabrunn."}
                </p>
              </div>
            </div>
          </BentoCard>

          {/* 
            === 2. Video-Bento: YouTube Kanal direkt ===
            Da wir das neueste Video nun dynamisch im Hero haben, leitet dieses Bento prominent zum Kanal.
          */}
          <BentoCard
            colorVariant="lightBlue"
            className="md:col-span-2 p-0 overflow-hidden group"
            href="https://www.youtube.com/@MariabrunnDigital"
            delay={0.2}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#155277] to-[#0f172a] opacity-80" />

            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div className="self-start bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6DC0D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Mariabrunn Digital auf YouTube</h3>
                <p className="text-slate-300">Abonniere unseren Kanal für alle Predigten, Vorträge und Live-Übertragungen.</p>
              </div>
            </div>
          </BentoCard>

          {/* 
            === 3. Tagesplan API ===
          */}
          <BentoCard
            colorVariant="darkBlue"
            className="md:col-span-1 lg:col-span-1"
            delay={0.3}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#90AD50]">●</span> Heute
              </h3>
              <div className="flex-grow space-y-4">
                <div className="pb-3 border-b border-white/10">
                  <p className="text-[#6DC0D2] font-bold text-sm">09:30</p>
                  <p className="text-slate-200">Heilige Messe</p>
                </div>
                <div>
                  <p className="text-[#6DC0D2] font-bold text-sm">18:00</p>
                  <p className="text-slate-200">Abendandacht</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">Via API: dienste.mariabrunn-digital.at</p>
            </div>
          </BentoCard>

          {/* 
            === 4. Pfarrtermine (PDF Link) ===
          */}
          <BentoCard
            colorVariant="green"
            className="md:col-span-1 lg:col-span-1 group"
            href="https://www.erzdioezese-wien.at/pages/pfarren/9122/aktuellestermine"
            delay={0.4}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#90AD50] transition-colors">
                  Pfarrtermine
                </h3>
                <p className="text-slate-400 text-sm">
                  Alle aktuellen Termine der Pfarre als praktisches PDF downloaden.
                </p>
              </div>
              <div className="mt-4 opacity-70 group-hover:opacity-100 transition-opacity self-end bg-white/10 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#90AD50]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              </div>
            </div>
          </BentoCard>

          {/* 
            === 5. Mitmachen: Technik & Streaming ===
            Spans 2 columns 
          */}
          <BentoCard
            colorVariant="rose"
            className="md:col-span-2 group"
            href="/mitmachen"
            delay={0.5}
          >
            <div className="flex flex-col md:flex-row h-full gap-6 items-center">
              <div className="flex-1">
                <span className="text-[#BC8080] font-bold text-sm uppercase tracking-wider mb-2 block">Team erweitern</span>
                <h3 className="text-3xl font-heading font-bold text-white mb-3">
                  Mitmachen
                </h3>
                <p className="text-slate-300">
                  Interesse an Kamera, Regie, Streamingtechnik oder Social Media? Werde Teil der Technikcrew von Mariabrunn Digital.
                </p>
              </div>
              <div className="w-24 h-24 rounded-full bg-[#155277]/50 border-4 border-[#BC8080]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BC8080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
              </div>
            </div>
          </BentoCard>

          {/* 
            === 6. Über Mariabrunn / Kirchenführung ===
            Spans 2 columns 
          */}
          <BentoCard
            colorVariant="darkBlue"
            className="md:col-span-2 group border-[#6DC0D2]/20"
            href="/fuehrung"
            delay={0.6}
          >
            <div className="flex flex-col md:flex-row h-full gap-6 items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#6DC0D2] mb-2">
                  Interaktive Kirchenführung
                </h3>
                <p className="text-slate-400 max-w-sm">
                  QR Code vor Ort scannen und die Audio-Tour durch die Kirche starten. Kirchenfakten und Architektur hautnah erleben.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(109,192,210,0.2)] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#155277" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </main>
  );
}

