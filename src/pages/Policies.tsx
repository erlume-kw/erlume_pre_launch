import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	ShieldCheck,
	Package,
	Truck,
	Tag,
	Percent,
	Lock,
	CreditCard,
	Phone,
	CalendarClock,
	Link as LinkIcon,
} from "lucide-react";

export default function Policies() {
	return (
		<>
			<SEO
				title="Erlume Policies | Transparent Seller Guidelines"
				description="Review Erlume's policies covering authentication, listings, payouts, and dispute resolution."
				canonicalPath="/policies"
			/>
			<main>
				<section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
					<h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
						Policies
					</h1>
					<div className="space-y-12">
						<p className="text-lg text-muted-foreground max-w-3xl">
							A concise overview of our key policies. Tap any section to expand
							for details.
						</p>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<Card className="bg-white border border-border">
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
										<ShieldCheck className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">Authentication</div>
									<p className="mt-1 text-sm text-muted-foreground">
										Every item is authenticated. Counterfeits are declined.
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
										<Package className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">
										Handling & Listing
									</div>
									<p className="mt-1 text-sm text-muted-foreground">
										We collect, photograph, and list for you.
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white border border-border">
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
										<Tag className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">Pricing</div>
									<p className="mt-1 text-sm text-muted-foreground">
										We negotiate pricing on your behalf.
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
										<Percent className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">Commission</div>
									<p className="mt-1 text-sm text-muted-foreground">
										5–10% deducted to cover services.
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
										<Lock className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">Final Sale</div>
									<p className="mt-1 text-sm text-muted-foreground">
										After inspection and confirmation, sales are final.
									</p>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-semibold mb-6 text-foreground">
									Selling Policy
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-white">
									<AccordionItem value="auth">
										<AccordionTrigger className="px-6 py-4 text-left">
											Authentication &amp; Verification
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												All submitted items will undergo authentication by{" "}
												<strong>erlume</strong>. We reserve the right to reject
												counterfeit or unauthenticated products.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="handling">
										<AccordionTrigger className="px-6 py-4 text-left">
											Product Handling
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Sellers agree to hand over their products to{" "}
												<strong>erlume</strong> for photography and listing on
												our platforms.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="contact">
										<AccordionTrigger className="px-6 py-4 text-left">
											Contact Disclosure
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Sellers must approve sharing their contact number with
												potential buyers for coordination or inquiries.
											</p>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="pricing">
										<AccordionTrigger className="px-6 py-4 text-left">
											Pricing
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												<strong>erlume</strong> will manage price negotiations
												on the seller's behalf.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="commission">
										<AccordionTrigger className="px-6 py-4 text-left">
											Commission
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												A <strong>5–10% commission</strong> will be deducted
												from the final sale price to cover our services.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="consent">
										<AccordionTrigger className="px-6 py-4 text-left">
											Consent
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Sellers must agree to all <strong>erlume</strong> terms
												and conditions to participate in the drop.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="schedule">
										<AccordionTrigger className="px-6 py-4 text-left">
											Drop Schedule
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												The product drop date will be confirmed and communicated
												in advance.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="collection">
										<AccordionTrigger className="px-6 py-4 text-left">
											Product Collection
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												<strong>erlume</strong> will collect products{" "}
												<strong>one week</strong> prior to the drop date.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="listing">
										<AccordionTrigger className="px-6 py-4 text-left">
											Listing Timeline
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Products will be officially listed{" "}
												<strong>two weeks after collection</strong>, allowing
												time for inspection, photography, and marketing.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="payment-link">
										<AccordionTrigger className="px-6 py-4 text-left">
											Payment Link Policy
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<ul className="list-disc pl-5 text-foreground">
												<li>
													<strong>erlume</strong> can generate and send the
													payment link on the seller's behalf.
												</li>
												<li>
													Once payment is received, <strong>erlume</strong> will
													transfer the seller's share{" "}
													<strong>after deducting the commission</strong>.
												</li>
											</ul>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="unsold">
										<AccordionTrigger className="px-6 py-4 text-left">
											Unsold Items
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Unsold items will be returned to the seller{" "}
												<strong>after 1 month</strong> from the listing date.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							<div>
								<h2 className="text-2xl font-semibold mb-6 text-foreground">
									Purchasing Policy
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-white">
									<AccordionItem value="inspection">
										<AccordionTrigger className="px-6 py-4 text-left">
											Inspection Policy
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Buyers are allowed a{" "}
												<strong>10-minute in-person inspection</strong> of the
												product. Once the purchase is confirmed,{" "}
												<strong>no returns or refunds</strong> will be accepted.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="payment">
										<AccordionTrigger className="px-6 py-4 text-left">
											Full Payment Requirement
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Buyers must{" "}
												<strong>pay the full amount before delivery</strong> is
												arranged.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="contact-agreement">
										<AccordionTrigger className="px-6 py-4 text-left">
											Contact Agreement
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Buyers approve receiving the{" "}
												<strong>seller's contact number</strong> for any
												post-sale clarification or coordination if necessary.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="final-sale">
										<AccordionTrigger className="px-6 py-4 text-left">
											No Returns After Confirmation
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-4">
											<p className="text-foreground">
												Once a buyer confirms the purchase after inspection,{" "}
												<strong>the sale is final</strong>.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							<Card className="bg-muted/30 border border-border">
								<CardContent className="p-6">
									<div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
										<Percent className="h-4 w-4" />
										Commission Calculation
									</div>
									<blockquote className="border-l-2 pl-4 text-muted-foreground">
										This pricing is used to calculate our commission, noting
										that the{" "}
										<strong>
											final price is always decided after negotiation
										</strong>
										.
									</blockquote>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<link rel="canonical" href="/policies" />
		</>
	);
}
