import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SubpageNav } from "@/components/SubpageNav";
import { ArgumentBlock } from "@/components/ArgumentBlock";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Fur Suchende -- Christ werden",
  description:
    "Gibt es Gott? Hat das Leben einen Sinn? Antworten fur Menschen, die auf der Suche sind.",
};

const args = [
  {
    title: "Warum uberhaupt Gott?",
    content:
      "Alles, was zu existieren beginnt, hat eine Ursache. Das Universum hat zu existieren begonnen -- das bestatigt die moderne Kosmologie mit dem Urknall. Eine unendliche Kette von Ursachen ist logisch unmoglich. Es muss also eine erste, unverursachte Ursache geben -- ein Wesen, das aus sich heraus existiert. Thomas von Aquin nannte dieses Wesen \"das, was alle Gott nennen\".\n\nDazu kommt die Feinabstimmung des Universums: Die Naturkonstanten sind mit einer Prazision aufeinander abgestimmt, die Wissenschaftler aller Weltanschauungen als aussergewohnlich anerkennen. Wurde man auch nur eine dieser Konstanten um einen winzigen Bruchteil verandern, ware kein Leben moglich. Die plausibelste Erklarung dafur ist eine Intelligenz hinter diesem Design.\n\nJeder Mensch tragt zudem ein Bewusstsein fur Recht und Unrecht in sich. Wenn es objektive moralische Werte gibt -- also wenn es wirklich falsch ist, ein unschuldiges Kind zu qualen, und nicht bloss kulturell unublich -- dann brauchen diese Werte einen Grund, der uber die materielle Welt hinausgeht. Ein moralisches Gesetz verweist auf einen moralischen Gesetzgeber.",
  },
  {
    title: "Warum gerade Jesus?",
    content:
      "Die Existenz Jesu von Nazareth ist historisch so gut belegt wie die kaum eines anderen Menschen der Antike. Der judische Historiker Flavius Josephus, der romische Historiker Tacitus und Plinius der Jungere erwahnen Jesus unabhangig voneinander. Kein serioser Historiker bestreitet heute die Existenz der historischen Person Jesus.\n\nDas Auferstehungsargument stutzt sich auf mehrere Fakten, die auch von kritischen Forschern anerkannt werden: das leere Grab, die zahlreichen Erscheinungen vor Einzelnen und Gruppen, und die radikale Verwandlung der Junger. Manner, die nach der Kreuzigung verangstigt geflohen waren, traten plotzlich offentlich auf und verkundeten die Auferstehung -- obwohl ihnen dafur Verfolgung, Folter und Tod drohten. Keine alternative Erklarung kann alle diese Fakten gleichzeitig uberzeugend erklaren.\n\nJesus hat Anspruche erhoben, die keinen Mittelweg zulassen: Er vergab Sunden, beanspruchte gottliche Autoritat und identifizierte sich mit dem \"Ich bin\" des Alten Testaments. C.S. Lewis argumentierte: Entweder war er ein Lugner, ein Wahnsinniger -- oder tatsachlich, wer er sagte: der Sohn Gottes.",
  },
  {
    title: "Warum die katholische Kirche?",
    content:
      "Die katholische Kirche ist die alteste durchgehend bestehende Institution der Welt. Von den Aposteln uber die Kirchenvater bis zum heutigen Papst lasst sich eine ununterbrochene Kette der Weitergabe nachzeichnen. Wahrend Reiche aufgestiegen und gefallen sind, besteht diese Gemeinschaft seit zweitausend Jahren.\n\nDer Katholizismus hat eine der reichsten intellektuellen Traditionen der Menschheitsgeschichte hervorgebracht. Augustinus legte die Grundlagen fur die westliche Philosophie, Thomas von Aquin schuf eine Synthese aus Glaube und Vernunft, die bis heute studiert wird. Der Glaube der Kirche war nie ein Feind des Denkens -- im Gegenteil.\n\nDie katholische Kirche ist zudem der grosste nichtstaatliche Anbieter von Bildung und Gesundheitsversorgung weltweit. Sie betreibt uber 200.000 Schulen und Tausende Krankenhauser. Diese Werke sind kein Zusatz zum Glauben, sondern sein naturlicher Ausdruck.",
  },
  {
    title: "Glaube und Wissenschaft -- ein Widerspruch?",
    content:
      "Dieser Einwand beruht auf einem Missverstandnis: Naturwissenschaft und Glaube beantworten verschiedene Fragen. Die Wissenschaft fragt \"Wie funktioniert die Welt?\", der Glaube fragt \"Warum gibt es uberhaupt etwas, und welchen Sinn hat es?\"\n\nDie katholische Kirche hat die Wissenschaft historisch nicht behindert, sondern gefordert: Der Begrunder der Urknalltheorie war der katholische Priester Georges Lemaitre, der Vater der Genetik war der Augustinermonch Gregor Mendel, und das papstliche Observatorium gehort zu den altesten astronomischen Forschungseinrichtungen der Welt.\n\nPapst Johannes Paul II. schrieb: \"Glaube und Vernunft sind wie zwei Flugel, auf denen sich der menschliche Geist zur Betrachtung der Wahrheit erhebt.\" Der Widerspruch zwischen Wissenschaft und Glaube ist ein moderner Mythos, keine historische Realitat.",
  },
];

