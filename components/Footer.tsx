import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#2D2D2D] py-16 text-white/80">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand & Info */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/Logo.png"
                                    alt="Mariabrunn Logo"
                                    fill
                                    className="object-contain brightness-200"
                                />
                            </div>
                            <span className="font-heading text-lg text-white">
                                Mariabrunn <span className="text-[#6DC0D2]">Digital</span>
                            </span>
                        </div>
                        <p className="text-sm max-w-sm text-white/60 leading-relaxed">
                            Die multimediale Plattform der Pfarre Mariabrunn. Wir bringen Kirche ins digitale Zeitalter durch Livestreams, Videos und interaktive Erlebnisse.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.youtube.com/@MariabrunnDigital" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#6DC0D2]/20 p-2.5 rounded-xl transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                            </a>
                            <a href="https://www.facebook.com/pfarremariabrunn" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#6DC0D2]/20 p-2.5 rounded-xl transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/pfarremariabrunn/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#6DC0D2]/20 p-2.5 rounded-xl transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-heading text-sm uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/" className="hover:text-[#6DC0D2] transition-colors">Startseite</Link></li>
                            <li><Link href="/auf-den-punkt" className="hover:text-[#6DC0D2] transition-colors">Auf den Punkt</Link></li>
                            <li><Link href="/bibel-in-einem-jahr" className="hover:text-[#6DC0D2] transition-colors">Bibel in einem Jahr</Link></li>
                            <li><Link href="/mitmachen" className="hover:text-[#6DC0D2] transition-colors">Mitmachen</Link></li>
                            <li><Link href="/fuehrung" className="hover:text-[#6DC0D2] transition-colors">Kirchenführung</Link></li>
                            <li><Link href="/krankenkommunion" className="hover:text-[#6DC0D2] transition-colors">Krankenkommunion</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-white font-heading text-sm uppercase tracking-wider">Rechtliches</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/impressum" className="hover:text-[#6DC0D2] transition-colors">Impressum</Link></li>
                            <li><Link href="/dsgvo" className="hover:text-[#6DC0D2] transition-colors">Datenschutz (DSGVO)</Link></li>
                            <li><Link href="/kontakt" className="hover:text-[#6DC0D2] transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
                    <p>© {new Date().getFullYear()} Pfarre Mariabrunn. Alle Rechte vorbehalten.</p>
                    <p className="mt-2 md:mt-0">Ein Projekt von Mariabrunn Digital</p>
                </div>
            </div>
        </footer>
    );
}
