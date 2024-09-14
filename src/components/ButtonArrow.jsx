import { motion } from "framer-motion";

const ButtonArrow = ({
	text = "Click",
	className,
	arrowClassName = "bg-white",
	...rest
}) => {
	return (
		<button
			className={`flex items-center gap-8 px-6 py-4 rounded-full uppercase text-sm tracking-tight ${className}`}
			{...rest}
		>
			{text}
			<motion.div
				className={`w-3 h-3 scale-100 rounded-full ${arrowClassName}`}
				{...rest}
			></motion.div>
		</button>
	);
};

export default ButtonArrow;
