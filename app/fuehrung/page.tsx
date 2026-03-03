export default function Fuehrung() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
            <div className="max-w-md mx-auto space-y-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6DC0D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3a1 1 0 0 1 0-3l-4.5-4.5" /></svg>

                <h1 className="text-3xl font-heading font-bold text-white">
                    Kirchenführung
                </h1>
                <p className="text-slate-300">
                    Entdecke Mariabrunn interaktiv. Scanne einen QR-Code vor Ort in der Kirche, um hier Audios, Bilder und faszinierende Fakten zur jeweiligen Station zu erhalten.
                </p>

                <div className="p-6 bg-card border border-card-border rounded-2xl w-full">
                    <p className="text-primary-light font-medium mb-2">So funktioniert's:</p>
                    <ol className="text-sm text-slate-400 text-left space-y-3 list-decimal list-inside">
                        <li>Öffne deine Kamera.</li>
                        <li>Richte sie auf einen der QR-Codes in der Kirche.</li>
                        <li>Tippe auf den Link, um die Stationen-Info zu öffnen.</li>
                    </ol>
                </div>
            </div>
        </main>
    );
}
