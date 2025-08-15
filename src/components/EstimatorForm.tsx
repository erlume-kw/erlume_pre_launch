import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Package, Sparkles, DollarSign } from "lucide-react";

interface BagDetails {
	brand: string;
	model: string;
	condition: string;
	color: string;
	size: string;
	originalPrice: number;
}

interface EstimatorFormProps {
	onCalculate: (details: BagDetails) => void;
}

export const EstimatorForm = ({ onCalculate }: EstimatorFormProps) => {
	const [bagDetails, setBagDetails] = useState<BagDetails>({
		brand: "",
		model: "",
		condition: "",
		color: "",
		size: "",
		originalPrice: 0,
	});

	const [isCalculating, setIsCalculating] = useState(false);

	const brands = [
		"Louis Vuitton",
		"Chanel",
		"Hermès",
		"Gucci",
		"Prada",
		"Bottega Veneta",
		"Saint Laurent",
		"Dior",
		"Celine",
		"Balenciaga",
		"Fendi",
		"Givenchy",
		"Versace",
		"Burberry",
		"Valentino",
		"Miu Miu",
		"Loewe",
		"Alexander McQueen",
		"Jimmy Choo",
		"Salvatore Ferragamo",
		"Other",
	];

	const conditions = [
		{ value: "new", label: "New or Like New", description: "Perfect condition, no signs of wear" },
		{ value: "gently", label: "Gently Used", description: "Minor wear, still excellent condition" },
		{ value: "fair", label: "Fair or Worn", description: "Visible wear but still functional" },
	];

  // Helper to compute commission percent using final price tiers
  const getServiceFeePercent = (price: number) => {
    if (price >= 500) return 5;
    if (price >= 200) return 8;
    return 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (
			bagDetails.brand &&
			bagDetails.condition &&
			bagDetails.originalPrice > 0
		) {
			setIsCalculating(true);
			// Simulate calculation delay for better UX
			await new Promise(resolve => setTimeout(resolve, 800));
			setIsCalculating(false);
      // Compute final price adjustment based on condition
      const conditionAdjustment = bagDetails.condition === 'new' ? 0 : bagDetails.condition === 'gently' ? -5 : -10;
      const finalPrice = bagDetails.originalPrice * (1 + conditionAdjustment / 100);
      const serviceFeePercent = getServiceFeePercent(finalPrice);
      // Pass through; downstream uses original details but pricing uses tiers
      onCalculate({ ...bagDetails });
		}
	};

	const isValid =
		bagDetails.brand && bagDetails.condition && bagDetails.originalPrice > 0;

	return (
		<section className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative py-12 lg:py-0 scroll-mt-14 sm:scroll-mt-16" id="estimator-form">
			<div className="max-w-4xl mx-auto w-full">
				<div className="text-center mb-8 lg:mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
						Tell us about your bag
					</h2>
					<p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto">
						Just 3 simple questions to get your instant price estimate
					</p>
				</div>

            <Card className="bg-white border border-border rounded-xl p-6 lg:p-8 shadow-sm will-change-auto">
                    <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8 motion-reduce:transition-none">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
							{/* Brand Selection */}
							<div className="space-y-2 lg:space-y-3">
								<Label className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Package className="w-4 h-4" />
									</div>
									Brand
								</Label>
                                <Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, brand: value })
									}>
                                    <SelectTrigger className="h-11 lg:h-12 transition-none">
										<SelectValue placeholder="Select brand" className="text-foreground" />
									</SelectTrigger>
                                    <SelectContent className="bg-white border border-border rounded-xl shadow-lg max-h-60 transition-none">
										{brands.map((brand) => (
											<SelectItem key={brand} value={brand} className="text-foreground rounded-lg hover:bg-palette-blush">
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Condition */}
							<div className="space-y-2 lg:space-y-3">
								<Label className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Calculator className="w-4 h-4" />
									</div>
									Condition
								</Label>
                                <Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, condition: value })
									}>
                                    <SelectTrigger className="h-11 lg:h-12 transition-none">
										<SelectValue placeholder="Select condition" className="text-foreground">
											{bagDetails.condition && conditions.find(c => c.value === bagDetails.condition)?.label}
										</SelectValue>
									</SelectTrigger>
                                    <SelectContent className="bg-white border border-border rounded-xl shadow-lg transition-none">
										{conditions.map((condition) => (
											<SelectItem key={condition.value} value={condition.value} className="text-foreground rounded-lg hover:bg-palette-blush">
												<div>
													<div className="font-medium">{condition.label}</div>
													<div className="text-sm text-foreground">{condition.description}</div>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Original Price */}
							<div className="space-y-2 lg:space-y-3 md:col-span-2">
								<Label className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<DollarSign className="w-4 h-4" />
									</div>
									What did you pay for it?
								</Label>
								<div className="relative">
									<Input
										type="number"
										placeholder="0"
										className="h-11 lg:h-12 px-12 sm:px-16 text-base lg:text-lg text-foreground transition-none"
										value={bagDetails.originalPrice || ""}
										onChange={(e) =>
											setBagDetails({
												...bagDetails,
												originalPrice: Number(e.target.value),
											})
										}
									/>
									<span className="absolute left-3 sm:left-4 lg:top-1/2 top-0 -translate-y-1/2 text-foreground font-semibold text-sm sm:text-base lg:text-lg h-full flex items-center justify-center">
										KD
									</span>
								</div>
								<p className="text-xs lg:text-sm text-foreground">
									This helps us determine the current market value
								</p>
							</div>
						</div>

                        <div className="flex justify-center pt-4">
							<Button
								type="submit"
								size="lg"
								disabled={!isValid || isCalculating}
                                className="w-full sm:min-w-[200px] bg-palette-terracotta hover:bg-palette-terracotta/90 text-white will-change-auto"
							>
								{isCalculating ? (
									<>
										<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
										Calculating...
									</>
								) : (
									<>
										Calculate Estimate
										<Calculator className="w-5 h-5 ml-3" />
									</>
								)}
							</Button>
						</div>
					</form>
				</Card>
			</div>
		</section>
	);
};
