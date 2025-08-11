import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Zap, Star, TrendingUp } from "lucide-react";

interface CallToActionProps {
	onStartSelling: () => void;
}

export const CallToAction = ({ onStartSelling }: CallToActionProps) => {
	return (
		<section className="min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative">
			<div className="max-w-5xl mx-auto w-full">
				<div className="text-center mb-12 animate-fade-in">
					<h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
						Ready to sell your bag?
						<br />
						<span className="text-accent-foreground">Let's get started</span>
					</h2>

					<p className="text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
						Join thousands of satisfied sellers who trust erlume for
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
							<a
								href="https://bit.ly/erlume-seller"
								target="_blank"
								rel="noopener noreferrer">
								Chat with us on WhatsApp
							</a>
						</Button>

					

						{/* Alternative CTA */}
						{/* <div className="flex justify-center">
							<Button asChild variant="outline" className="text-base px-8 py-3 group">
								<a
									href="https://bit.ly/erlume-seller"
									target="_blank"
									rel="noopener noreferrer">
									Chat with us on WhatsApp
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
								</a>
							</Button>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};
