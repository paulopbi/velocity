import Logo from "@/components/Logo/Logo";
import { socialLinks } from "@/constants/footer";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer id="contact" className="border border-t border-gray-200">
			<div className="container-section flex flex-col items-center justify-center gap-8 py-10 animation-fade-in animation-delay-700">
				<Logo href="#" />

				{/* social */}
				<ul className="flex items-center justify-center gap-4 animation-fade-in animation-delay-800">
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
				<p className="text-muted-foreground text-sm md:text-base animation-fade-in animation-delay-900">
					&copy; {currentYear} Velocity. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
