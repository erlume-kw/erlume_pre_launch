import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Zap } from "lucide-react";

interface CallToActionProps {
	onStartSelling: () => void;
}

export const CallToAction = ({ onStartSelling }: CallToActionProps) => {
	return (
		<section className="py-20 px-4 bg-warm-gradient">
			<div className="max-w-4xl mx-auto text-center">
				<div className="animate-fade-in-up">
					<h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
						Ready to sell?
						<br />
						<span className="text-gradient">Let's make it happen</span>
					</h2>

					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Join thousands of satisfied sellers who trust Erlume for
						transparent, hassle-free luxury resale.
					</p>
				</div>

				{/* Main CTA */}
				<div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
					<Button asChild className="btn-hero text-lg px-12 py-6 group">
						<a
							href="https://bit.ly/erlume-seller"
							target="_blank"
							rel="noopener noreferrer">
							Start Selling Now
							<ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
						</a>
					</Button>

					<p className="text-sm text-muted-foreground mt-4">
						No upfront costs • Get estimate in under 2 minutes
					</p>
				</div>
			</div>
		</section>
	);
};
