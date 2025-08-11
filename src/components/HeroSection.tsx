import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, TrendingUp } from "lucide-react";
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
		<section className="min-h-screen h-screen flex items-center justify-center px-6 lg:px-8 relative mt-[-56px]">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
			
			<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
				{/* Text Content */}
				<div className="text-center lg:text-left">
					<h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
						Sell your luxury bag
						<br />
						<span className="text-primary">in minutes</span>
					</h1>

					<p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
						Get an instant price estimate and see exactly how much you'll earn. 
						No hidden fees, transparent pricing.
					</p>

					<Button 
						onClick={onGetStarted} 
						size="xl"
						className="mb-10 group"
					>
						Get Your Estimate
						<ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-normal ease-smooth" />
					</Button>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-foreground justify-center lg:justify-start">
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-accent-foreground" />
							<span className="font-medium">Free estimate</span>
						</div>
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-accent-foreground" />
							<span className="font-medium">No hidden fees</span>
						</div>
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-accent-foreground" />
							<span className="font-medium">Fast payout</span>
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="relative">
					<div className="relative z-10 max-w-[520px] mx-auto lg:mx-0 w-full">
						<AspectRatio ratio={1} className="w-full">
							<img
								src={imageSrc || chloe}
								onError={() => setImageSrc(heroBag)}
								alt="Luxury handbag for resale"
								className="h-full w-full rounded-3xl shadow-2xl object-cover object-[55%_0%] md:object-[60%_0%] lg:object-[62%_0%] hover:scale-105 transition-all duration-slow ease-smooth"
							/>
						</AspectRatio>
					</div>
				</div>
			</div>
		</section>
	);
};
