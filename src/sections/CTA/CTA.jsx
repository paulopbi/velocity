import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";
import Header from "../../components/Header/Header";

function CTA() {
	return (
		<section className="mb-20">
			<div className="container-section">
				{/* heading */}
				<div className="flex flex-col gap-2 items-center justify-center animation-fade-in animation-delay-600">
					<Header
						title="Ready to get started?"
						subtitle="Join thousands of teams already building with Velocity"
					/>
				</div>

				{/* buttons */}
				<div className="flex gap-4 items-center justify-center mt-4 animation-fade-in animation-delay-700">
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
