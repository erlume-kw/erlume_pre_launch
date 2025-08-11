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

  // Commission tiers based on final price (KWD)
  // 50–200 → 10%, 200–500 → 8%, 500+ → 5%
  const getServiceFeePercent = (price: number) => {
    if (price >= 500) return 5;
    if (price >= 200) return 8;
    // Treat anything below 200 as 10%
    return 10;
  };

  const serviceFeePercent = getServiceFeePercent(finalPrice);
  const yourSharePercent = 100 - serviceFeePercent;

  const yourEarnings = finalPrice * (yourSharePercent / 100);
  const erlumeEarnings = finalPrice * (serviceFeePercent / 100);

    return (
        <section className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative py-10 lg:py-0 scroll-mt-14 sm:scroll-mt-16" id="price-breakdown">
            <div className="max-w-6xl mx-auto w-full">
                {/* Mobile header - match Estimator/HowItWorks/CTA */}
                <div className="lg:hidden text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Here's what you'll earn</h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
                </div>

                {/* Mobile compact checkout-style card */}
                <div className="lg:hidden flex justify-center">
                    <Card className="bg-white border border-border rounded-2xl p-6 shadow-[var(--shadow-soft)] w-full max-w-[420px]">
                        {/* Total at top */}
                        <div className="text-center mb-2">
                            <div className="text-xs font-medium text-muted-foreground">You'll Earn</div>
                            <div className="text-3xl font-bold text-foreground">{yourEarnings.toFixed(2)} KD</div>
                        </div>

                        {/* Line items */}
                        <div className="divide-y">
                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-muted-foreground">Original Price</span>
                                <span className="text-sm font-semibold text-foreground">{basePrice.toFixed(2)} KD</span>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-muted-foreground">Condition Adjustment</span>
                                <span className="text-sm font-semibold text-muted-foreground">{conditionAdjustment}%</span>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-muted-foreground">Adjusted Price</span>
                                <span className="text-sm font-semibold text-foreground">{finalPrice.toFixed(2)} KD</span>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-muted-foreground">Service Fee</span>
                                <span className="text-sm font-semibold text-foreground">{erlumeEarnings.toFixed(2)} KD ({serviceFeePercent.toFixed(0)}%)</span>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <span className="text-base font-semibold text-foreground">Your Earnings</span>
                                <span className="text-xl font-bold text-foreground">{yourEarnings.toFixed(2)} KD</span>
                            </div>
                        </div>

                        {/* What's included */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-foreground mb-3">What's included:</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
                                    <span className="text-xs text-muted-foreground">Professional photography</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
                                    <span className="text-xs text-muted-foreground">Authentication & listing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
                                    <span className="text-xs text-muted-foreground">Free pickup & shipping</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
                                    <span className="text-xs text-muted-foreground">Fast payment</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <Button asChild className="w-full mt-6 text-base py-4">
                            <a href="https://bit.ly/erlume-seller" target="_blank" rel="noopener noreferrer">
                                Start Selling Now
                            </a>
                        </Button>
                    </Card>
                </div>

                {/* Desktop/tablet layout (unchanged content, original cards) */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
					{/* Price Calculation Steps - More condensed */}
                    <div className="lg:col-span-2 flex flex-col items-stretch">
						<div className="mb-6 lg:mb-8">
								<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
									Here's what you'll earn
								</h2>
								<p className="text-base sm:text-lg text-muted-foreground">
									Transparent pricing with no hidden fees
								</p>
							</div>
						

                        {/* Cards Container */}
                        <div className="flex flex-col space-y-4 lg:space-y-6 lg:flex-1">
						
							{/* Step 1: Base Price */}
                            <Card className="w-full bg-white border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow lg:flex-1 lg:flex lg:flex-col">
                                <div className="flex items-center justify-between lg:items-center lg:justify-between">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-gray-100 text-gray-700">
											<DollarSign className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-sm lg:text-base font-semibold text-foreground">
												Original Price
											</h3>
											<p className="text-xs text-muted-foreground">
												What you originally paid
											</p>
										</div>
									</div>
									<div className="text-right">
										<div className="text-lg lg:text-2xl font-bold text-foreground">
											{basePrice.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>

							{/* Step 2: Condition Adjustment */}
                            <Card className="w-full bg-white border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow lg:flex-1 lg:flex lg:flex-col">
                                <div className="flex items-center justify-between lg:items-center lg:justify-between">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-gray-100 text-gray-700">
											<Star className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-sm lg:text-base font-semibold text-foreground">
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
										<div className="text-sm lg:text-lg font-bold text-muted-foreground">
											{conditionAdjustment}%
										</div>
										<div className="text-lg lg:text-xl font-bold text-foreground">
											{finalPrice.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>

							{/* Commission Info */}
                            <Card className="w-full bg-gray-50 border border-border rounded-xl p-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow lg:flex-1 lg:flex lg:flex-col">
                                <div className="flex items-center justify-between lg:items-center lg:justify-between">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-palette-terracotta/10 text-palette-terracotta">
											<Package className="w-4 h-4" />
										</div>
										<div>
											<h3 className="text-sm lg:text-base font-semibold text-foreground">
												Our Service Fee
											</h3>
											<p className="text-xs text-muted-foreground">
												We handle everything: photography, listing, and finding buyers
											</p>
										</div>
									</div>
									<div className="text-right">
                                    <div className="text-sm lg:text-lg font-bold text-palette-terracotta">
                                            {serviceFeePercent.toFixed(0)}%
                                        </div>
										<div className="text-lg lg:text-xl font-bold text-foreground">
											{erlumeEarnings.toFixed(2)} KD
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>

					{/* Final Price Summary */}
                    <div className="flex flex-col space-y-4 lg:space-y-6 items-stretch lg:h-full">
						{/* Total Selling Price */}
                        <Card className="w-full bg-black text-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-[var(--shadow-large)] lg:flex-1 lg:flex lg:flex-col">
                            <div className="text-center lg:text-left p-4 lg:p-6">
                                <h3 className="text-base lg:text-lg font-semibold mb-3 text-white">
									You'll Earn
								</h3>
                                <div className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">
									{yourEarnings.toFixed(2)} KD
								</div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-white/80">
                                        <span className="text-sm lg:text-base">Service Fee ({serviceFeePercent.toFixed(0)}%)</span>
										<span className="font-semibold text-sm lg:text-base">
											{erlumeEarnings.toFixed(2)} KD
										</span>
									</div>
									<div className="h-px bg-white/20"></div>
                                    <div className="flex justify-between items-center text-white">
										<span className="font-semibold text-sm lg:text-base">Your Earnings</span>
										<span className="text-xl lg:text-2xl font-bold">
											{yourEarnings.toFixed(2)} KD
										</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Benefits */}
                        <Card className="w-full bg-white border border-border rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow lg:flex-initial">
							<div className="space-y-3 lg:space-y-4">
								<h4 className="font-semibold text-foreground text-sm lg:text-base">What's included:</h4>
								<div className="space-y-2 lg:space-y-3">
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
										<span className="text-xs lg:text-sm text-muted-foreground">Professional photography</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
										<span className="text-xs lg:text-sm text-muted-foreground">Authentication & listing</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
										<span className="text-xs lg:text-sm text-muted-foreground">Free pickup & shipping</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="w-4 h-4 text-palette-terracotta flex-shrink-0" />
										<span className="text-xs lg:text-sm text-muted-foreground">Fast payment</span>
									</div>
								</div>
							</div>
						</Card>

						{/* Instant WhatsApp CTA */}
						<div>
							<Button asChild className="w-full text-base lg:text-lg px-4 lg:px-6 py-4 lg:py-5 group">
								<a
									href="https://bit.ly/erlume-seller"
									target="_blank"
									rel="noopener noreferrer">
									Start Selling Now
									<MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3 group-hover:translate-x-0.5 transition-transform" />
								</a>
							</Button>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
