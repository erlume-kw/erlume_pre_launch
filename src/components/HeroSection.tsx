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
		<section className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
			
			<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
				{/* Text Content */}
				<div className="text-center lg:text-left">
					<div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in-up">
						<TrendingUp className="w-4 h-4 text-primary" />
						Up to 95% of selling price
					</div>

					<h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
						Sell your luxury bag
						<br />
						<span className="text-primary">in minutes</span>
					</h1>

					<p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
						Get an instant price estimate and see exactly how much you'll earn. 
						No hidden fees, transparent pricing.
					</p>

					<Button 
						onClick={onGetStarted} 
						className="btn-hero text-lg px-10 py-6 group mb-10 animate-fade-in-up" 
						style={{ animationDelay: "0.3s" }}
					>
						Get Your Estimate
						<ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
					</Button>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-primary" />
							<span className="font-medium">Free estimate</span>
						</div>
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-primary" />
							<span className="font-medium">No hidden fees</span>
						</div>
						<div className="flex items-center gap-3">
							<CheckCircle className="w-5 h-5 text-primary" />
							<span className="font-medium">Fast payout</span>
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="relative animate-scale-in" style={{ animationDelay: "0.5s" }}>
					<div className="relative z-10 max-w-[520px] mx-auto lg:mx-0 w-full">
						<AspectRatio ratio={1} className="w-full">
							<img
								src={imageSrc || chloe}
								onError={() => setImageSrc(heroBag)}
								alt="Luxury handbag for resale"
								className="h-full w-full rounded-3xl shadow-[var(--shadow-2xl)] object-cover object-[55%_0%] md:object-[60%_0%] lg:object-[62%_0%] hover:scale-105 transition-transform duration-700"
							/>
						</AspectRatio>
					</div>
					{/* Floating elements for visual interest */}
					<div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
					<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
				</div>
			</div>
		</section>
	);
};
