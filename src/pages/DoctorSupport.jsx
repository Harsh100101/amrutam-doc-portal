// src/pages/DoctorSupport.jsx
import SEO from "../components/SEO";
import "./DoctorSupport.css";
import { supportOptions } from "../data/doctorDashboardData";

export default function DoctorSupport() {
	return (
		<>
			<SEO
				title="Doctor Support"
				description="Contact options and help center details for Amrutam doctors."
			/>

			<div className="ds-wrapper">
				<header className="ds-header">
					<h1>Support & Help</h1>
					<p>
						Reach out for assistance with onboarding, payouts or
						technical issues.
					</p>
				</header>

				<section className="ds-grid">
					{supportOptions.map((item, index) => (
						<article key={index} className="ds-card">
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<p className="ds-highlight">{item.value}</p>
						</article>
					))}
				</section>

				<section className="ds-panel">
					<h2>Response Timelines</h2>
					<ul>
						<li>Email queries: within 24 business hours</li>
						<li>
							Chat: typically under 5–10 minutes during working
							hours
						</li>
						<li>
							Critical payout issues: prioritized by our support
							team
						</li>
					</ul>
				</section>
			</div>
		</>
	);
}
