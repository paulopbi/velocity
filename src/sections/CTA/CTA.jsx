import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";

function CTA() {
	return (
		<section id="cta" className="py-20">
			<div className="container mx-auto px-6 *:mb-5">
				{/* heading */}
				<div className="flex flex-col gap-2 text-center items-center justify-center">
					<h3 className="title">Ready to get started?</h3>
					<p className="subtitle">
						Join thousands of teams already building with Velocity
					</p>
				</div>

				{/* buttons */}
				<div className="flex gap-4 items-center justify-center">
					<Button
						variant="primary"
						size="md"
						className="flex items-center gap-2 font-semibold"
					>
						Start Free Trial <ArrowRight className="h-5 w-5" />
					</Button>
					<Button variant="secondary" size="md" className="font-semibold">
						Schedule a demo
					</Button>
				</div>
			</div>
		</section>
	);
}

export default CTA;
