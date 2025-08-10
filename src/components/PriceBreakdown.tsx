import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Package, Star, Wrench, DollarSign, MessageCircle } from "lucide-react";
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
		<section className="py-20 px-4 bg-soft-gradient">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 animate-fade-in-up">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						Your Price Breakdown
					</h2>
					<p className="text-xl text-muted-foreground">
						Simple, transparent pricing based on true value
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Price Calculation Steps */}
					<div className="lg:col-span-2 space-y-4">
						{/* Step 1: Base Price */}
						<Card className="card-warm animate-scale-in">
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-primary/10 text-primary">
										<DollarSign className="w-5 h-5" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-foreground">
											Step 1: Base Price
										</h3>
										<p className="text-sm text-muted-foreground">
											Original retail price - the true value
										</p>
									</div>
								</div>
								<div className="text-3xl font-bold text-foreground">
									{basePrice.toFixed(2)} KD
								</div>
							</div>
						</Card>

						{/* Step 2: Condition Adjustment */}
						{conditionAdjustment !== 0 && (
							<Card
								className="card-warm animate-scale-in"
								style={{ animationDelay: "0.1s" }}>
								<div className="p-6">
									<div className="flex items-center gap-3 mb-4">
										<div className="p-2 rounded-lg bg-orange-100 text-orange-600">
											<Star className="w-5 h-5" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-foreground">
												Step 2: Condition Adjustment
											</h3>
											<p className="text-sm text-muted-foreground">
												{bagDetails.condition === "new"
													? "No deduction for excellent condition"
													: bagDetails.condition === "gently"
													? "Minor deduction for gentle wear"
													: "Fair deduction for visible wear"}
											</p>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="text-2xl font-bold text-orange-600">
											{conditionAdjustment}%
										</div>
										<div className="text-right">
											<div className="text-lg font-semibold text-foreground">
												{finalPrice.toFixed(2)} KD
											</div>
											<div className="text-sm text-muted-foreground">
												After adjustment
											</div>
										</div>
									</div>
								</div>
							</Card>
						)}
					</div>

					{/* Final Price Summary */}
					<div className="space-y-6">
						{/* Total Selling Price */}
						<Card className="card-pricing animate-scale-in">
							<div className="text-center p-6">
								<h3 className="text-lg font-semibold mb-2 text-white/90">
									Final Listing Price
								</h3>
								<div className="text-4xl font-bold mb-4 text-white">
									{finalPrice.toFixed(2)} KD
								</div>
								<div className="space-y-3">
									<div className="flex justify-between items-center text-white/80">
										<span>Erlume's Share</span>
										<span className="font-semibold">
											{erlumeEarnings.toFixed(2)} KD
										</span>
									</div>
									<div className="h-px bg-white/20"></div>
									<div className="flex justify-between items-center text-white">
										<span className="font-semibold">Your Share</span>
										<span className="text-xl font-bold">
											{yourEarnings.toFixed(2)} KD
										</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Instant WhatsApp CTA */}
						<div
							className="animate-fade-in-up"
							style={{ animationDelay: "0.1s" }}>
							<Button asChild className="w-full btn-hero group">
								<a
									href="https://bit.ly/erlume-seller"
									target="_blank"
									rel="noopener noreferrer">
									Chat on WhatsApp
									<MessageCircle className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
								</a>
							</Button>
							<p className="mt-2 text-center text-sm text-muted-foreground">
								We’ll help finalize pricing, pickup and payout.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
