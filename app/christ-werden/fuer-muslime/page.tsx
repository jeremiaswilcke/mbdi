import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SubpageNav } from "@/components/SubpageNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";

export const metadata: Metadata = {
  title: "Für Muslime -- Christ werden",
  description:
    "Vom Islam zum Christentum -- ein Weg in Respekt und Begleitung. Informationen für Muslime, die sich für den katholischen Glauben interessieren.",
};

const fallback = {
  hero: {
    hero_title: "Ein neuer Weg. In Respekt.",
    hero_description:
      "Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie -- vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.",
    primary_cta_text: "Vertrauliches Gespräch",
    primary_cta_link: "#kontakt",
  },
  arguments: [
    {
      title: "Was Christen und Muslime verbindet",
      content:
        "Christen und Muslime bekennen sich zum selben einen Gott -- den Gott Abrahams. Das Zweite Vatikanische Konzil hält in Nostra Aetate ausdrücklich fest, dass die Kirche die Muslime mit Hochachtung betrachtet, die \"den alleinigen Gott anbeten, den lebendigen und in sich seienden, barmherzigen und allmächtigen, den Schöpfer Himmels und der Erde.\"\n\nMaria ist die einzige Frau, die im Koran namentlich genannt wird. Sure 19 trägt sogar ihren Namen. Beide Traditionen bekennen die Jungfrauengeburt Jesu, Marias besondere Erwählung durch Gott und ihre Reinheit und Tugendhaftigkeit. Diese gemeinsame Verehrung Marias bietet einen natürlichen Anknüpfungspunkt für das Gespräch.\n\nBeide Religionen stimmen überein: Gott ist zutiefst barmherzig. Im Islam beginnt fast jede Sure mit \"Im Namen Gottes, des Allerbarmers, des Barmherzigen.\" Die christliche Botschaft geht einen Schritt weiter: Gottes Barmherzigkeit ist so grenzenlos, dass Er selbst Mensch wurde, um die Menschen zu erlösen.",
    },
    {
      title: "Wer ist Jesus für Christen?",
      content:
        "Im Islam ist Jesus (Isa) ein verehrter Prophet. Für Christen ist er weit mehr: der Sohn Gottes, der Mensch geworden ist. \"Sohn Gottes\" meint dabei keine biologische Zeugung -- auch Christen lehnen das ab. Es ist ein Relationsbegriff: So wie ein Gedanke aus dem Geist hervorgeht, ohne dass der Geist geteilt wird, so geht der Sohn ewig aus dem Vater hervor.\n\nJesus selbst hat Ansprüche erhoben, die über die Rolle eines Propheten hinausgehen: \"Ich und der Vater sind eins\" (Joh 10,30). \"Bevor Abraham war, BIN ICH\" (Joh 8,58) -- hier verwendet er die göttliche Selbstbezeichnung aus Exodus 3,14. Er vergab Sünden, was nach jüdischem Verständnis nur Gott kann. Seine Zuhörer verstanden den Anspruch sofort und wollten ihn steinigen.\n\nDie Kreuzigung Jesu gehört zu den am besten bezeugten Fakten der Antike. Der römische Historiker Tacitus, der jüdische Historiker Josephus und früheste christliche Quellen (nur 3-5 Jahre nach den Ereignissen) bezeugen sie einhellig. Die Auferstehung erklärt, warum verängstigte Jünger plötzlich zu furchtlosen Verkündern wurden, die für ihr Zeugnis den Märtyrertod starben.",
    },
    {
      title: "Was bedeutet Dreifaltigkeit?",
      content:
        "Die Trinität wird oft als Polytheismus missverstanden. In Wirklichkeit bekennen Christen streng einen Gott. Innerhalb dieses einen göttlichen Wesens bestehen drei Personen in ewiger Beziehung: Vater, Sohn und Heiliger Geist. Es handelt sich nicht um drei Götter und nicht um drei Teile eines Gottes.\n\nEin hilfreicher Ansatz: Gott ist Liebe (1 Joh 4,8). Zur Liebe gehören immer der Liebende (Vater), der Geliebte (Sohn) und die Liebe selbst (Heiliger Geist). Ein einsamer Gott ohne innere Beziehung könnte nicht in sich selbst Liebe sein.\n\nEin interessanter Anknüpfungspunkt für Muslime: Der Koran gilt im Islam als das unerschaffene, ewige Wort Gottes. Wenn Gottes Wort ewig und unerschaffen ist und zugleich von Gott unterschieden -- dann hat man bereits eine Art Pluralität in der Einheit akzeptiert. Christen sagen: Dieses ewige Wort Gottes ist eine Person geworden -- Jesus Christus (Joh 1,1.14).",
    },
    {
      title: "Erlösung: Gnade statt Ungewissheit",
      content:
        "Im Islam hängt das ewige Schicksal eines Menschen von der Waage seiner guten und schlechten Taten ab, verbunden mit der Hoffnung auf Gottes Erbarmen. Es gibt jedoch keine Heilsgewissheit -- kein Muslim kann sicher sein, das Paradies zu erreichen.\n\nDas Christentum bietet eine radikal andere Botschaft: Die Kluft zwischen menschlicher Sündhaftigkeit und göttlicher Heiligkeit ist unüberbrückbar -- für den Menschen. Gott selbst überbrückt sie durch die Menschwerdung, das Kreuz und die Auferstehung. Erlösung ist ein Geschenk der Gnade, das im Glauben empfangen wird (Eph 2,8-9). Diese Gnade befähigt dann zu guten Werken -- nicht umgekehrt.\n\nViele Konvertiten vom Islam zum Christentum berichten, dass gerade die Entdeckung der Gnade sie befreit hat -- von der ständigen Unsicherheit, ob man \"genug getan hat\", hin zur Gewissheit, von Gott geliebt und angenommen zu sein.",
    },
    {
      title: "Wurde die Bibel verfälscht?",
      content:
        "Der Vorwurf der Bibelverfälschung (Tahrif) ist weit verbreitet, hält aber einer Prüfung nicht stand. Der Koran selbst bestätigt die Bibel: Sure 3,3 sagt, der Koran wurde herabgesandt, \"um die Thora und das Evangelium zu bestätigen.\" Sure 6,115 sagt: \"Niemand kann Seine Worte abändern.\" Wenn die Bibel Gottes Wort ist, kann sie nach islamischer Logik nicht verfälscht worden sein.\n\nÜber 5.800 griechische Manuskripte des Neuen Testaments sind erhalten -- die frühesten Fragmente stammen aus dem frühen 2. Jahrhundert, nur wenige Jahrzehnte nach der Abfassung. Die Textvarianten sind überwiegend geringfügig und betreffen keine einzige Kernlehre.\n\nEine koordinierte Fälschung wäre auch praktisch unmöglich gewesen: Im 7. Jahrhundert waren die biblischen Texte bereits über drei Kontinente verbreitet, in verschiedenen Sprachen, bei verschiedenen -- auch untereinander verfeindeten -- Kirchentraditionen.",
    },
  ],
  faq: [
    {
      question: "Muss ich meine Familie informieren?",
      answer:
        "Das ist eine sehr persönliche Entscheidung. Die Kirche drängt Sie nicht dazu. Wir verstehen, dass ein Glaubenswechsel in manchen Familien schwierig sein kann. Alle Gespräche mit uns sind absolut vertraulich. Sie bestimmen das Tempo und den Weg.",
    },
    {
      question: "Wie lange dauert die Vorbereitung?",
      answer:
        "Die Vorbereitung (Katechumenat) dauert in der Regel ein bis zwei Jahre. Es ist eine Zeit des Kennenlernens, Fragens und Vertiefens. Es gibt keinen Druck und kein festes Zeitlimit -- Sie bestimmen Ihr eigenes Tempo.",
    },
    {
      question: "Kann ich erst ausprobieren, ohne mich zu verpflichten?",
      answer:
        "Selbstverständlich. Sie können Gottesdienste besuchen, Gespräche führen und den Glauben kennenlernen, ohne sich zu irgendetwas zu verpflichten. Die Kirche lädt ein -- sie zwingt nicht.",
    },
    {
      question: "Was ist der Katechumenat?",
      answer:
        "Der Katechumenat ist die Vorbereitungszeit auf die Taufe. In dieser Phase werden Sie in den christlichen Glauben eingeführt, nehmen an Gottesdiensten teil und werden von einem Paten persönlich begleitet. Die Taufe findet in der Regel in der feierlichen Osternacht statt.",
    },
    {
      question: "Werde ich von der Gemeinde akzeptiert?",
      answer:
        "Ja. Die Pfarrgemeinde Mariabrunn heißt jeden willkommen, unabhängig von Herkunft und bisherigem Glaubensweg. Konvertiten bereichern die Gemeinde mit ihrer Perspektive und ihrem Zeugnis. Sie werden nicht allein gelassen.",
    },
  ],
  contact: {
    title: "Vertrauliches Gespräch",
    description:
      "Schreiben Sie uns -- wir behandeln jede Anfrage mit absoluter Diskretion. Sie machen den ersten Schritt, wir gehen den Weg mit Ihnen.",
  },
};

