const ButtonSimple = ({ text = "Click", className, ...rest }) => {
	return (
		<button
			className={`px-4 py-1 rounded-full uppercase text-sm tracking-tight ${className}`}
			{...rest}
		>
			{text}
		</button>
	);
};

export default ButtonSimple;
