// src/pages/DoctorTestimonials.jsx
import SEO from "../components/SEO";
import "./DoctorTestimonials.css";
import { testimonialsData } from "../data/doctorDashboardData";

export default function DoctorTestimonials() {
	return (
		<>
			<SEO
				title="Doctor Testimonials"
				description="What other Amrutam doctors say about the platform."
			/>

			<div className="dt-wrapper">
				<header className="dt-header">
					<h1>Doctor Testimonials</h1>
					<p>
						See what other doctors are experiencing while practicing
						with Amrutam.
					</p>
				</header>

				<section className="dt-grid">
					{testimonialsData.map((t) => (
						<article key={t.id} className="dt-card">
							<p className="dt-feedback">“{t.feedback}”</p>
							<p className="dt-author">— {t.name}</p>
						</article>
					))}
				</section>
			</div>
		</>
	);
}
