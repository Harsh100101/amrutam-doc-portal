import SEO from "../components/SEO";
import "./DoctorFAQ.css";

export default function DoctorFAQ() {
	const faqs = [
		{
			q: "Is there a joining fee?",
			a: "No, joining Amrutam as a doctor is free. You only earn when you consult.",
		},
		{
			q: "What documents are required?",
			a: "You need your BAMS degree, registration certificate, and basic identity proof.",
		},
		{
			q: "How are payouts processed?",
			a: "Earnings are settled weekly to your registered bank account.",
		},
		{
			q: "Can I choose my own timings?",
			a: "Yes, you can set and update your consultation slots anytime.",
		},
	];

	return (
		<>
			<SEO
				title="Doctor FAQs"
				description="Frequently asked questions about onboarding and consulting as an Amrutam doctor."
			/>

			<section className="faq-page">
				<div className="faq-page__container">
					<header className="faq-page__header">
						<div>
							<h1>Frequently Asked Questions</h1>
							<p>
								Everything you need to know before joining and
								consulting on the Amrutam platform.
							</p>
						</div>
					</header>

					<div className="faq-page__list">
						{faqs.map((item, index) => (
							<article key={index} className="faq-page__item">
								<div className="faq-page__icon">
									<img src="/assets/faq/faq.png" alt="faq" />
								</div>
								<div className="faq-page__content">
									<h2>{item.q}</h2>
									<p>{item.a}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
