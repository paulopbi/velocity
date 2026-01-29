import { features } from "../../constants/features";

function Features() {
	return (
		<section className="mt-10 py-12 bg-section/30" id="features">
			<div className="container mx-auto">
				{/* header */}
				<div className="text-center space-y-2">
					<h2 className="title">Everything you need to succeed</h2>
					<p className="subtitle max-w-[40ch] mx-auto">
						Powerful features to help your team work smarter, not harder
					</p>
				</div>

				{/* cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center my-10">
					{features.map((feature) => (
						<div
							className="bg-white p-6 rounded-lg border border-gray-200 max-w-[400px] shadow-xs hover:shadow-lg transition-shadow *:mb-4"
							key={feature.title}
						>
							{feature.icon && (
								<div className="bg-gray-200 p-2 rounded-lg w-fit h-fit hover:bg-gray-300 transition-colors">
									{<feature.icon />}
								</div>
							)}

							<h3 className="text-xl font-bold">{feature.title}</h3>
							<p className="text-muted-foreground max-w-[38ch] text-pretty">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
