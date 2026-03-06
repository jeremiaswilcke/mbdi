import { BentoCard } from "@/components/BentoCard";
import { Hero } from "@/components/Hero";
import { wwdClient, WWDPageHome } from "@/lib/api/wwd-client";
import { bentoSizeClasses } from "@/lib/design-tokens";

// Fallback mock data in case API is completely offline during transition
const fallbackHomeData: WWDPageHome = {
  sections: {
    hero: {
      title: "Willkommen bei Mariabrunn Digital",
      subtitle: "Entdecke unsere neuesten Medien, Livestreams und tauche ein in das Leben der Pfarre Mariabrunn.",
      display_mode: "video",
      primary_cta_text: "Zum YouTube Kanal",
      primary_cta_link: "https://youtube.com/@MariabrunnDigital"
    },
    bento_grid: [
      {
        title: "Mariabrunn Digital auf YouTube",
        description: "Abonniere unseren Kanal für alle Predigten, Vorträge und Live-Übertragungen.",
        layout_size: "large",
        link: "https://www.youtube.com/@MariabrunnDigital"
      },
      {
        title: "Auf den Punkt",
        description: "Tägliche Kurzauslegung zum Tagesevangelium und zur Tageslesung – 2-3 Minuten mit Diakon Peter Scheuchel.",
        layout_size: "medium",
        link: "/auf-den-punkt"
      }
    ]
  }
};

export default async function Home() {
  // Fetch from WWD API with ISR 60s
  const pageData = await wwdClient.getPage<WWDPageHome>('home') || fallbackHomeData;
  const { hero, bento_grid } = pageData.sections;

  return (
    <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Fallback */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-heading text-[#145073] mb-4 leading-tight">
            Willkommen bei <span className="text-[#69AFD2]">Mariabrunn Digital</span>
          </h1>
        </div>

        {/* Dynamic Hero */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <Hero data={hero} />
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[300px]">
          {bento_grid && bento_grid.map((card, idx) => (
            <BentoCard
              key={idx}
              colorVariant="darkBlue"
              className={bentoSizeClasses[card.layout_size] || bentoSizeClasses['small']}
              href={card.link || undefined}
              backgroundImage={card.image?.url}
              delay={0.1 * (idx + 1)}
            >
              <div className="relative z-20 h-full flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-heading text-white mb-2 drop-shadow-md">{card.title}</h3>
                {card.description && (
                  <p className="text-white/80 text-sm max-w-md drop-shadow">
                    {card.description}
                  </p>
                )}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </main>
  );
}
