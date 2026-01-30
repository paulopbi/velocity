import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "/hero-image.jpg";

function Hero() {
	return (
		<section className="mt-35 mb-20">
			<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
				{/* left side */}
				<div className="order-2 sm:order-1 *:mb-6">
					<Badge className="text-center mx-auto md:mx-0 md:text-left">
						✨ New: AI-Powered Analytics
					</Badge>
					<h1 className="title text-center mx-auto md:text-left">
						Build faster with the modern platform
					</h1>
					<p className="subtitle max-w-[45ch] text-center mx-auto md:text-left md:mx-0">
						Transform your workflow with powerful tools designed for modern
						teams, get started in minutes and scale to millions.
					</p>

					<div className="flex items-center justify-center md:justify-start gap-4">
						<Button
							variant="primary"
							size="md"
							className="flex items-center justify-center gap-2"
						>
							Start Free Trial <ArrowRight className="w-5 h-5" />
						</Button>
						<Button variant="secondary" size="md">
							Watch Demo
						</Button>
					</div>

					<span className="block text-sm text-muted-foreground text-center mx-auto md:text-left md:mx-0">
						No credit card required • 14-day free trial
					</span>
				</div>

				{/* right side */}
				<div className="shadow-2xl rounded-2xl overflow-hidden order-1 sm:order-2 hover:scale-[1.05] transition-all">
					<img
						src={HERO_IMAGE}
						alt="A.I"
						className="w-full h-full aspect-square object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
