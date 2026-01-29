import Logo from "@/components/Logo/Logo";
import { socialLinks } from "@/constants/footer";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer id="contact" className="border border-t border-gray-200 py-10">
			<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
				<Logo href="#" />

				{/* social */}
				<ul className="flex items-center justify-center gap-4">
					{socialLinks.map((link) => (
						<li
							key={link.href}
							className="flex items-center justify-center gap-3"
						>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300"
							>
								<link.icon className="w-5 h-5" />
							</a>
						</li>
					))}
				</ul>

				{/* copyright */}
				<p className="text-muted-foreground text-sm md:text-base">
					&copy; {currentYear} Velocity. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
