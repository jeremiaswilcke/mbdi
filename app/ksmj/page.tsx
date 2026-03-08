import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "KSMJ -- Katholische Studio- und Medienjugend",
  description:
    "Die KSMJ verbindet katholischen Glauben mit moderner Medienarbeit. Ein Jugendverband für alle, die Technik und Glaube zusammenbringen wollen.",
};

const activities = [
  {
    title: "Livestream-Produktion",
    description:
      "Wir übertragen Gottesdienste live -- professionell, mit mehreren Kameras, Ton und Regie. Jugendliche lernen dabei echtes Produktionshandwerk.",
    icon: "🎬",
  },
  {
    title: "Podcast & Audio",
    description:
      "Von der Aufnahme bis zum Schnitt: Wir produzieren Podcasts, Kurzimpulse und Audiobeiträge rund um Glaube und Kirche.",
    icon: "🎙️",
  },
  {
    title: "Social Media & Grafik",
    description:
      "Wir gestalten Inhalte für Instagram, YouTube und Co. -- damit die Frohe Botschaft auch dort ankommt, wo Jugendliche unterwegs sind.",
    icon: "📱",
  },
  {
    title: "Technik & IT",
    description:
      "Kameratechnik, Mischpulte, Netzwerke, Webentwicklung -- bei uns lernst du Technik, die anderswo Geld kostet. Und setzt sie für etwas Sinnvolles ein.",
    icon: "💻",
  },
  {
    title: "Workshops & Schulungen",
    description:
      "Wir bilden aus: Videoproduktion, Tontechnik, Grafikdesign, Webentwicklung. Regelmäßige Workshops für Einsteiger und Fortgeschrittene.",
    icon: "🎓",
  },
  {
    title: "Gemeinschaft & Glaube",
    description:
      "Die KSMJ ist mehr als ein Technikverein. Gemeinsame Gebete, Ausflüge, Lager und Gruppenstunden gehören genauso dazu wie die Arbeit am Equipment.",
    icon: "✝️",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Gründung in Bamberg",
    description:
      "Während der Corona-Pandemie entsteht die Idee: Katholische Medienarbeit von und für Jugendliche. In Bamberg wird die KSMJ gegründet.",
  },
  {
    year: "2022",
    title: "Erste Livestreams",
    description:
      "Die ersten professionellen Gottesdienst-Livestreams gehen online. Junge Menschen übernehmen Kamera, Regie und Ton.",
  },
  {
    year: "2023",
    title: "Wachstum & Vernetzung",
    description:
      "Die KSMJ wächst und vernetzt sich mit Pfarren und Diözesen. Workshops und Schulungen werden zum festen Bestandteil.",
  },
  {
    year: "2024",
    title: "KSMJ Wien",
    description:
      "Die KSMJ kommt nach Wien. In Zusammenarbeit mit Mariabrunn Digital entsteht ein neuer Standort mit eigener Studio- und Medienarbeit.",
  },
];

export default function KSMJPage() {
  return (
    <>
      <Hero
        hero_title="KSMJ. Glaube trifft Medien."
        hero_description="Die Katholische Studio- und Medienjugend verbindet professionelle Medienarbeit mit lebendigem Glauben -- ein Jugendverband für alle, die mehr wollen."
        hero_image={{ url: "/images/hero-church.png", alt: "KSMJ" }}
        primary_cta_text="Mitmachen"
        primary_cta_link="#kontakt"
      />

      {/* Intro */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
            Was ist die KSMJ?
          </h2>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Die Katholische Studio- und Medienjugend (KSMJ) ist ein Jugendverband,
            der 2021 in Bamberg gegründet wurde -- mitten in der Corona-Pandemie,
            als Kirche plötzlich digital werden musste. Unser Ziel: Katholische
            Medienarbeit von Jugendlichen für die Kirche. Professionell, engagiert
            und mit Begeisterung für Technik und Glauben.
          </p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4">
            Wir glauben, dass moderne Medienarbeit und katholischer Glaube keine
            Gegensätze sind -- sondern dass gerade die Kombination aus beidem
            Jugendliche begeistern und die Kirche voranbringen kann.
          </p>
        </div>
      </section>

      {/* Was wir tun */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-16">
            Was wir tun
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{activity.icon}</span>
                <h3 className="font-heading text-xl text-primary mb-3">
                  {activity.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte / Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-16">
            Unsere Geschichte
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading text-lg shrink-0">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="md:hidden font-heading text-primary text-sm">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KSMJ Wien */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            KSMJ Wien
          </h2>
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            In Wien arbeitet die KSMJ eng mit Mariabrunn Digital zusammen. Gemeinsam
            produzieren wir Livestreams, gestalten Social-Media-Inhalte und bilden
            Jugendliche in Medientechnik aus. Unser Studio in Mariabrunn steht allen
            offen, die mitmachen wollen.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">Jeden Sonntag</h3>
              <p className="text-white/70 font-body">Livestream-Produktion aus der Wallfahrtskirche</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">Ab 14 Jahren</h3>
              <p className="text-white/70 font-body">Offen für alle Jugendlichen und jungen Erwachsenen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">Keine Vorkenntnisse</h3>
              <p className="text-white/70 font-body">Wir bringen dir alles bei -- du bringst die Begeisterung mit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">
            Organisation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-heading text-xl text-primary mb-4">Struktur</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                Die KSMJ ist ein katholischer Jugendverband, organisiert in lokalen
                Gruppen (Studien). Jede Studie arbeitet eigenständig in einer Pfarre
                oder Diözese, eingebettet in die überregionale KSMJ-Gemeinschaft.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-heading text-xl text-primary mb-4">Mitgliedschaft</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                Mitmachen kann jeder ab 14 Jahren. Es gibt keine Aufnahmeprüfung
                und keine Gebühr. Komm einfach vorbei, lerne uns kennen und entscheide
                selbst, ob die KSMJ etwas für dich ist.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-heading text-xl text-primary mb-4">Trägerschaft</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                Die KSMJ Wien wird getragen von der Pfarre Mariabrunn und ist Teil
                des Projekts Mariabrunn Digital. Wir sind kirchlich eingebunden und
                arbeiten eng mit der Diözese zusammen.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-heading text-xl text-primary mb-4">Ausbildung</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                Unsere Mitglieder lernen Videoproduktion, Tontechnik, Grafikdesign
                und Webentwicklung. Die Ausbildung findet praxisnah statt -- direkt
                bei echten Produktionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Mitmachen bei der KSMJ"
        description="Du bist jung, technikbegeistert und willst deinen Glauben mit modernen Medien verbinden? Dann bist du bei uns richtig. Schreib uns -- wir freuen uns auf dich!"
      />
    </>
  );
}
