import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Calendar,
	Clock,
	MapPin,
	ShoppingBag,
	Star,
	Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { CountdownTimer } from "@/components/CountdownTimer";

// Sample bag data for Drop 1
const drop1Bags = [
	{
		id: 1,
		brand: "Chanel",
		model: "Classic Flap Bag",
		condition: "Excellent",
		color: "Black",
		size: "Medium",
		originalPrice: 8500,
		estimatedPrice: 7200,
		image: "/src/assets/chloe.jpeg",
		featured: true,
	},
	{
		id: 2,
		brand: "Louis Vuitton",
		model: "Neverfull MM",
		condition: "Very Good",
		color: "Monogram",
		size: "MM",
		originalPrice: 2200,
		estimatedPrice: 1800,
		image: "/src/assets/hero-bag.jpg",
		featured: false,
	},
	{
		id: 3,
		brand: "Hermès",
		model: "Evelyne III",
		condition: "Good",
		color: "Gold",
		size: "PM",
		originalPrice: 3200,
		estimatedPrice: 2600,
		image: "/src/assets/luxury-bag-hero.jpg",
		featured: false,
	},
];

const Drop1 = () => {
	const { t, isRTL } = useLanguage();
	const [selectedBag, setSelectedBag] = useState<number | null>(null);

	const handleBagClick = (bag: (typeof drop1Bags)[0]) => {
		// Create Bitly link with bag name
		const bagName = `${bag.brand}-${bag.model}`
			.replace(/\s+/g, "-")
			.toLowerCase();
		const bitlyLink = `https://bit.ly/erlume-${bagName}`;

		// Open the link in a new tab
		window.open(bitlyLink, "_blank");
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="secondary" className="mb-4 text-sm font-medium">
							{isRTL ? "إطلاق مسبق" : "Pre-Launch"}
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
							{isRTL ? "إطلاق مسبق" : "Pre-Launch Drop"}
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
							{isRTL
								? "اكتشف مجموعة مختارة من الحقائب الفاخرة المستعملة في أول إطلاق لنا. كل قطعة تم فحصها بعناية ومصادقتها من قبل خبرائنا."
								: "Discover our curated collection of pre-loved luxury bags in our first drop. Each piece has been carefully inspected and authenticated by our experts."}
						</p>

						{/* Countdown Timer */}
						<div className="flex justify-center mb-12">
							<CountdownTimer variant="page" />
						</div>

						{/* Drop Info Cards */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
							<Card className="text-center">
								<CardContent className="pt-6">
									<Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
									<h3 className="font-semibold mb-2">
										{isRTL ? "تاريخ الإطلاق" : "Drop Date"}
									</h3>
									<p className="text-sm text-muted-foreground">
										{isRTL ? "1 أكتوبر 2025" : "October 1, 2025"}
									</p>
								</CardContent>
							</Card>

							<Card className="text-center">
								<CardContent className="pt-6">
									<Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
									<h3 className="font-semibold mb-2">
										{isRTL ? "وقت الإطلاق" : "Launch Time"}
									</h3>
									<p className="text-sm text-muted-foreground">
										{isRTL ? "6:00 مساءً" : "6:00 PM"}
									</p>
								</CardContent>
							</Card>

							<Card className="text-center">
								<CardContent className="pt-6">
									<MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
									<h3 className="font-semibold mb-2">
										{isRTL ? "الموقع" : "Location"}
									</h3>
									<p className="text-sm text-muted-foreground">
										{isRTL ? "الكويت" : "Kuwait"}
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Bags Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							{isRTL ? "الحقائب المميزة" : "Featured Bags"}
						</h2>
						<p className="text-lg text-muted-foreground">
							{isRTL
								? "أبرز القطع في مجموعتنا الأولى"
								: "The highlights of our first collection"}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{drop1Bags.map((bag) => (
							<Card
								key={bag.id}
								className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-primary/20"
								onClick={() => handleBagClick(bag)}>
								<CardHeader className="pb-4">
									<div className="relative">
										<img
											src={bag.image}
											alt={`${bag.brand} ${bag.model}`}
											className="w-full h-64 object-cover rounded-lg"
										/>
										{bag.featured && (
											<Badge className="absolute top-3 left-3 bg-primary">
												<Star className="w-3 h-3 mr-1" />
												{isRTL ? "مميز" : "Featured"}
											</Badge>
										)}
									</div>
								</CardHeader>

								<CardContent>
									<div className="space-y-3">
										<div>
											<h3 className="font-semibold text-lg">
												{bag.brand} {bag.model}
											</h3>
											<p className="text-sm text-muted-foreground">
												{bag.color} • {bag.size} • {bag.condition}
											</p>
										</div>

										<div className="flex justify-between items-center">
											<div>
												<p className="text-sm text-muted-foreground line-through">
													{isRTL ? "السعر الأصلي" : "Original"}: $
													{bag.originalPrice.toLocaleString()}
												</p>
												<p className="text-lg font-bold text-primary">
													${bag.estimatedPrice.toLocaleString()}
												</p>
											</div>
											<Badge variant="outline" className="text-xs">
												{isRTL ? "تسوق الآن" : "Shop Now"}
											</Badge>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* How to Participate Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							{isRTL ? "كيف تشارك" : "How to Participate"}
						</h2>
						<p className="text-lg text-muted-foreground">
							{isRTL
								? "خطوات بسيطة للمشاركة في أول إطلاق لنا"
								: "Simple steps to participate in our first drop"}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="text-center">
							<CardHeader>
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-xl font-bold text-primary">1</span>
								</div>
								<CardTitle>
									{isRTL ? "سجل اهتمامك" : "Register Interest"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									{isRTL
										? "أخبرنا بالحقائب التي تهمك وسنرسل لك تحديثات فورية"
										: "Let us know which bags interest you and we'll send you instant updates"}
								</p>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardHeader>
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-xl font-bold text-primary">2</span>
								</div>
								<CardTitle>
									{isRTL ? "احصل على إشعار" : "Get Notified"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									{isRTL
										? "سنرسل لك رابط الدخول قبل الإطلاق بـ 30 دقيقة"
										: "We'll send you the access link 30 minutes before the drop"}
								</p>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardHeader>
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-xl font-bold text-primary">3</span>
								</div>
								<CardTitle>{isRTL ? "اشتر بسرعة" : "Shop Fast"}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									{isRTL
										? "الحقائب المميزة تُباع بسرعة، لذا كن مستعداً!"
										: "Featured bags sell out fast, so be ready!"}
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
						{isRTL ? "لا تفوت أول إطلاق لنا!" : "Don't Miss Our First Drop!"}
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						{isRTL
							? "سجل اهتمامك الآن واحصل على إشعار فوري عند الإطلاق"
							: "Register your interest now and get instant notifications when we launch"}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="group">
							<ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
							{isRTL ? "سجل اهتمامك" : "Register Interest"}
						</Button>
						<Button variant="outline" size="lg">
							<Users className="w-5 h-5 mr-2" />
							{isRTL ? "انضم للقائمة" : "Join Waitlist"}
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Drop1;
