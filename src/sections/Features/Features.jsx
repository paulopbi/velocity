import FeatureCard from "@/components/FeatureCard/FeatureCard";
import Header from "@/components/Header/Header";
import { features } from "@/constants/features";

function Features() {
	return (
		<section className="mb-20 py-10 bg-section/30" id="features">
			<div className="container-section">
				{/* heading */}
				<div className="text-center space-y-2 animation-fade-in animation-delay-200">
					<Header
						title="Everything you need to succeed"
						subtitle="Powerful features to help your team work smarter, not harder."
					/>
				</div>

				{/* features */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center my-10 gap-6 mx-auto animation-fade-in animation-delay-300">
					{features.map((feature) => (
						<FeatureCard key={feature.title} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
