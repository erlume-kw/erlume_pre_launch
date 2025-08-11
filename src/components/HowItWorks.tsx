import { Card } from "@/components/ui/card";
import { Camera, Package, CreditCard, ArrowRight, Zap, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
	const steps = [
		{
			icon: Camera,
			title: "Share Your Bag",
			details: ["Quick photo upload", "Expert authentication", "Condition assessment", "Get an instant price estimate"]
		},
		{
			icon: Package,
			title: "We Handle Everything",
			details: ["Schedule dropoff", "Professional photos", "Elegant Packaging", "Buyer matching"]
		},
		{
			icon: CreditCard,
			title: "Get Paid Fast",
			details: ["Transparent pricing", "Secure payment", "Fast transfer"]
		},
	];

	return (
		<section className="min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative">
			<div className="max-w-6xl mx-auto w-full">
				<div className="text-center mb-12 animate-fade-in">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
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
										{/* <p className="text-foreground leading-relaxed mb-6">
											{step.description}
										</p> */}

										{/* Details */}
										<div className="space-y-2 w-full ">
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
			</div>
		</section>
	);
};
