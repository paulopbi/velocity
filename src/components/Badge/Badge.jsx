function Badge({ children }) {
	return (
		<span className="flex items-center justify-center gap-2 px-3 py-1 bg-secondary rounded-full text-sm max-w-fit">
			{children}
		</span>
	);
}

export default Badge;
