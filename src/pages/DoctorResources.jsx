import SEO from "../components/SEO";
import "./DoctorResources.css";

export default function DoctorResources() {
	const resources = [
		{
			title: "How to Conduct Effective Online Consultations",
			type: "Article",
		},
		{
			title: "Setting Up Your Ayurvedic Practice Digitally",
			type: "Guide",
		},
		{
			title: "Best Practices for Patient Follow-ups",
			type: "Checklist",
		},
	];

	return (
		<>
			<SEO
				title="Doctor Resources"
				description="Curated resources, guides, and articles to help Amrutam doctors succeed."
			/>

			<section className="resources">
				<div className="resources__container">
					<header className="resources__header">
						<h1>Resources & Guides</h1>
						<p>
							Learn how to make the most of the Amrutam platform
							and improve your online practice.
						</p>
					</header>

					<section className="resources__grid">
						{resources.map((r, index) => (
							<article key={index} className="resources__card">
								<div className="resources__thumbnail">
									<img
										src="/assets/respage/article.png"
										alt={r.title}
									/>
								</div>
								<div className="resources__body">
									<p className="resources__type">{r.type}</p>
									<h2 className="resources__title">
										{r.title}
									</h2>
									<p className="resources__cta">Read More</p>
								</div>
							</article>
						))}
					</section>
				</div>
			</section>
		</>
	);
}
