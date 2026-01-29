import { cn } from "@/utils/cn";

function Button({
	children,
	variant = "primary",
	size = "sm",
	className,
	...props
}) {
	const buttonBase =
		"rounded-xl font-normal transition-colors duration-300 cursor-pointer";

	const variantStyles = {
		primary: "bg-black text-white hover:bg-gray-900",
		secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
		ghost: "bg-transparent text-black hover:bg-gray-100",
		outlined:
			"bg-transparent border border-gray-300 text-black hover:bg-gray-100",
	};

	const sizeStyles = {
		sm: "text-sm py-2 px-4",
		md: "text-base py-3 px-6",
		lg: "text-lg py-4 px-8",
	};

	return (
		<button
			className={cn(
				buttonBase,
				variantStyles[variant],
				sizeStyles[size],
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
