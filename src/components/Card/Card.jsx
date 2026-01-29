import Button from "@/components/Button/Button";
import { cn } from "@/utils/cn";
import { Check } from "lucide-react";
import Button from "../Button/Button";

function Card({ info }) {
	if (info) {
		return (
			<section
				className={cn(
					"bg-white border border-gray-200 p-8 rounded-xl shadow-lg *:mb-8 min-w-[400px] min-h-[420px]",
					info.mostPopular && "border-primary bg-black/90 text-white",
				)}
			>
				{/* heading */}
				<div className="flex flex-col items-start justify-center gap-2">
					<span className="text-2xl font-semibold leading-10">{info.type}</span>
					<span className="text-4xl font-semibold leading-10">
						{info.price}
						<span
							className={cn(
								"text-base text-muted-foreground ml-2 font-normal",
								info.mostPopular && "text-white/70",
							)}
						>
							/month
						</span>
					</span>
					<p
						className={cn(
							"text-muted-foreground leading-5",
							info.mostPopular && "text-white/70",
						)}
					>
						{info.description}
					</p>
				</div>

				{/* features */}
				<ul className="*:mb-2">
					{info.features.map((feature) => (
						<li
							key={feature.type}
							className="flex items-center justify-start gap-2"
						>
							<Check />
							<span
								className={cn(
									"text-base font-normal",
									info.mostPopular && "text-white",
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
