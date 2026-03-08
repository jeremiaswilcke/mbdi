"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MassStep {
  name: string;
  latin?: string;
  description: string;
}

interface MassSection {
  title: string;
  color: string;
  steps: MassStep[];
}

const sections: MassSection[] = [
  {
    title: "I. Eröffnung",
    color: "bg-primary",
    steps: [
      {
        name: "Einzug",
        latin: "Introitus",
        description:
          "Der Priester und die liturgischen Dienste ziehen zum Altar ein, begleitet vom Einzugslied oder dem Introitus. Die Gemeinde steht. Der Einzug versinnbildlicht das pilgernde Gottesvolk, das sich zur Feier des Mysteriums versammelt.",
      },
      {
        name: "Kreuzzeichen und Begrüßung",
        latin: "Salutatio",
        description:
          "Der Priester eröffnet die Feier mit dem Kreuzzeichen: «Im Namen des Vaters und des Sohnes und des Heiligen Geistes.» Dann grüßt er die Gemeinde, z. B. mit «Der Herr sei mit euch», worauf die Gemeinde antwortet: «Und mit deinem Geiste.» Damit wird die Gegenwart Christi in der versammelten Gemeinde bekundet (vgl. GERM, Nr. 50).",
      },
      {
        name: "Bußakt",
        latin: "Actus paenitentialis",
        description:
          "Die Gemeinde bekennt vor Gott ihre Sünden und bittet um Vergebung. Übliche Formen sind das «Confiteor» (Ich bekenne...) oder die dreifache Anrufung mit Kyrie-Rufen. Der Bußakt ersetzt nicht das Sakrament der Beichte, bereitet aber das Herz auf die Feier vor (GERM, Nr. 51).",
      },
      {
        name: "Kyrie",
        latin: "Kyrie eleison",
        description:
          "Der Ruf «Kyrie eleison» (Herr, erbarme dich) ist einer der ältesten liturgischen Gesänge und geht auf die frühchristliche Liturgie zurück. Er richtet sich an Christus als Herrn und Erlöser. Das Kyrie kann auch in den Bußakt integriert werden.",
      },
      {
        name: "Gloria",
        latin: "Gloria in excelsis Deo",
        description:
          "Das «Ehre sei Gott in der Höhe» ist ein uralter Lobgesang der Kirche, der an Sonntagen (außer in Advent und Fastenzeit) und an Festtagen gesungen oder gesprochen wird. Er beginnt mit dem Engelslied der Weihnachtsnacht (Lk 2,14) und entfaltet sich zu einem trinitarischen Lobpreis.",
      },
      {
        name: "Tagesgebet",
        latin: "Collecta",
        description:
          "Der Priester lädt die Gemeinde zum stillen Gebet ein mit «Lasset uns beten.» Nach einer Stille «sammelt» (colligit) er die Anliegen aller in einem Gebet, das an Gott den Vater gerichtet ist und mit «durch Christus, unseren Herrn» schließt. Die Gemeinde bekräftigt mit «Amen».",
      },
    ],
  },
  {
    title: "II. Wortgottesdienst",
    color: "bg-secondary",
    steps: [
      {
        name: "Erste Lesung",
        latin: "Lectio I",
        description:
          "An Sonntagen und Hochfesten wird die erste Lesung aus dem Alten Testament vorgetragen (in der Osterzeit aus der Apostelgeschichte). Sie steht thematisch in Beziehung zum Evangelium. «In den Schriftlesungen spricht Gott zu seinem Volk» (GERM, Nr. 55). Die Gemeinde sitzt.",
      },
      {
        name: "Antwortpsalm",
        latin: "Psalmus responsorius",
        description:
          "Der Psalm ist die Antwort der Gemeinde auf das Wort Gottes. Er wird gesungen oder gesprochen, oft mit einem Kehrvers, den die Gemeinde wiederholt. Der Antwortpsalm gehört zum Wortgottesdienst und ist nicht bloße Zwischenmusik, sondern selbst Wort Gottes (GERM, Nr. 61).",
      },
      {
        name: "Zweite Lesung",
        latin: "Lectio II",
        description:
          "An Sonntagen und Hochfesten folgt eine zweite Lesung, in der Regel aus den Briefen der Apostel. Sie bildet einen eigenen Lesezyklus und steht nicht immer in direktem thematischem Bezug zur ersten Lesung oder zum Evangelium.",
      },
      {
        name: "Ruf vor dem Evangelium",
        latin: "Alleluia / Acclamatio",
        description:
          "Vor dem Evangelium erhebt sich die Gemeinde und singt das Halleluja (außer in der Fastenzeit, wo ein anderer Ruf an seine Stelle tritt). Dieser Gesang ehrt Christus, der nun im Evangelium selbst zu seinem Volk spricht.",
      },
      {
        name: "Evangelium",
        latin: "Evangelium",
        description:
          "Der Höhepunkt des Wortgottesdienstes: Das Evangelium wird vom Priester oder Diakon verkündet. Die Gemeinde steht. Das Evangelienbuch kann in Prozession zum Ambo gebracht, mit Weihrauch und Kerzen begleitet werden. «Wenn in der Kirche die Heilige Schrift gelesen wird, spricht Gott selbst zu seinem Volk, und Christus verkündigt das Evangelium» (GERM, Nr. 29).",
      },
      {
        name: "Homilie",
        latin: "Homilia",
        description:
          "Die Predigt legt das Wort Gottes aus und bezieht es auf das Leben der Gläubigen. An Sonntagen und Hochfesten ist sie verpflichtend. Sie ist «Teil der Liturgie selbst» (GERM, Nr. 65) und soll aus der Heiligen Schrift und der liturgischen Feier schöpfen.",
      },
      {
        name: "Glaubensbekenntnis",
        latin: "Credo",
        description:
          "An Sonntagen und Hochfesten spricht die Gemeinde das Glaubensbekenntnis -- entweder das Nicäno-Konstantinopolitanische (großes) oder das Apostolische (kleines) Credo. Es ist die Antwort des Volkes auf das Wort Gottes: «Damit die Gemeinde der Glaubensregel zustimmt, ehe sie die Eucharistie feiert» (GERM, Nr. 67).",
      },
      {
        name: "Fürbitten",
        latin: "Oratio universalis",
        description:
          "Im «Allgemeinen Gebet» oder den «Bitten der Gläubigen» betet die Gemeinde für die Anliegen der Kirche, der Welt, der Leidenden und der Ortsgemeinde. Die Fürbitten sind Ausdruck des allgemeinen Priestertums der Gläubigen (GERM, Nr. 69-71).",
      },
    ],
  },
  {
    title: "III. Eucharistiefeier",
    color: "bg-primary",
    steps: [
      {
        name: "Gabenbereitung",
        latin: "Praeparatio donorum",
        description:
          "Brot und Wein werden zum Altar gebracht -- von den Gläubigen selbst, wenn möglich. Der Priester bringt die Gaben dar mit den Worten: «Gepriesen bist du, Herr, unser Gott, Schöpfer der Welt. Du schenkst uns das Brot, die Frucht der Erde und der menschlichen Arbeit.» Hier können auch die Kollekte und andere Gaben dargebracht werden.",
      },
      {
        name: "Gabengebet",
        latin: "Oratio super oblata",
        description:
          "Der Priester spricht über die bereiteten Gaben das Gabengebet. Die Gemeinde bestätigt mit «Amen». Dieses Gebet schließt die Gabenbereitung ab und leitet zum Hochgebet über.",
      },
      {
        name: "Präfation und Sanctus",
        latin: "Praefatio et Sanctus",
        description:
          "Das Hochgebet beginnt mit dem Dialog «Erhebet die Herzen» -- «Wir haben sie beim Herrn» und der Präfation, einem feierlichen Lobgebet, das den jeweiligen Festcharakter zum Ausdruck bringt. Es mündet in das Sanctus: «Heilig, heilig, heilig, Gott, Herr aller Mächte und Gewalten» -- den Gesang der Engel (Jes 6,3), in den die irdische Liturgie einstimmt.",
      },
      {
        name: "Hochgebet mit Wandlung",
        latin: "Prex eucharistica / Consecratio",
        description:
          "Das Herzstück der Messe: Der Priester spricht die Einsetzungsworte Christi über Brot und Wein: «Das ist mein Leib» -- «Das ist mein Blut.» In diesem Augenblick werden Brot und Wein in den Leib und das Blut Christi verwandelt (Transsubstantiation). Die Gemeinde kniet. Es folgt die Akklamation: «Geheimnis des Glaubens.» Das Hochgebet umfasst auch die Anamnese (Gedächtnis), die Epiklese (Herabrufung des Heiligen Geistes) und die Fürbitten für Kirche, Lebende und Verstorbene.",
      },
      {
        name: "Vaterunser",
        latin: "Pater noster",
        description:
          "Das Gebet des Herrn (Mt 6,9-13) wird von der ganzen Gemeinde gesprochen oder gesungen. Es ist die unmittelbare Vorbereitung auf die Kommunion: «Unser tägliches Brot gib uns heute» wird in der eucharistischen Tradition auch auf das Brot des Lebens bezogen. Der Priester fügt den Embolismus an: «Erlöse uns, Herr, von allem Bösen...»",
      },
      {
        name: "Friedensgruß",
        latin: "Pax",
        description:
          "Der Priester spricht: «Der Friede des Herrn sei allezeit mit euch.» Die Gläubigen geben einander ein Zeichen des Friedens und der Versöhnung. Dieser Ritus steht in der Tradition von Mt 5,23-24: Bevor du deine Gabe zum Altar bringst, versöhne dich zuerst.",
      },
      {
        name: "Brotbrechung und Agnus Dei",
        latin: "Fractio panis / Agnus Dei",
        description:
          "Der Priester bricht das konsekrierte Brot und lässt ein Stück in den Kelch fallen (Commixtio). Dazu wird das «Lamm Gottes» (Agnus Dei) gesungen: «Lamm Gottes, du nimmst hinweg die Sünde der Welt, erbarme dich unser.» Das Brotbrechen ist eine der ältesten Bezeichnungen für die Eucharistie (vgl. Apg 2,42).",
      },
      {
        name: "Kommunion",
        latin: "Communio",
        description:
          "Die Gläubigen empfangen den Leib (und gegebenenfalls das Blut) Christi. Der Spender sagt: «Der Leib Christi», der Empfangende antwortet: «Amen» -- ein persönliches Bekenntnis zur Realpräsenz. Der Kommunionempfang setzt den Stand der Gnade voraus (vgl. 1 Kor 11,27-29). Während der Kommunion wird ein Kommunionlied gesungen.",
      },
      {
        name: "Schlussgebet",
        latin: "Oratio post communionem",
        description:
          "Nach einer Zeit der Stille spricht der Priester das Schlussgebet, in dem er um die Früchte der Eucharistie bittet. Die Gemeinde bekräftigt mit «Amen».",
      },
    ],
  },
  {
    title: "IV. Entlassung",
    color: "bg-secondary",
    steps: [
      {
        name: "Verlautbarungen",
        description:
          "Vor dem Segen können kurze Hinweise an die Gemeinde gegeben werden -- Pfarrankündigungen, besondere Anliegen oder Dankworte.",
      },
      {
        name: "Segen",
        latin: "Benedictio",
        description:
          "Der Priester segnet die Gemeinde: «Es segne euch der allmächtige Gott, der Vater und der Sohn und der Heilige Geist.» An Hochfesten kann ein feierlicher Schlusssegen mit drei Segensbitten gesprochen werden.",
      },
      {
        name: "Entlassung",
        latin: "Ite, missa est",
        description:
          "Der Diakon oder Priester entlässt die Gemeinde: «Gehet hin in Frieden» (lat. «Ite, missa est»). Vom Wort «missa» (Sendung/Entlassung) leitet sich der Name «Messe» ab. Die Gläubigen werden gesandt, das in der Eucharistie Empfangene in den Alltag zu tragen. Die Gemeinde antwortet: «Dank sei Gott, dem Herrn.»",
      },
    ],
  },
];

