import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-12 text-[#155277]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand & Info */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 opacity-70">
                                <Image
                                    src="/Logo.png"
                                    alt="Mariabrunn Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-lg text-[#155277]">
                                Mariabrunn <span className="text-[#6DC0D2]">Digital</span>
                            </span>
                        </div>
                        <p className="text-sm max-w-sm">
                            Die multimediale Plattform der Pfarre Mariabrunn. Wir bringen Kirche ins digitale Zeitalter durch Livestreams, Videos und interaktive Erlebnisse.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-[#155277] font-bold font-heading">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-[#6DC0D2] transition-colors">Startseite</Link></li>
                            <li><Link href="/mitmachen" className="hover:text-[#6DC0D2] transition-colors">Mitmachen (Technik)</Link></li>
                            <li><Link href="/fuehrung" className="hover:text-[#6DC0D2] transition-colors">Kirchenführung</Link></li>
                            <li><Link href="/krankenkommunion" className="hover:text-[#6DC0D2] transition-colors">Krankenkommunion anfragen</Link></li>
                            <li><Link href="https://www.youtube.com/@MariabrunnDigital" target="_blank" rel="noopener noreferrer" className="hover:text-[#AF3F6C] transition-colors">YouTube Kanal</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-[#155277] font-bold font-heading">Rechtliches</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/impressum" className="hover:text-[#6DC0D2] transition-colors">Impressum</Link></li>
                            <li><Link href="/dsgvo" className="hover:text-[#6DC0D2] transition-colors">Datenschutz (DSGVO)</Link></li>
                            <li><Link href="/kontakt" className="hover:text-[#6DC0D2] transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs">
                    <p>© {new Date().getFullYear()} Pfarre Mariabrunn. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="https://www.youtube.com/@MariabrunnDigital" target="_blank" rel="noopener noreferrer" className="hover:text-[#6DC0D2] transition-colors">YouTube</Link>
                        <Link href="https://www.facebook.com/pfarremariabrunn" target="_blank" rel="noopener noreferrer" className="hover:text-[#6DC0D2] transition-colors">Facebook</Link>
                        <Link href="https://www.instagram.com/pfarremariabrunn/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6DC0D2] transition-colors">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
