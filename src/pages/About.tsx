import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
	const { t, isRTL } = useLanguage();

	return (
		<>
			<SEO
				title="About erlume | Luxury Resale Expertise"
				description="Learn about erlume's mission and team behind transparent, hassle-free luxury resale."
				canonicalPath="/about"
			/>
			<main>
				<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
					<div className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}>
						<h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
							{t.about.title}
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
							{t.about.subtitle}
						</p>
					</div>

					<article className="prose prose-neutral dark:prose-invert max-w-none">
						<div
							className={`bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-soft)] ${
								isRTL ? "text-right" : ""
							}`}>
							<p className="text-lg leading-relaxed mb-6">
								{t.about.description1}
							</p>
							<p className="text-lg leading-relaxed">{t.about.description2}</p>
						</div>
					</article>
				</section>
			</main>
			<link rel="canonical" href="/about" />
		</>
	);
}