export function MassOrder() {
  const [openSection, setOpenSection] = useState<number>(0);
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-4">
          Der Ablauf der heiligen Messe
        </h2>
        <p className="text-center text-foreground/60 font-body mb-16 max-w-2xl mx-auto">
          Die Messe gliedert sich in vier Teile. Klicken Sie auf einen
          Schritt, um die Erklärung zu lesen. Grundlage ist die Allgemeine
          Einführung in das Römische Messbuch (GERM).
        </p>

        <div className="space-y-6">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              {/* Section header */}
              <button
                onClick={() => {
                  setOpenSection(sIdx);
                  setOpenStep(sIdx === openSection ? openStep : 0);
                }}
                className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors ${
                  sIdx === openSection
                    ? `${section.color} text-white`
                    : "bg-gray-50 text-primary hover:bg-gray-100"
                }`}
              >
                <h3 className="font-heading text-xl">{section.title}</h3>
                <span className="font-body text-sm opacity-70">
                  {section.steps.length} Schritte
                </span>
              </button>

              {/* Steps */}
              <AnimatePresence initial={false}>
                {sIdx === openSection && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="divide-y divide-gray-100">
                      {section.steps.map((step, stIdx) => (
                        <div key={stIdx}>
                          <button
                            onClick={() =>
                              setOpenStep(openStep === stIdx ? null : stIdx)
                            }
                            className="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
                          >
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-heading ${
                                openStep === stIdx
                                  ? `${section.color} text-white`
                                  : "bg-gray-100 text-primary"
                              }`}
                            >
                              {stIdx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="font-subheading text-primary text-base">
                                {step.name}
                              </span>
                              {step.latin && (
                                <span className="text-foreground/40 font-body text-sm ml-2 italic">
                                  {step.latin}
                                </span>
                              )}
                            </div>
                            <svg
                              className={`w-5 h-5 text-foreground/30 shrink-0 transition-transform duration-200 ${
                                openStep === stIdx ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {openStep === stIdx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <p className="px-6 pb-5 pl-18 font-body text-sm text-foreground/70 leading-relaxed ml-12">
                                  {step.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
