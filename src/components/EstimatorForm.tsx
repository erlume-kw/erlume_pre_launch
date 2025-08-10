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
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-background" id="estimator-form">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
						<Sparkles className="w-4 h-4 text-primary" />
						Quick Estimate
					</div>
					<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
						Tell us about your bag
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Just 3 simple questions to get your instant price estimate
					</p>
				</div>

				<Card className="bg-white border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)] animate-scale-in">
					<form onSubmit={handleSubmit} className="space-y-8">
						<div className="grid md:grid-cols-2 gap-6">
							{/* Brand Selection */}
							<div className="space-y-3">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-muted text-primary">
										<Package className="w-4 h-4" />
									</div>
									Brand
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, brand: value })
									}>
									<SelectTrigger className="h-12 bg-white border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-[var(--transition-smooth)]">
										<SelectValue placeholder="Select brand" className="text-foreground" />
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-[var(--shadow-large)] max-h-60">
										{brands.map((brand) => (
											<SelectItem key={brand} value={brand} className="text-foreground rounded-lg">
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Condition */}
							<div className="space-y-3">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-muted text-primary">
										<Calculator className="w-4 h-4" />
									</div>
									Condition
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, condition: value })
									}>
									<SelectTrigger className="h-12 bg-white border border-border rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-[var(--transition-smooth)]">
										<SelectValue placeholder="Select condition" className="text-foreground" />
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-[var(--shadow-large)]">
										{conditions.map((condition) => (
											<SelectItem key={condition.value} value={condition.value} className="text-foreground rounded-lg">
												<div>
													<div className="font-medium">{condition.label}</div>
													<div className="text-sm text-muted-foreground">{condition.description}</div>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Original Price */}
							<div className="space-y-3 md:col-span-2">
								<Label className="flex items-center gap-3 text-base font-semibold text-foreground">
									<div className="p-2 rounded-lg bg-muted text-primary">
										<DollarSign className="w-4 h-4" />
									</div>
									What did you pay for it?
								</Label>
								<div className="relative">
									<Input
										type="number"
										placeholder="0"
										className="h-12 bg-white border border-border rounded-xl px-16 text-lg text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-[var(--transition-smooth)]"
										value={bagDetails.originalPrice || ""}
										onChange={(e) =>
											setBagDetails({
												...bagDetails,
												originalPrice: Number(e.target.value),
											})
										}
									/>
									<span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-lg">
										KD
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									This helps us determine the current market value
								</p>
							</div>
						</div>

						<div className="flex justify-center pt-4">
							<Button
								type="submit"
								disabled={!isValid || isCalculating}
								className="btn-hero text-lg px-10 py-5 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
							>
								{isCalculating ? (
									<>
										<div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-3"></div>
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
