import { teamStatus } from "../../constants/about";
import ABOUT_IMAGE from "/about-image.jpg";

function About() {
	return (
		<section id="about" className="my-20">
			<div className="container px-6 mx-auto grid md:grid-cols-2 gap-6 items-center justify-center">
				{/* left side */}
				<div className="shadow-2xl rounded-2xl overflow-hidden hover:scale-[1.05] transition-all order-2 md:order-1">
					<img
						src={ABOUT_IMAGE}
						alt="Team collaboration"
						className="aspect-square w-full h-full object-cover object-center"
					/>
				</div>

				{/* right side */}
				<div className="flex flex-col gap-4">
					<div className="*:text-center *:mb-6">
						<h3 className="text-4xl font-bold">Trusted by teams worldwide</h3>
						<p className="text-xl text-muted-foreground max-w-[45ch] mx-auto">
							Join thousands of companies that have transformed their workflow
							with our platform. From startups to enterprise, we scale with your
							needs.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-8 md:gap-4 items-center justify-center mx-auto">
						{teamStatus.map((item) => (
							<div
								key={item.title}
								className="flex flex-col items-center justify-center gap-1"
							>
								<h3 className="text-4xl font-bold">{item.title}</h3>
								<p className="text-base text-muted-foreground">
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
