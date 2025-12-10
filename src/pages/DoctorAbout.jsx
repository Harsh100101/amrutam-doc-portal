import SEO from "../components/SEO";
import "./DoctorAbout.css";

export default function DoctorAbout() {
	return (
		<>
			<SEO
				title="About Amrutam Doctors"
				description="Learn about Amrutam's mission, values, and ecosystem for Ayurvedic doctors."
			/>

			<section className="about">
				<div className="about__container">
					<header className="about__header">
						<div className="about__text">
							<h1>About Amrutam</h1>
							<p>
								Amrutam is an Ayurvedic lifestyle brand
								dedicated to making authentic Ayurveda
								accessible while empowering doctors with a
								digital platform to grow their practice.
							</p>
						</div>
						<div className="about__image-wrapper">
							<img
								src="./assets/about/about.png"
								alt="About Amrutam"
								className="about__image"
							/>
						</div>
					</header>

					<section className="about__grid">
						<article className="about__card">
							<img
								src="./assets/about/mission.png"
								alt="out mission"
								className="about__card-icon"
							/>
							<h2>Our Mission</h2>
							<p>
								To connect genuine Ayurvedic practitioners with
								patients searching for holistic care, and
								support them with tools, technology, and a
								trusted brand.
							</p>
						</article>

						<article className="about__card">
							<img
								src="./assets/about/values.png"
								alt="our values"
								className="about__card-icon"
							/>
							<h2>Our Values</h2>
							<p>
								Authenticity, transparency, and patient-first
								care are at the core of every product,
								consultation, and feature we build.
							</p>
						</article>

						<article className="about__card">
							<img
								src="./assets/about/choose.png"
								alt="choose me"
								className="about__card-icon"
							/>
							<h2>Why Doctors Choose Us</h2>
							<p>
								A consistent flow of patients, seamless digital
								experience, and a dedicated support team help
								doctors focus on what matters: treatment.
							</p>
						</article>
					</section>
				</div>
			</section>
		</>
	);
}
