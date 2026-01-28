import Navbar from "@/layout/Navbar";
import Features from "@/sections/Features/Features";
import Hero from "@/sections/Hero/Hero";
import About from "./sections/About/About";

function App() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<Features />
				<About />
			</main>
		</>
	);
}

export default App;
