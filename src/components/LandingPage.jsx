import { motion } from "framer-motion";

const LandingPage = () => {
	return (
		<article
			data-scroll
			data-scroll-section
			data-scroll-speed="-0.2"
			className="w-full h-screen pt-2"
		>
			<div className="textStructure mt-40 px-20">
				{["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map(
					(text, i) => (
						<div key={i} className="masker">
							<div className="w-fit flex items-center gap-4">
								{i === 1 && (
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "5rem" }}
										transition={{
											ease: "easeIn",
											duration: 0.5,
										}}
										className="mt-2 w-[5rem] h-14 rounded-lg grayscale bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKKrmPasXgrCYuSHV3EsMZBrdMHNN6BgvSw&s')]"
									></motion.div>
								)}
								<h1 className="uppercase font-semibold text-7xl leading-none tracking-tight">
									{text}
								</h1>
							</div>
						</div>
					),
				)}
			</div>

			<div className="border-t-2 border-slate-400 mt-24 flex items-center justify-between py-6 px-12">
				{[
					"For public and private companies",
					"From the first pitch to IPO",
				].map((text, i) => (
					<p
						key={i}
						className="font-light tracking-tight leading-none"
					>
						{text}
					</p>
				))}

				<div className="stylish_btn flex gap-2">
					<button className="px-4 py-2 border border-slate-400 rounded-full text-sm leading-none tracking-tighter uppercase">
						START THE PROJECT
					</button>
					<button className="w-8 h-8 grid place-items-center border border-slate-400 rounded-full">
						↗
					</button>
				</div>
			</div>
		</article>
	);
};

export default LandingPage;
