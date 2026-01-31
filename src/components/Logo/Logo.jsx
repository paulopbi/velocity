import { cn } from "@/utils/cn";
import { Zap } from "lucide-react";

function Logo({ href, className }) {
	return (
		<a
			href={href}
			className={cn(
				"flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer text-lg font-semibold md:text-xl",
				className,
			)}
		>
			<div className="bg-primary p-2 rounded-md">
				<Zap className="w-5 h-5 text-white" />
			</div>
			Velocity
		</a>
	);
}

export default Logo;
