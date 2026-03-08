<?php
/**
 * Plugin Name: WWD Content Seeder
 * Description: Befüllt alle WilckeWebDeployer-Felder mit den Fallback-Texten aus dem Frontend. Einmal ausführen, dann kann das Plugin deaktiviert werden.
 * Version: 1.0.0
 * Author: Mariabrunn Digital
 * License: GPL-2.0+
 */

if (!defined('ABSPATH')) exit;

// Admin-Menü registrieren
add_action('admin_menu', function () {
    add_management_page(
        'WWD Seeder',
        'WWD Seeder',
        'manage_options',
        'wwd-seeder',
        'wwd_seeder_admin_page'
    );
});

// Admin-Seite rendern
function wwd_seeder_admin_page() {
    $results = null;

    if (isset($_POST['wwd_seed_run']) && check_admin_referer('wwd_seed_action', 'wwd_seed_nonce')) {
        $results = wwd_seeder_run();
    }

    ?>
    <div class="wrap">
        <h1>WWD Content Seeder</h1>
        <p>Dieses Plugin schreibt alle Fallback-Texte aus dem Next.js-Frontend in die WordPress-Datenbank,
           sodass sie im WWD-Backend sichtbar und editierbar sind.</p>
        <p><strong>Hinweis:</strong> Es werden nur leere Felder befüllt. Bereits vorhandene Inhalte werden nicht überschrieben.</p>

        <form method="post">
            <?php wp_nonce_field('wwd_seed_action', 'wwd_seed_nonce'); ?>
            <p>
                <input type="submit" name="wwd_seed_run" class="button button-primary button-hero"
                       value="Texte jetzt einfügen"
                       onclick="return confirm('Alle leeren WWD-Felder mit Fallback-Texten befüllen?');" />
            </p>
        </form>

        <?php if ($results !== null): ?>
            <div class="notice notice-success" style="margin-top: 20px;">
                <p><strong>Seed abgeschlossen!</strong></p>
            </div>
            <h2>Ergebnis</h2>
            <pre style="background: #f5f5f5; padding: 15px; border: 1px solid #ddd; max-height: 500px; overflow-y: auto;"><?php
                echo esc_html(implode("\n", $results));
            ?></pre>
            <p>Das Plugin kann jetzt unter <a href="<?php echo admin_url('plugins.php'); ?>">Plugins</a> deaktiviert und gelöscht werden.</p>
        <?php endif; ?>
    </div>
    <?php
}

// =========================================================================
// Seed-Logik
// =========================================================================

