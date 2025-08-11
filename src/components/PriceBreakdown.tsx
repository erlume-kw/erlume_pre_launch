import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Package, Star, Wrench, DollarSign, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BagDetails {
	brand: string;
	model: string;
	condition: string;
	color: string;
	size: string;
	originalPrice: number;
}

interface PriceBreakdownProps {
	bagDetails: BagDetails;
}

export const PriceBreakdown = ({ bagDetails }: PriceBreakdownProps) => {
	// Step 1: Base Price (Original retail price)
	const basePrice = bagDetails.originalPrice;

	// Step 2: Condition Adjustment (only deduct when necessary)
	const getConditionAdjustment = (condition: string) => {
		switch (condition) {
			case "new":
				return 0; // No deduction
			case "gently":
				return -5; // Gently Used: -5%
			case "fair":
				return -10; // Fair or Worn: -10%
			default:
				return 0;
		}
	};

	const conditionAdjustment = getConditionAdjustment(bagDetails.condition);
	const finalPrice = basePrice * (1 + conditionAdjustment / 100);

	// Commission Structure based on price tiers
	const getCommissionSplit = (price: number) => {
		if (price >= 20 && price <= 49.99) {
			return { yourShare: 90, erlumeShare: 10 }; // 10% commission
		} else if (price >= 50 && price <= 99.99) {
			return { yourShare: 92, erlumeShare: 8 }; // 8% commission
		} else if (price >= 100 && price <= 199.99) {
			return { yourShare: 94, erlumeShare: 6 }; // 6% commission
		} else if (price >= 200) {
			return { yourShare: 95, erlumeShare: 5 }; // 5% commission
		} else {
			return { yourShare: 92, erlumeShare: 8 }; // Default fallback
		}
	};

	const commission = getCommissionSplit(finalPrice);
	const yourEarnings = finalPrice * (commission.yourShare / 100);
	const erlumeEarnings = finalPrice * (commission.erlumeShare / 100);

	return (
		<section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative" id="price-breakdown">
			<div className="max-w-6xl mx-auto w-full h-full">
				<div className="grid lg:grid-cols-3 gap-8 h-full">
					{/* Price Calculation Steps - More condensed */}
					<div className="lg:col-span-2 flex flex-col h-full">
						<div className="animate-fade-in mb-8">
								<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
									Here's what you'll earn
								</h2>
								<p className="text-lg text-muted-foreground">
									Transparent pricing with no hidden fees
								</p>
							</div>
						

						{/* Cards Container - Stretches to fill remaining height */}
						<div className="flex flex-col justify-between flex-1 space-y-4">
						
							{/* Step 1: Base Price */}
							<Card className="bg-white border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] animate-scale-in flex-1 hover:shadow-[var(--shadow-medium)] transition-shadow">
								<div className="flex items-center justify-between h-full">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-gray-100 text-gray-700">
											<DollarSign className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-base font-semibold text-foreground">
												Original Price
											</h3>
											<p className="text-xs text-muted-foreground">
												What you originally paid
											</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-foreground">
											{basePrice.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>

							{/* Step 2: Condition Adjustment */}
							<Card
								className="bg-white border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] animate-scale-in flex-1 hover:shadow-[var(--shadow-medium)] transition-shadow"
								style={{ animationDelay: "0.1s" }}>
								<div className="flex items-center justify-between h-full">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-gray-100 text-gray-700">
											<Star className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-base font-semibold text-foreground">
												Condition Adjustment
											</h3>
											<p className="text-xs text-muted-foreground">
												{bagDetails.condition === "new"
													? "Perfect condition - no adjustment"
													: bagDetails.condition === "gently"
													? "Minor wear adjustment"
													: "Visible wear adjustment"}
											</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-muted-foreground">
											{conditionAdjustment}%
										</div>
										<div className="text-xl font-bold text-foreground">
											{finalPrice.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>

							{/* Commission Info */}
							<Card className="bg-gray-50 border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] animate-scale-in flex-1 hover:shadow-[var(--shadow-medium)] transition-shadow" style={{ animationDelay: "0.2s" }}>
								<div className="flex items-center justify-between h-full">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-palette-terracotta/10 text-palette-terracotta">
											<Package className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-base font-semibold text-foreground">
												Our Service Fee
											</h3>
											<p className="text-xs text-muted-foreground">
												We handle everything: photography, listing, and finding buyers
											</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-palette-terracotta">
											{commission.erlumeShare}%
										</div>
										<div className="text-xl font-bold text-foreground">
											{erlumeEarnings.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>

					{/* Final Price Summary - Keep the same */}
					<div className="flex flex-col justify-center space-y-6">
						{/* Total Selling Price */}
						<Card className="bg-black text-white rounded-2xl p-6 shadow-[var(--shadow-large)] animate-scale-in" style={{ animationDelay: "0.3s" }}>
							<div className="text-center p-6">
								<h3 className="text-lg font-semibold mb-3 text-white">
									You'll Earn
								</h3>
								<div className="text-4xl font-bold mb-6 text-white">
									{yourEarnings.toFixed(2)} KD
								</div>
								<div className="space-y-3">
									<div className="flex justify-between items-center text-white/80">
										<span>Service Fee</span>
										<span className="font-semibold">
											{erlumeEarnings.toFixed(2)} KD
										</span>
									</div>
									<div className="h-px bg-white/20"></div>
									<div className="flex justify-between items-center text-white">
										<span className="font-semibold">Your Earnings</span>
										<span className="text-2xl font-bold">
											{yourEarnings.toFixed(2)} KD
										</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Benefits */}
						<Card className="bg-white border border-border rounded-2xl p-6 shadow-[var(--shadow-soft)] animate-scale-in hover:shadow-[var(--shadow-medium)] transition-shadow" style={{ animationDelay: "0.4s" }}>
							<div className="space-y-4">
								<h4 className="font-semibold text-foreground">What's included:</h4>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta" />
										<span className="text-sm text-muted-foreground">Professional photography</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta" />
										<span className="text-sm text-muted-foreground">Authentication & listing</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta" />
										<span className="text-sm text-muted-foreground">Free pickup & shipping</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta" />
										<span className="text-sm text-muted-foreground">Fast payment</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Instant WhatsApp CTA */}
						<div
							className="animate-fade-in"
							style={{ animationDelay: "0.5s" }}>
							<Button asChild className="w-full btn-hero text-lg px-6 py-5 group">
								<a
									href="https://bit.ly/erlume-seller"
									target="_blank"
									rel="noopener noreferrer">
									Start Selling Now
									<MessageCircle className="w-5 h-5 ml-3 group-hover:translate-x-0.5 transition-transform" />
								</a>
							</Button>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
