import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SubpageNav } from "@/components/SubpageNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Für Protestanten -- Christ werden",
  description:
    "Vom evangelischen zum katholischen Glauben -- was uns verbindet und was die katholische Tradition zu bieten hat.",
};

const args = [
  {
    title: "Was uns verbindet -- und wo der Weg weitergeht",
    content:
      "Katholiken und Protestanten teilen das Fundament: die Taufe, das Bekenntnis zu Jesus Christus als Herrn und Erlöser, die Heilige Schrift. Das Zweite Vatikanische Konzil anerkennt ausdrücklich, dass in den evangelischen Gemeinschaften \"vieles vom Heiligen und Wahren\" zu finden ist.\n\nDennoch stellt sich die Frage: Hat Jesus eine sichtbare Kirche gewollt, oder nur lose Gemeinschaften? \"Auf diesen Felsen werde ich meine Kirche bauen\" (Mt 16,18) -- Jesus spricht von einer Kirche, im Singular. Und Er betet: \"Damit sie alle eins seien\" (Joh 17,21).\n\nDie katholische Kirche kann eine ununterbrochene Linie von den Aposteln bis heute nachweisen. Jeder Bischof steht in der apostolischen Sukzession -- eine Kette der Handauflegung, die bis zu den Zwölfen zurückreicht. Diese Kontinuität ist kein Anspruch, sondern historisch nachprüfbar.",
  },
  {
    title: "Sola Scriptura -- und wer bestimmte den Kanon?",
    content:
      "Das Prinzip \"Allein die Schrift\" klingt überzeugend, wirft aber eine entscheidende Frage auf: Wer hat festgelegt, welche Bücher zur Bibel gehören? Es war die Kirche -- auf den Konzilien von Hippo (393) und Karthago (397). Ohne die Autorität der Kirche gäbe es keinen verbindlichen biblischen Kanon.\n\nDie Bibel selbst lehrt kein Sola Scriptura. Im Gegenteil: \"Haltet an den Überlieferungen fest, die ihr gelehrt worden seid, sei es mündlich oder durch unseren Brief\" (2 Thess 2,15). Paulus stellt mündliche und schriftliche Überlieferung gleichberechtigt nebeneinander.\n\nDas Ergebnis von Sola Scriptura spricht für sich: über 30.000 protestantische Denominationen, die sich gegenseitig widersprechen -- alle mit derselben Bibel. Wenn die Schrift allein genügt, warum führt sie zu so vielen verschiedenen Auslegungen? Die fruhe Kirche kannte ein Lehramt, das verbindlich auslegt -- und genau dieses Lehramt besteht in der katholischen Kirche fort.",
  },
  {
    title: "Die Eucharistie: \"Das IST mein Leib\"",
    content:
      "Bei jedem Abendmahl sprechen Christen die Worte Jesu: \"Das ist mein Leib.\" Die katholische Kirche nimmt diese Worte beim Wort. Jesus sagte nicht \"Das symbolisiert meinen Leib\" oder \"Das erinnert an meinen Leib.\" Er sagte: \"Das IST mein Leib.\"\n\nIn Johannes 6 entfaltet Jesus diese Lehre ausführlich: \"Wenn ihr das Fleisch des Menschensohnes nicht esst und sein Blut nicht trinkt, habt ihr das Leben nicht in euch\" (Joh 6,53). Viele seiner Jünger verliessen ihn daraufhin -- und Jesus rief sie nicht zurück, um zu sagen: \"Es war nur symbolisch gemeint.\" Er meinte es wörtlich.\n\nDie fruhe Kirche hat es ebenso verstanden. Ignatius von Antiochien schrieb bereits um 110 n. Chr., dass die Eucharistie \"das Fleisch unseres Erlösers Jesus Christus\" ist. Justin der Martyrer (um 150 n. Chr.) beschreibt die Wandlung in seinen Apologien. Die Realpräsenz ist keine mittelalterliche Erfindung, sondern gehört zum ältesten Glaubensgut der Kirche.",
  },
  {
    title: "Maria und die Heiligen: Fürbitte, nicht Anbetung",
    content:
      "Der häufigste protestantische Einwand lautet: \"Katholiken beten Maria und die Heiligen an.\" Doch die Kirche unterscheidet klar zwischen Anbetung (latria), die allein Gott gebührt, und Verehrung (dulia/hyperdulia), die den Heiligen und Maria gilt.\n\nWir bitten Freunde und Familie, für uns zu beten -- warum nicht auch die Heiligen, die bei Gott vollendet sind? \"Das Gebet eines Gerechten vermag viel\" (Jak 5,16). Die Heiligen sind nicht tot, sondern leben bei Gott und bilden mit uns die eine Kirche.\n\nMaria hat in der Schrift eine herausragende Stellung: Sie ist \"voll der Gnade\" (Lk 1,28), \"gesegnet unter den Frauen\" (Lk 1,42), und alle Geschlechter werden sie seligpreisen (Lk 1,48). In Johannes 2 bewirkt ihre Fürbitte das erste Wunder Jesu. In Offenbarung 12 erscheint sie als die mit der Sonne bekleidete Frau. Die Kirchenväter haben Maria von Anfang an verehrt -- es ist kein späterer Zusatz.",
  },
  {
    title: "Die Beichte: Vergebung, die man spüren kann",
    content:
      "\"Wem ihr die Sünden vergebt, dem sind sie vergeben\" (Joh 20,23). Jesus gab den Aposteln die Vollmacht zur Sündenvergebung -- eine Vollmacht, die in der apostolischen Sukzession weitergegeben wird.\n\nDie Beichte ist kein Seelenstrip vor einem Menschen, sondern die Begegnung mit Christus im Sakrament. Der Priester handelt \"in persona Christi\" -- an Christi Stelle. Und er unterliegt dem strengsten Beichtgeheimnis, das es gibt: Kein Priester darf jemals offenbaren, was er in der Beichte gehört hat, unter keinen Umständen.\n\nViele Konvertiten berichten, dass die Beichte eines der größten Geschenke ist, die sie in der katholischen Kirche gefunden haben: die Gewissheit der Vergebung, ausgesprochen in hörbaren Worten. Nicht die vage Hoffnung, dass Gott vielleicht vergeben hat -- sondern das klare: \"Ich spreche dich los von deinen Sünden.\"",
  },
];

