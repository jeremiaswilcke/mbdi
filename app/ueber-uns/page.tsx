export default function UeberUns() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-accent-green">
                    Über Mariabrunn
                </h1>
                <p className="text-xl text-slate-300">
                    Entdecke die Geschichte, Architektur und Kunst unserer Pfarre.
                </p>

                <div className="grid grid-cols-1 gap-6 mt-8">
                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-4">Geschichte</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Die Pfarr- und Wallfahrtskirche Mariabrunn blickt auf eine lange und bewegte Geschichte zurück. Ursprünglich begründet durch eine Heilquelle, die der Sage nach durch die Fürsprache Mariens entdeckt wurde.
                        </p>
                    </div>

                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-4">Architektur</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Die Kirche beeindruckt durch ihre barocke Bauweise und die kunstvollen Fresken im Innenraum, die Besucher aus nah und fern anziehen.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
