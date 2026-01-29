import Button from "@/components/Button/Button";
import { cn } from "@/utils/cn";
import { Check } from "lucide-react";

function Card({ info }) {
	if (info) {
		return (
			<section
				className={cn(
					"overflow-hidden flex flex-col gap-10 items-start justify-center p-5 rounded-xl shadow-lg sm:min-w-[400px] sm:min-h-[400px]",
					info.mostPopular
						? "bg-black/90 text-white"
						: "border-gray-200 bg-white",
				)}
			>
				{/* heading */}
				<div className="flex flex-col items-start justify-center gap-2">
					<span className="text-2xl font-semibold">{info.type}</span>
					<span className="text-4xl font-bold">
						{info.price}
						<span
							className={cn(
								"text-sm ml-1 font-normal",
								info.mostPopular ? "text-white/70" : "text-muted-foreground",
							)}
						>
							/month
						</span>
					</span>
					<p
						className={cn(
							"text-base font-normal",
							info.mostPopular ? "text-white/70" : "text-muted-foreground",
						)}
					>
						{info.description}
					</p>
				</div>

				{/* features */}
				<ul className="flex flex-col gap-3">
					{info.features.map((feature) => (
						<li
							key={feature.type}
							className="flex items-center justify-start gap-2"
						>
							<Check />
							<span
								className={cn(
									"text-base font-normal",
									info.mostPopular ? "text-white/70" : "text-black/70",
								)}
							>
								{feature}
							</span>
						</li>
					))}
				</ul>

				{/* buttons */}
				<Button
					size="md"
					variant={info.mostPopular ? "secondary" : "primary"}
					className="w-full"
				>
					{info.buttonText}
				</Button>
			</section>
		);
	}
}
export default Card;
