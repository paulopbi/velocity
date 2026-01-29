import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import About from "@/sections/About/About";
import CTA from "@/sections/CTA/CTA";
import Features from "@/sections/Features/Features";
import Hero from "@/sections/Hero/Hero";
import Pricing from "@/sections/Pricing/Pricing";

function App() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<Features />
				<About />
				<Pricing />
				<CTA />
			</main>
			<Footer />
		</>
	);
}

export default App;
