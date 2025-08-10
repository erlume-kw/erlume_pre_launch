import { Card } from "@/components/ui/card";
import { Camera, Package, CreditCard, ArrowRight, Zap, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
	const steps = [
		{
			icon: Camera,
			title: "Share Your Bag",
			description:
				"Send us photos and details. We'll authenticate and evaluate your bag's condition.",
			details: ["Quick photo upload", "Expert authentication", "Condition assessment"]
		},
		{
			icon: Package,
			title: "We Handle Everything",
			description:
				"From pickup to professional photography, listing, and finding the perfect buyer.",
			details: ["Free pickup", "Professional photos", "Smart pricing", "Buyer matching"]
		},
		{
			icon: CreditCard,
			title: "Get Paid Fast",
			description:
				"Receive up to 95% of the selling price directly to your account once sold.",
			details: ["Secure payment", "Fast transfer", "No hidden fees", "Transparent pricing"]
		},
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
						<Zap className="w-4 h-4 text-primary" />
						Simple Process
					</div>
					<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Three simple steps to turn your luxury bag into cash
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{/* Connection Lines */}
					<div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

					{steps.map((step, index) => {
						const Icon = step.icon;

						return (
							<div key={step.title} className="relative z-10">
								<Card className="bg-white border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] text-center animate-scale-in h-full group hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
									<div className="p-6 flex items-center justify-center flex-col">
										{/* Step Number */}
										<div className="flex self-center items-center justify-center w-8 h-8 bg-muted text-primary rounded-full text-sm font-bold mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
											{index + 1}
										</div>

										{/* Icon */}
										<div className="flex self-center items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-6 shadow-[var(--shadow-medium)] group-hover:scale-110 transition-transform">
											<Icon className="w-8 h-8" />
										</div>

										{/* Content */}
										<h3 className="text-xl font-bold mb-4 text-foreground">
											{step.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{step.description}
										</p>

										{/* Details */}
										<div className="space-y-2 w-full">
											{step.details.map((detail, detailIndex) => (
												<div key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
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

				{/* Bottom CTA */}
				<div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
					<p className="text-lg text-muted-foreground mb-6">
						Ready to get started? Get your instant estimate above.
					</p>
					<div className="flex justify-center">
						<ArrowRight className="w-6 h-6 text-primary animate-bounce" />
					</div>
				</div>
			</div>
		</section>
	);
};
