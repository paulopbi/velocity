import { cn } from "@/utils/cn";

function Badge({ children, className }) {
	return (
		<span
			className={cn(
				"flex items-center justify-center gap-2 px-3 py-1 bg-secondary rounded-full text-sm max-w-fit",
				className,
			)}
		>
			{children}
		</span>
	);
}

export default Badge;
