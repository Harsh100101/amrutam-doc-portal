import { useNavigate, useLocation } from "react-router-dom";
import "./DoctorNavChips.css";

export default function DoctorNavChips({
	activeNav,
	scrollTo,
	aboutRef,
	onboardingRef,
	faqRef,
	testimonialRef,
}) {
	const navigate = useNavigate();
	const location = useLocation();

	// Check if we are on DoctorHome page
	const isHome = location.pathname === "/doctor-home";

	return (
		<nav className="doc-hero-nav">
			{/* Show scroll buttons ONLY on DoctorHome */}
			{isHome && (
				<>
					<button
						className={`chip ${
							activeNav === "about" ? "chip-active" : ""
						}`}
						onClick={() => scrollTo(aboutRef)}
					>
						About Us
					</button>

					<button
						className={`chip ${
							activeNav === "onboarding" ? "chip-active" : ""
						}`}
						onClick={() => scrollTo(onboardingRef)}
					>
						Onboarding
					</button>

					<button
						className={`chip ${
							activeNav === "faq" ? "chip-active" : ""
						}`}
						onClick={() => scrollTo(faqRef)}
					>
						FAQ
					</button>

					<button
						className={`chip ${
							activeNav === "testimonials" ? "chip-active" : ""
						}`}
						onClick={() => scrollTo(testimonialRef)}
					>
						Testimonials
					</button>
				</>
			)}

			{/* Always show route navigation */}
			<button
				className="chip chip-route"
				onClick={() => navigate("/dashboard")}
			>
				Dashboard
			</button>

			<button
				className="chip chip-route"
				onClick={() => navigate("/profile")}
			>
				Profile
			</button>

			<button
				className="chip chip-route"
				onClick={() => navigate("/earnings")}
			>
				Earnings
			</button>

			<button
				className="chip chip-route"
				onClick={() => navigate("/support")}
			>
				Support
			</button>

			<button
				className="chip chip-route"
				onClick={() => navigate("/testimonials")}
			>
				Testimonials Page
			</button>
		</nav>
	);
}
