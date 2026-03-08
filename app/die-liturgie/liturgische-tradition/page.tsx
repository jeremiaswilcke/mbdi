import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LiturgieNav } from "@/components/LiturgieNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { mergeItems } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Liturgische Tradition -- Die Liturgie",
  description:
    "Warum betet die Kirche seit 2000 Jahren so ähnlich? Über apostolische Wurzeln, lebendige Überlieferung und die Treue zum Ursprung.",
};

const fallback = {
  hero: {
    hero_title: "2000 Jahre. Dieselbe Liturgie.",
    hero_description:
      "Warum beten Christen heute im Wesentlichen so wie in den ersten Jahrhunderten? Über die apostolischen Wurzeln und die bemerkenswerte Beständigkeit der liturgischen Tradition.",
    primary_cta_text: "Gottesdienstzeiten",
    primary_cta_link: "/gottesdienste",
  },
  arguments: [
    {
      title: "Der apostolische Ursprung der Liturgie",
      content:
        "Die Grundstruktur der christlichen Liturgie geht auf Jesus Christus selbst und seine Apostel zurück. Beim Letzten Abendmahl gab Jesus den Auftrag: «Tut dies zu meinem Gedächtnis» (Lk 22,19; 1 Kor 11,24-25). Die Apostel haben diesen Auftrag von Anfang an umgesetzt. Bereits die Apostelgeschichte berichtet: «Sie hielten an der Lehre der Apostel fest und an der Gemeinschaft, am Brechen des Brotes und an den Gebeten» (Apg 2,42).\n\nDiese vier Elemente -- Lehre (Wortgottesdienst), Gemeinschaft, Brotbrechen (Eucharistie) und Gebet -- bilden bis heute das Grundgerüst jeder katholischen Messe. Es handelt sich nicht um eine spätere Entwicklung, sondern um den Kern der apostolischen Praxis, die von der ersten Generation der Christen an überliefert wurde.\n\nDer Katechismus bestätigt: «Von Anfang an haben die Christen die Eucharistie gefeiert, und zwar in einer Gestalt, die sich in ihrem Wesen durch alle Verschiedenheit der Zeiten und der Liturgien hindurch nicht verändert hat» (KKK 1356).",
    },
    {
      title: "Die frühchristlichen Zeugnisse",
      content:
        "Die Beständigkeit der Liturgie ist historisch außergewöhnlich gut dokumentiert. Die Didache (Zwölfapostellehre, ca. 70-100 n. Chr.) enthält bereits feste Taufformeln, Eucharistiegebete und Fastenregeln. Justin der Märtyrer beschreibt um 155 n. Chr. in seiner Ersten Apologie (Kap. 65-67) eine Sonntagsliturgie, die dem heutigen Messablauf verblüffend ähnlich ist:\n\n«Am Sonntag versammeln sich alle, die in Städten oder auf dem Land wohnen, an einem gemeinsamen Ort. Es werden die Denkwürdigkeiten der Apostel oder die Schriften der Propheten vorgelesen [...]. Dann erhebt sich der Vorsteher und spricht Gebete und Danksagungen [...]. Dann wird das Brot und der mit Wasser gemischte Wein gebracht. Der Vorsteher spricht Gebete und Danksagungen nach seinem Vermögen, und das Volk stimmt zu mit dem Ruf ‹Amen›» (1. Apol. 67).\n\nHippolyt von Rom dokumentiert in seiner Traditio Apostolica (ca. 215 n. Chr.) ein Eucharistiegebet, das das älteste überlieferte Hochgebet ist und das Zweite Hochgebet des heutigen Messbuchs maßgeblich beeinflusst hat. Die Grundstruktur -- Danksagung, Einsetzungsbericht, Anamnese, Epiklese -- ist seit der Frühzeit dieselbe.",
    },
    {
      title: "Warum hat sich so wenig geändert?",
      content:
        "Die bemerkenswerte Beständigkeit der Liturgie hat mehrere Gründe. Erstens: Die Liturgie ist nicht Menschenwerk, sondern Antwort auf einen göttlichen Auftrag. «Tut dies zu meinem Gedächtnis» ist keine Empfehlung, sondern ein Mandat. Die Kirche hat sich stets als Hüterin, nicht als Urheberin der Liturgie verstanden.\n\nZweitens: Die Liturgie wurde von Anfang an als heilig betrachtet -- als Berührung von Himmel und Erde, nicht als kulturelles Produkt. Der Katechismus lehrt: «Die Liturgie ist Handlung des ganzen Christus (Christus totus). Diejenigen, die sie feiern, leben schon jetzt jenseits der Zeichen in der himmlischen Liturgie» (KKK 1136). Was als himmlisch gilt, verändert man nicht leichtfertig.\n\nDrittens: Die ununterbrochene apostolische Sukzession -- die Weitergabe der bischöflichen Vollmacht von den Aposteln bis heute -- hat für eine organische Kontinuität der liturgischen Praxis gesorgt. Jede Generation hat von der vorherigen empfangen und an die nächste weitergegeben.\n\nPapst Benedikt XVI. erklärt: «Die Liturgie ist uns vorgegeben. [...] Wenn jeder Pfarrer, jeder Liturgiebeauftragte, jede Gemeinde ständig neu erfindet, wird die wahre Größe der Liturgie zerstört» (Der Geist der Liturgie, Kap. II.3). Treue zum Überlieferten ist kein Stillstand, sondern Ausdruck der Ehrfurcht.",
    },
    {
      title: "Organische Entwicklung -- nicht Erfindung",
      content:
        "Die Kirche unterscheidet streng zwischen organischer Entwicklung und willkürlicher Innovation. Das Zweite Vatikanische Konzil stellt den Grundsatz auf: «Damit die gesunde Überlieferung gewahrt bleibe und dennoch einem berechtigten Fortschritt die Tür geöffnet werde, soll eine sorgfältige Untersuchung der einzelnen Teile der Liturgie, die zu erneuern sind, jeweils zuerst theologische, historische und pastorale Studien vorangehen» (Sacrosanctum Concilium, Nr. 23).\n\nDas Konzil fügt hinzu: «Schließlich sollen Neuerungen nur dann eingeführt werden, wenn der Nutzen der Kirche sie wirklich und sicher erfordert. Dabei ist Sorge zu tragen, dass die neuen Formen aus den schon bestehenden gewissermaßen organisch herauswachsen» (ebd.). Das bedeutet: Keine Liturgiereform geschieht im luftleeren Raum. Jede Veränderung muss in der Tradition verwurzelt sein.\n\nDie Liturgiereform nach dem Zweiten Vatikanum war keine Revolution, sondern eine organische Weiterentwicklung. Die Grundstruktur der Messe -- Eröffnung, Wortgottesdienst, Eucharistiefeier, Entlassung -- blieb unverändert. Die Volkssprache wurde zugelassen, die Leseordnung erweitert, die Fürbitten wiederhergestellt. Papst Paul VI. schreibt in der Apostolischen Konstitution Missale Romanum (1969): «Im neuen Messbuch bleibt die Lex orandi der Kirche ihrem jahrhundertealten Brauch gemäß erhalten.»",
    },
    {
      title: "Ost und West -- dieselbe Substanz",
      content:
        "Ein eindrucksvoller Beweis für die Beständigkeit der Liturgie ist der Vergleich zwischen der westlichen (lateinischen) und der östlichen (byzantinischen, koptischen, syrischen) Tradition. Obwohl sich diese Traditionen seit dem frühen Mittelalter weitgehend unabhängig voneinander entwickelt haben, teilen sie dieselbe Grundstruktur: Wortgottesdienst, Hochgebet mit Einsetzungsbericht und Epiklese, Kommunion.\n\nDas Zweite Vatikanische Konzil erkennt ausdrücklich an: «Die ehrwürdigen liturgischen Überlieferungen der Ostkirchen sind als Erbe der Gesamtkirche zu bewahren» (Orientalium Ecclesiarum, Nr. 1). Die Übereinstimmung in den Grundelementen bei großer Verschiedenheit in den äußeren Formen zeigt: Es gibt einen unantastbaren Kern der Liturgie, der auf die apostolische Zeit zurückgeht.\n\nPapst Johannes Paul II. betont in Orientale Lumen: «Die Überlieferung ist der Hort, in dem der Heilige Geist die Form der Kirche aufbewahrt» (Nr. 8). Die liturgische Tradition ist kein Museum, sondern ein lebendiger Strom, der von den Aposteln bis heute fließt -- in verschiedenen Betten, aber aus derselben Quelle.",
    },
    {
      title: "Sacrosanctum Concilium und die Treue zur Tradition",
      content:
        "Das Zweite Vatikanische Konzil wird manchmal fälschlicherweise als Bruch mit der Tradition dargestellt. Tatsächlich war es das Gegenteil. Die Liturgiekonstitution Sacrosanctum Concilium beginnt mit den Worten: «Das Heilige Konzil hat sich zum Ziel gesetzt, das christliche Leben unter den Gläubigen mehr und mehr zu vertiefen [...] und alles, was sich verändern kann, den Erfordernissen unserer Zeit besser anzupassen» (Nr. 1).\n\nDas Konzil fordert einerseits liturgische Erneuerung und andererseits ausdrücklich die Bewahrung der Tradition: «Kein anderer, auch wenn er Priester wäre, darf nach eigenem Gutdünken in der Liturgie etwas hinzufügen, wegnehmen oder ändern» (Nr. 22 §3). Diese klare Anweisung zeigt: Das Konzil wollte keine liturgische Beliebigkeit, sondern eine treue Erneuerung aus den Quellen.\n\nPapst Franziskus bestätigt in Desiderio Desideravi: «Die Liturgie, die uns die Reform des Konzils übergibt, ist keine andere Liturgie, sondern dieselbe Liturgie, in der die Kirche seit jeher feiert» (Nr. 31). Die Einheit der liturgischen Tradition über die Jahrhunderte ist nicht trotz, sondern wegen der verschiedenen Reformen erhalten geblieben -- weil jede echte Reform zur Quelle zurückkehrt.\n\nBenedikt XVI. schreibt: «Was früheren Generationen heilig war, bleibt auch uns heilig und groß; es kann nicht plötzlich rundweg verboten oder gar schädlich sein» (Summorum Pontificum, Begleitbrief, 2007). Die Liturgie der Kirche ist ein Erbe, das empfangen, gehütet und weitergegeben wird -- von Generation zu Generation.",
    },
  ],
  faq: [
    {
      question: "Hat das Zweite Vatikanum die Messe «abgeschafft» und eine neue erfunden?",
      answer:
        "Nein. Das Konzil hat die Messe nicht abgeschafft, sondern eine organische Reform der bestehenden Liturgie angeordnet. Die Grundstruktur blieb vollständig erhalten. Papst Paul VI. schreibt in der Apostolischen Konstitution Missale Romanum (1969): «Im neuen Messbuch bleibt die Lex orandi der Kirche erhalten.» Und Papst Benedikt XVI. stellt klar, dass die ältere und die neuere Form des Römischen Ritus «zwei Gebrauchsweisen des einen Römischen Ritus» sind (Summorum Pontificum, Art. 1).",
    },
    {
      question: "Warum sind sich orthodoxe und katholische Liturgie so ähnlich?",
      answer:
        "Weil beide aus derselben apostolischen Quelle stammen. Die Trennung zwischen Ost- und Westkirche (1054) fand statt, als die liturgische Grundstruktur bereits seit Jahrhunderten gefestigt war. Die byzantinische Liturgie (Chrysostomos, Basilios) und die lateinische Messe teilen Wortgottesdienst, Hochgebet mit Einsetzungsbericht, Epiklese und Kommunion. Diese Übereinstimmung über alle Trennungen hinweg belegt den gemeinsamen apostolischen Ursprung.",
    },
    {
      question: "Darf ein Priester die Liturgie nach eigenem Ermessen verändern?",
      answer:
        "Nein. Sacrosanctum Concilium ist eindeutig: «Die Regelung der heiligen Liturgie steht einzig der Autorität der Kirche zu [...]. Deshalb darf durchaus niemand sonst, auch wenn er Priester wäre, nach eigenem Gutdünken in der Liturgie etwas hinzufügen, wegnehmen oder ändern» (Nr. 22 §3). Der Priester feiert die Liturgie der Kirche, nicht seine eigene. Die Redemptionis Sacramentum (2004) bekräftigt dies nachdrücklich.",
    },
    {
      question: "Was bedeutet «lex orandi, lex credendi»?",
      answer:
        "Dieser alte Grundsatz (zurückgehend auf Prosper von Aquitanien, 5. Jh.) bedeutet: «Das Gesetz des Betens ist das Gesetz des Glaubens.» Was die Kirche in der Liturgie betet, drückt aus, was sie glaubt -- und umgekehrt. Die Liturgie ist nicht nur Ausdruck des Glaubens, sondern auch seine Quelle: Durch das Mitfeiern der Liturgie vertieft sich der Glaube. Der Katechismus lehrt: «Das Gesetz des Betens ist das Gesetz des Glaubens: Die Kirche glaubt so, wie sie betet» (KKK 1124).",
    },
    {
      question: "Ist die Tradition nicht etwas Starres und Lebensfeindliches?",
      answer:
        "Das Gegenteil ist der Fall. Tradition (lat. traditio, Übergabe/Weitergabe) ist ein lebendiger Vorgang: Jede Generation empfängt den Glauben und seine liturgische Form, lebt ihn und gibt ihn weiter. Das Zweite Vatikanische Konzil lehrt: «Die Überlieferung, die von den Aposteln herkommt, schreitet in der Kirche unter dem Beistand des Heiligen Geistes fort» (Dei Verbum, Nr. 8). Tradition ist nicht das Bewahren der Asche, sondern das Weitergeben der Flamme -- wie es oft G.K. Chesterton zugeschrieben wird.",
    },
  ],
  contact: {
    title: "Die Tradition erleben",
    description:
      "Erleben Sie die lebendige liturgische Tradition in Mariabrunn. Wir freuen uns auf Ihren Besuch oder Ihre Fragen.",
  },
};

export default async function LiturgischeTraditionPage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("lit-tradition");
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
      <FAQ items={faqItems} title="Häufige Fragen zur liturgischen Tradition" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
