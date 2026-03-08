import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB -- Isidor Pfarrverwaltung",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung der Isidor Pfarrverwaltungssoftware.",
};

export default function IsidorAGBPage() {
  return (
    <>
      {/* Spacer for fixed nav */}
      <div className="h-24" />

      <article className="py-16 px-6 max-w-4xl mx-auto">
        <Link
          href="/isidor"
          className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-body text-sm mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu Isidor
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="font-body text-foreground/60 mb-12">
          für die Nutzung der Software «Isidor -- Pfarrverwaltung für WordPress»
          <br />
          Stand: März 2026
        </p>

        <div className="prose prose-lg max-w-none font-body text-foreground/80 leading-relaxed space-y-10">

          {/* § 1 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 1 Geltungsbereich und Vertragsparteien
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend «AGB»)
              gelten für die Nutzung der Software «Isidor -- Pfarrverwaltung
              für WordPress» (nachfolgend «Software»), die von Mariabrunn
              Digital, einem Projekt der Pfarre Mariabrunn, Hauptstraße 180,
              1140 Wien (nachfolgend «Anbieter»), unentgeltlich zur Verfügung
              gestellt wird.
            </p>
            <p>
              (2) Die Software richtet sich ausschließlich an katholische
              Pfarrgemeinden, kirchliche Einrichtungen und andere
              organisatorische Nutzer im Sinne von Unternehmern gemäß § 1
              Abs. 1 Z 1 KSchG (Konsumentenschutzgesetz). Natürliche Personen,
              die die Software für rein private Zwecke nutzen, werden
              ausdrücklich darauf hingewiesen, dass die Software nicht für den
              Konsumentenbereich bestimmt ist.
            </p>
            <p>
              (3) Die vorliegenden AGB werden Vertragsbestandteil durch
              Annahme seitens des Nutzers. Die Annahme erfolgt durch das
              Herunterladen, die Installation oder die Nutzung der Software.
              Entgegenstehende oder abweichende Bedingungen des Nutzers werden
              nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung
              ausdrücklich schriftlich zu.
            </p>
          </section>

          {/* § 2 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 2 Vertragsgegenstand und Unentgeltlichkeit
            </h2>
            <p>
              (1) Der Anbieter stellt die Software als WordPress-Plugin
              unentgeltlich (kostenlos) zur Verfügung. Es besteht keinerlei
              Entgeltpflicht. Der Nutzer schuldet weder eine Gebühr noch eine
              sonstige Gegenleistung gleich welcher Art für den Download, die
              Installation oder die Nutzung der Software.
            </p>
            <p>
              (2) Die Software wird als unentgeltliche Zuwendung im Sinne
              der §§ 938 ff ABGB (Allgemeines Bürgerliches Gesetzbuch)
              bereitgestellt. Es handelt sich ausdrücklich nicht um ein
              entgeltliches Rechtsgeschäft im Sinne des § 922 ABGB.
            </p>
            <p>
              (3) Der Anbieter behält sich das Recht vor, die Software
              jederzeit einzustellen, zu verändern oder die Bereitstellung
              ohne Angabe von Gründen und ohne Vorankündigung zu beenden.
              Ein Anspruch auf fortlaufende Bereitstellung, Weiterentwicklung
              oder Aktualisierung besteht nicht.
            </p>
          </section>

          {/* § 3 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 3 Bereitstellung «wie besehen» (As Is)
            </h2>
            <p>
              (1) Die Software wird ausdrücklich «wie besehen» («as is»)
              und «wie verfügbar» («as available») bereitgestellt -- ohne
              jegliche ausdrückliche oder stillschweigende Zusicherung
              hinsichtlich ihrer Beschaffenheit, Funktionalität, Eignung
              für einen bestimmten Zweck, Fehlerfreiheit, Vollständigkeit
              oder Kompatibilität.
            </p>
            <p>
              (2) Der Anbieter gibt insbesondere keine Zusicherung, dass:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>die Software fehlerfrei, unterbrechungsfrei oder sicher funktioniert;</li>
              <li>die Software mit der jeweiligen WordPress-Installation, dem Server, der PHP-Version oder der Datenbank des Nutzers kompatibel ist;</li>
              <li>die Software die spezifischen Anforderungen des Nutzers erfüllt;</li>
              <li>durch die Software verarbeitete oder gespeicherte Daten vollständig, korrekt oder sicher aufbewahrt werden;</li>
              <li>Fehler oder Sicherheitslücken behoben werden;</li>
              <li>die Software frei von Rechten Dritter ist.</li>
            </ul>
            <p>
              (3) Die Nutzung der Software erfolgt auf alleiniges Risiko
              des Nutzers. Der Nutzer ist selbst verantwortlich für die
              regelmäßige Sicherung seiner Daten und seines Systems.
            </p>
          </section>

          {/* § 4 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 4 Vollständiger Gewährleistungsausschluss
            </h2>
            <p>
              (1) Da die Software unentgeltlich im Sinne der §§ 938 ff ABGB
              bereitgestellt wird, ist die gesetzliche Gewährleistung gemäß
              §§ 922 ff ABGB, die nur für entgeltliche Verträge gilt,
              ausgeschlossen. Der Nutzer hat keinerlei
              Gewährleistungsansprüche gegen den Anbieter -- weder auf
              Verbesserung, Austausch, Preisminderung noch auf Wandlung.
            </p>
            <p>
              (2) Der Anbieter übernimmt keine Gewähr für die
              Mangelfreiheit, Funktionsfähigkeit, Richtigkeit oder
              Aktualität der Software. Das Verbrauchergewährleistungsgesetz
              (VGG) findet keine Anwendung, da die Software unentgeltlich
              bereitgestellt wird und der Anbieter keine personenbezogenen
              Daten des Nutzers als Gegenleistung verarbeitet.
            </p>
          </section>

          {/* § 5 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 5 Haftungsausschluss und Haftungsbeschränkung
            </h2>
            <p>
              (1) Der Anbieter haftet -- gleich aus welchem Rechtsgrund --
              nicht für Schäden, die dem Nutzer oder Dritten durch die
              Nutzung, die Installation, die Fehlfunktion oder die
              Nichtnutzbarkeit der Software entstehen. Dies umfasst
              insbesondere, aber nicht ausschließlich:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datenverlust:</strong> Verlust, Beschädigung,
                Verfälschung oder Unzugänglichkeit von Daten jeglicher Art,
                die durch die Software verarbeitet, gespeichert oder
                verwaltet werden;
              </li>
              <li>
                <strong>Systemschäden:</strong> Schäden an der
                WordPress-Installation, am Server, an der Datenbank oder an
                sonstiger Hard- oder Software des Nutzers;
              </li>
              <li>
                <strong>Betriebsunterbrechungen:</strong> Ausfallzeiten,
                Verzögerungen oder Unterbrechungen des Betriebs der Website
                oder des Servers;
              </li>
              <li>
                <strong>Sicherheitsvorfälle:</strong> Unbefugter Zugriff auf
                Daten, Sicherheitslücken oder Datenschutzverletzungen, die
                durch die Software oder in Zusammenhang mit ihr auftreten;
              </li>
              <li>
                <strong>Mittelbare Schäden und Folgeschäden:</strong>
                Entgangener Gewinn, entgangene Einsparungen, Schäden durch
                entgangene Nutzungsmöglichkeit, Reputationsschäden oder
                sonstige indirekte Schäden;
              </li>
              <li>
                <strong>Schäden durch Dritte:</strong> Schäden, die durch
                die Interaktion der Software mit Plugins, Themes oder
                sonstiger Software Dritter entstehen;
              </li>
              <li>
                <strong>Schäden durch Updates:</strong> Schäden, die durch
                die Aktualisierung oder Nichtaktualisierung der Software
                entstehen, einschließlich Inkompatibilitäten mit neueren
                WordPress-Versionen.
              </li>
            </ul>
            <p>
              (2) Der Haftungsausschluss gemäß Abs. 1 gilt für leichte
              Fahrlässigkeit und für grobe Fahrlässigkeit des Anbieters,
              seiner gesetzlichen Vertreter, Erfüllungsgehilfen und
              Mitarbeiter. Dies ist zulässig, da es sich um einen
              unentgeltlichen Vertrag zwischen Unternehmern handelt und
              der Nutzer die Software ohne jegliche Gegenleistung erhält
              (vgl. § 945 ABGB, der die Haftung des unentgeltlichen
              Übergebers auf das arglistige Verschweigen von Mängeln
              beschränkt).
            </p>
            <p>
              (3) <strong>Ausgenommen</strong> vom Haftungsausschluss ist
              die Haftung des Anbieters:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>für vorsätzlich (dolus) verursachte Schäden;</li>
              <li>für Schäden an Leben, Körper oder Gesundheit (Personenschäden);</li>
              <li>
                für Schäden, die auf das arglistige Verschweigen von dem
                Anbieter bekannten Mängeln zurückzuführen sind (§ 945 ABGB).
              </li>
            </ul>
            <p>
              (4) Soweit die Haftung des Anbieters nicht nach Abs. 3
              ausgeschlossen werden kann, ist die Haftung der Höhe nach
              auf den typischerweise vorhersehbaren Schaden beschränkt.
            </p>
          </section>

          {/* § 6 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 6 Pflichten des Nutzers
            </h2>
            <p>
              (1) Der Nutzer ist verpflichtet, vor der Installation der
              Software eine vollständige Sicherung (Backup) seiner
              WordPress-Installation, seiner Datenbank und aller
              relevanten Daten vorzunehmen. Der Anbieter empfiehlt
              dringend, regelmäßige Backups auch während des laufenden
              Betriebs der Software durchzuführen.
            </p>
            <p>
              (2) Der Nutzer ist verpflichtet, die Software nur in einer
              Umgebung einzusetzen, die den in der Produktbeschreibung
              genannten Systemanforderungen entspricht (WordPress 6.0+,
              PHP 8.0+, MySQL 5.7+ oder MariaDB 10.3+).
            </p>
            <p>
              (3) Der Nutzer ist dafür verantwortlich, dass die Software
              nur von autorisierten Personen verwendet wird und dass der
              Zugang zu den WordPress-Administrationsberechtigungen
              angemessen gesichert ist.
            </p>
            <p>
              (4) Für den Empfang automatischer Updates über GitHub ist
              die Installation des Plugins{" "}
              <a
                href="https://github.com/afragen/git-updater"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-secondary transition-colors"
              >
                Git Updater
              </a>{" "}
              (ehemals GitHub Updater) erforderlich. Die Einrichtung und
              Pflege dieses Drittanbieter-Plugins obliegt dem Nutzer. Der
              Anbieter übernimmt keine Haftung für Funktionsstörungen des
              Git-Updater-Plugins oder daraus resultierende
              Inkompatibilitäten.
            </p>
          </section>

          {/* § 7 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 7 Kein Support und keine Wartungspflicht
            </h2>
            <p>
              (1) Mit der unentgeltlichen Bereitstellung der Software ist
              keinerlei Anspruch auf technischen Support, Fehlerbehebung,
              Wartung, Schulung oder Beratung verbunden.
            </p>
            <p>
              (2) Der Anbieter kann nach eigenem Ermessen und ohne
              rechtliche Verpflichtung freiwillig Support leisten,
              Updates bereitstellen oder Fehler beheben. Aus einer
              solchen freiwilligen Leistung entsteht kein Anspruch auf
              zukünftige Leistungen gleicher Art (§ 1300 Satz 2 ABGB).
            </p>
            <p>
              (3) Der Anbieter ist berechtigt, die Software jederzeit
              ohne Vorankündigung einzustellen, das GitHub-Repository zu
              löschen oder den Download zu deaktivieren. Ein
              Rechtsanspruch auf fortlaufende Verfügbarkeit besteht nicht.
            </p>
          </section>

          {/* § 8 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 8 Datenschutz
            </h2>
            <p>
              (1) Die Software selbst erhebt, speichert und verarbeitet
              keine personenbezogenen Daten auf Servern des Anbieters.
              Sämtliche Daten, die der Nutzer in die Software eingibt,
              verbleiben ausschließlich auf dem Server des Nutzers.
            </p>
            <p>
              (2) Der Nutzer ist selbst Verantwortlicher im Sinne der
              Datenschutz-Grundverordnung (DSGVO) für alle
              personenbezogenen Daten, die er in der Software
              verarbeitet. Der Anbieter ist weder Auftragsverarbeiter
              noch gemeinsam Verantwortlicher.
            </p>
            <p>
              (3) Der Nutzer ist verpflichtet, die Nutzung der Software
              im Einklang mit der DSGVO und den jeweils geltenden
              nationalen Datenschutzbestimmungen sicherzustellen. Der
              Anbieter haftet nicht für Datenschutzverletzungen, die
              durch die Nutzung der Software durch den Nutzer entstehen.
            </p>
          </section>

          {/* § 9 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 9 Urheberrecht und Nutzungsrechte
            </h2>
            <p>
              (1) Die Software ist urheberrechtlich geschützt. Sämtliche
              Urheber- und Verwertungsrechte verbleiben beim Anbieter.
            </p>
            <p>
              (2) Der Anbieter räumt dem Nutzer ein einfaches (nicht
              ausschließliches), zeitlich unbefristetes, nicht
              übertragbares Nutzungsrecht ein, die Software im Rahmen
              ihres bestimmungsgemäßen Zwecks (Pfarrverwaltung) auf
              einem oder mehreren Servern des Nutzers einzusetzen.
            </p>
            <p>
              (3) Eine Weitergabe, ein Weiterverkauf, eine Unterlizenzierung
              oder eine öffentliche Zugänglichmachung des Quellcodes der
              Software -- ganz oder teilweise -- ist ohne vorherige
              schriftliche Zustimmung des Anbieters nicht gestattet.
            </p>
          </section>

          {/* § 10 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 10 Freistellung
            </h2>
            <p>
              Der Nutzer stellt den Anbieter von sämtlichen Ansprüchen
              Dritter frei, die gegen den Anbieter aufgrund einer
              vertrags- oder rechtswidrigen Nutzung der Software durch
              den Nutzer erhoben werden. Der Nutzer trägt die Kosten
              der Rechtsverteidigung des Anbieters einschließlich
              sämtlicher Gerichts- und Anwaltskosten in angemessener Höhe.
            </p>
          </section>

          {/* § 11 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 11 Änderung der AGB
            </h2>
            <p>
              (1) Der Anbieter behält sich das Recht vor, diese AGB
              jederzeit zu ändern. Die geänderten AGB werden auf der
              Website des Anbieters veröffentlicht.
            </p>
            <p>
              (2) Die fortgesetzte Nutzung der Software nach
              Veröffentlichung geänderter AGB gilt als Zustimmung zu
              den geänderten Bedingungen. Bei wesentlichen Änderungen
              wird der Anbieter nach Möglichkeit auf der Download-Seite
              darauf hinweisen.
            </p>
          </section>

          {/* § 12 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 12 Salvatorische Klausel
            </h2>
            <p>
              Sollte eine Bestimmung dieser AGB ganz oder teilweise
              unwirksam oder undurchführbar sein oder werden, so wird
              die Gültigkeit der übrigen Bestimmungen hiervon nicht
              berührt. An die Stelle der unwirksamen oder undurchführbaren
              Bestimmung tritt diejenige wirksame und durchführbare
              Regelung, deren Wirkungen der wirtschaftlichen und
              rechtlichen Zielsetzung am nächsten kommen, die die
              Vertragsparteien mit der unwirksamen oder undurchführbaren
              Bestimmung verfolgt haben. Entsprechendes gilt für
              etwaige Regelungslücken.
            </p>
          </section>

          {/* § 13 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 13 Anwendbares Recht und Gerichtsstand
            </h2>
            <p>
              (1) Diese AGB und alle sich daraus ergebenden
              Rechtsstreitigkeiten unterliegen dem Recht der Republik
              Österreich unter Ausschluss des UN-Kaufrechts (CISG) und
              der Verweisungsnormen des internationalen Privatrechts
              (IPRG).
            </p>
            <p>
              (2) Ausschließlicher Gerichtsstand für alle
              Streitigkeiten aus oder im Zusammenhang mit diesen AGB
              ist Wien (Innere Stadt), Österreich, soweit gesetzlich
              zulässig.
            </p>
          </section>

          {/* § 14 */}
          <section>
            <h2 className="font-heading text-2xl text-primary mb-4">
              § 14 Kontakt
            </h2>
            <p>
              Bei Fragen zu diesen AGB wenden Sie sich an:
            </p>
            <p className="mt-4">
              <strong>Mariabrunn Digital</strong>
              <br />
              Pfarre Mariabrunn
              <br />
              Hauptstraße 180
              <br />
              1140 Wien, Österreich
              <br />
              E-Mail:{" "}
              <a
                href="mailto:digital@mariabrunn.at"
                className="text-primary underline hover:text-secondary transition-colors"
              >
                digital@mariabrunn.at
              </a>
            </p>
          </section>

          {/* Hinweis */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="font-heading text-xl text-primary mb-4">
              Rechtliche Hinweise
            </h2>
            <p className="text-sm text-foreground/60">
              Die Haftungs- und Gewährleistungsausschlüsse dieser AGB
              stützen sich auf die Unentgeltlichkeit der
              Softwarebereitstellung. Gemäß § 922 ABGB besteht eine
              gesetzliche Gewährleistungspflicht nur bei entgeltlichen
              Verträgen. Gemäß § 945 ABGB haftet der unentgeltliche
              Übergeber nur bei arglistigem Verschweigen von Mängeln.
              Gemäß § 1300 Satz 2 ABGB besteht für unentgeltlich und
              aus reiner Gefälligkeit erteilte Ratschläge keine Haftung.
              Die Haftung für Vorsatz und Personenschäden kann gemäß
              § 879 Abs. 1 ABGB nicht ausgeschlossen werden und bleibt
              in diesen AGB unberührt.
            </p>
          </section>

        </div>
      </article>
    </>
  );
}
