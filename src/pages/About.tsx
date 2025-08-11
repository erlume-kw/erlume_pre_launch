import { SEO } from "@/components/SEO";

export default function About() {
	return (
		<>
			<SEO
				title="About erlume | Luxury Resale Expertise"
				description="Learn about erlume's mission and team behind transparent, hassle-free luxury resale."
				canonicalPath="/about"
			/>
			<main>
				<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
					<div className="text-center mb-12">
						<h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
							About erlume
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
							Kuwait's trusted destination for luxury pre-loved bags
						</p>
					</div>
					
					<article className="prose prose-neutral dark:prose-invert max-w-none">
						<div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-soft)]">
							<p className="text-lg leading-relaxed mb-6">
								Erlume is Kuwait's curated destination for pre-loved treasures
								where every piece carries a story. We're a trusted community
								dedicated to buying and selling quality, pre-loved bags in a kind
								and respectful way.
							</p>
							<p className="text-lg leading-relaxed">
								Our mission is to offer a sustainable and stylish alternative to
								fast fashion, while creating a supportive space for both buyers
								and sellers. Whether you're searching for a unique find or a new
								home for a cherished piece, Erlume helps you make a meaningful
								impact — one beautiful bag at a time.
							</p>
						</div>
					</article>
				</section>
			</main>
			<link rel="canonical" href="/about" />
		</>
	);
}
