import LocomotiveScroll from "locomotive-scroll";
import {
	About,
	EyesEffect,
	FeatureProject,
	Footer,
	Header,
	LandingPage,
	Marquee,
	ReviewCard,
} from "./components";

function App() {
	const locomotiveScroll = new LocomotiveScroll();

	return (
		<>
			<Header />
			<LandingPage />
			<Marquee />
			<About />
			<EyesEffect />
			<FeatureProject />
			<ReviewCard />
			<Footer />
		</>
	);
}

export default App;
