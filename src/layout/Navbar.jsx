import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

import Button from "@/components/Button/Button";

const navLinks = [
	{ href: "#features", label: "Features" },
	{ href: "#pricing", label: "Pricing" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className="border-b border-border bg-white/80 backdrop-blur-sm fixed w-full top-0 left-0 z-50">
			<div className="relative container mx-auto px-6 flex items-center justify-between h-20 lg:px-8">
				{/* logo */}
				<div className="flex items-center gap-2">
					<div className="bg-primary p-2 rounded-md">
						<Zap className="w-5 h-5 text-white" />
					</div>
					<span className="text-lg font-bold">Velocity</span>
				</div>

				{/* links */}
				<ul className="hidden lg:flex items-center justify-center gap-6">
					{navLinks.map((link, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: don't have id
						<li key={index}>
							<a
								href={link.href}
								className="text-sm text-gray-600 hover:text-gray-900 font-normal transition-colors duration-300"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* auth buttons */}
				<div className="hidden lg:flex items-center gap-4">
					<Button type="button" variant="ghost" size="sm">
						Sign in
					</Button>
					<Button type="button" variant="primary" size="sm">
						Get Started
					</Button>
				</div>

				{/* mobile menu */}
				<div className="lg:hidden hover:bg-gray-100 rounded-md active:bg-gray-200 transition-colors duration-300">
					<button
						type="button"
						className="cursor-pointer p-2"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className="absolute px-6 top-20 left-0 w-full py-4 border-t border-border bg-white backdrop-blur-sm">
						<ul className="flex flex-col gap-4">
							{navLinks.map((link, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: don't have id
								<li key={index}>
									<a
										href={link.href}
										className="text-sm text-gray-600 hover:text-gray-900 font-normal transition-colors duration-300"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
						<div className="flex flex-col gap-2 pt-2">
							<Button variant="ghost" className="w-full" size="sm">
								Sign in
							</Button>
							<Button className="w-full" variant="primary" size="sm">
								Get Started
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
