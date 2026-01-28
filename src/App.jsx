import Navbar from "@/layout/Navbar";
import Features from "@/sections/Features/Features";
import Hero from "@/sections/Hero/Hero";

function App() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<Features />
			</main>
		</>
	);
}

export default App;
