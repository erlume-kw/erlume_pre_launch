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
import { Calculator, Package } from "lucide-react";

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
		"Others",
	];

	const conditions = [
		{ value: "new", label: "New or Like New", adjustment: 0 },
		{ value: "gently", label: "Gently Used", adjustment: -5 },
		{ value: "fair", label: "Fair or Worn", adjustment: -10 },
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (
			bagDetails.brand &&
			bagDetails.condition &&
			bagDetails.originalPrice > 0
		) {
			onCalculate(bagDetails);
		}
	};

	const isValid =
		bagDetails.brand && bagDetails.condition && bagDetails.originalPrice > 0;

	return (
		<section className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12 animate-fade-in-up">
					<h2 className="text-3xl lg:text-4xl font-bold mb-4">
						Tell us about your bag
					</h2>
					<p className="text-xl text-muted-foreground">
						Just these details to get your estimate
					</p>
				</div>

				<Card className="card-warm animate-scale-in">
					<form onSubmit={handleSubmit} className="space-y-8">
						<div className="grid md:grid-cols-2 gap-6">
							{/* Brand Selection */}
							<div className="space-y-2">
								<Label className="flex items-center gap-2 text-base font-medium">
									<Package className="w-4 h-4 text-primary" />
									Brand
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, brand: value })
									}>
									<SelectTrigger className="input-warm">
										<SelectValue placeholder="Select brand" />
									</SelectTrigger>
									<SelectContent>
										{brands.map((brand) => (
											<SelectItem key={brand} value={brand}>
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Condition */}
							<div className="space-y-2">
								<Label className="flex items-center gap-2 text-base font-medium">
									<Calculator className="w-4 h-4 text-primary" />
									Condition
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, condition: value })
									}>
									<SelectTrigger className="input-warm">
										<SelectValue placeholder="Select condition" />
									</SelectTrigger>
									<SelectContent>
										{conditions.map((condition) => (
											<SelectItem key={condition.value} value={condition.value}>
												{condition.label}
												{condition.adjustment !== 0 && (
													<span
														className={`ml-2 text-sm ${
															condition.adjustment > 0
																? "text-green-600"
																: "text-red-600"
														}`}>
														({condition.adjustment > 0 ? "+" : ""}
														{condition.adjustment}%)
													</span>
												)}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Original Price */}
							<div className="space-y-2 md:col-span-2">
								<Label className="flex items-center gap-2 text-base font-medium">
									<Calculator className="w-4 h-4 text-primary" />
									Estimated Price
								</Label>
								<div className="relative">
									<Input
										type="number"
										placeholder="0"
										className="input-warm pl-12"
										value={bagDetails.originalPrice || ""}
										onChange={(e) =>
											setBagDetails({
												...bagDetails,
												originalPrice: Number(e.target.value),
											})
										}
									/>
									<span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
										KD
									</span>
								</div>
							</div>
						</div>

						<div className="flex justify-center pt-4">
							<Button
								type="submit"
								disabled={!isValid}
								className="btn-hero disabled:opacity-50 disabled:cursor-not-allowed">
								Calculate My Estimate
								<Calculator className="w-5 h-5 ml-2" />
							</Button>
						</div>
					</form>
				</Card>
			</div>
		</section>
	);
};
