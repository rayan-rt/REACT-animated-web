import { ButtonSimple } from "./index";

const ReviewCard = () => {
	// fix it "mt-20"
	return (
		<div className="mt-32 w-full h-screen px-8 flex items-center justify-center gap-6">
			<div className="w-1/2 h-[60vh]">
				<div className="w-full h-full rounded-xl relative bg-zinc-600">
					<h1 className="text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						ochi
					</h1>
					<ButtonSimple
						text={"2019-2022"}
						className={
							"absolute bottom-4 left-4 border border-white text-white"
						}
					/>
				</div>
			</div>

			<div className="w-1/2 h-[60vh] flex gap-6">
				<div className="w-1/2 h-full rounded-xl relative bg-zinc-600">
					<h1 className="text-6xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						clutch
					</h1>
					<span className="text-sm tracking-tighter absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2">
						⭐⭐⭐⭐⭐
					</span>
					<ButtonSimple
						text={"5.0 ratings on clutch"}
						className={
							"absolute bottom-4 left-4 border border-white text-white"
						}
					/>
				</div>
				<div className="w-1/2 h-full rounded-xl relative overflow-hidden bg-zinc-600">
					<img
						src="https://www.shutterstock.com/image-vector/boot-camp-stampsignseallogo-600nw-579441268.jpg"
						alt="logo"
						className="w-32 h-32 rounded-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<ButtonSimple
						text={"Business bootcamp"}
						className={
							"absolute bottom-4 left-4 border border-white text-white"
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
