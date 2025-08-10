import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Zap, Star, TrendingUp } from "lucide-react";

interface CallToActionProps {
	onStartSelling: () => void;
}

export const CallToAction = ({ onStartSelling }: CallToActionProps) => {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-12 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
						<Star className="w-4 h-4 text-primary" />
						Join Thousands of Sellers
					</div>
					<h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
						Ready to sell your bag?
						<br />
						<span className="text-primary">Let's get started</span>
					</h2>

					<p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
						Join thousands of satisfied sellers who trust Erlume for
						transparent, hassle-free luxury resale. Get your estimate in under 2 minutes.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-6 mb-8">
					<div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 backdrop-blur-sm hover:bg-muted/50 transition-colors">
						<div className="p-2 rounded-lg bg-muted text-primary">
							<Shield className="w-5 h-5" />
						</div>
						<span className="font-medium">Trusted & Secure</span>
					</div>
					<div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 backdrop-blur-sm hover:bg-muted/50 transition-colors">
						<div className="p-2 rounded-lg bg-muted text-primary">
							<TrendingUp className="w-5 h-5" />
						</div>
						<span className="font-medium">Up to 95% Earnings</span>
					</div>
					<div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 backdrop-blur-sm hover:bg-muted/50 transition-colors">
						<div className="p-2 rounded-lg bg-muted text-primary">
							<Zap className="w-5 h-5" />
						</div>
						<span className="font-medium">Fast & Easy</span>
					</div>
				</div>

				{/* Main CTA */}
				<div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
					<div className="text-center">
						<Button 
							onClick={onStartSelling}
							className="btn-hero text-lg px-12 py-6 group mb-4"
						>
							Get Your Estimate Now
							<ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
						</Button>

						<p className="text-sm text-muted-foreground mb-6">
							Free estimate • No commitment • Get started in 2 minutes
						</p>

						{/* Alternative CTA */}
						<div className="flex justify-center">
							<Button asChild variant="outline" className="text-base px-8 py-3 group">
								<a
									href="https://bit.ly/erlume-seller"
									target="_blank"
									rel="noopener noreferrer">
									Chat with us on WhatsApp
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
