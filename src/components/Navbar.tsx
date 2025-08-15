import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
	{ to: "/about", label: "About erlume" },
	{ to: "/policies", label: "Policies" },
];

const Logo = ({ onClick }: { onClick?: () => void }) => (
	<Link
		to="/"
		onClick={onClick}
		className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg transition-all duration-normal ease-smooth hover:scale-105"
		aria-label="Erlume Home">
		<img
			src={new URL(
				"../assets/erlume_Icon_1_Transparent_green.png",
				import.meta.url,
			).toString()}
			alt="Erlume logo"
			loading="lazy"
			className="h-7 w-auto"
		/>
		{/* <span className="text-xl font-semibold text-foreground">Erlume</span> */}
	</Link>
);

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 2);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && !(event.target as Element).closest('[data-sheet]')) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);
	
	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-normal ease-smooth",
				isScrolled ? "shadow-sm" : "shadow-none",
			)}>
			<nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
				<Logo onClick={() => setIsOpen(false)} />

				{/* Desktop nav */}
				<div className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								cn(
									"relative text-sm font-medium transition-all duration-normal ease-smooth hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg px-3 py-2 hover:scale-105",
									isActive
										? "text-primary bg-muted"
										: "text-foreground hover:bg-muted/50",
								)
							}>
							{item.label}
						</NavLink>
					))}
				</div>

				{/* Mobile nav */}
				<div className="md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button 
								variant="ghost" 
								size="icon" 
								aria-label="Open menu"
								className="transition-all duration-normal ease-smooth hover:scale-105 min-h-[44px] min-w-[44px]"
							>
								{isOpen ? (
									<X className="h-5 w-5 transition-transform duration-normal ease-smooth" />
								) : (
									<Menu className="h-5 w-5 transition-transform duration-normal ease-smooth" />
								)}
							</Button>
						</SheetTrigger>
						<SheetContent 
							side="right" 
							className="w-72 border-l border-border bg-background/95 backdrop-blur-sm"
							data-sheet
						>
						
							<div className="mt-8 grid gap-4 pb-20">
								{navItems.map((item) => (
									<NavLink
										key={item.to}
										to={item.to}
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											cn(
												"rounded-lg px-4 py-4 text-base font-medium transition-all duration-normal ease-smooth hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-105 min-h-[44px]",
												isActive ? "text-primary bg-muted/50" : "text-muted-foreground",
											)
										}>
										{item.label}
									</NavLink>
								))}
							</div>
							
							{/* Mobile menu footer */}
							<div className="absolute bottom-8 left-6 right-6">
								<div className="text-xs text-muted-foreground text-center">
									Trusted luxury resale platform
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
