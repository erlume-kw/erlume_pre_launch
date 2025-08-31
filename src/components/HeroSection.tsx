import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, TrendingUp } from "lucide-react";
import heroBag from "@/assets/luxury-bag-hero.jpg";
import { useState } from "react";
import chloe from "@/assets/chloe.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
	onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
	const [imageSrc, setImageSrc] = useState<string>(chloe);
	const { t, isRTL } = useLanguage();

	return (
		<section className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] lg:mt-[-56px] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-8 lg:py-0 scroll-mt-14 sm:scroll-mt-16">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full relative z-10">
				{/* Text Content */}
				<div
					className={`text-center lg:text-left order-2 ${
						isRTL ? "lg:text-right lg:order-2" : "lg:order-1"
					}`}>
					{/* Mobile Content */}
					<div className="lg:hidden flex flex-col items-center w-full">
						{/* Shared width container for image + text/button */}
						<div className="w-full max-w-[360px] sm:max-w-[420px]">
							<h1 className="hero-text text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-5 leading-tight">
								{t.heroTitle}
								<br />
								<span className="text-primary">{t.heroSubtitle}</span>
							</h1>

							<p className="hero-text text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
								{t.heroDescription}
							</p>

							<Button onClick={onGetStarted} size="lg" className="w-full mb-6">
								{t.getEstimate}
								<ArrowRight
									className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
								/>
							</Button>

							{/* Features compact row */}
							<div className="flex flex-nowrap items-center justify-center gap-4 overflow-hidden text-foreground text-xs">
								<div className="flex items-center gap-2 whitespace-nowrap">
									<CheckCircle className="w-4 h-4 text-accent-foreground" />
									<span className="font-medium">{t.freeEstimate}</span>
								</div>
								<div className="flex items-center gap-2 whitespace-nowrap">
									<CheckCircle className="w-4 h-4 text-accent-foreground" />
									<span className="font-medium">{t.noHiddenFees}</span>
								</div>
								<div className="flex items-center gap-2 whitespace-nowrap">
									<CheckCircle className="w-4 h-4 text-accent-foreground" />
									<span className="font-medium">{t.fastPayout}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Desktop Content */}
					<div className="hidden lg:block">
						<h1 className="hero-text text-4xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
							{t.heroTitle}
							<br />
							<span className="text-primary">{t.heroSubtitle}</span>
						</h1>

						<p className="hero-text text-lg lg:text-2xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
							{t.heroDescription}
						</p>

						<Button
							onClick={onGetStarted}
							size="lg"
							className={`mb-10 group w-full sm:w-auto ${
								isRTL ? "lg:self-end" : ""
							}`}>
							{t.getEstimate}
							<ArrowRight
								className={`w-6 h-6 group-hover:translate-x-1 transition-transform duration-normal ease-smooth ${
									isRTL ? "ml-0 mr-3 rotate-180" : "ml-3"
								}`}
							/>
						</Button>

						<div
							className={`grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-foreground justify-center ${
								isRTL ? "lg:justify-end" : "lg:justify-start"
							}`}>
							<div
								className={`flex items-center justify-center gap-3 ${
									isRTL ? "lg:justify-end" : "lg:justify-start"
								}`}>
								<CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
								<span className="font-medium text-sm">{t.freeEstimate}</span>
							</div>
							<div
								className={`flex items-center justify-center gap-3 ${
									isRTL ? "lg:justify-end" : "lg:justify-start"
								}`}>
								<CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
								<span className="font-medium text-sm">{t.noHiddenFees}</span>
							</div>
							<div
								className={`flex items-center justify-center gap-3 ${
									isRTL ? "lg:justify-end" : "lg:justify-start"
								}`}>
								<CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
								<span className="font-medium text-sm">{t.fastPayout}</span>
							</div>
						</div>
					</div>
				</div>

				{/* Hero Image - Mobile on top, Desktop on right */}
				<div
					className={`relative order-1 mb-8 lg:mb-0 ${
						isRTL ? "lg:order-1" : "lg:order-2"
					}`}>
					<div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] mx-auto lg:max-w-[520px] lg:mx-0">
						<AspectRatio ratio={1} className="w-full">
							<img
								src={imageSrc || chloe}
								onError={() => setImageSrc(heroBag)}
								alt="Luxury handbag for resale"
								className="h-full w-full rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl object-cover object-[55%_0%] md:object-[60%_0%] lg:object-[62%_0%]"
							/>
						</AspectRatio>
					</div>
				</div>
			</div>
		</section>
	);
};
