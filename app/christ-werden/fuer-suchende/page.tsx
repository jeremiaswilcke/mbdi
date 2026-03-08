import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SubpageNav } from "@/components/SubpageNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";

export const metadata: Metadata = {
  title: "Für Suchende -- Christ werden",
  description:
    "Gibt es Gott? Hat das Leben einen Sinn? Antworten für Menschen, die auf der Suche sind.",
};

const fallback = {
  hero: {
    hero_title: "Auf der Suche. Nach Antworten.",
    hero_description:
      "Sie zweifeln, Sie fragen, Sie suchen -- und genau das ist der richtige Ausgangspunkt.",
    primary_cta_text: "Gespräch anfragen",
    primary_cta_link: "#kontakt",
  },
  arguments: [
    {
      title: "Warum überhaupt Gott?",
      content:
        "Alles, was zu existieren beginnt, hat eine Ursache. Das Universum hat zu existieren begonnen -- das bestätigt die moderne Kosmologie mit dem Urknall. Eine unendliche Kette von Ursachen ist logisch unmöglich. Es muss also eine erste, unverursachte Ursache geben -- ein Wesen, das aus sich heraus existiert. Thomas von Aquin nannte dieses Wesen \"das, was alle Gott nennen\".\n\nDazu kommt die Feinabstimmung des Universums: Die Naturkonstanten sind mit einer Präzision aufeinander abgestimmt, die Wissenschaftler aller Weltanschauungen als außergewöhnlich anerkennen. Würde man auch nur eine dieser Konstanten um einen winzigen Bruchteil verändern, wäre kein Leben möglich. Die plausibelste Erklärung dafür ist eine Intelligenz hinter diesem Design.\n\nJeder Mensch trägt zudem ein Bewusstsein für Recht und Unrecht in sich. Wenn es objektive moralische Werte gibt -- also wenn es wirklich falsch ist, ein unschuldiges Kind zu quälen, und nicht bloß kulturell unüblich -- dann brauchen diese Werte einen Grund, der über die materielle Welt hinausgeht. Ein moralisches Gesetz verweist auf einen moralischen Gesetzgeber.",
    },
    {
      title: "Warum gerade Jesus?",
      content:
        "Die Existenz Jesu von Nazareth ist historisch so gut belegt wie die kaum eines anderen Menschen der Antike. Der jüdische Historiker Flavius Josephus, der römische Historiker Tacitus und Plinius der Jüngere erwähnen Jesus unabhängig voneinander. Kein seriöser Historiker bestreitet heute die Existenz der historischen Person Jesus.\n\nDas Auferstehungsargument stützt sich auf mehrere Fakten, die auch von kritischen Forschern anerkannt werden: das leere Grab, die zahlreichen Erscheinungen vor Einzelnen und Gruppen, und die radikale Verwandlung der Jünger. Männer, die nach der Kreuzigung verängstigt geflohen waren, traten plötzlich öffentlich auf und verkündeten die Auferstehung -- obwohl ihnen dafür Verfolgung, Folter und Tod drohten. Keine alternative Erklärung kann alle diese Fakten gleichzeitig überzeugend erklären.\n\nJesus hat Ansprüche erhoben, die keinen Mittelweg zulassen: Er vergab Sünden, beanspruchte göttliche Autorität und identifizierte sich mit dem \"Ich bin\" des Alten Testaments. C.S. Lewis argumentierte: Entweder war er ein Lügner, ein Wahnsinniger -- oder tatsächlich, wer er sagte: der Sohn Gottes.",
    },
    {
      title: "Warum die katholische Kirche?",
      content:
        "Die katholische Kirche ist die älteste durchgehend bestehende Institution der Welt. Von den Aposteln über die Kirchenväter bis zum heutigen Papst lässt sich eine ununterbrochene Kette der Weitergabe nachzeichnen. Während Reiche aufgestiegen und gefallen sind, besteht diese Gemeinschaft seit zweitausend Jahren.\n\nDer Katholizismus hat eine der reichsten intellektuellen Traditionen der Menschheitsgeschichte hervorgebracht. Augustinus legte die Grundlagen für die westliche Philosophie, Thomas von Aquin schuf eine Synthese aus Glaube und Vernunft, die bis heute studiert wird. Der Glaube der Kirche war nie ein Feind des Denkens -- im Gegenteil.\n\nDie katholische Kirche ist zudem der größte nichtstaatliche Anbieter von Bildung und Gesundheitsversorgung weltweit. Sie betreibt über 200.000 Schulen und Tausende Krankenhäuser. Diese Werke sind kein Zusatz zum Glauben, sondern sein natürlicher Ausdruck.",
    },
    {
      title: "Glaube und Wissenschaft -- ein Widerspruch?",
      content:
        "Dieser Einwand beruht auf einem Missverständnis: Naturwissenschaft und Glaube beantworten verschiedene Fragen. Die Wissenschaft fragt \"Wie funktioniert die Welt?\", der Glaube fragt \"Warum gibt es überhaupt etwas, und welchen Sinn hat es?\"\n\nDie katholische Kirche hat die Wissenschaft historisch nicht behindert, sondern gefördert: Der Begründer der Urknalltheorie war der katholische Priester Georges Lemaître, der Vater der Genetik war der Augustinermönch Gregor Mendel, und das päpstliche Observatorium gehört zu den ältesten astronomischen Forschungseinrichtungen der Welt.\n\nPapst Johannes Paul II. schrieb: \"Glaube und Vernunft sind wie zwei Flügel, auf denen sich der menschliche Geist zur Betrachtung der Wahrheit erhebt.\" Der Widerspruch zwischen Wissenschaft und Glaube ist ein moderner Mythos, keine historische Realität.",
    },
  ],
  faq: [
    {
      question: "Wenn Gott gut ist, warum gibt es dann Leid?",
      answer:
        "Die Theodizee-Frage ist die ehrlichste aller Anfragen an den Glauben. Die entscheidende Antwort liegt im Kreuz: Gott ist kein ferner Beobachter des Leids, sondern hat es in Jesus Christus selbst durchlitten. Echte Liebe setzt Freiheit voraus, und Freiheit schließt die Möglichkeit des Missbrauchs ein. Der katholische Glaube verspricht nicht, alles Leid zu erklären -- aber er verspricht, dass es nicht das letzte Wort hat.",
    },
    {
      question: "Muss ich alles wörtlich nehmen, was in der Bibel steht?",
      answer:
        "Nein. Die katholische Kirche unterscheidet verschiedene literarische Gattungen in der Bibel: historische Berichte, Poesie, Gleichnisse, prophetische Texte und Weisheitsliteratur. Nicht alles ist als naturwissenschaftliche Aussage gemeint. Die Kirche ermutigt dazu, die Bibel im Zusammenhang zu lesen und sich von der 2000-jährigen Auslegungstradition leiten zu lassen.",
    },
    {
      question: "Kann ich Christ sein und trotzdem Fragen haben?",
      answer:
        "Absolut. Zweifel und Fragen gehören zum Glaubensweg dazu. Selbst die Heiligen hatten Phasen des Zweifels. Die katholische Tradition sieht den Glauben nicht als blinde Annahme, sondern als vernünftigen Akt, der ständig vertieft werden will. Fragen sind keine Schwäche, sondern ein Zeichen von Ernsthaftigkeit.",
    },
    {
      question: "Wie funktioniert eine Taufe als Erwachsener?",
      answer:
        "Erwachsene durchlaufen den sogenannten Katechumenat -- eine Zeit der Vorbereitung, die in der Regel ein bis zwei Jahre dauert. In dieser Zeit lernen Sie den Glauben kennen, nehmen an Gottesdiensten teil und werden von einem Paten begleitet. Die Taufe findet dann feierlich statt, in der Regel in der Osternacht. Es gibt keinen Druck und kein Zeitlimit.",
    },
    {
      question: "Ist Religion nicht einfach \"Opium fürs Volk\"?",
      answer:
        "Marx' berühmtes Wort wird oft aus dem Zusammenhang gerissen. Dass etwas tröstet, sagt nichts darüber aus, ob es wahr ist. Penicillin tröstet Kranke, ohne deshalb eine Illusion zu sein. Zudem war es gerade der christliche Glaube, der immer wieder Menschen zu radikalem Widerstand gegen Unterdrückung motiviert hat -- von der frühen Kirche über die Abschaffung der Sklaverei bis hin zu Maximilian Kolbe und Oscar Romero.",
    },
  ],
  contact: {
    title: "Persönliches Gespräch",
    description:
      "Der erste Schritt ist oft der schwerste. Wir hören Ihnen zu -- unverbindlich und vertraulich.",
  },
};

export default async function FuerSuchendePage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("cw-suchende");
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
        hero_image={{ url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn" }}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
      />
      <SubpageNav />
      <ArgumentBlock arguments={args} />
      <FAQ items={faqItems} title="Häufige Fragen" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
