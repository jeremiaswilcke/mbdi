<?php
/**
 * WilckeWebDeployer Data Seeder
 *
 * Einmalig als mu-plugin ausführen, um alle Fallback-Texte in WordPress vorzubefüllen.
 *
 * ANLEITUNG:
 * 1. Diese Datei nach wp-content/mu-plugins/wwd-seed.php kopieren
 * 2. Im WP-Admin aufrufen: /wp-admin/?wwd_seed=run
 * 3. Nach erfolgreichem Seed die Datei wieder löschen
 */

if (!defined('ABSPATH')) exit;

add_action('admin_init', function () {
    if (!isset($_GET['wwd_seed']) || $_GET['wwd_seed'] !== 'run') return;
    if (!current_user_can('manage_options')) return;

    $results = [];

    // Helper: get singleton post ID for a page
    function wwd_get_post_id($page_slug) {
        $posts = get_posts([
            'post_type'      => 'wwd_' . $page_slug,
            'post_status'    => 'publish',
            'posts_per_page' => 1,
            'fields'         => 'ids',
        ]);
        return !empty($posts) ? (int) $posts[0] : null;
    }

    // Helper: seed inline fields (only if empty)
    function wwd_seed_inline($post_id, $section, $data, &$results) {
        foreach ($data as $field => $value) {
            $key = '_wwd_' . $section . '_' . $field;
            $existing = get_post_meta($post_id, $key, true);
            if (empty($existing)) {
                update_post_meta($post_id, $key, $value);
                $results[] = "  ✓ {$key}";
            } else {
                $results[] = "  – {$key} (bereits vorhanden)";
            }
        }
    }

    // Helper: seed repeatable items (only if empty)
    function wwd_seed_repeatable($post_id, $section, $items, &$results) {
        $key = '_wwd_' . $section . '_items';
        $existing = get_post_meta($post_id, $key, true);
        if (empty($existing) || !is_array($existing) || count($existing) === 0) {
            update_post_meta($post_id, $key, $items);
            $results[] = "  ✓ {$key} (" . count($items) . " Einträge)";
        } else {
            $results[] = "  – {$key} (bereits " . count($existing) . " Einträge)";
        }
    }

    // =========================================================================
    // HOME
    // =========================================================================
    $pid = wwd_get_post_id('home');
    if ($pid) {
        $results[] = "=== HOME (Post #{$pid}) ===";

        wwd_seed_repeatable($pid, 'hero', [
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
        ], $results);

        wwd_seed_repeatable($pid, 'bento_grid', [
            ['title' => 'Auf den Punkt', 'description' => 'Tägliche 2–3 Minuten Kurzauslegung zum Tagesevangelium mit Diakon Peter Scheuchel.', 'image' => '', 'link' => '/auf-den-punkt', 'size' => 'large'],
            ['title' => 'Bibel in einem Jahr', 'description' => 'Gemeinsam die gesamte Bibel in einem Jahr lesen – als Gemeinschaft, mit Begleitung.', 'image' => '', 'link' => '/bibel', 'size' => 'medium'],
            ['title' => 'Livestream', 'description' => 'Die Heilige Messe live aus Mariabrunn – jeden Sonntag und an Feiertagen.', 'image' => '', 'link' => '/livestream', 'size' => 'medium'],
            ['title' => 'Gottesdienste', 'description' => 'Messzeiten, Rosenkranz und Andachten – die aktuelle Gottesdienstordnung.', 'image' => '', 'link' => '/gottesdienste', 'size' => 'small'],
            ['title' => 'Podcast & Medienarbeit', 'description' => 'Predigten, Vorträge und Gespräche als Podcast – überall verfügbar.', 'image' => '', 'link' => 'https://www.youtube.com/@MariabrunnDigital', 'size' => 'small'],
        ], $results);

        wwd_seed_repeatable($pid, 'audioguide', [
            ['station_title' => 'Hochaltar', 'description' => 'Der barocke Hochaltar mit dem Gnadenbild der Muttergottes.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Deckenfresco', 'description' => 'Die prächtigen Fresken erzählen die Geschichte der Wallfahrt.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Gnadenbild', 'description' => 'Das wundertätige Gnadenbild Mariens – Ziel unzähliger Pilger.', 'audio_file' => '', 'image' => ''],
        ], $results);

        wwd_seed_inline($pid, 'church_history', [
            'title' => 'Wallfahrtskirche Mariabrunn',
            'description' => 'Die Pfarr- und Wallfahrtskirche Mariabrunn blickt auf eine reiche Geschichte zurück. Seit dem 15. Jahrhundert ist sie ein Ort der Andacht und Wallfahrt. Der barocke Bau beeindruckt mit seinen Fresken, dem Hochaltar und dem berühmten Gnadenbild der Muttergottes.',
            'cta_text' => 'Mehr zur Kirche',
            'cta_link' => '/kirche',
        ], $results);

        wwd_seed_inline($pid, 'movement', [
            'title' => 'Mariabrunn Digital',
            'description' => 'Mariabrunn Digital ist mehr als ein Medienprojekt: Wir verbinden Glaube, Gemeinschaft und moderne Technik. Unser Ziel ist es, die Frohe Botschaft über digitale Kanäle zu verbreiten und andere Pfarren auf ihrem Weg in die digitale Welt zu begleiten.',
            'workshop_cta_text' => 'Workshops für Pfarren',
            'workshop_cta_link' => '/mariabrunn-digital',
            'info_cta_text' => 'Mehr über Mariabrunn Digital',
            'info_cta_link' => '/mariabrunn-digital',
        ], $results);

        wwd_seed_inline($pid, 'donation', [
            'donation_title' => 'Unterstützen Sie Mariabrunn Digital',
            'donation_description' => 'Unser Projekt wird ausschließlich durch Spenden finanziert. Jeder Beitrag hilft uns, die technische Ausstattung zu verbessern und neue Formate zu entwickeln.',
            'donation_goal' => '15000',
            'donation_current' => '8750',
            'donation_link' => 'https://www.mariabrunn.at/spenden',
        ], $results);
    }

    // =========================================================================
    // AUF DEN PUNKT
    // =========================================================================
    $pid = wwd_get_post_id('auf-den-punkt');
    if ($pid) {
        $results[] = "\n=== AUF DEN PUNKT (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Auf den Punkt.',
            'hero_description' => 'Tägliche Kurzauslegung zum Tagesevangelium und zur Tageslesung – 2-3 Minuten mit Diakon Peter Scheuchel.',
            'primary_cta_text' => 'Zur YouTube-Playlist',
            'primary_cta_link' => 'https://www.youtube.com/playlist?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0',
        ], $results);
    }

    // =========================================================================
    // LIVESTREAM
    // =========================================================================
    $pid = wwd_get_post_id('livestream');
    if ($pid) {
        $results[] = "\n=== LIVESTREAM (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Livestream',
            'hero_description' => 'Feiern Sie die Heilige Messe live mit uns – direkt aus der Wallfahrtskirche Mariabrunn.',
            'primary_cta_text' => 'Auf YouTube ansehen',
            'primary_cta_link' => 'https://www.youtube.com/@MariabrunnDigital/live',
        ], $results);
    }

    // =========================================================================
    // BIBEL
    // =========================================================================
    $pid = wwd_get_post_id('bibel');
    if ($pid) {
        $results[] = "\n=== BIBEL (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Bibel in einem Jahr.',
            'hero_description' => 'Gemeinsam die gesamte Bibel in einem Jahr lesen – als Gemeinschaft, mit Begleitung und täglichen Impulsen.',
            'primary_cta_text' => 'Jetzt mitmachen',
            'primary_cta_link' => '#anmeldung',
        ], $results);
    }

    // =========================================================================
    // KIRCHE
    // =========================================================================
    $pid = wwd_get_post_id('kirche');
    if ($pid) {
        $results[] = "\n=== KIRCHE (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Pfarr- und Wallfahrtskirche Mariabrunn',
            'hero_description' => 'Ein barocker Gnadenort im Wienerwald – entdecken Sie Geschichte, Kunst und Glauben.',
            'primary_cta_text' => 'Audioguide starten',
            'primary_cta_link' => '#audioguide',
        ], $results);
        wwd_seed_repeatable($pid, 'audioguide', [
            ['station_title' => 'Station 1: Hochaltar', 'description' => 'Der barocke Hochaltar bildet das Herzstück der Wallfahrtskirche. In seinem Zentrum thront das Gnadenbild der Muttergottes.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Station 2: Deckenfresco', 'description' => 'Die prächtigen Fresken an der Kirchendecke stammen aus dem 18. Jahrhundert und erzählen die Geschichte der Wallfahrt.', 'audio_file' => '', 'image' => ''],
            ['station_title' => 'Station 3: Gnadenbild', 'description' => 'Das wundertätige Gnadenbild der Muttergottes von Mariabrunn ist seit Jahrhunderten Ziel unzähliger Pilger.', 'audio_file' => '', 'image' => ''],
        ], $results);
    }

    // =========================================================================
    // MITMACHEN
    // =========================================================================
    $pid = wwd_get_post_id('mitmachen');
    if ($pid) {
        $results[] = "\n=== MITMACHEN (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Werde Teil des Teams.',
            'hero_description' => 'Mariabrunn Digital lebt von ehrenamtlichem Engagement. Ob Technik, Redaktion oder Lesung – bei uns findet jeder seinen Platz.',
            'primary_cta_text' => 'Jetzt mitmachen',
            'primary_cta_link' => '#formular',
        ], $results);
    }

    // =========================================================================
    // KRANKENKOMMUNION
    // =========================================================================
    $pid = wwd_get_post_id('krankenkommunion');
    if ($pid) {
        $results[] = "\n=== KRANKENKOMMUNION (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Krankenkommunion.',
            'hero_description' => 'Wir bringen Ihnen die Heilige Kommunion nach Hause – für alle, die nicht zur Kirche kommen können.',
            'primary_cta_text' => 'Anfrage senden',
            'primary_cta_link' => '#formular',
        ], $results);
    }

    // =========================================================================
    // CHRIST WERDEN
    // =========================================================================
    $pid = wwd_get_post_id('christ-werden');
    if ($pid) {
        $results[] = "\n=== CHRIST WERDEN (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Christ werden. Ihr Weg beginnt hier.',
            'hero_description' => 'Egal, woher Sie kommen und was Sie bisher geglaubt haben – hier finden Sie Antworten, Begleitung und eine offene Tür.',
            'primary_cta_text' => 'Gespräch vereinbaren',
            'primary_cta_link' => '#kontakt',
        ], $results);
        wwd_seed_inline($pid, 'intro', [
            'body' => '<p>Jeder Mensch trägt Fragen in sich: Woher komme ich? Wohin gehe ich? Hat mein Leben einen tieferen Sinn? Die katholische Kirche lädt jeden ein, diesen Fragen nachzugehen – ohne Zwang, ohne Eile, aber mit Überzeugung.</p><p>Ganz gleich, ob Sie zum ersten Mal über Gott nachdenken, aus einer anderen Religion kommen oder als Protestant die katholische Kirche entdecken möchten: Hier finden Sie einen Ausgangspunkt für Ihren Weg.</p>',
        ], $results);
        wwd_seed_repeatable($pid, 'pathways', [
            ['title' => 'Für Suchende', 'description' => 'Sie glauben (noch) nicht, sind aber neugierig? Hier finden Sie Antworten auf die großen Fragen des Lebens – ehrlich, respektvoll und ohne Druck.', 'href' => '/christ-werden/fuer-suchende', 'icon' => '🧭'],
            ['title' => 'Für Muslime', 'description' => 'Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie – vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.', 'href' => '/christ-werden/fuer-muslime', 'icon' => '🤝'],
            ['title' => 'Für Protestanten', 'description' => 'Sie sind evangelisch und denken über die katholische Kirche nach? Entdecken Sie, was uns verbindet – und was die katholische Tradition zu bieten hat.', 'href' => '/christ-werden/fuer-protestanten', 'icon' => '⛪'],
        ], $results);
        wwd_seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Schreiben Sie uns – unverbindlich und vertraulich. Wir hören Ihnen zu.',
        ], $results);
    }

    // =========================================================================
    // CHRIST WERDEN - FÜR SUCHENDE
    // =========================================================================
    $pid = wwd_get_post_id('christ-werden-fuer-suchende');
    if ($pid) {
        $results[] = "\n=== FÜR SUCHENDE (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Auf der Suche. Nach Antworten.',
            'hero_description' => 'Sie zweifeln, Sie fragen, Sie suchen – und genau das ist der richtige Ausgangspunkt.',
            'primary_cta_text' => 'Gespräch anfragen',
            'primary_cta_link' => '#kontakt',
        ], $results);
        wwd_seed_repeatable($pid, 'arguments', [
            ['title' => 'Warum überhaupt Gott?', 'content' => 'Alles, was zu existieren beginnt, hat eine Ursache. Das Universum hat zu existieren begonnen – das bestätigt die moderne Kosmologie mit dem Urknall. Eine unendliche Kette von Ursachen ist logisch unmöglich. Es muss also eine erste, unverursachte Ursache geben – ein Wesen, das aus sich heraus existiert. Thomas von Aquin nannte dieses Wesen "das, was alle Gott nennen". Dazu kommt die Feinabstimmung des Universums: Die Naturkonstanten sind mit einer Präzision aufeinander abgestimmt, die Wissenschaftler aller Weltanschauungen als außergewöhnlich anerkennen. Würde man auch nur eine dieser Konstanten um einen winzigen Bruchteil verändern, wäre kein Leben möglich.'],
            ['title' => 'Warum gerade Jesus?', 'content' => 'Die Existenz Jesu von Nazareth ist historisch so gut belegt wie die kaum eines anderen Menschen der Antike. Der jüdische Historiker Flavius Josephus, der römische Historiker Tacitus und Plinius der Jüngere erwähnen Jesus unabhängig voneinander. Das Auferstehungsargument stützt sich auf mehrere Fakten: das leere Grab, die zahlreichen Erscheinungen, und die radikale Verwandlung der Jünger. Männer, die nach der Kreuzigung verängstigt geflohen waren, traten plötzlich öffentlich auf – obwohl ihnen dafür Verfolgung, Folter und Tod drohten.'],
            ['title' => 'Warum die katholische Kirche?', 'content' => 'Die katholische Kirche ist die älteste durchgehend bestehende Institution der Welt. Von den Aposteln über die Kirchenväter bis zum heutigen Papst lässt sich eine ununterbrochene Kette der Weitergabe nachzeichnen. Der Katholizismus hat eine der reichsten intellektuellen Traditionen der Menschheitsgeschichte hervorgebracht. Die katholische Kirche ist zudem der größte nichtstaatliche Anbieter von Bildung und Gesundheitsversorgung weltweit.'],
            ['title' => 'Glaube und Wissenschaft – ein Widerspruch?', 'content' => 'Naturwissenschaft und Glaube beantworten verschiedene Fragen. Die Wissenschaft fragt "Wie funktioniert die Welt?", der Glaube fragt "Warum gibt es überhaupt etwas, und welchen Sinn hat es?" Der Begründer der Urknalltheorie war der katholische Priester Georges Lemaître, der Vater der Genetik war der Augustinermönch Gregor Mendel. Der Widerspruch zwischen Wissenschaft und Glaube ist ein moderner Mythos, keine historische Realität.'],
        ], $results);
        wwd_seed_repeatable($pid, 'faq', [
            ['question' => 'Wenn Gott gut ist, warum gibt es dann Leid?', 'answer' => 'Gott ist kein ferner Beobachter des Leids, sondern hat es in Jesus Christus selbst durchlitten. Echte Liebe setzt Freiheit voraus, und Freiheit schließt die Möglichkeit des Missbrauchs ein. Der katholische Glaube verspricht nicht, alles Leid zu erklären – aber er verspricht, dass es nicht das letzte Wort hat.'],
            ['question' => 'Muss ich alles wörtlich nehmen, was in der Bibel steht?', 'answer' => 'Nein. Die katholische Kirche unterscheidet verschiedene literarische Gattungen in der Bibel. Nicht alles ist als naturwissenschaftliche Aussage gemeint. Die Kirche ermutigt dazu, die Bibel im Zusammenhang zu lesen und sich von der 2000-jährigen Auslegungstradition leiten zu lassen.'],
            ['question' => 'Kann ich Christ sein und trotzdem Fragen haben?', 'answer' => 'Absolut. Zweifel und Fragen gehören zum Glaubensweg dazu. Die katholische Tradition sieht den Glauben nicht als blinde Annahme, sondern als vernünftigen Akt, der ständig vertieft werden will.'],
            ['question' => 'Wie funktioniert eine Taufe als Erwachsener?', 'answer' => 'Erwachsene durchlaufen den sogenannten Katechumenat – eine Zeit der Vorbereitung, die in der Regel ein bis zwei Jahre dauert. Die Taufe findet dann feierlich statt, in der Regel in der Osternacht. Es gibt keinen Druck und kein Zeitlimit.'],
        ], $results);
        wwd_seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Wir hören Ihnen zu – unverbindlich und vertraulich.',
        ], $results);
    }

    // =========================================================================
    // CHRIST WERDEN - FÜR MUSLIME
    // =========================================================================
    $pid = wwd_get_post_id('christ-werden-fuer-muslime');
    if ($pid) {
        $results[] = "\n=== FÜR MUSLIME (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Ein neuer Weg. In Respekt.',
            'hero_description' => 'Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie – vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.',
            'primary_cta_text' => 'Vertrauliches Gespräch',
            'primary_cta_link' => '#kontakt',
        ], $results);
        wwd_seed_repeatable($pid, 'arguments', [
            ['title' => 'Was Christen und Muslime verbindet', 'content' => 'Christen und Muslime bekennen sich zum selben einen Gott – den Gott Abrahams. Maria ist die einzige Frau, die im Koran namentlich genannt wird. Beide Religionen stimmen überein: Gott ist zutiefst barmherzig.'],
            ['title' => 'Wer ist Jesus für Christen?', 'content' => 'Für Christen ist Jesus weit mehr als ein Prophet: der Sohn Gottes, der Mensch geworden ist. "Sohn Gottes" meint keine biologische Zeugung – es ist ein Relationsbegriff. Jesus hat Ansprüche erhoben, die über die Rolle eines Propheten hinausgehen.'],
            ['title' => 'Was bedeutet Dreifaltigkeit?', 'content' => 'Die Trinität ist kein Polytheismus. Christen bekennen streng einen Gott. Innerhalb dieses einen göttlichen Wesens bestehen drei Personen in ewiger Beziehung: Vater, Sohn und Heiliger Geist.'],
            ['title' => 'Erlösung: Gnade statt Ungewissheit', 'content' => 'Das Christentum bietet eine radikal andere Botschaft: Erlösung ist ein Geschenk der Gnade, das im Glauben empfangen wird. Diese Gnade befähigt dann zu guten Werken – nicht umgekehrt.'],
            ['title' => 'Wurde die Bibel verfälscht?', 'content' => 'Der Koran selbst bestätigt die Bibel. Über 5.800 griechische Manuskripte des Neuen Testaments sind erhalten. Eine koordinierte Fälschung wäre praktisch unmöglich gewesen.'],
        ], $results);
        wwd_seed_repeatable($pid, 'faq', [
            ['question' => 'Muss ich meine Familie informieren?', 'answer' => 'Das ist eine sehr persönliche Entscheidung. Alle Gespräche mit uns sind absolut vertraulich. Sie bestimmen das Tempo und den Weg.'],
            ['question' => 'Wie lange dauert die Vorbereitung?', 'answer' => 'Die Vorbereitung (Katechumenat) dauert in der Regel ein bis zwei Jahre. Es gibt keinen Druck und kein festes Zeitlimit.'],
            ['question' => 'Kann ich erst ausprobieren, ohne mich zu verpflichten?', 'answer' => 'Selbstverständlich. Sie können Gottesdienste besuchen und den Glauben kennenlernen, ohne sich zu verpflichten.'],
            ['question' => 'Werde ich von der Gemeinde akzeptiert?', 'answer' => 'Ja. Die Pfarrgemeinde Mariabrunn heißt jeden willkommen, unabhängig von Herkunft und bisherigem Glaubensweg.'],
        ], $results);
        wwd_seed_inline($pid, 'contact', [
            'title' => 'Vertrauliches Gespräch',
            'description' => 'Schreiben Sie uns – wir behandeln jede Anfrage mit absoluter Diskretion.',
        ], $results);
    }

    // =========================================================================
    // CHRIST WERDEN - FÜR PROTESTANTEN
    // =========================================================================
    $pid = wwd_get_post_id('christ-werden-fuer-protestanten');
    if ($pid) {
        $results[] = "\n=== FÜR PROTESTANTEN (Post #{$pid}) ===";
        wwd_seed_inline($pid, 'hero', [
            'hero_title' => 'Schon Christ. Neue Heimat.',
            'hero_description' => 'Sie sind evangelisch und fühlen sich zur katholischen Kirche hingezogen? Entdecken Sie, was die katholische Tradition zu bieten hat.',
            'primary_cta_text' => 'Gespräch anfragen',
            'primary_cta_link' => '#kontakt',
        ], $results);
        wwd_seed_repeatable($pid, 'arguments', [
            ['title' => 'Was uns verbindet – und wo der Weg weitergeht', 'content' => 'Katholiken und Protestanten teilen das Fundament: die Taufe, das Bekenntnis zu Jesus Christus, die Heilige Schrift. Die katholische Kirche kann eine ununterbrochene Linie von den Aposteln bis heute nachweisen.'],
            ['title' => 'Sola Scriptura – und wer bestimmte den Kanon?', 'content' => 'Wer hat festgelegt, welche Bücher zur Bibel gehören? Es war die Kirche – auf den Konzilien von Hippo (393) und Karthago (397). Die Bibel selbst lehrt kein Sola Scriptura.'],
            ['title' => 'Die Eucharistie: "Das IST mein Leib"', 'content' => 'Jesus sagte nicht "Das symbolisiert meinen Leib." Er sagte: "Das IST mein Leib." Die frühe Kirche hat es ebenso verstanden. Die Realpräsenz gehört zum ältesten Glaubensgut der Kirche.'],
            ['title' => 'Maria und die Heiligen: Fürbitte, nicht Anbetung', 'content' => 'Die Kirche unterscheidet klar zwischen Anbetung (allein Gott) und Verehrung (den Heiligen). Maria hat in der Schrift eine herausragende Stellung.'],
            ['title' => 'Die Beichte: Vergebung, die man spüren kann', 'content' => '"Wem ihr die Sünden vergebt, dem sind sie vergeben" (Joh 20,23). Viele Konvertiten berichten, dass die Beichte eines der größten Geschenke ist, die sie in der katholischen Kirche gefunden haben.'],
        ], $results);
        wwd_seed_repeatable($pid, 'faq', [
            ['question' => 'Muss ich nochmals getauft werden?', 'answer' => 'Nein. Die katholische Kirche erkennt die protestantische Taufe voll an. Bei der Aufnahme empfangen Sie die Firmung und die erste heilige Kommunion.'],
            ['question' => 'Wie steht die katholische Kirche zur Ökumene?', 'answer' => 'Die katholische Kirche ist dem ökumenischen Dialog zutiefst verpflichtet. Ökumene bedeutet die ehrliche Suche nach der vollen Einheit, die Christus gewollt hat.'],
            ['question' => 'Was passiert bei der Aufnahme konkret?', 'answer' => 'Sie legen das Glaubensbekenntnis ab, empfangen die Firmung und nehmen zum ersten Mal an der Eucharistie teil.'],
            ['question' => 'Was bedeutet päpstliche Unfehlbarkeit wirklich?', 'answer' => 'Unfehlbarkeit bedeutet nicht, dass der Papst in allem recht hat. Es bedeutet ausschließlich: Wenn der Papst in höchster Lehrautorität eine Glaubenslehre als verbindlich erklärt, bewahrt ihn der Heilige Geist vor Irrtum. Das ist in der Kirchengeschichte nur sehr selten geschehen.'],
            ['question' => 'Ist das Fegefeuer unbiblisch?', 'answer' => 'Paulus schreibt: "Er selbst aber wird gerettet werden, doch so wie durch Feuer hindurch" (1 Kor 3,15). Das Fegefeuer ist die Reinigung derer, die in der Gnade Gottes sterben, aber noch der Läuterung bedürfen.'],
        ], $results);
        wwd_seed_inline($pid, 'contact', [
            'title' => 'Persönliches Gespräch',
            'description' => 'Der erste Schritt ist oft der schwerste. Wir hören Ihnen zu – unverbindlich und vertraulich.',
        ], $results);
    }

    // Output results
    wp_die(
        '<h1>WWD Seed abgeschlossen</h1><pre>' . esc_html(implode("\n", $results)) . '</pre><p><a href="' . admin_url() . '">Zurück zum Dashboard</a></p>',
        'WWD Seed',
        ['response' => 200]
    );
});
