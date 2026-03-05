import { BentoCard } from "@/components/BentoCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getLatestVideos } from "@/lib/youtube";
import { BookOpen, Mic, ChevronRight, QrCode, Calendar, Users, Play } from "lucide-react";

export default async function Home() {
  const { liveStream, latestVod } = await getLatestVideos();
  return (
    <main className="min-h-screen bg-white text-[#155277] pt-28 pb-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header / Intro */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-heading text-[#155277] mb-4 leading-tight">
            Willkommen bei <span className="text-[#6DC0D2]">Mariabrunn Digital</span>
          </h1>
          <p className="text-xl text-[#2D2D2D]/70 max-w-2xl">
            Entdecke unsere neuesten Medien, Livestreams und tauche ein in das Leben der Pfarre Mariabrunn.
          </p>
        </div>

        {/* Hero Carousel */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <HeroCarousel liveStream={liveStream} latestVod={latestVod} />
        </div>

        {/* 
          ========================================
          MAIN BENTO GRID 
          ========================================
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[300px]">

          {/* 
            === 1. YouTube Kanal === 
            Full-width on mobile, 2-col on desktop
          */}
          <BentoCard
            colorVariant="anthracite"
            className="col-span-2 p-0 overflow-hidden"
            href="https://www.youtube.com/@MariabrunnDigital"
            delay={0.1}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#155277] to-[#0f172a]" />
            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div className="self-start bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                <Play size={28} className="text-[#6DC0D2]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white mb-2">Mariabrunn Digital auf YouTube</h3>
                <p className="text-slate-300 text-sm">Abonniere unseren Kanal für alle Predigten, Vorträge und Live-Übertragungen.</p>
              </div>
            </div>
          </BentoCard>

          {/* 
            === 2. Tagesplan ===
          */}
          <BentoCard
            colorVariant="darkBlue"
            className="col-span-1"
            delay={0.15}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-heading text-[#155277] mb-4 flex items-center gap-2">
                <span className="text-[#90AD50]">●</span> Heute
              </h3>
              <div className="flex-grow space-y-4">
                <div className="pb-3 border-b border-gray-100">
                  <p className="text-[#6DC0D2] font-bold text-sm">09:30</p>
                  <p className="text-[#2D2D2D]">Heilige Messe</p>
                </div>
                <div>
                  <p className="text-[#6DC0D2] font-bold text-sm">18:00</p>
                  <p className="text-[#2D2D2D]">Abendandacht</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">Via Tagesplan-API</p>
            </div>
          </BentoCard>

          {/* 
            === 3. Pfarrtermine === 
          */}
          <BentoCard
            colorVariant="green"
            className="col-span-1 group"
            href="https://www.erzdioezese-wien.at/pages/pfarren/9122/aktuellestermine"
            delay={0.2}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-heading text-[#155277] mb-2 group-hover:text-[#90AD50] transition-colors">
                  Pfarrtermine
                </h3>
                <p className="text-[#2D2D2D]/70 text-sm">
                  Alle aktuellen Termine der Pfarre als PDF downloaden.
                </p>
              </div>
              <div className="mt-4 opacity-60 group-hover:opacity-100 transition-opacity self-end">
                <Calendar size={28} className="text-[#90AD50]" />
              </div>
            </div>
          </BentoCard>

          {/* 
            === 4. Auf den Punkt – Tagesimpuls mit Diakon Peter Scheuchel === 
            2 columns with photo
          */}
          <BentoCard
            colorVariant="lightBlue"
            className="col-span-2 group"
            href="/auf-den-punkt"
            backgroundImage="/images/hero-church.png"
            delay={0.25}
          >
            <div className="flex flex-col h-full justify-end">
              <span className="text-[#6DC0D2] font-bold text-xs uppercase tracking-wider mb-2">Täglich neu</span>
              <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                Auf den Punkt
              </h3>
              <p className="text-white/80 text-sm max-w-md">
                Tägliche Kurzauslegung zum Tagesevangelium und zur Tageslesung – 2-3 Minuten mit Diakon Peter Scheuchel.
              </p>
              <div className="flex items-center gap-2 mt-4 text-white/60 group-hover:text-white transition-colors text-sm">
                <Mic size={16} /> <span>Zur Playlist</span> <ChevronRight size={14} />
              </div>
            </div>
          </BentoCard>

          {/* 
            === 5. Bibel in einem Jahr === 
            1 column with photo
          */}
          <BentoCard
            colorVariant="rose"
            className="col-span-1 group"
            href="/bibel-in-einem-jahr"
            backgroundImage="/images/card-bible.png"
            delay={0.3}
          >
            <div className="flex flex-col h-full justify-end">
              <span className="text-[#BC8080] font-bold text-xs uppercase tracking-wider mb-1 drop-shadow">Gemeinschaftsprojekt</span>
              <h3 className="text-xl font-heading text-white mb-1 drop-shadow">
                Die Bibel in einem Jahr
              </h3>
              <p className="text-white/80 text-xs drop-shadow">
                Wir suchen Leser und Mitarbeiter.
              </p>
            </div>
          </BentoCard>

          {/* 
            === 6. Mitmachen ===
            1 column
          */}
          <BentoCard
            colorVariant="rose"
            className="col-span-1 group"
            href="/mitmachen"
            backgroundImage="/images/hero-streaming.png"
            delay={0.35}
          >
            <div className="flex flex-col h-full justify-end">
              <span className="text-[#BC8080] font-bold text-xs uppercase tracking-wider mb-1 drop-shadow">Team erweitern</span>
              <h3 className="text-xl font-heading text-white mb-1 drop-shadow">
                Mitmachen
              </h3>
              <p className="text-white/80 text-xs drop-shadow">
                Kamera, Regie, Streaming oder Social Media – werde Teil der Crew.
              </p>
            </div>
          </BentoCard>

          {/* 
            === 7. Kirchenführung QR === 
            2 columns
          */}
          <BentoCard
            colorVariant="darkBlue"
            className="col-span-2 group"
            href="/fuehrung"
            delay={0.4}
          >
            <div className="flex flex-col md:flex-row h-full gap-6 items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading text-[#6DC0D2] mb-2">
                  Interaktive Kirchenführung
                </h3>
                <p className="text-[#2D2D2D]/70 max-w-sm text-sm">
                  QR Code vor Ort scannen und die Audio-Tour durch die Kirche starten. Kirchenfakten und Architektur hautnah erleben.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(109,192,210,0.2)] shrink-0">
                <QrCode size={48} className="text-[#155277]" />
              </div>
            </div>
          </BentoCard>

          {/* 
            === 8. Krankenkommunion ===
          */}
          <BentoCard
            colorVariant="green"
            className="col-span-2 md:col-span-1 group"
            href="/krankenkommunion"
            delay={0.45}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-heading text-[#155277] mb-2 group-hover:text-[#90AD50] transition-colors">
                  Krankenkommunion
                </h3>
                <p className="text-[#2D2D2D]/70 text-sm">
                  Kommunion für kranke oder ältere Gemeindemitglieder anfragen.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#90AD50] text-sm group-hover:gap-3 transition-all">
                <span>Anfragen</span> <ChevronRight size={14} />
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </main>
  );
}
