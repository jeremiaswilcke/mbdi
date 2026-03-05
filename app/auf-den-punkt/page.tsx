import { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Clock, Mic } from "lucide-react";

export const metadata: Metadata = {
    title: "Auf den Punkt | Mariabrunn Digital",
    description: "Tägliche Predigten zum Tagesevangelium und zur Tageslesung – 2-3 Minuten mit Diakon Peter Scheuchel.",
};

export default function AufDenPunktPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="inline-block bg-[#6DC0D2]/10 text-[#155277] font-bold px-4 py-1 rounded-full mb-4 text-sm">
                        Täglich neu
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading text-[#155277] mb-6">
                        Auf den Punkt.
                    </h1>
                    <p className="text-xl text-[#2D2D2D]/80 leading-relaxed mb-4">
                        Tägliche Predigten zum <strong>Tagesevangelium</strong> und zur <strong>Tageslesung</strong> – kurz, prägnant und auf den Punkt.
                    </p>
                    <p className="text-lg text-[#2D2D2D]/60 leading-relaxed mb-8">
                        Diakon Peter Scheuchel liest aus seinen Büchern, darunter{" "}
                        <a
                            href="https://www.buchschmiede.at/app/book/231830-Peter-Scheuchel-DAS-LICHT-20262;bookType=PB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#155277] font-bold hover:text-[#6DC0D2] underline underline-offset-2 transition-colors"
                        >
                            „DAS LICHT 2026"
                        </a>
                        , und gibt jeden Tag eine 2-3 minütige Auslegung – aufgenommen in unserem Studio.
                    </p>
                    <a
                        href="https://www.youtube.com/playlist?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#155277] hover:bg-[#6DC0D2] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-[#155277]/20"
                    >
                        Zur YouTube-Playlist
                    </a>
                </div>
                <div className="md:w-1/2">
                    <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
                        <Image
                            src="/images/hero-church.png"
                            alt="Kirche Mariabrunn"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#155277]/80 via-[#155277]/30 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-heading">Diakon Peter Scheuchel</h3>
                            <p className="text-white/80 mt-1">Tägliche Auslegung aus „DAS LICHT 2026"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#6DC0D2]/10 rounded-2xl flex items-center justify-center mb-6">
                        <Clock size={24} className="text-[#6DC0D2]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#155277] mb-3">2-3 Minuten täglich</h3>
                    <p className="text-[#2D2D2D]/70">Kurze Auslegung – ideal für den Morgen, die Mittagspause oder den Abend.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#90AD50]/10 rounded-2xl flex items-center justify-center mb-6">
                        <BookOpen size={24} className="text-[#90AD50]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#155277] mb-3">Tageslesung &amp; Tagesevangelium</h3>
                    <p className="text-[#2D2D2D]/70">Jeden Tag passend zur liturgischen Leseordnung – Tageslesung und Tagesevangelium.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#BC8080]/10 rounded-2xl flex items-center justify-center mb-6">
                        <Mic size={24} className="text-[#BC8080]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#155277] mb-3">Aus dem Studio</h3>
                    <p className="text-[#2D2D2D]/70">Diakon Peter Scheuchel liest seine Predigten professionell in unserem Studio ein.</p>
                </div>
            </div>

            {/* Playlist Embed */}
            <div className="mt-24">
                <h2 className="text-3xl font-heading text-[#155277] mb-8 text-center">Aktuelle Episoden</h2>
                <div className="aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0"
                        title="Auf den Punkt – Playlist"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                    />
                </div>
            </div>
        </main>
    );
}
