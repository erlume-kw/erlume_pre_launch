import { SEO } from "@/components/SEO";

export default function About() {
	return (
		<>
			<SEO
				title="About Erlume | Luxury Resale Expertise"
				description="Learn about Erlume's mission and team behind transparent, hassle-free luxury resale."
				canonicalPath="/about"
			/>
			<main>
				<section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
					<h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
						About erlume
					</h1>
					<article className="prose prose-neutral dark:prose-invert">
						<p>
							erlume is Kuwait’s curated destination for pre-loved treasures
							where every piece carries a story. We’re a trusted community
							dedicated to buying and selling quality, pre-loved bags in a kind
							and respectful way.
						</p>
						<p>
							Our mission is to offer a sustainable and stylish alternative to
							fast fashion, while creating a supportive space for both buyers
							and sellers. Whether you’re searching for a unique find or a new
							home for a cherished piece, Erlume helps you make a meaningful
							impact — one beautiful bag at a time.
						</p>
					</article>
				</section>
			</main>
			<link rel="canonical" href="/about" />
		</>
	);
}
