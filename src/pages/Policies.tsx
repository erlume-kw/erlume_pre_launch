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
				<section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
					<h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
						Policies
					</h1>
					<div className="space-y-12">
						<p className="text-lg text-muted-foreground max-w-3xl">
							A concise overview of our key policies. Tap any section to expand
							for details.
						</p>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
										<ShieldCheck className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">Authentication</div>
									<p className="mt-1 text-sm text-muted-foreground">
										Every item is authenticated. Counterfeits are declined.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
										<Package className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">
										Handling & Listing
									</div>
									<p className="mt-1 text-sm text-muted-foreground">
										We collect, photograph, and list for you.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
										<Truck className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">
										Cleaning & Delivery
									</div>
									<p className="mt-1 text-sm text-muted-foreground">
										We handle cleaning and buyer delivery.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
										<Tag className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">Pricing</div>
									<p className="mt-1 text-sm text-muted-foreground">
										We negotiate pricing on your behalf.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
										<Percent className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">Commission</div>
									<p className="mt-1 text-sm text-muted-foreground">
										5–10% deducted to cover services.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
										<Lock className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold">Final Sale</div>
									<p className="mt-1 text-sm text-muted-foreground">
										After inspection and confirmation, sales are final.
									</p>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-semibold mb-4 sm:mb-6">
									Selling Policy
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-card">
									<AccordionItem value="auth">
										<AccordionTrigger className="px-4">
											Authentication &amp; Verification
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												All submitted items will undergo authentication by{" "}
												<strong>erlume</strong>. We reserve the right to reject
												counterfeit or unauthenticated products.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="handling">
										<AccordionTrigger className="px-4">
											Product Handling
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Sellers agree to hand over their products to{" "}
												<strong>erlume</strong> for photography and listing on
												our platforms.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="contact">
										<AccordionTrigger className="px-4">
											Contact Disclosure
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Sellers must approve sharing their contact number with
												potential buyers for coordination or inquiries.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="cleaning">
										<AccordionTrigger className="px-4">
											Product Cleaning &amp; Delivery
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												<strong>erlume</strong> will handle product cleaning and
												delivery logistics to the buyer.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="pricing">
										<AccordionTrigger className="px-4">
											Pricing
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												<strong>erlume</strong> will manage price negotiations
												on the seller's behalf.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="commission">
										<AccordionTrigger className="px-4">
											Commission
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												A <strong>5–10% commission</strong> will be deducted
												from the final sale price to cover cleaning and delivery
												costs.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="consent">
										<AccordionTrigger className="px-4">
											Consent
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Sellers must agree to all <strong>erlume</strong> terms
												and conditions to participate in the drop.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="schedule">
										<AccordionTrigger className="px-4">
											Drop Schedule
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												The product drop date will be confirmed and communicated
												in advance.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="collection">
										<AccordionTrigger className="px-4">
											Product Collection
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												<strong>erlume</strong> will collect products{" "}
												<strong>one week</strong> prior to the drop date.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="listing">
										<AccordionTrigger className="px-4">
											Listing Timeline
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Products will be officially listed{" "}
												<strong>two weeks after collection</strong>, allowing
												time for inspection, photography, and marketing.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="payment-link">
										<AccordionTrigger className="px-4">
											Payment Link Policy
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<ul className="list-disc pl-5">
												<li>
													<strong>erlume</strong> can generate and send the
													payment link on the seller’s behalf.
												</li>
												<li>
													Once payment is received, <strong>erlume</strong> will
													transfer the seller’s share{" "}
													<strong>after deducting the commission</strong>.
												</li>
											</ul>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="unsold">
										<AccordionTrigger className="px-4">
											Unsold Items
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Unsold items will be returned to the seller{" "}
												<strong>after 1 month</strong> from the listing date.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							<div>
								<h2 className="text-2xl font-semibold mb-4 sm:mb-6">
									Purchasing Policy
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-card">
									<AccordionItem value="inspection">
										<AccordionTrigger className="px-4">
											Inspection Policy
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Buyers are allowed a{" "}
												<strong>10-minute in-person inspection</strong> of the
												product. Once the purchase is confirmed,{" "}
												<strong>no returns or refunds</strong> will be accepted.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="payment">
										<AccordionTrigger className="px-4">
											Full Payment Requirement
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Buyers must{" "}
												<strong>pay the full amount before delivery</strong> is
												arranged.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="contact-agreement">
										<AccordionTrigger className="px-4">
											Contact Agreement
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Buyers approve receiving the{" "}
												<strong>seller’s contact number</strong> for any
												post-sale clarification or coordination if necessary.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="final-sale">
										<AccordionTrigger className="px-4">
											No Returns After Confirmation
										</AccordionTrigger>
										<AccordionContent className="px-4">
											<p>
												Once a buyer confirms the purchase after inspection,{" "}
												<strong>the sale is final</strong>.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							<Card className="bg-muted/30">
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
