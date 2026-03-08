import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LiturgieNav } from "@/components/LiturgieNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { MassOrder } from "@/components/MassOrder";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { mergeItems } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Das Messopfer -- Die Liturgie",
  description:
    "Die heilige Messe als Herzstück des katholischen Glaubens: Aufbau, Bedeutung und Theologie des eucharistischen Opfers.",
};

const fallback = {
  hero: {
    hero_title: "Das Messopfer. Quelle und Höhepunkt.",
    hero_description:
      "In der heiligen Messe wird das Kreuzesopfer Christi gegenwärtig. Sie ist, wie das Konzil lehrt, «Quelle und Höhepunkt des ganzen christlichen Lebens» (Lumen Gentium, Nr. 11).",
    primary_cta_text: "Gottesdienstzeiten",
    primary_cta_link: "/gottesdienste",
  },
  arguments: [
    {
      title: "Was geschieht in der heiligen Messe?",
      content:
        "Die heilige Messe ist kein bloßes Erinnerungsmahl und keine symbolische Feier. Sie ist die sakramentale Vergegenwärtigung des Kreuzesopfers Christi auf Golgotha. Das Konzil von Trient lehrt: «In diesem göttlichen Opfer, das in der Messe vollzogen wird, ist derselbe Christus enthalten und wird unblutig geopfert, der auf dem Altar des Kreuzes ein für allemal sich selbst blutig opferte» (DH 1743).\n\nDas Zweite Vatikanische Konzil bestätigt diese Lehre und betont: «Sooft das Kreuzesopfer, in dem Christus, unser Osterlamm, dahingegeben wurde (1 Kor 5,7), auf dem Altar gefeiert wird, vollzieht sich das Werk unserer Erlösung» (Lumen Gentium, Nr. 3). Die Messe ist daher nicht eine Wiederholung des Kreuzesopfers, sondern dessen sakramentale Gegenwärtigmachung -- dasselbe Opfer in anderer Weise dargebracht.\n\nPapst Johannes Paul II. schreibt in seiner Enzyklika Ecclesia de Eucharistia: «Die Kirche lebt von der Eucharistie. Diese Wahrheit drückt nicht nur eine alltägliche Glaubenserfahrung aus, sondern enthält zusammenfassend den Kern des Mysteriums der Kirche» (Nr. 1).",
    },
    {
      title: "Der Aufbau: Wortgottesdienst und Eucharistiefeier",
      content:
        "Die Messe gliedert sich in zwei große Teile, die eine untrennbare Einheit bilden: den Wortgottesdienst (Liturgia Verbi) und die Eucharistiefeier (Liturgia Eucharistica). Die Allgemeine Einführung in das Römische Messbuch (GERM) erklärt: «Die Messfeier besteht gleichsam aus zwei Teilen, nämlich aus der Wortliturgie und der Eucharistiefeier; diese sind so eng miteinander verbunden, dass sie einen einzigen Akt der Verehrung bilden» (Nr. 28).\n\nDer Wortgottesdienst umfasst die Lesungen aus der Heiligen Schrift, den Antwortpsalm, das Evangelium und die Homilie. Hier spricht Gott selbst zu seinem Volk: «In den Schriftlesungen [...] spricht Gott zu seinem Volk, erschließt er das Mysterium der Erlösung und der Errettung und reicht geistliche Nahrung» (GERM, Nr. 55).\n\nDie Eucharistiefeier beginnt mit der Gabenbereitung, führt über das Hochgebet mit den Wandlungsworten zum Brotbrechen und zur Kommunion. Im Hochgebet vollzieht sich die Konsekration: Brot und Wein werden in den Leib und das Blut Christi verwandelt. Der Katechismus der Katholischen Kirche lehrt: «Durch die Konsekration werden das Brot und der Wein in den Leib und das Blut Christi verwandelt» (KKK 1376).",
    },
    {
      title: "Die Realpräsenz: «Das ist mein Leib»",
      content:
        "Die katholische Kirche lehrt, dass Jesus Christus in der Eucharistie wahrhaft, wirklich und wesentlich (vere, realiter, substantialiter) gegenwärtig ist -- mit Leib und Blut, Seele und Gottheit. Das Konzil von Trient definierte: «Im allerheiligsten Sakrament der Eucharistie ist wahrhaft, wirklich und wesentlich der Leib und das Blut zugleich mit der Seele und der Gottheit unseres Herrn Jesus Christus und folglich der ganze Christus enthalten» (DH 1651).\n\nDiese Lehre gründet unmittelbar in den Worten Jesu selbst. In der Brotrede des Johannesevangeliums sagt er: «Mein Fleisch ist wahrhaft eine Speise und mein Blut ist wahrhaft ein Trank» (Joh 6,55). Beim Letzten Abendmahl spricht er über das Brot: «Das ist mein Leib» (Mt 26,26) -- nicht «das bedeutet» oder «das symbolisiert», sondern «das ist».\n\nDas Zweite Vatikanische Konzil lehrt: «Durch die Eucharistiefeier vereinigt sich die Kirche jeden Tag mit dem Opfer Christi» (Presbyterorum Ordinis, Nr. 5). Und Papst Benedikt XVI. betont in Sacramentum Caritatis: «Der Glaube der Kirche ist wesentlich eucharistischer Glaube, und er nährt sich in besonderer Weise am Tisch der Eucharistie» (Nr. 6).",
    },
    {
      title: "Die Schönheit der Messfeier",
      content:
        "Liturgie ist nicht nur Pflicht, sondern Begegnung mit dem Schönen. Papst Benedikt XVI. schreibt: «Die Beziehung zwischen dem Geheimnis, das geglaubt wird, und dem Geheimnis, das gefeiert wird, zeigt sich in besonderer Weise im theologischen und liturgischen Wert der Schönheit» (Sacramentum Caritatis, Nr. 35). Die Schönheit der Liturgie -- der Gesang, die heiligen Gewänder, der Weihrauch, die Architektur der Kirche -- ist kein überflüssiger Schmuck, sondern Ausdruck der Ehrfurcht vor dem Heiligen.\n\nSacrosanctum Concilium fordert: «Die Riten sollen den Glanz edler Einfachheit an sich tragen, klar und unvermischt sein und in ihrer Kürze verständlich» (Nr. 34). Edle Einfachheit bedeutet nicht Kahlheit, sondern Würde. Die Kirche hat stets die besten Künstler und Musiker in den Dienst der Liturgie gestellt, weil in der Feier der Eucharistie Himmel und Erde einander berühren.\n\nPapst Franziskus schreibt in Desiderio Desideravi: «Die Liturgie ist keine gefährliche Erinnerung an Vergangenes, sondern die lebendige Gegenwart des Paschamysteriums Christi, die jede mögliche Wiederholbarkeit übersteigt» (Nr. 11). Jede Messe ist einzigartig, weil in ihr der lebendige Christus seinem Volk begegnet.",
    },
    {
      title: "Das Opfer der ganzen Kirche",
      content:
        "Die Messe ist nicht nur das Opfer des Priesters, sondern der ganzen Kirche. Der Katechismus lehrt: «Die gesamte Kirche vereinigt sich mit dem Opfer und der Fürsprache Christi» (KKK 1368). Die Gläubigen bringen in der Messe nicht nur Brot und Wein dar, sondern sich selbst -- ihre Freuden, Leiden und ihr ganzes Leben.\n\nDas Konzil betont die «tätige Teilnahme» (participatio actuosa) der Gläubigen: «Die Kirche sorgt nach Kräften dafür, dass die Christgläubigen diesem Geheimnis des Glaubens nicht wie Außenstehende und stumme Zuschauer beiwohnen; sie sollen vielmehr durch die Riten und Gebete dieses Mysterium wohl verstehen lernen und so die heilige Handlung bewusst, fromm und tätig mitfeiern» (Sacrosanctum Concilium, Nr. 48).\n\nTätige Teilnahme bedeutet freilich nicht nur äußere Aktivität, sondern vor allem innere Anteilnahme am Mysterium. Papst Benedikt XVI. stellt klar: «Die aktive Teilnahme, wie sie das Konzil versteht, muss wesentlich als eine tiefere Teilnahme am eucharistischen Geheimnis verstanden werden» (Sacramentum Caritatis, Nr. 52).",
    },
  ],
  faq: [
    {
      question: "Muss ich als Katholik jeden Sonntag zur Messe gehen?",
      answer:
        "Ja. Das dritte Kirchengebot verpflichtet die Gläubigen, an Sonntagen und gebotenen Feiertagen an der heiligen Messe teilzunehmen (KKK 2180). Der Katechismus begründet dies damit, dass der Sonntag als «Tag des Herrn» der Auferstehung Christi gedenkt. Es handelt sich dabei nicht um eine willkürliche Regel, sondern um die Konsequenz daraus, dass die Eucharistie das Zentrum des christlichen Lebens ist. Schwerwiegende Gründe (Krankheit, Pflege kleiner Kinder) entschuldigen von dieser Pflicht.",
    },
    {
      question: "Was ist der Unterschied zwischen Messe und Gottesdienst?",
      answer:
        "Im katholischen Sprachgebrauch bezeichnet «Messe» oder «heilige Messe» spezifisch die Eucharistiefeier mit Wandlung und Kommunion, also die volle Vergegenwärtigung des Kreuzesopfers. «Gottesdienst» ist ein weiterer Begriff, der auch Wortgottesdienste, Andachten, Vespern und andere liturgische Feiern umfasst. Die Messe ist die höchste Form des Gottesdienstes.",
    },
    {
      question: "Dürfen Nicht-Katholiken die Kommunion empfangen?",
      answer:
        "Grundsätzlich ist die Kommunion den katholischen Gläubigen vorbehalten, die im Stand der Gnade sind. Das Kirchenrecht (Can. 844 §4) sieht in Ausnahmefällen (Todesgefahr, schwere Notlage) die Möglichkeit vor, dass orthodoxe Christen und unter bestimmten Bedingungen auch andere getaufte Christen zur Kommunion zugelassen werden können. Nicht-katholische Besucher sind herzlich eingeladen, zum Segen nach vorne zu kommen (mit gekreuzten Armen über der Brust).",
    },
    {
      question: "Was bedeutet «Transsubstantiation»?",
      answer:
        "Transsubstantiation (Wesensverwandlung) bezeichnet die Lehre, dass bei der Wandlung in der Messe die Substanz -- das innere Wesen -- von Brot und Wein vollständig in den Leib und das Blut Christi verwandelt wird, während die äußeren Gestalten (Farbe, Geschmack, Form) erhalten bleiben. Das Konzil von Trient lehrt: «Diese Verwandlung wird von der heiligen katholischen Kirche treffend und im eigentlichen Sinne Transsubstantiation genannt» (DH 1652). Paul VI. bestätigt in Mysterium Fidei (1965), dass dieser Begriff auch nach dem Zweiten Vatikanum der angemessenste bleibt.",
    },
    {
      question: "Warum feiert die Kirche die Messe auf Latein?",
      answer:
        "Das Zweite Vatikanische Konzil hat die Feier der Messe in der Volkssprache erlaubt und gefördert, zugleich aber festgehalten: «Der Gebrauch der lateinischen Sprache soll in den lateinischen Riten erhalten bleiben» (Sacrosanctum Concilium, Nr. 36). Latein bleibt die offizielle Sprache der lateinischen Kirche. In der Praxis werden die meisten Messen heute in der Volkssprache gefeiert. Die Pfarrgemeinde Mariabrunn feiert regelmäßig auch Messen, in denen lateinische Elemente -- besonders im Gesang -- bewahrt werden.",
    },
  ],
  contact: {
    title: "Die Messe mitfeiern",
    description:
      "Sie möchten die heilige Messe in Mariabrunn mitfeiern oder haben Fragen? Schreiben Sie uns -- wir freuen uns auf Sie.",
  },
};

export default async function DasMessopferPage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("lit-messopfer");
  const s = wp?.sections || {};

  const hero = {
    ...fallback.hero,
    ...(s.hero && typeof s.hero === "object" ? s.hero : {}),
  };

  const args = mergeItems(s.arguments, fallback.arguments);
  const faqItems = mergeItems(s.faq, fallback.faq);

  const contact = {
    ...fallback.contact,
    ...(s.contact && typeof s.contact === "object" ? s.contact : {}),
  } as typeof fallback.contact;

  return (
    <>
      <Hero {...hero} />
      <LiturgieNav />
      <ArgumentBlock arguments={args} />
      <MassOrder />
      <FAQ items={faqItems} title="Häufige Fragen zur heiligen Messe" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