const faqItems = [
  {
    question: "Wenn Gott gut ist, warum gibt es dann Leid?",
    answer:
      "Die Theodizee-Frage ist die ehrlichste aller Anfragen an den Glauben. Die entscheidende Antwort liegt im Kreuz: Gott ist kein ferner Beobachter des Leids, sondern hat es in Jesus Christus selbst durchlitten. Echte Liebe setzt Freiheit voraus, und Freiheit schliesst die Moglichkeit des Missbrauchs ein. Der katholische Glaube verspricht nicht, alles Leid zu erklaren -- aber er verspricht, dass es nicht das letzte Wort hat.",
  },
  {
    question: "Muss ich alles wortlich nehmen, was in der Bibel steht?",
    answer:
      "Nein. Die katholische Kirche unterscheidet verschiedene literarische Gattungen in der Bibel: historische Berichte, Poesie, Gleichnisse, prophetische Texte und Weisheitsliteratur. Nicht alles ist als naturwissenschaftliche Aussage gemeint. Die Kirche ermutigt dazu, die Bibel im Zusammenhang zu lesen und sich von der 2000-jahrigen Auslegungstradition leiten zu lassen.",
  },
  {
    question: "Kann ich Christ sein und trotzdem Fragen haben?",
    answer:
      "Absolut. Zweifel und Fragen gehoren zum Glaubensweg dazu. Selbst die Heiligen hatten Phasen des Zweifels. Die katholische Tradition sieht den Glauben nicht als blinde Annahme, sondern als vernunftigen Akt, der standig vertieft werden will. Fragen sind keine Schwache, sondern ein Zeichen von Ernsthaftigkeit.",
  },
  {
    question: "Wie funktioniert eine Taufe als Erwachsener?",
    answer:
      "Erwachsene durchlaufen den sogenannten Katechumenat -- eine Zeit der Vorbereitung, die in der Regel ein bis zwei Jahre dauert. In dieser Zeit lernen Sie den Glauben kennen, nehmen an Gottesdiensten teil und werden von einem Paten begleitet. Die Taufe findet dann feierlich statt, in der Regel in der Osternacht. Es gibt keinen Druck und kein Zeitlimit.",
  },
  {
    question: "Ist Religion nicht einfach \"Opium furs Volk\"?",
    answer:
      "Marx' beruhmtes Wort wird oft aus dem Zusammenhang gerissen. Dass etwas trostet, sagt nichts daruber aus, ob es wahr ist. Penicillin trostet Kranke, ohne deshalb eine Illusion zu sein. Zudem war es gerade der christliche Glaube, der immer wieder Menschen zu radikalem Widerstand gegen Unterdruckung motiviert hat -- von der fruhen Kirche uber die Abschaffung der Sklaverei bis hin zu Maximilian Kolbe und Oscar Romero.",
  },
];

export default function FuerSuchendePage() {
  return (
    <>
      <Hero
        hero_title="Auf der Suche. Nach Antworten."
        hero_description="Sie zweifeln, Sie fragen, Sie suchen -- und genau das ist der richtige Ausgangspunkt."
        hero_image={{ url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn" }}
        primary_cta_text="Gesprach anfragen"
        primary_cta_link="#kontakt"
      />
      <SubpageNav />
      <ArgumentBlock arguments={args} />
      <FAQ items={faqItems} title="Haufige Fragen" />
      <ContactCTA />
    </>
  );
}
