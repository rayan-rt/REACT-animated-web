import { motion, useAnimation } from "framer-motion";
import { ButtonSimple } from "./index";

const FeatureProject = () => {
	let cards = [useAnimation(), useAnimation()];

	function handleHoverStart(i) {
		cards[i].start({ y: "0" });
	}

	function handleHoverEnd(i) {
		cards[i].start({ y: "100%" });
	}

	return (
		<div className="py-12">
			<div className="w-full px-12 pb-16 border-b border-white">
				<h1 className="text-5xl tracking-tight">Featured projects</h1>
			</div>

			<div className="px-16">
				<div className="cards mt-8 w-full flex gap-8">
					<div className="cardContainer w-1/2 h-[70vh] relative">
						<h1 className="w-full text-center uppercase flex overflow-hidden absolute z-10 left-[120%] top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tight text-7xl font-extrabold text-[#90a73f]">
							{"project 1".split("").map((alphabet, i) => (
								<motion.span
									initial={{ y: "100%" }}
									animate={cards[0]}
									transition={{
										ease: "easeIn",
										delay: i * 0.02,
									}}
									key={i}
									className="inline-block"
								>
									{alphabet}
								</motion.span>
							))}
						</h1>
						<li className="list-disc text-lg">Project 1</li>
						<div className="w-full h-full my-6 rounded-lg overflow-hidden bg-blue-700">
							<motion.div
								onHoverStart={() => handleHoverStart(0)}
								onHoverEnd={() => handleHoverEnd(0)}
								className="w-full h-full rounded-lg overflow-hidden bg-yellow-500"
							>
								<img
									className="w-full h-full bg-cover object-cover"
									src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
									alt="project1"
								/>
							</motion.div>
						</div>
						<div className="w-fit flex gap-4">
							<ButtonSimple
								text="Brand Template"
								className={"text-white border border-white"}
							/>
							<ButtonSimple
								text="Sales Deck"
								className={"text-white border border-white"}
							/>
						</div>
					</div>

					<div className="cardContainer w-1/2 h-[70vh] relative">
						<h1 className="w-full text-center uppercase flex overflow-hidden absolute z-10 -right-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tight text-7xl font-extrabold text-[#90a73f]">
							{"project 2".split("").map((alphabet, i) => (
								<motion.span
									initial={{ y: "100%" }}
									animate={cards[1]}
									transition={{
										ease: "easeIn",
										delay: i * 0.02,
									}}
									key={i}
									className="inline-block"
								>
									{alphabet}
								</motion.span>
							))}
						</h1>
						<li className="list-disc text-lg">Project 2</li>
						<div className="w-full h-full my-6 rounded-lg overflow-hidden bg-blue-700">
							<motion.div
								onHoverStart={() => handleHoverStart(1)}
								onHoverEnd={() => handleHoverEnd(1)}
								className="w-full h-full rounded-lg overflow-hidden bg-yellow-500"
							>
								<img
									className="w-full h-full bg-cover object-cover"
									src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
									alt="project1"
								/>
							</motion.div>
						</div>
						<div className="w-fit flex gap-4">
							<ButtonSimple
								text="Brand Template"
								className={"text-white border border-white"}
							/>
							<ButtonSimple
								text="Sales Deck"
								className={"text-white border border-white"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureProject;
