import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { t, isRTL } = useLanguage();

	return (
		<footer className="border-t bg-gradient-to-b from-background to-muted/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
				<div
					className={`flex flex-col items-center gap-5 text-center ${
						isRTL ? "text-center" : ""
					}`}>
					<Link
						to="/"
						className="flex items-center gap-2 transition-transform duration-normal ease-smooth hover:scale-105">
						<img
							src={new URL(
								"../assets/erlume_Icon_1_Transparent_green.png",
								import.meta.url,
							).toString()}
							alt="Erlume logo"
							className="h-8 w-auto"
						/>
					</Link>

					<div className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent/50 border border-accent/60 shadow-sm">
						<span
							className="text-sm sm:text-base font-semibold text-accent-foreground tracking-wide"
							dir={isRTL ? "rtl" : "ltr"}>
							{t.companyName}
						</span>
					</div>

					<p className="text-sm text-muted-foreground max-w-md">
						{t.trustedPlatform}
					</p>
				</div>

				<div className="mt-8 pt-6 border-t border-border/50 text-center">
					<p className="text-sm text-muted-foreground">
						{t.copyright.replace("{year}", currentYear.toString())}
					</p>
				</div>
			</div>
		</footer>
	);
};
