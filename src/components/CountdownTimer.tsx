import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
	variant?: "banner" | "page";
	className?: string;
}

export const CountdownTimer = ({
	variant = "page",
	className,
}: CountdownTimerProps) => {
	const { isRTL } = useLanguage();
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// Set the target date to October 1, 2025 at 6:00 PM
	const targetDate = new Date("2025-10-01T18:00:00").getTime();

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				);
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60),
				);
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft({ days, hours, minutes, seconds });
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const isBanner = variant === "banner";
	const isPage = variant === "page";

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			{isBanner && (
				<div className="flex items-center gap-1 text-sm text-muted-foreground">
					<span>{isRTL ? "ينطلق خلال:" : "Drops in:"}</span>
				</div>
			)}

			{isPage && (
				<div className="text-center mb-4">
					<h3 className="text-lg font-semibold text-foreground mb-2">
						{isRTL ? "ينطلق خلال:" : "Drops in:"}
					</h3>
				</div>
			)}

			<div
				className={cn(
					"flex gap-1 sm:gap-2",
					isBanner ? "gap-1" : "gap-2 sm:gap-3",
				)}>
				{/* Days */}
				<Card
					className={cn(
						"text-center",
						isBanner
							? "min-w-[45px] h-10 sm:min-w-[50px] sm:h-12"
							: "min-w-[60px] h-16 sm:min-w-[80px] sm:h-20",
					)}>
					<CardContent
						className={cn(
							"flex flex-col items-center justify-center p-1",
							isBanner ? "p-1" : "p-2 sm:p-3",
						)}>
						<div
							className={cn(
								"font-bold text-primary",
								isBanner ? "text-sm sm:text-lg" : "text-lg sm:text-2xl",
							)}>
							{timeLeft.days.toString().padStart(2, "0")}
						</div>
						<div
							className={cn(
								"text-muted-foreground font-medium",
								isBanner ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm",
							)}>
							{isRTL ? "يوم" : "Days"}
						</div>
					</CardContent>
				</Card>

				{/* Hours */}
				<Card
					className={cn(
						"text-center",
						isBanner
							? "min-w-[45px] h-10 sm:min-w-[50px] sm:h-12"
							: "min-w-[60px] h-16 sm:min-w-[80px] sm:h-20",
					)}>
					<CardContent
						className={cn(
							"flex flex-col items-center justify-center p-1",
							isBanner ? "p-1" : "p-2 sm:p-3",
						)}>
						<div
							className={cn(
								"font-bold text-primary",
								isBanner ? "text-sm sm:text-lg" : "text-lg sm:text-2xl",
							)}>
							{timeLeft.hours.toString().padStart(2, "0")}
						</div>
						<div
							className={cn(
								"text-muted-foreground font-medium",
								isBanner ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm",
							)}>
							{isRTL ? "ساعة" : "Hours"}
						</div>
					</CardContent>
				</Card>

				{/* Minutes */}
				<Card
					className={cn(
						"text-center",
						isBanner
							? "min-w-[45px] h-10 sm:min-w-[50px] sm:h-12"
							: "min-w-[60px] h-16 sm:min-w-[80px] sm:h-20",
					)}>
					<CardContent
						className={cn(
							"flex flex-col items-center justify-center p-1",
							isBanner ? "p-1" : "p-2 sm:p-3",
						)}>
						<div
							className={cn(
								"font-bold text-primary",
								isBanner ? "text-sm sm:text-lg" : "text-lg sm:text-2xl",
							)}>
							{timeLeft.minutes.toString().padStart(2, "0")}
						</div>
						<div
							className={cn(
								"text-muted-foreground font-medium",
								isBanner ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm",
							)}>
							{isRTL ? "دقيقة" : "Min"}
						</div>
					</CardContent>
				</Card>

				{/* Seconds */}
				<Card
					className={cn(
						"text-center",
						isBanner
							? "min-w-[45px] h-10 sm:min-w-[50px] sm:h-12"
							: "min-w-[60px] h-16 sm:min-w-[80px] sm:h-20",
					)}>
					<CardContent
						className={cn(
							"flex flex-col items-center justify-center p-1",
							isBanner ? "p-1" : "p-2 sm:p-3",
						)}>
						<div
							className={cn(
								"font-bold text-primary",
								isBanner ? "text-sm sm:text-lg" : "text-lg sm:text-2xl",
							)}>
							{timeLeft.seconds.toString().padStart(2, "0")}
						</div>
						<div
							className={cn(
								"text-muted-foreground font-medium",
								isBanner ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm",
							)}>
							{isRTL ? "ثانية" : "Sec"}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
