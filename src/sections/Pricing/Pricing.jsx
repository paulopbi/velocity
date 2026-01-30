import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { pricingInfo } from "@/constants/pricing";

function Pricing() {
	return (
		<section id="pricing" className="py-20 mb-20 bg-section/30">
			<div className="container-section">
				{/* heading */}
				<div className="flex flex-col gap-2 items-center justify-center">
					<Header
						title="Simple, transparent pricing"
						subtitle="Choose the plan that's right for your team"
					/>
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
