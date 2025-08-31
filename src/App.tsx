import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Policies from "./pages/Policies";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const queryClient = new QueryClient();

const AppContent = () => {
	const { isRTL } = useLanguage();

	// Apply RTL direction to document
	React.useEffect(() => {
		document.documentElement.dir = isRTL ? "rtl" : "ltr";
		document.documentElement.lang = isRTL ? "ar" : "en";
	}, [isRTL]);

	return (
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`}>
					<Navbar />
					<main className="flex-1">
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/about" element={<About />} />
							<Route path="/policies" element={<Policies />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</TooltipProvider>
	);
};

const App = () => (
	<QueryClientProvider client={queryClient}>
		<LanguageProvider>
			<AppContent />
		</LanguageProvider>
	</QueryClientProvider>
);

export default App;
