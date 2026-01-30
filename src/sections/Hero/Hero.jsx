import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "/hero-image.jpg";

function Hero() {
	return (
		<section className="mt-35 mb-20">
			<div className="container-section grid lg:grid-cols-2 gap-10 items-center">
				{/* left side */}
				<div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
					{/* top */}
					<Badge>✨ New: AI-Powered Analytics</Badge>
					<h1 className="title text-center lg:text-left">
						Build faster with the modern platform
					</h1>
					<p className="subtitle text-center lg:text-left max-w-[45ch]">
						Transform your workflow with powerful tools designed for modern
						teams, get started in minutes and scale to millions.
					</p>

					{/* bottom */}
					<div>
						{/* buttons */}
						<div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
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

						{/* label */}
						<div className="text-center lg:text-left">
							<span className="text-sm text-muted-foreground">
								No credit card required • 14-day free trial
							</span>
						</div>
					</div>
				</div>

				{/* right side */}
				<div className="shadow-2xl rounded-2xl overflow-hidden order-1 lg:order-2 hover:scale-[1.05] transition-all lg:max-w-[500px] mx-auto">
					<img
						src={HERO_IMAGE}
						alt="A.I"
						className="w-full h-full aspect-square object-cover object-center"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
