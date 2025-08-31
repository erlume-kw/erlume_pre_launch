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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Policies() {
	const { t, isRTL } = useLanguage();

	return (
		<>
			<SEO
				title="Erlume Policies | Transparent Seller Guidelines"
				description="Review Erlume's policies covering authentication, listings, payouts, and dispute resolution."
				canonicalPath="/policies"
			/>
			<main>
                <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                    <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
                        <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.policies.title}
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t.policies.subtitle}
                        </p>
                    </div>
                    <div className="space-y-10 sm:space-y-12">

						<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							<Card className="bg-white border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className="mb-3 sm:mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
										<ShieldCheck className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">{t.policies.policyCards.authentication.title}</div>
									<p className="mt-1 text-sm text-foreground">
										{t.policies.policyCards.authentication.description}
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className="mb-3 sm:mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
										<Package className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">
										{t.policies.policyCards.handling.title}
									</div>
									<p className="mt-1 text-sm text-foreground">
										{t.policies.policyCards.handling.description}
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className="mb-3 sm:mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
										<Tag className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">{t.policies.policyCards.pricing.title}</div>
									<p className="mt-1 text-sm text-foreground">
										{t.policies.policyCards.pricing.description}
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className="mb-3 sm:mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
										<Percent className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">{t.policies.policyCards.commission.title}</div>
									<p className="mt-1 text-sm text-foreground">
										{t.policies.policyCards.commission.description}
									</p>
								</CardContent>
							</Card>
							<Card className="bg-white border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className="mb-3 sm:mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
										<Lock className="h-6 w-6" />
									</div>
									<div className="text-base font-semibold text-foreground">{t.policies.policyCards.finalSale.title}</div>
									<p className="mt-1 text-sm text-foreground">
										{t.policies.policyCards.finalSale.description}
									</p>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-6 sm:space-y-8">
							<div>
								<h2 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
									{t.policies.sellingPolicy.title}
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-white">
									<AccordionItem value="auth">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.authentication.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.authentication.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="handling">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.handling.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.handling.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="contact">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.contact.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.contact.content}
											</p>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="pricing">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.pricing.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.pricing.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="commission">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.commission.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.commission.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="consent">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.consent.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.consent.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="schedule">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.schedule.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.schedule.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="collection">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.collection.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.collection.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="listing">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.listing.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.listing.content}
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="payment-link">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.paymentLink.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<ul className={`list-disc pl-5 text-foreground ${isRTL ? 'text-right pr-5 pl-0' : ''}`}>
												{t.policies.sellingPolicy.paymentLink.content.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="unsold">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.sellingPolicy.unsold.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.sellingPolicy.unsold.content}
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							{/* Purchasing Policy */}
							<div>
								<h2 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
									{t.policies.purchasingPolicy.title}
								</h2>
								<Accordion
									type="multiple"
									className="divide-y rounded-lg border bg-white">
									<AccordionItem value="inspection">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.purchasingPolicy.inspection.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.purchasingPolicy.inspection.content}
											</p>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="payment">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.purchasingPolicy.payment.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.purchasingPolicy.payment.content}
											</p>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="contact-agreement">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.purchasingPolicy.contactAgreement.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.purchasingPolicy.contactAgreement.content}
											</p>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="final-sale">
										<AccordionTrigger className={`px-5 sm:px-6 py-3 sm:py-4 text-left ${isRTL ? 'text-right' : ''}`}>
											{t.policies.purchasingPolicy.finalSale.title}
										</AccordionTrigger>
										<AccordionContent className="px-5 sm:px-6 pb-4">
											<p className={`text-foreground ${isRTL ? 'text-right' : ''}`}>
												{t.policies.purchasingPolicy.finalSale.content}
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							<Card className="bg-muted/30 border border-border">
								<CardContent className="p-5 sm:p-6">
									<div className={`mb-2 flex items-center gap-2 text-sm font-medium text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
										<Percent className="h-4 w-4" />
										{t.policies.commissionNote.title}
									</div>
									<blockquote className={`border-l-2 pl-4 text-foreground ${isRTL ? 'border-r-2 border-l-0 pr-4 pl-0' : ''}`}>
										{t.policies.commissionNote.content}
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