const faqItems = [
  {
    question: "Muss ich nochmals getauft werden?",
    answer:
      "Nein. Die katholische Kirche erkennt die protestantische Taufe voll an, sofern sie im Namen des Vaters, des Sohnes und des Heiligen Geistes gespendet wurde. Bei der Aufnahme in die katholische Kirche empfangen Sie die Firmung und die erste heilige Kommunion -- aber keine erneute Taufe.",
  },
  {
    question: "Wie steht die katholische Kirche zur Ökumene?",
    answer:
      "Die katholische Kirche ist dem ökumenischen Dialog zutiefst verpflichtet. Das Zweite Vatikanische Konzil hat die evangelischen Gemeinschaften als \"getrennte Brüder\" bezeichnet und betont, dass in ihnen vieles vom Heiligen und Wahren lebt. Ökumene bedeutet nicht Gleichgültigkeit, sondern die ehrliche Suche nach der vollen Einheit, die Christus gewollt hat.",
  },
  {
    question: "Was passiert bei der Aufnahme konkret?",
    answer:
      "Die Aufnahme in die volle Gemeinschaft der katholischen Kirche ist ein feierlicher, aber einfacher Akt: Sie legen das Glaubensbekenntnis ab, empfangen die Firmung und nehmen zum ersten Mal an der Eucharistie teil. In der Regel geschieht dies im Rahmen einer heiligen Messe, begleitet von Ihrem Paten.",
  },
  {
    question: "Kann mein evangelischer Ehepartner weiter evangelisch bleiben?",
    answer:
      "Ja, selbstverständlich. Konfessionsverschiedene Ehen sind in der katholischen Kirche vollkommen anerkannt. Ihr Ehepartner muss nicht konvertieren. Die Kirche ermutigt beide Partner, ihren Glauben lebendig zu leben.",
  },
  {
    question: "Was bedeutet päpstliche Unfehlbarkeit wirklich?",
    answer:
      "Unfehlbarkeit bedeutet nicht, dass der Papst in allem recht hat oder nicht sündigen kann. Es bedeutet ausschliesslich: Wenn der Papst in seiner höchsten Lehrautorität (ex cathedra) eine Glaubens- oder Sittenlehre als für die ganze Kirche verbindlich erklärt, bewahrt ihn der Heilige Geist vor Irrtum. Das ist in der gesamten Kirchengeschichte nur sehr selten geschehen.",
  },
  {
    question: "Ist das Fegefeuer unbiblisch?",
    answer:
      "Paulus schreibt: \"Wird aber jemandes Werk verbrennen, so wird er Schaden leiden, er selbst aber wird gerettet werden, doch so wie durch Feuer hindurch\" (1 Kor 3,15). Und in 2 Makkabaer 12,46 beten die Juden für die Verstorbenen, \"damit sie von der Sunde befreit werden.\" Das Fegefeuer ist die Reinigung derer, die in der Gnade Gottes sterben, aber noch der Lauterung bedürfen, um in die volle Gemeinschaft mit Gott einzutreten.",
  },
];

export default function FuerProtestantenPage() {
  return (
    <>
      <Hero
        hero_title="Schon Christ. Neue Heimat."
        hero_description="Sie sind evangelisch und fühlen sich zur katholischen Kirche hingezogen? Entdecken Sie, was die katholische Tradition zu bieten hat."
        hero_image={{ url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn" }}
        primary_cta_text="Gespräch anfragen"
        primary_cta_link="#kontakt"
      />
      <SubpageNav />
      <ArgumentBlock arguments={args} />
      <FAQ items={faqItems} title="Häufige Fragen" />
      <ContactCTA />
    </>
  );
}