function wwd_seeder_run() {
    $results = [];

    // Helper: get singleton post ID for a page
    $get_pid = function ($page_slug) {
        $posts = get_posts([
            'post_type'      => 'wwd_' . $page_slug,
            'post_status'    => 'publish',
            'posts_per_page' => 1,
            'fields'         => 'ids',
        ]);
        return !empty($posts) ? (int) $posts[0] : null;
    };

    // Helper: seed inline fields (only if empty)
    $seed_inline = function ($post_id, $section, $data) use (&$results) {
        foreach ($data as $field => $value) {
            $key = '_wwd_' . $section . '_' . $field;
            $existing = get_post_meta($post_id, $key, true);
            if (empty($existing)) {
                update_post_meta($post_id, $key, $value);
                $results[] = "  + {$key}";
            } else {
                $results[] = "  - {$key} (bereits vorhanden)";
            }
        }
    };

    // Helper: seed repeatable items (only if empty)
    $seed_repeatable = function ($post_id, $section, $items) use (&$results) {
        $key = '_wwd_' . $section . '_items';
        $existing = get_post_meta($post_id, $key, true);
        if (empty($existing) || !is_array($existing) || count($existing) === 0) {
            update_post_meta($post_id, $key, $items);
            $results[] = "  + {$key} (" . count($items) . " Eintraege)";
        } else {
            $results[] = "  - {$key} (bereits " . count($existing) . " Eintraege)";
        }
    };

    // =====================================================================
    // HOME
    // =====================================================================
    $pid = $get_pid('home');
    if ($pid) {
        $results[] = "=== HOME (Post #{$pid}) ===";

        $seed_repeatable($pid, 'hero', [
            [
                'hero_title' => 'Glaube. Gemeinschaft. Digital.',
                'hero_description' => 'Mariabrunn Digital bringt die Pfarre ins digitale Zeitalter: Livestreams der Heiligen Messe, tägliche Kurzauslegungen, Podcasts und ein einzigartiges Bibelprojekt.',
                'hero_image' => '',
                'primary_cta_text' => 'Livestream ansehen',
                'primary_cta_link' => '/livestream',
                'secondary_cta_text' => 'Mitmachen',
                'secondary_cta_link' => '/mitmachen',
            ],
            [
                'hero_title' => 'Auf den Punkt.',
                'hero_description' => 'Jeden Tag eine kurze Auslegung zum Tagesevangelium mit Diakon Peter Scheuchel – in nur 2 bis 3 Minuten.',
                'hero_image' => '',
                'primary_cta_text' => 'Jetzt anhören',
                'primary_cta_link' => '/auf-den-punkt',
                'secondary_cta_text' => '',
                'secondary_cta_link' => '',
            ],
            [
                'hero_title' => 'Wallfahrtskirche Mariabrunn.',
                'hero_description' => 'Seit dem 15. Jahrhundert ein Ort der Andacht und Wallfahrt. Entdecken Sie die Geschichte, Kunst und Spiritualität unserer Kirche.',
                'hero_image' => '',
                'primary_cta_text' => 'Mehr erfahren',
                'primary_cta_link' => '/kirche',
                'secondary_cta_text' => '',
                'secondary_cta_link' => '',
            ],
        ]);

        $seed_repeatable($pid, 'bento_grid', [
            ['title' => 'Auf den Punkt', 'description' => 'Tägliche 2–3 Minuten Kurzauslegung zum Tagesevangelium mit Diakon Peter Scheuchel.', 'image' => '', 'link' => '/auf-den-punkt', 'size' => 'large'],
            ['title' => 'Bibel in einem Jahr', 'description' => 'Gemeinsam die gesamte Bibel in einem Jahr lesen – als Gemeinschaft, mit Begleitung.', 'image' => '', 'link' => '/bibel', 'size' => 'medium'],
            ['title' => 'Livestream', 'description' => 'Die Heilige Messe live aus Mariabrunn – jeden Sonntag und an Feiertagen.', 'image' => '', 'link' => '/livestream', 'size' => 'medium'],
            ['title' => 'Gottesdienste', 'description' => 'Messzeiten, Rosenkranz und Andachten – die aktuelle Gottesdienstordnung.', 'image' => '', 'link' => '/gottesdienste', 'size' => 'small'],
            ['title' => 'Podcast & Medienarbeit', 'description' => 'Predigten, Vorträge und Gespräche als Podcast – überall verfügbar.', 'image' => '', 'link' => 'https://www.youtube.com/@MariabrunnDigital', 'size' => 'small'],
        ]);

        $seed_repeatable($pid, 'audioguide', [
            ['station_title' => 'Hochaltar', 'description' => 'Der barocke Hochaltar mit dem Gnadenbild der Muttergottes.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Deckenfresco', 'description' => 'Die prächtigen Fresken erzählen die Geschichte der Wallfahrt.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Gnadenbild', 'description' => 'Das wundertätige Gnadenbild Mariens – Ziel unzähliger Pilger.', 'audio_file' => '', 'image' => ''],
        ]);

        $seed_inline($pid, 'church_history', [
            'title' => 'Wallfahrtskirche Mariabrunn',
            'description' => 'Die Pfarr- und Wallfahrtskirche Mariabrunn blickt auf eine reiche Geschichte zurück. Seit dem 15. Jahrhundert ist sie ein Ort der Andacht und Wallfahrt. Der barocke Bau beeindruckt mit seinen Fresken, dem Hochaltar und dem berühmten Gnadenbild der Muttergottes.',
            'cta_text' => 'Mehr zur Kirche',
            'cta_link' => '/kirche',
        ]);

        $seed_inline($pid, 'movement', [
            'title' => 'Mariabrunn Digital',
            'description' => 'Mariabrunn Digital ist mehr als ein Medienprojekt: Wir verbinden Glaube, Gemeinschaft und moderne Technik. Unser Ziel ist es, die Frohe Botschaft über digitale Kanäle zu verbreiten und andere Pfarren auf ihrem Weg in die digitale Welt zu begleiten.',
            'workshop_cta_text' => 'Workshops für Pfarren',
            'workshop_cta_link' => '/mariabrunn-digital',
            'info_cta_text' => 'Mehr über Mariabrunn Digital',
            'info_cta_link' => '/mariabrunn-digital',
        ]);

        $seed_inline($pid, 'donation', [
            'donation_title' => 'Unterstützen Sie Mariabrunn Digital',
            'donation_description' => 'Unser Projekt wird ausschließlich durch Spenden finanziert. Jeder Beitrag hilft uns, die technische Ausstattung zu verbessern und neue Formate zu entwickeln.',
            'donation_goal' => '15000',
            'donation_current' => '8750',
            'donation_link' => 'https://www.mariabrunn.at/spenden',
        ]);
    } else {
        $results[] = "=== HOME: Kein Post gefunden ===";
    }

    // =====================================================================
    // AUF DEN PUNKT
    // =====================================================================
    $pid = $get_pid('auf-den-punkt');
    if ($pid) {
        $results[] = "\n=== AUF DEN PUNKT (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Auf den Punkt.',
            'hero_description' => 'Tägliche Kurzauslegung zum Tagesevangelium und zur Tageslesung – 2-3 Minuten mit Diakon Peter Scheuchel.',
            'primary_cta_text' => 'Zur YouTube-Playlist',
            'primary_cta_link' => 'https://www.youtube.com/playlist?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0',
        ]);
    } else {
        $results[] = "\n=== AUF DEN PUNKT: Kein Post gefunden ===";
    }

    // =====================================================================
    // LIVESTREAM
    // =====================================================================
    $pid = $get_pid('livestream');
    if ($pid) {
        $results[] = "\n=== LIVESTREAM (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Livestream',
            'hero_description' => 'Feiern Sie die Heilige Messe live mit uns – direkt aus der Wallfahrtskirche Mariabrunn.',
            'primary_cta_text' => 'Auf YouTube ansehen',
            'primary_cta_link' => 'https://www.youtube.com/@MariabrunnDigital/live',
        ]);
    } else {
        $results[] = "\n=== LIVESTREAM: Kein Post gefunden ===";
    }

    // =====================================================================
    // BIBEL
    // =====================================================================
    $pid = $get_pid('bibel');
    if ($pid) {
        $results[] = "\n=== BIBEL (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Bibel in einem Jahr.',
            'hero_description' => 'Gemeinsam die gesamte Bibel in einem Jahr lesen – als Gemeinschaft, mit Begleitung und täglichen Impulsen.',
            'primary_cta_text' => 'Jetzt mitmachen',
            'primary_cta_link' => '#anmeldung',
        ]);
    } else {
        $results[] = "\n=== BIBEL: Kein Post gefunden ===";
    }

    // =====================================================================
    // KIRCHE
    // =====================================================================
    $pid = $get_pid('kirche');
    if ($pid) {
        $results[] = "\n=== KIRCHE (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Pfarr- und Wallfahrtskirche Mariabrunn',
            'hero_description' => 'Ein barocker Gnadenort im Wienerwald – entdecken Sie Geschichte, Kunst und Glauben.',
            'primary_cta_text' => 'Audioguide starten',
            'primary_cta_link' => '#audioguide',
        ]);
        $seed_repeatable($pid, 'audioguide', [
            ['station_title' => 'Station 1: Hochaltar', 'description' => 'Der barocke Hochaltar bildet das Herzstück der Wallfahrtskirche. In seinem Zentrum thront das Gnadenbild der Muttergottes.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Station 2: Deckenfresco', 'description' => 'Die prächtigen Fresken an der Kirchendecke stammen aus dem 18. Jahrhundert und erzählen die Geschichte der Wallfahrt.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Station 3: Gnadenbild', 'description' => 'Das wundertätige Gnadenbild der Muttergottes von Mariabrunn ist seit Jahrhunderten Ziel unzähliger Pilger.', 'audio_file' => '', 'image' => ''],
        ]);
    } else {
        $results[] = "\n=== KIRCHE: Kein Post gefunden ===";
    }

    // =====================================================================
    // MITMACHEN
    // =====================================================================
    $pid = $get_pid('mitmachen');
    if ($pid) {
        $results[] = "\n=== MITMACHEN (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Werde Teil des Teams.',
            'hero_description' => 'Mariabrunn Digital lebt von ehrenamtlichem Engagement. Ob Technik, Redaktion oder Lesung – bei uns findet jeder seinen Platz.',
            'primary_cta_text' => 'Jetzt mitmachen',
            'primary_cta_link' => '#formular',
        ]);
    } else {
        $results[] = "\n=== MITMACHEN: Kein Post gefunden ===";
    }

    // =====================================================================
    // KRANKENKOMMUNION
    // =====================================================================
    $pid = $get_pid('krankenkommunion');
    if ($pid) {
        $results[] = "\n=== KRANKENKOMMUNION (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Krankenkommunion.',
            'hero_description' => 'Wir bringen Ihnen die Heilige Kommunion nach Hause – für alle, die nicht zur Kirche kommen können.',
            'primary_cta_text' => 'Anfrage senden',
            'primary_cta_link' => '#formular',
        ]);
    } else {
        $results[] = "\n=== KRANKENKOMMUNION: Kein Post gefunden ===";
    }

    // =====================================================================
    // CHRIST WERDEN
    // =====================================================================
    $pid = $get_pid('christ-werden');
    if ($pid) {
        $results[] = "\n=== CHRIST WERDEN (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Christ werden. Ihr Weg beginnt hier.',
            'hero_description' => 'Egal, woher Sie kommen und was Sie bisher geglaubt haben – hier finden Sie Antworten, Begleitung und eine offene Tür.',
            'primary_cta_text' => 'Gespräch vereinbaren',
            'primary_cta_link' => '#kontakt',
        ]);
        $seed_inline($pid, 'intro', [
            'body' => '<p>Jeder Mensch trägt Fragen in sich: Woher komme ich? Wohin gehe ich? Hat mein Leben einen tieferen Sinn? Die katholische Kirche lädt jeden ein, diesen Fragen nachzugehen – ohne Zwang, ohne Eile, aber mit Überzeugung.</p><p>Ganz gleich, ob Sie zum ersten Mal über Gott nachdenken, aus einer anderen Religion kommen oder als Protestant die katholische Kirche entdecken möchten: Hier finden Sie einen Ausgangspunkt für Ihren Weg.</p>',
        ]);
        $seed_repeatable($pid, 'pathways', [
            ['title' => 'Für Suchende', 'description' => 'Sie glauben (noch) nicht, sind aber neugierig? Hier finden Sie Antworten auf die großen Fragen des Lebens – ehrlich, respektvoll und ohne Druck.', 'href' => '/christ-werden/fuer-suchende', 'icon' => ''],
            ['title' => 'Für Muslime', 'description' => 'Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie – vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.', 'href' => '/christ-werden/fuer-muslime', 'icon' => ''],
            ['title' => 'Für Protestanten', 'description' => 'Sie sind evangelisch und denken über die katholische Kirche nach? Entdecken Sie, was uns verbindet – und was die katholische Tradition zu bieten hat.', 'href' => '/christ-werden/fuer-protestanten', 'icon' => ''],
        ]);
        $seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Schreiben Sie uns – unverbindlich und vertraulich.',
        ]);
    } else {
        $results[] = "\n=== CHRIST WERDEN: Kein Post gefunden ===";
    }

    // =====================================================================
    // CHRIST WERDEN - FÜR SUCHENDE
    // =====================================================================
    $pid = $get_pid('cw-suchende');
    if ($pid) {
        $results[] = "\n=== FUER SUCHENDE (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Auf der Suche. Nach Antworten.',
            'hero_description' => 'Sie zweifeln, Sie fragen, Sie suchen – und genau das ist der richtige Ausgangspunkt.',
            'primary_cta_text' => 'Gespräch anfragen',
            'primary_cta_link' => '#kontakt',
        ]);
        $seed_repeatable($pid, 'arguments', [
            ['title' => 'Warum überhaupt Gott?', 'content' => 'Alles, was zu existieren beginnt, hat eine Ursache. Das Universum hat zu existieren begonnen – das bestätigt die moderne Kosmologie mit dem Urknall. Eine unendliche Kette von Ursachen ist logisch unmöglich. Es muss also eine erste, unverursachte Ursache geben – ein Wesen, das aus sich heraus existiert. Thomas von Aquin nannte dieses Wesen "das, was alle Gott nennen". Dazu kommt die Feinabstimmung des Universums: Die Naturkonstanten sind mit einer Präzision aufeinander abgestimmt, die Wissenschaftler aller Weltanschauungen als außergewöhnlich anerkennen. Würde man auch nur eine dieser Konstanten um einen winzigen Bruchteil verändern, wäre kein Leben möglich.'],
            ['title' => 'Warum gerade Jesus?', 'content' => 'Die Existenz Jesu von Nazareth ist historisch so gut belegt wie die kaum eines anderen Menschen der Antike. Der jüdische Historiker Flavius Josephus, der römische Historiker Tacitus und Plinius der Jüngere erwähnen Jesus unabhängig voneinander. Das Auferstehungsargument stützt sich auf mehrere Fakten: das leere Grab, die zahlreichen Erscheinungen, und die radikale Verwandlung der Jünger. Männer, die nach der Kreuzigung verängstigt geflohen waren, traten plötzlich öffentlich auf – obwohl ihnen dafür Verfolgung, Folter und Tod drohten.'],
            ['title' => 'Warum die katholische Kirche?', 'content' => 'Die katholische Kirche ist die älteste durchgehend bestehende Institution der Welt. Von den Aposteln über die Kirchenväter bis zum heutigen Papst lässt sich eine ununterbrochene Kette der Weitergabe nachzeichnen. Der Katholizismus hat eine der reichsten intellektuellen Traditionen der Menschheitsgeschichte hervorgebracht. Die katholische Kirche ist zudem der größte nichtstaatliche Anbieter von Bildung und Gesundheitsversorgung weltweit.'],
            ['title' => 'Glaube und Wissenschaft – ein Widerspruch?', 'content' => 'Naturwissenschaft und Glaube beantworten verschiedene Fragen. Die Wissenschaft fragt "Wie funktioniert die Welt?", der Glaube fragt "Warum gibt es überhaupt etwas, und welchen Sinn hat es?" Der Begründer der Urknalltheorie war der katholische Priester Georges Lemaître, der Vater der Genetik war der Augustinermönch Gregor Mendel. Der Widerspruch zwischen Wissenschaft und Glaube ist ein moderner Mythos, keine historische Realität.'],
        ]);
        $seed_repeatable($pid, 'faq', [
            ['question' => 'Wenn Gott gut ist, warum gibt es dann Leid?', 'answer' => 'Gott ist kein ferner Beobachter des Leids, sondern hat es in Jesus Christus selbst durchlitten. Echte Liebe setzt Freiheit voraus, und Freiheit schließt die Möglichkeit des Missbrauchs ein. Der katholische Glaube verspricht nicht, alles Leid zu erklären – aber er verspricht, dass es nicht das letzte Wort hat.'],
            ['question' => 'Muss ich alles wörtlich nehmen, was in der Bibel steht?', 'answer' => 'Nein. Die katholische Kirche unterscheidet verschiedene literarische Gattungen in der Bibel. Nicht alles ist als naturwissenschaftliche Aussage gemeint. Die Kirche ermutigt dazu, die Bibel im Zusammenhang zu lesen und sich von der 2000-jährigen Auslegungstradition leiten zu lassen.'],
            ['question' => 'Kann ich Christ sein und trotzdem Fragen haben?', 'answer' => 'Absolut. Zweifel und Fragen gehören zum Glaubensweg dazu. Die katholische Tradition sieht den Glauben nicht als blinde Annahme, sondern als vernünftigen Akt, der ständig vertieft werden will.'],
            ['question' => 'Wie funktioniert eine Taufe als Erwachsener?', 'answer' => 'Erwachsene durchlaufen den sogenannten Katechumenat – eine Zeit der Vorbereitung, die in der Regel ein bis zwei Jahre dauert. Die Taufe findet dann feierlich statt, in der Regel in der Osternacht. Es gibt keinen Druck und kein Zeitlimit.'],
        ]);
        $seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Wir hören Ihnen zu – unverbindlich und vertraulich.',
        ]);
    } else {
        $results[] = "\n=== FUER SUCHENDE: Kein Post gefunden ===";
    }

    // =====================================================================
    // CHRIST WERDEN - FÜR MUSLIME
    // =====================================================================
    $pid = $get_pid('cw-muslime');
    if ($pid) {
        $results[] = "\n=== FUER MUSLIME (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Ein neuer Weg. In Respekt.',
            'hero_description' => 'Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie – vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.',
            'primary_cta_text' => 'Vertrauliches Gespräch',
            'primary_cta_link' => '#kontakt',
        ]);
        $seed_repeatable($pid, 'arguments', [
            ['title' => 'Was Christen und Muslime verbindet', 'content' => 'Christen und Muslime bekennen sich zum selben einen Gott – den Gott Abrahams. Maria ist die einzige Frau, die im Koran namentlich genannt wird. Beide Religionen stimmen überein: Gott ist zutiefst barmherzig.'],
            ['title' => 'Wer ist Jesus für Christen?', 'content' => 'Für Christen ist Jesus weit mehr als ein Prophet: der Sohn Gottes, der Mensch geworden ist. "Sohn Gottes" meint keine biologische Zeugung – es ist ein Relationsbegriff. Jesus hat Ansprüche erhoben, die über die Rolle eines Propheten hinausgehen.'],
            ['title' => 'Was bedeutet Dreifaltigkeit?', 'content' => 'Die Trinität ist kein Polytheismus. Christen bekennen streng einen Gott. Innerhalb dieses einen göttlichen Wesens bestehen drei Personen in ewiger Beziehung: Vater, Sohn und Heiliger Geist.'],
            ['title' => 'Erlösung: Gnade statt Ungewissheit', 'content' => 'Das Christentum bietet eine radikal andere Botschaft: Erlösung ist ein Geschenk der Gnade, das im Glauben empfangen wird. Diese Gnade befähigt dann zu guten Werken – nicht umgekehrt.'],
            ['title' => 'Wurde die Bibel verfälscht?', 'content' => 'Der Koran selbst bestätigt die Bibel. Über 5.800 griechische Manuskripte des Neuen Testaments sind erhalten. Eine koordinierte Fälschung wäre praktisch unmöglich gewesen.'],
        ]);
        $seed_repeatable($pid, 'faq', [
            ['question' => 'Muss ich meine Familie informieren?', 'answer' => 'Das ist eine sehr persönliche Entscheidung. Alle Gespräche mit uns sind absolut vertraulich. Sie bestimmen das Tempo und den Weg.'],
            ['question' => 'Wie lange dauert die Vorbereitung?', 'answer' => 'Die Vorbereitung (Katechumenat) dauert in der Regel ein bis zwei Jahre. Es gibt keinen Druck und kein festes Zeitlimit.'],
            ['question' => 'Kann ich erst ausprobieren, ohne mich zu verpflichten?', 'answer' => 'Selbstverständlich. Sie können Gottesdienste besuchen und den Glauben kennenlernen, ohne sich zu verpflichten.'],
            ['question' => 'Werde ich von der Gemeinde akzeptiert?', 'answer' => 'Ja. Die Pfarrgemeinde Mariabrunn heißt jeden willkommen, unabhängig von Herkunft und bisherigem Glaubensweg.'],
        ]);
        $seed_inline($pid, 'contact', [
            'title' => 'Vertrauliches Gespräch',
            'description' => 'Schreiben Sie uns – wir behandeln jede Anfrage mit absoluter Diskretion.',
        ]);
    } else {
        $results[] = "\n=== FUER MUSLIME: Kein Post gefunden ===";
    }

    // =====================================================================
    // CHRIST WERDEN - FÜR PROTESTANTEN
    // =====================================================================
    $pid = $get_pid('cw-protestanten');
    if ($pid) {
        $results[] = "\n=== FUER PROTESTANTEN (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'Schon Christ. Neue Heimat.',
            'hero_description' => 'Sie sind evangelisch und fühlen sich zur katholischen Kirche hingezogen? Entdecken Sie, was die katholische Tradition zu bieten hat.',
            'primary_cta_text' => 'Gespräch anfragen',
            'primary_cta_link' => '#kontakt',
        ]);
        $seed_repeatable($pid, 'arguments', [
            ['title' => 'Was uns verbindet – und wo der Weg weitergeht', 'content' => 'Katholiken und Protestanten teilen das Fundament: die Taufe, das Bekenntnis zu Jesus Christus, die Heilige Schrift. Die katholische Kirche kann eine ununterbrochene Linie von den Aposteln bis heute nachweisen.'],
            ['title' => 'Sola Scriptura – und wer bestimmte den Kanon?', 'content' => 'Wer hat festgelegt, welche Bücher zur Bibel gehören? Es war die Kirche – auf den Konzilien von Hippo (393) und Karthago (397). Die Bibel selbst lehrt kein Sola Scriptura.'],
            ['title' => 'Die Eucharistie: "Das IST mein Leib"', 'content' => 'Jesus sagte nicht "Das symbolisiert meinen Leib." Er sagte: "Das IST mein Leib." Die frühe Kirche hat es ebenso verstanden. Die Realpräsenz gehört zum ältesten Glaubensgut der Kirche.'],
            ['title' => 'Maria und die Heiligen: Fürbitte, nicht Anbetung', 'content' => 'Die Kirche unterscheidet klar zwischen Anbetung (allein Gott) und Verehrung (den Heiligen). Maria hat in der Schrift eine herausragende Stellung.'],
            ['title' => 'Die Beichte: Vergebung, die man spüren kann', 'content' => '"Wem ihr die Sünden vergebt, dem sind sie vergeben" (Joh 20,23). Viele Konvertiten berichten, dass die Beichte eines der größten Geschenke ist, die sie in der katholischen Kirche gefunden haben.'],
        ]);
        $seed_repeatable($pid, 'faq', [
            ['question' => 'Muss ich nochmals getauft werden?', 'answer' => 'Nein. Die katholische Kirche erkennt die protestantische Taufe voll an. Bei der Aufnahme empfangen Sie die Firmung und die erste heilige Kommunion.'],
            ['question' => 'Wie steht die katholische Kirche zur Ökumene?', 'answer' => 'Die katholische Kirche ist dem ökumenischen Dialog zutiefst verpflichtet. Ökumene bedeutet die ehrliche Suche nach der vollen Einheit, die Christus gewollt hat.'],
            ['question' => 'Was passiert bei der Aufnahme konkret?', 'answer' => 'Sie legen das Glaubensbekenntnis ab, empfangen die Firmung und nehmen zum ersten Mal an der Eucharistie teil.'],
            ['question' => 'Was bedeutet päpstliche Unfehlbarkeit wirklich?', 'answer' => 'Unfehlbarkeit bedeutet nicht, dass der Papst in allem recht hat. Es bedeutet ausschließlich: Wenn der Papst in höchster Lehrautorität eine Glaubenslehre als verbindlich erklärt, bewahrt ihn der Heilige Geist vor Irrtum. Das ist in der Kirchengeschichte nur sehr selten geschehen.'],
            ['question' => 'Ist das Fegefeuer unbiblisch?', 'answer' => 'Paulus schreibt: "Er selbst aber wird gerettet werden, doch so wie durch Feuer hindurch" (1 Kor 3,15). Das Fegefeuer ist die Reinigung derer, die in der Gnade Gottes sterben, aber noch der Läuterung bedürfen.'],
        ]);
        $seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Wir hören Ihnen zu – unverbindlich und vertraulich.',
        ]);
    } else {
        $results[] = "\n=== FUER PROTESTANTEN: Kein Post gefunden ===";
    }

    // =====================================================================
    // KSMJ
    // =====================================================================
    $pid = $get_pid('ksmj');
    if ($pid) {
        $results[] = "\n=== KSMJ (Post #{$pid}) ===";
        $seed_inline($pid, 'hero', [
            'hero_title' => 'KSMJ. Glaube trifft Medien.',
            'hero_description' => 'Die Katholische Studio- und Medienjugend verbindet professionelle Medienarbeit mit lebendigem Glauben – ein Jugendverband für alle, die mehr wollen.',
            'primary_cta_text' => 'Mitmachen',
            'primary_cta_link' => '#kontakt',
        ]);
        $seed_inline($pid, 'intro', [
            'title' => 'Was ist die KSMJ?',
            'body' => '<p>Die Katholische Studio- und Medienjugend (KSMJ) ist ein Jugendverband, der 2021 in Bamberg gegründet wurde – mitten in der Corona-Pandemie, als Kirche plötzlich digital werden musste. Unser Ziel: Katholische Medienarbeit von Jugendlichen für die Kirche. Professionell, engagiert und mit Begeisterung für Technik und Glauben.</p><p>Wir glauben, dass moderne Medienarbeit und katholischer Glaube keine Gegensätze sind – sondern dass gerade die Kombination aus beidem Jugendliche begeistern und die Kirche voranbringen kann.</p>',
        ]);
        $seed_repeatable($pid, 'activities', [
            ['title' => 'Livestream-Produktion', 'description' => 'Wir übertragen Gottesdienste live – professionell, mit mehreren Kameras, Ton und Regie. Jugendliche lernen dabei echtes Produktionshandwerk.', 'icon' => '🎬'],
            ['title' => 'Podcast & Audio', 'description' => 'Von der Aufnahme bis zum Schnitt: Wir produzieren Podcasts, Kurzimpulse und Audiobeiträge rund um Glaube und Kirche.', 'icon' => '🎙️'],
            ['title' => 'Social Media & Grafik', 'description' => 'Wir gestalten Inhalte für Instagram, YouTube und Co. – damit die Frohe Botschaft auch dort ankommt, wo Jugendliche unterwegs sind.', 'icon' => '📱'],
            ['title' => 'Technik & IT', 'description' => 'Kameratechnik, Mischpulte, Netzwerke, Webentwicklung – bei uns lernst du Technik, die anderswo Geld kostet. Und setzt sie für etwas Sinnvolles ein.', 'icon' => '💻'],
            ['title' => 'Workshops & Schulungen', 'description' => 'Wir bilden aus: Videoproduktion, Tontechnik, Grafikdesign, Webentwicklung. Regelmäßige Workshops für Einsteiger und Fortgeschrittene.', 'icon' => '🎓'],
            ['title' => 'Gemeinschaft & Glaube', 'description' => 'Die KSMJ ist mehr als ein Technikverein. Gemeinsame Gebete, Ausflüge, Lager und Gruppenstunden gehören genauso dazu wie die Arbeit am Equipment.', 'icon' => '✝️'],
        ]);
        $seed_repeatable($pid, 'timeline', [
            ['year' => '2021', 'title' => 'Gründung in Bamberg', 'description' => 'Während der Corona-Pandemie entsteht die Idee: Katholische Medienarbeit von und für Jugendliche. In Bamberg wird die KSMJ gegründet.'],
            ['year' => '2022', 'title' => 'Erste Livestreams', 'description' => 'Die ersten professionellen Gottesdienst-Livestreams gehen online. Junge Menschen übernehmen Kamera, Regie und Ton.'],
            ['year' => '2023', 'title' => 'Wachstum & Vernetzung', 'description' => 'Die KSMJ wächst und vernetzt sich mit Pfarren und Diözesen. Workshops und Schulungen werden zum festen Bestandteil.'],
            ['year' => '2024', 'title' => 'KSMJ Wien', 'description' => 'Die KSMJ kommt nach Wien. In Zusammenarbeit mit Mariabrunn Digital entsteht ein neuer Standort mit eigener Studio- und Medienarbeit.'],
        ]);
        $seed_inline($pid, 'wien', [
            'title' => 'KSMJ Wien',
            'body' => '<p>In Wien arbeitet die KSMJ eng mit Mariabrunn Digital zusammen. Gemeinsam produzieren wir Livestreams, gestalten Social-Media-Inhalte und bilden Jugendliche in Medientechnik aus. Unser Studio in Mariabrunn steht allen offen, die mitmachen wollen.</p>',
        ]);
        $seed_repeatable($pid, 'organisation', [
            ['title' => 'Struktur', 'description' => 'Die KSMJ ist ein katholischer Jugendverband, organisiert in lokalen Gruppen (Studien). Jede Studie arbeitet eigenständig in einer Pfarre oder Diözese, eingebettet in die überregionale KSMJ-Gemeinschaft.'],
            ['title' => 'Mitgliedschaft', 'description' => 'Mitmachen kann jeder ab 14 Jahren. Es gibt keine Aufnahmeprüfung und keine Gebühr. Komm einfach vorbei, lerne uns kennen und entscheide selbst, ob die KSMJ etwas für dich ist.'],
            ['title' => 'Trägerschaft', 'description' => 'Die KSMJ Wien wird getragen von der Pfarre Mariabrunn und ist Teil des Projekts Mariabrunn Digital. Wir sind kirchlich eingebunden und arbeiten eng mit der Diözese zusammen.'],
            ['title' => 'Ausbildung', 'description' => 'Unsere Mitglieder lernen Videoproduktion, Tontechnik, Grafikdesign und Webentwicklung. Die Ausbildung findet praxisnah statt – direkt bei echten Produktionen.'],
        ]);
        $seed_inline($pid, 'contact', [
            'title' => 'Mitmachen bei der KSMJ',
            'description' => 'Du bist jung, technikbegeistert und willst deinen Glauben mit modernen Medien verbinden? Dann bist du bei uns richtig. Schreib uns – wir freuen uns auf dich!',
        ]);
    } else {
        $results[] = "\n=== KSMJ: Kein Post gefunden ===";
    }

    return $results;
}
