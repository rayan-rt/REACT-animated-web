import { motion, useAnimation } from "framer-motion";
import { ButtonArrow } from "./index";

const About = () => {
	let button = useAnimation();

	function handleHoverStart() {
		button.start({ scale: 2 });
	}

	function handleHoverEnd() {
		button.start({ scale: 1 });
	}

	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="-0.2"
			className="w-full p-20 rounded-tr-3xl rounded-tl-3xl bg-[#90a73f] text-black"
		>
			<h1 className="text-5xl">
				Ochi is a strategic presentation agency for forward-thinking
				businesses that need to raise funds, sell products, explain
				complex ideas, and hire great people.
			</h1>
			<div className="flex justify-between w-full mt-16 pt-10 border-t border-black">
				<div className="w-1/2">
					<h1 className="text-5xl">Our Approach</h1>
					<ButtonArrow
						text={"read more"}
						className={"mt-10 bg-zinc-800 text-white"}
						arrowClassName={"bg-white"}
						initial={{ scale: 1 }}
						animate={button}
						transition={{
							ease: "easeIn",
							duration: 0.25,
						}}
					/>
				</div>

				<motion.div
					onHoverStart={handleHoverStart}
					onHoverEnd={handleHoverEnd}
					className="w-1/2 h-[65vh] rounded-2xl overflow-hidden bg-red-800"
				>
					<img
						className="w-full h-full"
						src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
						alt="mainphoto"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
