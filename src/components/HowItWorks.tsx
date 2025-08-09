import { Card } from "@/components/ui/card";
import { Camera, Package, CreditCard, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
	const steps = [
		{
			icon: Camera,
			title: "Submit Details",
			description:
				"Share photos and details of your luxury bag. Our experts authenticate and evaluate.",
			color: "bg-blue-100 text-blue-600",
		},
		{
			icon: Package,
			title: "We Collect & Sell",
			description:
				"We handle pickup, professional photography, listing, and finding the perfect buyer.",
			color: "bg-green-100 text-green-600",
		},
		{
			icon: CreditCard,
			title: "You Get Paid",
			description:
				"Receive up to 95% of the selling price directly to your account after sale.",
			color: "bg-primary/10 text-primary",
		},
	];

	return (
		<section className="py-20 px-4 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10 animate-fade-in-up">
					<h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{/* Connection Lines */}
					<div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/50 z-0"></div>

					{steps.map((step, index) => {
						const Icon = step.icon;

						return (
							<div key={step.title} className="relative z-10">
								<Card
									className="card-warm text-center animate-scale-in"
									style={{ animationDelay: `${index * 0.2}s` }}>
									<div className="p-8">
										{/* Step Number */}
										<div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-lg font-bold mb-6">
											{index + 1}
										</div>

										{/* Icon */}
										<div
											className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-2xl mb-6`}>
											<Icon className="w-8 h-8" />
										</div>

										{/* Content */}
										<h3 className="text-xl font-bold mb-4 text-foreground">
											{step.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{step.description}
										</p>

										{/* Arrow for mobile */}
										{index < steps.length - 1 && (
											<div className="md:hidden flex justify-center mt-6">
												<ArrowRight className="w-6 h-6 text-primary" />
											</div>
										)}
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
