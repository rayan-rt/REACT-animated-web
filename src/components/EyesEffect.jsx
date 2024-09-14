import { useEffect, useState } from "react";

const EyesEffect = () => {
	const [rotate, setRotate] = useState(0);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouse_pos = {
				x: e.clientX,
				y: e.clientY,
			};

			let center_pos = {
				x: window.innerWidth / 2,
				y: window.innerHeight / 2,
			};

			let delta_pos = {
				x: mouse_pos.x - center_pos.x,
				y: mouse_pos.y - center_pos.y,
			};

			let angle = Math.atan2(delta_pos.y, delta_pos.x) * (180 / Math.PI);
			setRotate(angle - 180);
		});

		return () => {
			window.removeEventListener("mousemove", () => {});
		};
	}, []);

	return (
		<div className="w-full h-screen overflow-hidden">
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-0.7"
				className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
			>
				<div className="flex gap-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
					<div className="eye w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
						<div className="relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-black">
							{/* <p className="text-sm uppercase">play</p> */}
							<div
								style={{
									transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
							>
								<div className="w-4 h-4 rounded-full bg-white"></div>
							</div>
						</div>
					</div>
					<div className="eye w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
						<div className="relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-black">
							{/* <p className="text-sm uppercase">play</p> */}
							<div
								style={{
									transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4"
							>
								<div className="w-4 h-4 rounded-full bg-white"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EyesEffect;
