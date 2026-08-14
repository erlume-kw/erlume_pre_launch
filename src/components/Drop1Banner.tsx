import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Drop1Banner = () => {
	const { t, isRTL } = useLanguage();

	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-b border-primary/20 min-h-screen sm:min-h-0">
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen sm:min-h-0 flex items-center">
				<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 w-full">
					{/* Left Content */}
					<div
						className={cn(
							"flex-1 text-center lg:text-left",
							isRTL && "lg:text-right",
						)}>
						<div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
							<Badge
								variant="secondary"
								className="bg-primary/10 text-primary border-primary/20">
								<Sparkles className="w-3 h-3 mr-1" />
								{isRTL ? "إطلاق مسبق" : "Pre-Launch"}
							</Badge>
							<Badge
								variant="outline"
								className="border-primary/30 text-primary">
								{isRTL ? "محدود" : "Limited"}
							</Badge>
						</div>

						<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
							{isRTL
								? "إطلاق مسبق - الحقائب الفاخرة"
								: "Pre-Launch Drop - Luxury Bags"}
						</h2>

						<p className="text-muted-foreground mb-4 max-w-2xl">
							{isRTL
								? "اكتشف مجموعة مختارة من الحقائب الفاخرة المستعملة في أول إطلاق لنا. سجل اهتمامك الآن!"
								: "Discover our curated collection of pre-loved luxury bags in our first drop. Register your interest now!"}
						</p>

						<div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4" />
								<span>{isRTL ? "1 أكتوبر 2025" : "October 1, 2025"}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>{isRTL ? "6:00 مساءً" : "6:00 PM"}</span>
							</div>
						</div>
					</div>

					{/* Right Content - CTA */}
					<div className="flex flex-col sm:flex-row gap-3">
						<Button asChild size="lg" className="group">
							<Link to="/drop1">
								{isRTL ? "اكتشف المجموعة" : "Explore Collection"}
								<ArrowRight
									className={cn(
										"w-4 h-4 transition-transform group-hover:translate-x-1",
										isRTL ? "mr-2 rotate-180" : "ml-2",
									)}
								/>
							</Link>
						</Button>

						<Button variant="outline" size="lg" className="group">
							{isRTL ? "سجل اهتمامك" : "Register Interest"}
							<Sparkles
								className={cn(
									"w-4 h-4 transition-transform group-hover:scale-110",
									isRTL ? "mr-2" : "ml-2",
								)}
							/>
						</Button>
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
			<div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12"></div>
		</div>
	);
};
