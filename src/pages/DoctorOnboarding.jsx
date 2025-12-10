import SEO from "../components/SEO";
import "./DoctorOnboarding.css";

export default function DoctorOnboarding() {
	return (
		<>
			<SEO
				title="Doctor Onboarding"
				description="Understand the step-by-step onboarding process to join Amrutam as an Ayurvedic doctor."
			/>

			<section className="onboarding">
				<div className="onboarding__container">
					<header className="onboarding__header">
						<h1>Onboarding Journey</h1>
						<p>
							A simple and transparent process to get you verified
							and live on the Amrutam Doctors Portal.
						</p>
					</header>

					<div className="onboarding__timeline">
						<article className="onboarding__step">
							<div className="onboarding__step-icon">
								<img
									src="./assets/onboarding/1.png"
									alt="step 1"
								/>
							</div>
							<div className="onboarding__step-content">
								<h2>Step 1: Submit Details</h2>
								<p>
									Fill in your personal, educational, and
									registration details through a secure form.
								</p>
							</div>
						</article>

						<article className="onboarding__step">
							<div className="onboarding__step-icon">
								<img
									src="./assets/onboarding/2.png"
									alt="step 2"
								/>
							</div>
							<div className="onboarding__step-content">
								<h2>Step 2: Upload Documents</h2>
								<p>
									Provide necessary certificates like BAMS
									degree and council registration for
									verification.
								</p>
							</div>
						</article>

						<article className="onboarding__step">
							<div className="onboarding__step-icon">
								<img
									src="./assets/onboarding/3.png"
									alt="step 3"
								/>
							</div>
							<div className="onboarding__step-content">
								<h2>Step 3: Verification Call</h2>
								<p>
									Our team reviews your profile and connects
									with you for a short verification call if
									needed.
								</p>
							</div>
						</article>

						<article className="onboarding__step">
							<div className="onboarding__step-icon">
								<img
									src="./assets/onboarding/4.png"
									alt="step 4"
								/>
							</div>
							<div className="onboarding__step-content">
								<h2>Step 4: Go Live</h2>
								<p>
									Set consultation timings, fees, and start
									receiving bookings from patients across
									India.
								</p>
							</div>
						</article>
					</div>

					<div className="onboarding__banner">
						<img
							src="./assets/onboarding/onboarding.png"
							alt="Onboarding Illustration"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