export default async function FuerMuslimePage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("cw-muslime");
  const s = wp?.sections || {};

  const hero = {
    ...fallback.hero,
    ...(s.hero && typeof s.hero === "object" ? s.hero : {}),
  } as typeof fallback.hero;

  const wpArgs = Array.isArray(s.arguments)
    ? s.arguments
    : (s.arguments as { items?: unknown[] })?.items;
  const args =
    Array.isArray(wpArgs) && wpArgs.length > 0
      ? (wpArgs as typeof fallback.arguments)
      : fallback.arguments;

  const wpFaq = Array.isArray(s.faq)
    ? s.faq
    : (s.faq as { items?: unknown[] })?.items;
  const faqItems =
    Array.isArray(wpFaq) && wpFaq.length > 0
      ? (wpFaq as typeof fallback.faq)
      : fallback.faq;

  const contact = {
    ...fallback.contact,
    ...(s.contact && typeof s.contact === "object" ? s.contact : {}),
  } as typeof fallback.contact;

  return (
    <>
      <Hero
        hero_title={hero.hero_title}
        hero_description={hero.hero_description}
        hero_image={{ url: "/images/hero-church2.png", alt: "Kirche Mariabrunn" }}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
      />
      <SubpageNav />

      <section className="pt-16 px-6 max-w-3xl mx-auto">
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
          <p className="font-subheading text-primary text-sm mb-2">Vertraulichkeit</p>
          <p className="text-foreground/70 font-body text-sm leading-relaxed">
            Alle Gespräche sind absolut vertraulich. Wir wissen, dass ein Glaubenswechsel
            in manchen Situationen Mut erfordert. Sie sind bei uns sicher, und Sie bestimmen
            jeden Schritt selbst.
          </p>
        </div>
      </section>

      <ArgumentBlock arguments={args} />
      <FAQ items={faqItems} title="Häufige Fragen" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
