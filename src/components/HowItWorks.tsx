import { Card } from "@/components/ui/card";
import {
	Camera,
	Package,
	CreditCard,
	ArrowRight,
	Zap,
	CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
	const { t, isRTL } = useLanguage();
	const steps = t.steps;

	return (
		<section className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative py-12 lg:py-0 scroll-mt-14 sm:scroll-mt-16">
			<div className="max-w-6xl mx-auto w-full">
				<div
					className={`text-center mb-10 sm:mb-12 animate-fade-in ${
						isRTL ? "text-center" : ""
					}`}>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
						{t.howItWorksTitle}
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative">
					{/* Connection Lines */}
					<div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

					{steps.map((step, index) => {
						const icons = [Camera, Package, CreditCard];
						const Icon = icons[index];

						return (
							<div key={step.title} className="relative z-10">
								<Card
									className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] text-center animate-scale-in h-full group hover:scale-105"
									style={{ animationDelay: `${index * 0.1}s` }}>
									<div className="p-5 sm:p-6 flex items-center justify-center flex-col">
										{/* Step Number */}
										<div className="flex self-center items-center justify-center w-8 h-8 bg-muted text-primary rounded-full text-sm font-bold mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
											{index + 1}
										</div>

										{/* Icon */}
										<div className="flex self-center items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-2xl mb-6 shadow-[var(--shadow-medium)] group-hover:scale-110 transition-transform">
											<Icon className="w-7 h-7 sm:w-8 sm:h-8" />
										</div>

										{/* Content */}
										<h3 className="text-xl font-bold mb-4 text-foreground">
											{step.title}
										</h3>

										{/* Details */}
										<div className="space-y-2 w-full ">
											{step.details.map((detail, detailIndex) => (
												<div
													key={detailIndex}
													className={`flex items-center gap-2 text-sm text-muted-foreground ${
														isRTL ? "flex-row-reverse" : ""
													}`}>
													<CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
													<span>{detail}</span>
												</div>
											))}
										</div>
									</div>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
