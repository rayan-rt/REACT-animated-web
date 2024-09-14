import { motion } from "framer-motion";

const Marquee = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.1"
			className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-green-800"
		>
			<div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
				<motion.h1
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{
						repeat: Infinity,
						ease: "linear",
						duration: 10,
					}}
					className="text-[17vw] leading-none tracking-tighter font-semibold uppercase pt-10 pr-10 mb-10"
				>
					WE ARE OCHI
				</motion.h1>
				<motion.h1
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{
						repeat: Infinity,
						ease: "linear",
						duration: 10,
					}}
					className="text-[17vw] leading-none tracking-tighter font-semibold uppercase pt-10 pr-10 mb-10"
				>
					WE ARE OCHI
				</motion.h1>
			</div>
		</div>
	);
};

export default Marquee;
