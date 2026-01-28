import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "/hero-image.jpg";

function Hero() {
	return (
		<section className="py-30">
			<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
				{/* left side */}
				<div className="order-2 sm:order-1">
					<Badge className="mb-6">✨ New: AI-Powered Analytics</Badge>
					<h1 className="font-bold mb-6 leading-tight  tracking-tight text-pretty max-w-[20ch] text-5xl sm:text-6xl">
						Build faster with the modern platform
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-[45ch]">
						Transform your workflow with powerful tools designed for modern
						teams. Get started in minutes and scale to millions.
					</p>

					<div className="flex items-center justify-start gap-4 mb-6">
						<Button
							variant="primary"
							size="md"
							className="flex items-center justify-center gap-2"
						>
							Start Free Trial <ArrowRight className="w-4 h-4" />
						</Button>
						<Button variant="secondary" size="md">
							Watch Demo
						</Button>
					</div>

					<span className="text-sm text-muted-foreground">
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
