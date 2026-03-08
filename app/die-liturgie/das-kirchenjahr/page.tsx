import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LiturgieNav } from "@/components/LiturgieNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";

export const metadata: Metadata = {
  title: "Das Kirchenjahr -- Die Liturgie",
  description:
    "Advent, Weihnachten, Fastenzeit, Karwoche, Ostern, Pfingsten -- der heilige Rhythmus, in dem die Kirche das Geheimnis Christi entfaltet.",
};

const fallback = {
  hero: {
    hero_title: "Das Kirchenjahr. Im Rhythmus des Heils.",
    hero_description:
      "Im Kreislauf des Jahres entfaltet die Kirche das ganze Mysterium Christi -- von der Erwartung seiner Ankunft bis zur Sendung des Heiligen Geistes.",
    primary_cta_text: "Gottesdienstzeiten",
    primary_cta_link: "/gottesdienste",
  },
  arguments: [
    {
      title: "Der heilige Kreislauf",
      content:
        "Das Kirchenjahr ist keine bloße Abfolge von Feiertagen, sondern die liturgische Entfaltung des ganzen Heilsmysteriums Christi im Rhythmus der Zeit. Das Zweite Vatikanische Konzil lehrt: «Im Kreislauf des Jahres entfaltet die Kirche das ganze Mysterium Christi von der Menschwerdung und Geburt bis zur Himmelfahrt, zum Pfingsttag und zur Erwartung der seligen Hoffnung und der Ankunft des Herrn» (Sacrosanctum Concilium, Nr. 102).\n\nDer Katechismus erklärt: «Von der Osterzeit der Apostel an wird der Tag des Herrn, der Sonntag, aufgrund der Auferstehung Jesu gefeiert. Er ist der Kern des gesamten liturgischen Jahres» (KKK 1163). Alles dreht sich um Ostern -- die anderen Zeiten des Kirchenjahres bereiten darauf vor oder führen seine Frucht weiter.\n\nDas liturgische Jahr beginnt nicht am 1. Januar, sondern mit dem Ersten Adventssonntag und endet mit dem Christkönigsfest. So wird sichtbar: Die Kirche lebt nicht nach dem Kalender der Welt, sondern nach dem Rhythmus des Heils.",
    },
    {
      title: "Advent und Weihnachten -- Erwartung und Erfüllung",
      content:
        "Der Advent (lat. adventus, Ankunft) ist die vierwöchige Vorbereitungszeit auf Weihnachten. Er hat einen doppelten Charakter: Er erinnert an die Erwartung Israels auf den Messias und richtet den Blick zugleich auf die Wiederkunft Christi am Ende der Zeiten. Die liturgische Farbe ist Violett als Zeichen der Buße und Erwartung; am dritten Adventssonntag (Gaudete) wechselt sie zu Rosa als Zeichen der nahenden Freude.\n\nWeihnachten (Hochfest der Geburt des Herrn, 25. Dezember) feiert die Menschwerdung Gottes: «Das Wort ist Fleisch geworden und hat unter uns gewohnt» (Joh 1,14). Die Weihnachtszeit erstreckt sich bis zum Fest der Taufe des Herrn. In dieser Zeit feiert die Kirche auch die Heilige Familie (Sonntag in der Weihnachtsoktav), die Gottesmutter Maria (1. Januar) und Epiphanie/Erscheinung des Herrn (6. Januar).\n\nDie Grundordnung des Kirchenjahres und des Römischen Generalkalenders (GOKJ) legt fest: «Die Adventszeit hat einen doppelten Charakter: Sie ist einerseits Vorbereitungszeit auf die weihnachtlichen Hochfeste [...] und zugleich die Zeit, in der die Seelen auf die Erwartung der zweiten Ankunft Christi hingelenkt werden» (Nr. 39).",
    },
    {
      title: "Fastenzeit -- Vierzig Tage der Umkehr",
      content:
        "Die Fastenzeit (Quadragesima) beginnt am Aschermittwoch und dauert vierzig Tage bis zum Gründonnerstag. Die Zahl Vierzig erinnert an die vierzig Tage Jesu in der Wüste (Mt 4,1-11), die vierzig Jahre Israels in der Wüste und die vierzig Tage des Mose auf dem Sinai. Die liturgische Farbe ist Violett.\n\nSacrosanctum Concilium bestimmt: «Die beiden Elemente, die für die Fastenzeit kennzeichnend sind, nämlich die Erinnerung an die Taufe oder die Vorbereitung auf sie und die Buße, sollen in der Liturgie und in der liturgischen Katechese stärker hervorgehoben werden» (Nr. 109). Die Fastenzeit ist Zeit der Buße, des Gebets, des Fastens und der Werke der Barmherzigkeit.\n\nDas Gloria und das Halleluja werden in der Fastenzeit nicht gesungen -- ein Zeichen der Zurückhaltung und der sehnsüchtigen Erwartung der Osterfreude. Der Altar wird nicht mit Blumen geschmückt. Diese äußere Nüchternheit spiegelt die innere Haltung der Umkehr wider, zu der die Kirche in dieser Zeit einlädt.\n\nDer Katechismus lehrt: «Die Fastenzeit ist in hervorragender Weise die Zeit der großen Liturgie: In ihr bereiten sich die Taufbewerber auf den Empfang der Taufe vor und die Gläubigen auf die Erneuerung ihres Taufversprechens und den Empfang des Bußsakramentes» (KKK 540, vgl. 1438).",
    },
    {
      title: "Die Karwoche -- Im Schatten des Kreuzes",
      content:
        "Die Karwoche (ahd. kara, Klage/Trauer) ist die heiligste Woche des Kirchenjahres. Sie beginnt mit dem Palmsonntag und umfasst das Triduum Sacrum -- die drei heiligen Tage: Gründonnerstag, Karfreitag und Karsamstag.\n\nAm Gründonnerstag (Missa in Cena Domini) gedenkt die Kirche des Letzten Abendmahls, bei dem Christus die Eucharistie und das Priestertum einsetzte. Die Fußwaschung wird vollzogen. Nach der Messe wird das Allerheiligste in feierlicher Prozession zum Aufbewahrungsort (Ölbergandacht) gebracht. Die Altäre werden entblößt -- die Kirche tritt in die Stille des Leidens ein.\n\nDer Karfreitag ist der einzige Tag im Kirchenjahr, an dem keine Messe gefeiert wird. Stattdessen findet die Feier vom Leiden und Sterben des Herrn statt: mit der Johannespassion, den Großen Fürbitten und der Kreuzverehrung. Die liturgische Farbe ist Rot (Farbe des Blutes und des Martyriums). Der Katechismus lehrt: «Das Kreuz ist das einzigartige Opfer Christi, der der einzige Mittler zwischen Gott und den Menschen ist» (KKK 618).\n\nDer Karsamstag ist der Tag der Grabesruhe Christi. Die Kirche verweilt am Grab des Herrn und betrachtet sein Leiden und Sterben. Es ist ein Tag der Stille, des Wartens und des Gebets. Es wird keine Eucharistie gefeiert.",
    },
    {
      title: "Ostern -- Das Fest aller Feste",
      content:
        "In der Osternacht (Vigilia Paschalis) feiert die Kirche die Auferstehung Christi von den Toten. Sie ist «die Mutter aller heiligen Vigilien» (Augustinus) und der Höhepunkt des gesamten Kirchenjahres. Die Feier beginnt in der Dunkelheit: Die Lichtfeier mit dem Osterfeuer und der Osterkerze symbolisiert Christus als «Licht der Welt» (Joh 8,12).\n\nDie Osternacht umfasst vier Teile: die Lichtfeier (Lucernarium), den Wortgottesdienst mit bis zu sieben alttestamentlichen Lesungen, die Tauffeier (in der Erwachsene getauft und alle Gläubigen ihr Taufversprechen erneuern) und die Eucharistiefeier. In dieser Nacht erklingt nach der langen Fastenzeit zum ersten Mal wieder das Halleluja.\n\nDie Osterzeit dauert fünfzig Tage -- von der Osternacht bis Pfingsten. Sie ist «wie ein einziger Festtag, ja wie der große Sonntag» (Athanasius). Vierzig Tage nach Ostern feiert die Kirche Christi Himmelfahrt, zehn Tage danach Pfingsten -- die Herabkunft des Heiligen Geistes auf die Apostel (Apg 2,1-4).\n\nDer Katechismus betont: «Das Pascha-Mysterium der Kreuzigung und Auferstehung Christi steht im Mittelpunkt der Frohen Botschaft, die die Apostel und die Kirche nach ihnen der Welt verkünden sollen» (KKK 571).",
    },
    {
      title: "Die Zeit im Jahreskreis und die Heiligenfeste",
      content:
        "Die «Zeit im Jahreskreis» (Tempus per annum) umfasst 33 oder 34 Wochen, in denen kein besonderes Heilsgeheimnis gefeiert wird, sondern das Christusmysterium in seiner Gesamtheit. Die liturgische Farbe ist Grün -- Farbe der Hoffnung und des Wachstums. In diesen Wochen werden die Evangelien fortlaufend gelesen (Lesejahr A: Matthäus, B: Markus, C: Lukas).\n\nNeben dem Temporale (Herrenjahr) kennt die Liturgie das Sanktorale (Heiligenfeste). Sacrosanctum Concilium stellt klar: «In den Jahreskreis hat die Kirche auch die Gedächtnistage der Märtyrer und der anderen Heiligen eingefügt [...]. In den irdischen Heiligen wird Gottes vollkommenes Bild verehrt; in ihnen preist sie Gottes Werk und hält dem Gläubigen Beispiele vor, die alle durch den einen Mittler zum Vater hinziehen» (Nr. 104).\n\nBesonders hervorgehobene Feste sind: das Hochfest der Gottesmutter Maria (1.1.), Fronleichnam (Donnerstag nach Dreifaltigkeitssonntag), Herz Jesu (Freitag nach Fronleichnam), Mariä Himmelfahrt (15.8.), Allerheiligen (1.11.) und Christkönig (letzter Sonntag im Kirchenjahr).\n\nDie Grundordnung bestimmt: «Damit die Heiligenfeste den Festzeiten des Herrn nicht überdecken, soll die Feier einer großen Zahl von ihnen der Teilkirche, dem Land oder der Ordensgemeinschaft überlassen bleiben» (SC, Nr. 111).",
    },
  ],
  faq: [
    {
      question: "Warum beginnt das Kirchenjahr im Advent und nicht am 1. Januar?",
      answer:
        "Das Kirchenjahr folgt nicht dem bürgerlichen Kalender, sondern dem Rhythmus des Heilsgeschehens. Es beginnt mit der Erwartung (Advent), führt über die Erfüllung (Weihnachten, Ostern) und endet mit dem Christkönigsfest, das auf die Vollendung aller Dinge in Christus hinweist. So bildet es einen geschlossenen Kreislauf, der das ganze Mysterium Christi entfaltet (vgl. SC, Nr. 102).",
    },
    {
      question: "Was sind die liturgischen Farben und was bedeuten sie?",
      answer:
        "Die liturgischen Farben haben eine tiefe Symbolik: Weiß/Gold steht für Festfreude und Herrlichkeit (Weihnachten, Ostern, Herrenfeste); Rot für den Heiligen Geist und das Martyrium (Pfingsten, Karfreitag, Märtyrerfeste); Violett für Buße und Erwartung (Advent, Fastenzeit); Rosa für verhaltene Freude (3. Adventsonntag Gaudete, 4. Fastensonntag Laetare); Grün für Hoffnung und Wachstum (Zeit im Jahreskreis); Schwarz für Trauer (Allerseelen, Requiem -- heute meist durch Violett ersetzt). Die GERM regelt den Gebrauch in Nr. 346.",
    },
    {
      question: "Warum wird in der Fastenzeit kein Halleluja gesungen?",
      answer:
        "Das Halleluja (hebr. «Lobt den Herrn!») wird in der Fastenzeit ausgelassen, um den Bußcharakter dieser Zeit zum Ausdruck zu bringen und die Sehnsucht nach der Osterfreude zu vertiefen. Wenn es in der Osternacht nach wochenlanger Stille wieder erklingt, hat es eine ganz besondere Wirkung. Diese Praxis ist seit dem 5. Jahrhundert belegt und in der Grundordnung des Kirchenjahres (Nr. 28) festgelegt.",
    },
    {
      question: "Ist das Datum von Ostern willkürlich festgelegt?",
      answer:
        "Nein. Seit dem Konzil von Nizäa (325) wird Ostern am ersten Sonntag nach dem ersten Frühlingsvollmond gefeiert. Diese Regel verbindet den alten jüdischen Pessachkalender (Vollmond im Monat Nisan) mit dem christlichen Sonntag als Auferstehungstag. Daher schwankt Ostern zwischen dem 22. März und dem 25. April. Von Ostern hängen alle beweglichen Feste ab: Aschermittwoch (46 Tage vorher), Christi Himmelfahrt (39 Tage danach), Pfingsten (49 Tage danach) und Fronleichnam.",
    },
    {
      question: "Was ist die Osternacht und warum ist sie so wichtig?",
      answer:
        "Die Osternacht (Vigilia Paschalis) ist die bedeutendste liturgische Feier des gesamten Kirchenjahres. In ihr feiert die Kirche die Auferstehung Christi von den Toten. Sie umfasst die Lichtfeier mit dem Osterfeuer, einen ausgedehnten Wortgottesdienst mit alttestamentlichen Lesungen, die Tauffeier und die Eucharistie. Papst Benedikt XVI. schreibt: «Die Osternacht ist die wahre ‹Mutter aller Vigilien›» (vgl. Sacramentum Caritatis, Nr. 45). In vielen Pfarren werden in dieser Nacht Erwachsene getauft und gefirmt.",
    },
  ],
  contact: {
    title: "Das Kirchenjahr miterleben",
    description:
      "Sie möchten die liturgischen Feste in Mariabrunn mitfeiern? Schreiben Sie uns für weitere Informationen.",
  },
};

export default async function DasKirchenjahrPage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("lit-kirchenjahr");
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
      <FAQ items={faqItems} title="Häufige Fragen zum Kirchenjahr" />
      <ContactCTA title={contact.title} description={contact.description} />
    </>
  );
}
