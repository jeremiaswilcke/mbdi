"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle2, AlertCircle, BookOpen, Users, Mic } from "lucide-react";
import { FormBibel } from "@/components/FormBibel";

export default function BibelJahrPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

            {/* Hero */}
            <div className="mb-16 md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="inline-block bg-[#BC8080]/10 text-[#BC8080] font-bold px-4 py-1 rounded-full mb-4 text-sm">
                        Gemeinschaftsprojekt
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading text-[#145073] mb-6">
                        Die Bibel in einem Jahr
                    </h1>
                    <p className="text-xl text-[#0B2E42]/80 leading-relaxed mb-4 font-subheading">
                        Die ganze Bibel lesen – Schritt für Schritt
                    </p>
                    <p className="text-lg text-[#0B2E42]/70 leading-relaxed">
                        Mit unserem Projekt „Die Bibel in einem Jahr" lesen wir gemeinsam die gesamte Heilige Schrift.
                        Jeden Tag werden mehrere Kapitel aus der Bibel vorgelesen und veröffentlicht.
                        So entsteht ein fortlaufender Weg durch das Wort Gottes – von Gen bis Offb.
                        Wer regelmäßig mithört oder mitliest, kann innerhalb eines Jahres die ganze Bibel kennenlernen.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
                        <Image
                            src="/images/card-bible.png"
                            alt="Bibel auf einem Lesepult"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#145073]/80 via-[#145073]/30 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-heading">Von Genesis bis Offenbarung</h3>
                            <p className="text-white/80 mt-1">Gemeinsam durch die Heilige Schrift</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ein gemeinsamer Weg */}
            <div className="max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-heading text-[#145073] mb-6">Ein gemeinsamer Weg durch die Schrift</h2>
                <div className="space-y-4 text-lg text-[#0B2E42]/70 leading-relaxed">
                    <p>Die Bibel ist kein Buch, das man allein lesen muss. Viele Christen entdecken sie neu, wenn sie gemeinsam Schritt für Schritt durch die Texte gehen.</p>
                    <p>Darum veröffentlichen wir täglich neue Abschnitte – als Hörfassung und Video. So kann jeder mitgehen, auch wenn wenig Zeit zum Lesen bleibt.</p>
                </div>
            </div>

            {/* Wir suchen Mitleser */}
            <div className="bg-[#BC8080]/5 border border-[#BC8080]/15 rounded-3xl p-8 md:p-12 mb-16 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#BC8080]/10 rounded-2xl flex items-center justify-center">
                        <Users size={24} className="text-[#BC8080]" />
                    </div>
                    <h2 className="text-2xl font-heading text-[#145073]">Wir suchen Mitleser</h2>
                </div>
                <div className="space-y-4 text-[#0B2E42]/70 leading-relaxed">
                    <p>Unser Ziel ist es, dass viele Menschen an diesem Projekt mitwirken. Noch fehlen einige Abschnitte der Bibel.</p>
                    <p>Darum laden wir herzlich ein, selbst eine Bibelstelle einzulesen und Teil dieses gemeinsamen Projekts zu werden. Wer mitmachen möchte, kann sich gerne bei uns melden.</p>
                </div>
            </div>

            {/* YouTube Playlist Embed */}
            <div className="mb-20">
                <h2 className="text-3xl font-heading text-[#145073] mb-8 text-center">Bisherige Lesungen</h2>
                <div className="aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLSNwTwrZKgtBCoO-G0SgeAeSD6QgWrbec"
                        title="Die Bibel in einem Jahr – Playlist"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                    />
                </div>
            </div>

            {/* Warum wir dieses Projekt machen */}
            <div className="max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-heading text-[#145073] mb-6">Warum wir dieses Projekt machen</h2>
                <div className="space-y-4 text-lg text-[#0B2E42]/70 leading-relaxed">
                    <p>Die Bibel ist das Herz unseres Glaubens. Sie erzählt von Gottes Geschichte mit den Menschen und von seiner Liebe, die in Christus sichtbar geworden ist.</p>
                    <p>Unser Wunsch ist es, dass möglichst viele Menschen die ganze Bibel entdecken – nicht nur einzelne Verse.</p>
                </div>
            </div>

            {/* Mitmachen / Formular */}
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading text-[#145073] mb-4">Mitmachen</h2>
                    <p className="text-[#0B2E42]/70">
                        Wenn Sie eine Bibelstelle lesen und aufnehmen möchten, freuen wir uns über Ihre Unterstützung.
                        Sie helfen damit, dass das Wort Gottes weitergetragen wird und viele Menschen Zugang zur Heiligen Schrift finden.
                    </p>
                </div>

                <FormBibel />
            </div>
        </main>
    );
}
