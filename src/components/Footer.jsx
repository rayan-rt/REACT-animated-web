const Footer = () => {
	return (
		<div className="w-full h-screen pt-20 px-20 pb-8 flex gap-2 bg-zinc-900">
			<div className="w-1/2 h-full flex flex-col justify-between">
				<div className="heading">
					<h1 className="uppercase text-7xl font-bold tracking-tight">
						Eye-
					</h1>
					<h1 className="mt-2 uppercase text-7xl font-bold tracking-tight">
						Opening
					</h1>
				</div>
				<h1 className="text-4xl font-semibold">ochi</h1>
			</div>

			<div className="w-1/2 h-full flex flex-col justify-between">
				<div className="heading w-full">
					<h1 className="uppercase text-7xl font-bold tracking-tight">
						Presentations
					</h1>
				</div>

				<div className="links w-full h-full pt-6 flex">
					<div className="w-3/4 h-full flex flex-col justify-between">
						<div className="flex flex-col gap-4">
							<p>S:</p>
							<div className="flex flex-col">
								<a href="/" className="underline">
									Instagram
								</a>
								<a href="/" className="underline">
									FaceBook
								</a>
								<a href="/" className="underline">
									LinkedIn
								</a>
								<a href="/" className="underline">
									Behance
								</a>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p>L:</p>
							<div className="flex flex-col">
								<a
									href="/"
									className="underline flex flex-col gap-3"
								>
									<div className="flex flex-col">
										<span>202-1965 W 4th Ave</span>
										<span>Vancouver, Canada</span>
									</div>
									<div className="flex flex-col">
										<span>30 Chukarina St</span>
										<span>Lviv, Ukraine</span>
									</div>
								</a>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p>E:</p>
							<div className="flex flex-col">
								<a href="/" className="underline">
									hello@ochi.design
								</a>
							</div>
						</div>

						<div>
							<p className="text-zinc-400">
								© ochi design 2024.
								<a href="/" className="underline">
									Legal Terms
								</a>
							</p>
						</div>
					</div>

					<div className="w-1/4 h-full flex flex-col justify-between">
						<div className="w-full h-full flex flex-col justify-center gap-4">
							<p className="justify-self-center">M:</p>
							<div className="justify-self-center flex flex-col">
								<a href="/" className="underline capitalize">
									Home
								</a>
								<a href="/" className="underline capitalize">
									Service
								</a>
								<a href="/" className="underline capitalize">
									Our work
								</a>
								<a href="/" className="underline capitalize">
									About us
								</a>
								<a href="/" className="underline capitalize">
									Insights
								</a>
								<a href="/" className="underline capitalize">
									Contact us
								</a>
							</div>
						</div>

						<div>
							<p className="text-zinc-400">
								<a href="/" className="underline">
									Website by Obys
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
