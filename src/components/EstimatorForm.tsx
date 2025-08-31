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
import { useLanguage } from "@/contexts/LanguageContext";

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
	const { t, isRTL } = useLanguage();
	const [bagDetails, setBagDetails] = useState<BagDetails>({
		brand: "",
		model: "",
		condition: "",
		color: "",
		size: "",
		originalPrice: 0,
	});

	const [isCalculating, setIsCalculating] = useState(false);

	const brands = t.brands;

	const conditions = [
		{
			value: "new",
			label: t.conditions.new.label,
			description: t.conditions.new.description,
		},
		{
			value: "gently",
			label: t.conditions.gently.label,
			description: t.conditions.gently.description,
		},
		{
			value: "fair",
			label: t.conditions.fair.label,
			description: t.conditions.fair.description,
		},
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
			await new Promise((resolve) => setTimeout(resolve, 800));
			setIsCalculating(false);
			// Compute final price adjustment based on condition
			const conditionAdjustment =
				bagDetails.condition === "new"
					? 0
					: bagDetails.condition === "gently"
					? -5
					: -10;
			const finalPrice =
				bagDetails.originalPrice * (1 + conditionAdjustment / 100);
			const serviceFeePercent = getServiceFeePercent(finalPrice);
			// Pass through; downstream uses original details but pricing uses tiers
			onCalculate({ ...bagDetails });
		}
	};

	const isValid =
		bagDetails.brand && bagDetails.condition && bagDetails.originalPrice > 0;

	return (
		<section
			className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative py-12 lg:py-0 scroll-mt-14 sm:scroll-mt-16"
			id="estimator-form">
			<div className="max-w-4xl mx-auto w-full">
				<div className="text-center mb-8 lg:mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
						{t.tellUsAboutYourBag}
					</h2>
					<p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto">
						{t.just3SimpleQuestions}
					</p>
				</div>

				<Card className="bg-white border border-border rounded-xl p-6 lg:p-8 shadow-sm will-change-auto">
					<form
						onSubmit={handleSubmit}
						className="space-y-6 lg:space-y-8 motion-reduce:transition-none">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
							{/* Brand Selection */}
							<div className="space-y-2 lg:space-y-3">
								<Label
									className={`flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground ${
										isRTL ? "flex-row-reverse" : ""
									}`}>
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Package className="w-4 h-4" />
									</div>
									{t.brand}
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, brand: value })
									}>
									<SelectTrigger
										className={`h-11 lg:h-12 transition-none ${
											isRTL ? "flex-row-reverse" : ""
										}`}>
										<SelectValue
											placeholder={t.selectBrand}
											className={`text-foreground ${isRTL ? "text-right" : ""}`}
										/>
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-lg max-h-60 transition-none">
										{brands.map((brand) => (
											<SelectItem
												key={brand}
												value={brand}
												className={`text-foreground rounded-lg hover:bg-palette-blush ${
													isRTL ? "text-right" : "text-center"
												}`}>
												{brand}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Condition */}
							<div className="space-y-2 lg:space-y-3">
								<Label
									className={`flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground ${
										isRTL ? "flex-row-reverse" : ""
									}`}>
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<Calculator className="w-4 h-4" />
									</div>
									{t.condition}
								</Label>
								<Select
									onValueChange={(value) =>
										setBagDetails({ ...bagDetails, condition: value })
									}>
									<SelectTrigger
										className={`h-11 lg:h-12 transition-none ${
											isRTL ? "flex-row-reverse" : ""
										}`}>
										<SelectValue
											placeholder={t.selectCondition}
											className={`text-foreground ${
												isRTL ? "text-right" : "text-left"
											}`}>
											{bagDetails.condition &&
												conditions.find((c) => c.value === bagDetails.condition)
													?.label}
										</SelectValue>
									</SelectTrigger>
									<SelectContent className="bg-white border border-border rounded-xl shadow-lg transition-none">
										{conditions.map((condition) => (
											<SelectItem
												key={condition.value}
												value={condition.value}
												className={`text-foreground rounded-lg hover:bg-palette-blush ${
													isRTL ? "text-right" : "text-left"
												}`}>
												<div
													className={`${isRTL ? "text-right" : "text-left"}`}>
													<div className="font-medium">{condition.label}</div>
													<div className="text-sm text-foreground">
														{condition.description}
													</div>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Original Price */}
							<div className="space-y-2 lg:space-y-3 md:col-span-2">
								<Label
									className={`flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-semibold text-foreground ${
										isRTL ? "flex-row-reverse" : ""
									}`}>
									<div className="p-2 rounded-lg bg-palette-blush text-foreground">
										<DollarSign className="w-4 h-4" />
									</div>
									{t.whatDidYouPayForIt}
								</Label>
								<div className="relative">
									<Input
										type="number"
										placeholder="0"
										className={`h-11 lg:h-12 text-base lg:text-lg text-foreground transition-none ${
											isRTL ? "pr-16 sm:pr-28" : "pl-12 sm:pl-16"
										}`}
										value={bagDetails.originalPrice || ""}
										onChange={(e) =>
											setBagDetails({
												...bagDetails,
												originalPrice: Number(e.target.value),
											})
										}
									/>
									<span
										className={`absolute lg:top-1/2 top-0 -translate-y-1/2 text-foreground font-semibold text-sm sm:text-base lg:text-lg h-full flex items-center justify-center ${
											isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"
										}`}>
										KD
									</span>
								</div>
								<p className="text-xs lg:text-sm text-foreground">
									{t.helpsUsDetermineValue}
								</p>
							</div>
						</div>

						<div className={`flex pt-4 justify-center ${isRTL ? "rtl" : ""}`}>
							<Button
								type="submit"
								size="lg"
								disabled={!isValid || isCalculating}
								className="w-full sm:min-w-[200px] bg-palette-terracotta hover:bg-palette-terracotta/90 text-white will-change-auto">
								{isCalculating ? (
									<>
										<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
										{t.calculating}
									</>
								) : (
									<>
										{t.calculateEstimate}
										<Calculator
											className={`w-5 h-5 ${isRTL ? "mr-3" : "ml-3"}`}
										/>
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
