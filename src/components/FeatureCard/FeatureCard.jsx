function FeaturesCard({ feature }) {
	return (
		<div
			className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-xs hover:shadow-lg transition-shadow"
			key={feature.title}
		>
			{feature.icon && (
				<div className="bg-gray-200 p-2 rounded-lg w-fit h-fit hover:bg-gray-300 transition-colors">
					{<feature.icon className="w-6 h-6" />}
				</div>
			)}

			<h3 className="text-xl font-bold">{feature.title}</h3>

			<p className="text-muted-foreground max-w-[38ch] text-pretty">
				{feature.description}
			</p>
		</div>
	);
}

export default FeaturesCard;
