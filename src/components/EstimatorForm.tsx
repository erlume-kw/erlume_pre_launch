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
			onCalculate(bagDetails);
		}
	};

	const isValid =
		bagDetails.brand && bagDetails.condition && bagDetails.originalPrice > 0;

	return (
		<section className="min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative" id="estimator-form">
			<div className="max-w-4xl mx-auto w-full">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
						Tell us about your bag
					</h2>
					<p className="text-lg text-foreground max-w-2xl mx-auto">
						Just 3 simple questions to get your instant price estimate
					</p>
				</div>

				<Card className="bg-white border border-border rounded-xl p-8 shadow-sm">
					<form onSubmit={handleSubmit} className="space-y-8">
						<div className="grid md:grid-cols-2 gap-6">
							{/* Brand Selection */}
							<div className="space-y-3">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Package className="w-4 h-4" />
									</div>
									Brand
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, brand: value })
									}>
									<SelectTrigger className="h-12">
										<SelectValue placeholder="Select brand" className="text-foreground" />
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-lg max-h-60">
										{brands.map((brand) => (
											<SelectItem key={brand} value={brand} className="text-foreground rounded-lg hover:bg-palette-blush">
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Condition */}
							<div className="space-y-3">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Calculator className="w-4 h-4" />
									</div>
									Condition
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, condition: value })
									}>
									<SelectTrigger className="h-12">
										<SelectValue placeholder="Select condition" className="text-foreground">
											{bagDetails.condition && conditions.find(c => c.value === bagDetails.condition)?.label}
										</SelectValue>
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-lg">
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
							<div className="space-y-3 md:col-span-2">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<DollarSign className="w-4 h-4" />
									</div>
									What did you pay for it?
								</Label>
								<div className="relative">
									<Input
										type="number"
										placeholder="0"
										className="h-12 px-16 text-lg text-foreground"
										value={bagDetails.originalPrice || ""}
										onChange={(e) =>
											setBagDetails({
												...bagDetails,
												originalPrice: Number(e.target.value),
											})
										}
									/>
									<span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold text-lg">
										KD
									</span>
								</div>
								<p className="text-sm text-foreground">
									This helps us determine the current market value
								</p>
							</div>
						</div>

						<div className="flex justify-center pt-4">
							<Button
								type="submit"
								size="lg"
								disabled={!isValid || isCalculating}
								className="min-w-[200px] bg-palette-terracotta hover:bg-palette-terracotta/90 text-white"
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
