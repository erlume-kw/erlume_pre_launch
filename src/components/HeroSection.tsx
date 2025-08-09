import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBag from "@/assets/luxury-bag-hero.jpg";
import { useState } from "react";
import chloe from "@/assets/chloe.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
interface HeroSectionProps {
	onGetStarted: () => void;
}
export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
	const [imageSrc, setImageSrc] = useState<string>(chloe);
	return (
		<section className="min-h-screen bg-soft-gradient flex items-center justify-center px-4 py-20">
			<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
				{/* Text Content */}
				<div className="text-center lg:text-left animate-fade-in-up">
					{/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-muted-foreground mb-6">
						<Sparkles className="w-4 h-4 text-primary" />
						Trusted by luxury fashion lovers
					</div> */}

					<h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
						Sell your luxury bag
						<br />
						<span className="text-gradient">in minutes</span>
					</h1>

					<p className="text-xl text-muted-foreground mb-8 max-w-lg">
						Get an instant price estimate and see how much you keep.
						Transparent, fair, and hassle-free luxury resale.
					</p>

					<Button onClick={onGetStarted} className="btn-hero group">
						Start Your Estimate
						<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>

					<div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground justify-center lg:justify-start">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							Free estimate
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							No hidden fees
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							Fast payout
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="relative animate-scale-in">
					<div className="relative z-10 max-w-[480px] mx-auto lg:mx-0 w-full">
						<AspectRatio ratio={1} className="w-full">
							<img
								src={imageSrc || chloe}
								onError={() => setImageSrc(heroBag)}
								alt="Chloé preloved luxury bag"
								className="h-full w-full rounded-3xl shadow-[var(--shadow-glow)] object-Fill object-[55%_0%] md:object-[60%_0%] lg:object-[62%_0%]"
							/>
						</AspectRatio>
					</div>
				</div>
			</div>
		</section>
	);
};
