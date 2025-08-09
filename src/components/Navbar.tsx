import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
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
		className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
		aria-label="erlume Home">
		<img
			src={new URL(
				"../assets/erlume_Icon_1_Transparent_green.png",
				import.meta.url,
			).toString()}
			alt="Erlume logo"
			loading="lazy"
			className="h-7 w-auto"
		/>
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
	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow",
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
									"relative text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded",
									"after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
									isActive
										? "text-primary after:scale-x-100"
										: "text-muted-foreground after:scale-x-0",
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
							<Button variant="outline" size="icon" aria-label="Open menu">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-72">
							<div className="mt-2">
								<Logo onClick={() => setIsOpen(false)} />
							</div>
							<div className="mt-6 grid gap-3">
								{navItems.map((item) => (
									<NavLink
										key={item.to}
										to={item.to}
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											cn(
												"rounded-md px-2 py-2 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
												isActive ? "text-primary" : "text-muted-foreground",
											)
										}>
										{item.label}
									</NavLink>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
