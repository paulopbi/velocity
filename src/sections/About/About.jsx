import Header from "@/components/Header/Header";
import { teamStatus } from "@/constants/about";
import ABOUT_IMAGE from "/about-image.jpg";

function About() {
	return (
		<section id="about" className="mb-20">
			<div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
				{/* left side */}
				<div className="shadow-2xl rounded-2xl overflow-hidden order-2 lg:order-1 hover:scale-[1.05] transition-all lg:max-w-[500px] mx-auto">
					<img
						src={ABOUT_IMAGE}
						alt="Team collaboration"
						className="aspect-square w-full h-full object-cover object-center"
					/>
				</div>

				{/* right side */}
				<div className="flex flex-col gap-4 order-2 lg:order-1">
					<div className="flex flex-col gap-2 items-center justify-center">
						<Header
							title="Trusted by teams worldwide"
							subtitle="Join thousands of companies that have transformed their workflow with our platform, from startups to enterprise, we scale with your needs."
						/>
					</div>

					<div className="grid grid-cols-2 gap-8 md:gap-4 items-center justify-center mx-auto">
						{teamStatus.map((item) => (
							<div
								key={item.title}
								className="flex flex-col items-center justify-center gap-1"
							>
								<h3 className="text-2xl font-semibold text-center">
									{item.title}
								</h3>
								<p className="text-base text-muted-foreground text-center">
									{item.subtitle}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
