import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LiturgieNav } from "@/components/LiturgieNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";

export const metadata: Metadata = {
  title: "Die Sakramente -- Die Liturgie",
  description:
    "Die sieben Sakramente der katholischen Kirche: von Christus eingesetzte Zeichen der Gnade, die das Leben des Christen begleiten und heiligen.",
};

const fallback = {
  hero: {
    hero_title: "Die Sakramente. Zeichen der Gnade.",
    hero_description:
      "Sieben heilige Zeichen, von Christus selbst eingesetzt, die bewirken, was sie bezeichnen -- und das ganze Leben des Christen durchdringen.",
    primary_cta_text: "Kontakt aufnehmen",
    primary_cta_link: "#kontakt",
  },
  arguments: [
    {
      title: "Was sind Sakramente?",
      content:
        "Der Katechismus der Katholischen Kirche definiert: «Die Sakramente sind wirksame Zeichen der Gnade, von Christus eingesetzt und der Kirche anvertraut, durch die uns das göttliche Leben gespendet wird» (KKK 1131). Sie sind nicht bloße Symbole, sondern bewirken die Gnade, die sie bezeichnen. Thomas von Aquin erklärt: Das Sakrament ist zugleich Zeichen und Ursache der Gnade (vgl. Summa Theologiae III, q. 62, a. 1).\n\nDie sieben Sakramente gliedern sich in drei Gruppen: die Sakramente der Initiation (Taufe, Firmung, Eucharistie), die Sakramente der Heilung (Buße, Krankensalbung) und die Sakramente des Dienstes (Weihe, Ehe). Sie begleiten den Christen von der Wiege bis zum Tod und durchdringen alle entscheidenden Momente des Lebens.\n\nDas Zweite Vatikanische Konzil lehrt: «Die Sakramente sind hingeordnet auf die Heiligung der Menschen, den Aufbau des Leibes Christi und schließlich auf die Gott geschuldete Verehrung; als Zeichen dienen sie auch der Unterweisung» (Sacrosanctum Concilium, Nr. 59).",
    },
    {
      title: "Taufe -- Wiedergeburt aus Wasser und Geist",
      content:
        "Die Taufe ist das Tor zu allen anderen Sakramenten. Durch sie wird der Mensch von der Erbsünde befreit, zum Kind Gottes und zum Glied der Kirche. Jesus selbst hat die Taufe eingesetzt: «Geht zu allen Völkern und macht alle Menschen zu meinen Jüngern; tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes» (Mt 28,19).\n\nDer Katechismus lehrt: «Die heilige Taufe ist die Grundlage des ganzen christlichen Lebens, das Eingangstor zum Leben im Geiste und die Tür, die den Zugang zu den anderen Sakramenten öffnet» (KKK 1213). Die Taufe prägt dem Getauften ein unauslöschliches geistliches Zeichen (character) ein -- daher kann sie nicht wiederholt werden.\n\nBereits die Didache, eine der ältesten christlichen Schriften (ca. 70-100 n. Chr.), beschreibt die Taufpraxis: «Tauft auf den Namen des Vaters und des Sohnes und des Heiligen Geistes in lebendigem Wasser» (Did. 7,1). Die kirchliche Taufliturgie hat sich seit den Anfängen in ihren wesentlichen Elementen erhalten.",
    },
    {
      title: "Firmung -- Stärkung durch den Heiligen Geist",
      content:
        "Die Firmung vollendet die Taufgnade. Durch die Salbung mit Chrisam und die Handauflegung des Bischofs empfängt der Gefirmte die besondere Ausgießung des Heiligen Geistes. Der Katechismus lehrt: «Das Sakrament der Firmung bewirkt [...] ein Wachstum und eine Vertiefung der Taufgnade» (KKK 1303).\n\nDie biblische Grundlage liegt in der Apostelgeschichte: «Als die Apostel in Jerusalem hörten, dass Samarien das Wort Gottes angenommen hatte, schickten sie Petrus und Johannes dorthin. Diese zogen hinab und beteten für sie, dass sie den Heiligen Geist empfingen [...]. Dann legten sie ihnen die Hände auf und sie empfingen den Heiligen Geist» (Apg 8,14-17).\n\nDas Konzil von Trient bestätigt die Firmung als eines der sieben Sakramente (DH 1601). Sacrosanctum Concilium fordert, dass «der Ritus der Firmung überarbeitet werde, damit der innere Zusammenhang dieses Sakramentes mit der ganzen christlichen Initiation deutlicher hervortrete» (Nr. 71).",
    },
    {
      title: "Eucharistie -- Quelle und Höhepunkt",
      content:
        "Die Eucharistie ist «Quelle und Höhepunkt des ganzen christlichen Lebens» (Lumen Gentium, Nr. 11). In ihr empfängt der Gläubige den Leib und das Blut Christi selbst. Die weiteren Ausführungen zur Eucharistie finden sich auf der Seite «Das Messopfer».\n\nDer Katechismus fasst zusammen: «Die Eucharistie ist das Herz und der Höhepunkt des Lebens der Kirche, denn in ihr vereint Christus seine Kirche und alle ihre Glieder mit seinem Lob- und Dankopfer, das er am Kreuz dem Vater ein für allemal dargebracht hat; durch dieses Opfer gießt er die Gnaden des Heils über seinen Leib, die Kirche, aus» (KKK 1407).",
    },
    {
      title: "Buße und Krankensalbung -- Sakramente der Heilung",
      content:
        "Das Sakrament der Buße (Beichte) und die Krankensalbung sind die beiden Sakramente der Heilung. In der Beichte empfängt der Sünder die Vergebung Gottes durch die Lossprechung des Priesters. Christus selbst hat dieses Sakrament eingesetzt: «Wem ihr die Sünden vergebt, dem sind sie vergeben» (Joh 20,23).\n\nDer Katechismus lehrt: «Wer das Sakrament der Buße empfängt, erhält von der Barmherzigkeit Gottes die Verzeihung der Sünden, die er gegen Gott begangen hat, und wird zugleich mit der Kirche versöhnt» (KKK 1422). Die Beichte umfasst drei Akte des Pönitenten: Reue, Bekenntnis und Genugtuung (KKK 1491).\n\nDie Krankensalbung richtet sich an Gläubige in schwerer Krankheit oder Lebensgefahr. Der Jakobusbrief begründet sie: «Ist einer von euch krank? Dann rufe er die Ältesten der Gemeinde zu sich; sie sollen Gebete über ihn sprechen und ihn im Namen des Herrn mit Öl salben» (Jak 5,14). Sie verleiht dem Kranken Stärkung, Frieden und Trost und vereint ihn mit dem Leiden Christi (KKK 1532).",
    },
    {
      title: "Weihe und Ehe -- Sakramente des Dienstes",
      content:
        "Das Sakrament der Weihe (Diakonat, Priestertum, Bischofsamt) setzt die von Christus den Aposteln anvertraute Sendung fort. Der Katechismus lehrt: «Das Weihesakrament ist das Sakrament, durch das die Sendung, die Christus seinen Aposteln anvertraut hat, in der Kirche weiterhin ausgeübt wird» (KKK 1536). Die drei Stufen der Weihe -- Diakonat, Presbyterat und Episkopat -- stehen in ununterbrochener Nachfolge seit den Aposteln.\n\nDas Sakrament der Ehe ist die sakramentale Verbindung von Mann und Frau. Jesus selbst hat die Ehe bekräftigt: «Was Gott verbunden hat, das darf der Mensch nicht trennen» (Mt 19,6). Der Katechismus lehrt: «Durch das Sakrament der Ehe werden die christlichen Ehegatten zum Zeichen des Bundes Christi und der Kirche» (KKK 1617). Die Eheleute spenden sich das Sakrament gegenseitig; der Priester oder Diakon ist der amtliche Zeuge der Kirche.\n\nDas Zweite Vatikanische Konzil nennt die christliche Familie «Hauskirche» (Lumen Gentium, Nr. 11) und betont die Aufgabe der Eheleute, «sich gegenseitig [...] in der Gnade das ganze Leben hindurch zu stärken» (Gaudium et Spes, Nr. 48).",
    },
  ],
  faq: [
    {
      question: "Warum gibt es genau sieben Sakramente?",
      answer:
        "Die Zahl Sieben wurde auf dem Zweiten Konzil von Lyon (1274) und dem Konzil von Trient (1547) definitiv bestätigt (DH 860, 1601). Sie ist nicht willkürlich: Die sieben Sakramente entsprechen den entscheidenden Stationen des natürlichen und geistlichen Lebens -- Geburt (Taufe), Reifung (Firmung), Nahrung (Eucharistie), Heilung (Buße, Krankensalbung) und Dienst (Weihe, Ehe). Sie umfassen so das ganze Leben des Christen von der Wiege bis zum Tod.",
    },
    {
      question: "Was ist ein «Sakramental» im Unterschied zu einem Sakrament?",
      answer:
        "Sakramentalien sind heilige Zeichen, die den Sakramenten in gewisser Weise nachgebildet sind: Segnungen, geweihtes Wasser, Rosenkranz, Kerzen usw. Im Unterschied zu den Sakramenten wirken sie nicht «aus sich heraus» (ex opere operato), sondern kraft der Fürbitte der Kirche und der Frömmigkeit des Empfangenden (ex opere operantis). Der Katechismus stellt klar: «Sakramentalien bereiten auf den Empfang der Sakramente vor und heiligen verschiedene Lebensumstände» (KKK 1677).",
    },
    {
      question: "Kann man die Sakramente auch ohne Priester empfangen?",
      answer:
        "Die meisten Sakramente erfordern einen geweihten Spender. Zwei Ausnahmen gibt es: Die Taufe kann im Notfall von jedem Menschen gespendet werden, sofern er die richtige Materie (Wasser), die richtige Form (trinitarische Taufformel) und die richtige Intention verwendet (KKK 1256). Die Ehe wird von den Brautleuten selbst gespendet; der Priester oder Diakon ist kirchlicher Zeuge. Alle anderen Sakramente erfordern die Weihe des Spenders.",
    },
    {
      question: "Was bedeutet «ex opere operato»?",
      answer:
        "Der Ausdruck «ex opere operato» (kraft des vollzogenen Werkes) bedeutet, dass die Sakramente nicht von der persönlichen Heiligkeit des Spenders abhängen, sondern aus der Kraft Christi selbst wirken. Das Konzil von Trient lehrt: «Wer sagt, die Sakramente des Neuen Bundes verliehen die Gnade nicht kraft des vollzogenen sakramentalen Zeichens selbst [...] der sei ausgeschlossen» (DH 1608). Die würdige Disposition des Empfangenden bleibt natürlich für die Fruchtbarkeit des Sakraments entscheidend.",
    },
  ],
  contact: {
    title: "Sakramente empfangen",
    description:
      "Sie möchten ein Sakrament empfangen oder sich darauf vorbereiten? Schreiben Sie uns -- wir begleiten Sie gerne auf Ihrem Weg.",
  },
};

export default async function DieSakramentePage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("lit-sakramente");
  const s = wp?.sections || {};

  const hero = {
    ...fallback.hero,
    ...(s.hero && typeof s.hero === "object" ? s.hero : {}),
  };

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
      <Hero {...hero} />
      <LiturgieNav />
      <ArgumentBlock arguments={args} />
      <FAQ items={faqItems} title="Häufige Fragen zu den Sakramenten" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
