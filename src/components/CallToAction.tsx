import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Zap, Star, TrendingUp } from "lucide-react";

interface CallToActionProps {
	onStartSelling: () => void;
}

export const CallToAction = ({ onStartSelling }: CallToActionProps) => {
	return (
		<section className="min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative py-12 lg:py-0 scroll-mt-14 sm:scroll-mt-16">
			<div className="max-w-5xl mx-auto w-full">
                <div className="text-center mb-10 sm:mb-12 animate-fade-in">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
						Ready to sell your bag?
						<br />
						<span className="text-accent-foreground">Let's get started</span>
					</h2>

                    <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
						Join thousands of satisfied sellers who trust erlume for
						transparent, hassle-free luxury resale. Get your estimate in under 2 minutes.
					</p>
				</div>

				{/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
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
                            asChild
                            onClick={onStartSelling}
                            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 group mb-2 sm:mb-4"
                        >
                            <a
                                href="https://bit.ly/erlume-seller"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                Chat with us on WhatsApp
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
