import FeatureCard from "@/components/FeatureCard/FeatureCard";
import { features } from "@/constants/features";

function Features() {
	return (
		<section className="mb-20 py-10 bg-section/30" id="features">
			<div className="container-section">
				{/* header */}
				<div className="text-center space-y-2">
					<h2 className="title">Everything you need to succeed</h2>
					<p className="subtitle max-w-[40ch] mx-auto">
						Powerful features to help your team work smarter, not harder.
					</p>
				</div>

				{/* features */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center my-10 gap-6 mx-auto">
					{features.map((feature) => (
						<FeatureCard key={feature.title} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
