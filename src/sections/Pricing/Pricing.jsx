import Card from "@/components/Card/Card";
import { pricingInfo } from "@/constants/pricing";

function Pricing() {
	return (
		<section id="pricing" className="bg-section/30 py-20">
			<div className="container mx-auto px-6">
				{/* heading */}
				<div className="text-center *:mb-2">
					<h3 className="title">Simple, transparent pricing</h3>
					<p className="subtitle">Choose the plan that's right for your team</p>
				</div>

				{/* cards */}
				<div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-8 w-full gap-x-8 gap-y-6 mt-10">
					{pricingInfo.map((info) => (
						<Card key={info.type} info={info} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Pricing;
