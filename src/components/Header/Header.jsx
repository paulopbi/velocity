import { cn } from "@/utils/cn";

function Header({ title, subtitle, className }) {
	return (
		<>
			<h3 className={cn("title text-center", className)}>{title}</h3>
			<p className={cn("subtitle text-center", className)}>{subtitle}</p>
		</>
	);
}

export default Header;
