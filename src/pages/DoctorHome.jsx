import "./DoctorHome.css";
import { useRef, useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import SEO from "../components/SEO.jsx";

const DoctorHome = () => {
	// Scroll references
	const aboutRef = useRef(null);
	const onboardingRef = useRef(null);
	const faqRef = useRef(null);
	const testimonialRef = useRef(null);

	const [activeNav, setActiveNav] = useState("about");

	useEffect(() => {
		const sections = [
			{ id: "about", ref: aboutRef },
			{ id: "onboarding", ref: onboardingRef },
			{ id: "faq", ref: faqRef },
			{ id: "testimonials", ref: testimonialRef },
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveNav(entry.target.dataset.section);
					}
				});
			},
			{ threshold: 0.4 }
		);

		sections.forEach((section) => {
			if (section.ref.current) {
				section.ref.current.dataset.section = section.id;
				observer.observe(section.ref.current);
			}
		});

		return () => observer.disconnect();
	}, []);

	const scrollTo = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<SEO
				title="Register as an Amrutam Doctor"
				description="Join Amrutam as an Ayurvedic doctor, grow your practice, manage patients, and earn with flexible schedules."
			/>
			<div className="doctor-home-page">
				{/* all your sections */}
				{/* HERO + TOP NAV */}
				<section className="doc-hero">
					<div className="container">
						<div className="doc-hero-top">
							<p className="doc-hero-tag">
								Register Yourself As An{" "}
								<span>Amrutam Doctor</span>
							</p>
						</div>

						<nav className="doc-hero-nav">
							{/* Scroll Navigation Chips */}
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
									activeNav === "onboarding"
										? "chip-active"
										: ""
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
									activeNav === "testimonials"
										? "chip-active"
										: ""
								}`}
								onClick={() => scrollTo(testimonialRef)}
							>
								Testimonials
							</button>
						</nav>

						<div className="doc-hero-grid">
							{/* LEFT: TEXT */}
							<div className="doc-hero-left">
								<p className="doc-hero-greet">
									Namaste, Welcome to Amrutam
								</p>
								<h1>Join Amrutam – Grow Your Practice</h1>
								<p className="doc-hero-sub">
									Connect with more patients, set your own
									schedule, and grow your Ayurvedic practice
									effortlessly.
								</p>

								<div className="hero-actions">
									<button className="btn btn-primary">
										Join Now
									</button>
								</div>
							</div>

							{/* RIGHT: HERO IMAGE + FEATURED LOGOS */}
							<div className="doc-hero-right">
								{/* Main hero illustration (doctors group) */}
								<div className="doc-hero-image-wrapper">
									{/* TODO: add real hero image path in src */}
									<img
										src="/assets/doctorhome/doctor.png"
										alt="Amrutam Doctors Illustration"
										className="doc-hero-image"
									/>
								</div>
							</div>
						</div>
						{/* Featured card */}
						<div className="card doc-hero-featured">
							<p className="feature">Featured</p>
							<h3 className="muted">
								Recognized and celebrated by leading
								publications
							</h3>

							<div className="doc-featured-logos">
								{/* TODO: replace with real logo paths */}
								<img
									src="/assets/doctorhome/logo1.png"
									alt="Publication Logo 1"
								/>
								<img
									src="/assets/doctorhome/logo2.png"
									alt="Publication Logo 2"
								/>
								<img
									src="/assets/doctorhome/logo3.png"
									alt="Publication Logo 3"
								/>
								<img
									src="/assets/doctorhome/logo4.png"
									alt="Publication Logo 4"
								/>
								<img
									src="/assets/doctorhome/logo5.png"
									alt="Publication Logo 5"
								/>
								<img
									src="/assets/doctorhome/logo6.png"
									alt="Publication Logo 6"
								/>
								<img
									src="/assets/doctorhome/logo7.png"
									alt="Publication Logo 7"
								/>
								<img
									src="/assets/doctorhome/logo8.png"
									alt="Publication Logo 8"
								/>
								<img
									src="/assets/doctorhome/logo9.png"
									alt="Publication Logo 9"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* STATS */}
				<section className="section doc-stats">
					<div className="container doc-stats-grid">
						<div className="stat-card">
							{/* optional icon for stat */}
							<img
								src="/assets/doctorhome/user.png"
								alt=""
								className="stat-card-icon"
							/>
							<h2>500+</h2>
							<p>Average Active Users</p>
						</div>
						<div className="stat-card">
							<img
								src="/assets/doctorhome/call.png"
								alt=""
								className="stat-card-icon"
							/>
							<h2>40+</h2>
							<p>Average Daily Free Calls</p>
						</div>
					</div>
				</section>

				{/* WHY DOCTORS CHOOSE US */}
				<section className="section" ref={aboutRef}>
					<div className="container">
						<h2 className="section-title">
							Why Doctors Choose Us?
						</h2>
						<p className="page-subtitle">
							Unlock the benefits of smarter healthcare management
							and patient care.
						</p>

						<div className="grid-3 doc-why-grid">
							<article className="card">
								<img
									src="/assets/doctorhome/5min.png"
									alt=""
									className="card-icon"
								/>
								<h3>Instant FREE 5-Min Call</h3>
								<p>
									Build trust with patients through a free
									5-minute call.
								</p>
							</article>

							<article className="card">
								<img
									src="/assets/doctorhome/forum.png"
									alt=""
									className="card-icon"
								/>
								<h3>Forum & Thought Sharing</h3>
								<p>
									Engage with patients, share Ayurvedic
									wisdom, answer questions.
								</p>
							</article>

							<article className="card">
								<img
									src="/assets/doctorhome/wallet.png"
									alt=""
									className="card-icon"
								/>
								<h3>Flexible Practice & Smart Wallet</h3>
								<p>
									Choose your schedule, manage consultations,
									and withdraw earnings.
								</p>
							</article>
						</div>
					</div>
				</section>

				{/* FREE CALL SECTION */}
				<section className="section doc-free-call">
					<div className="container two-column">
						<div className="card">
							<p className="tag">Instant FREE 5-Mins Call</p>

							{/* doctor avatar */}
							<div className="doc-avatar-wrap">
								<img
									src="/assets/doctorhome/prema.png"
									alt="Dr. Prerna Narang"
									className="doc-avatar"
								/>
							</div>

							<h3>Dr. Prerna Narang</h3>
							<p className="muted">
								Gynecology + 2 others · 7 years of Experience
							</p>
							<p>
								We understand the importance of building trust.
								A free 5-min call helps connect instantly.
							</p>
						</div>

						<div className="card">
							<img
								src="/assets/doctorhome/connect.png"
								alt=""
								className="card-illustration"
							/>
							<h3>Connecting…</h3>
							<p className="muted">
								You'll receive a call shortly from{" "}
								<strong>+91 73148 55977</strong>.
							</p>
						</div>
					</div>
				</section>

				{/* FORUM */}
				<section className="section doc-forum">
					<div className="container two-column">
						<div className="card">
							<div className="doc-tabs">
								<button className="chip chip-active">
									Questions
								</button>
								<button className="chip">Thoughts</button>
							</div>

							<div className="doc-forum-header">
								<p className="tag">Forum</p>
								<p className="muted">Anonymous · 5 days ago</p>
							</div>

							<h3>
								Question: Can Ayurveda help with stress and
								mental health issues?
							</h3>
							<p className="muted small">
								Explores Ayurvedic practices in managing stress.
							</p>

							<button className="btn btn-outline small-btn">
								Ask Question
							</button>

							<p className="doc-forum-footer muted">
								Engage with patients, answer questions, share
								wisdom.
							</p>
						</div>

						<div className="card">
							<h4>Thought: Ayurveda & Mental Health</h4>
							<p className="muted">Dr. Marium Roy · 5 days ago</p>
							<p className="small">
								Ayurveda emphasizes balance of mind, body and
								spirit.
							</p>

							{/* Stats Row */}
							<div className="doc-stats-row small">
								<span>23 Likes</span>
								<span>24 Comments</span>
								<span>3 Saves</span>
							</div>
						</div>
					</div>
				</section>

				{/* SESSION MODES */}
				<section className="section doc-session">
					<div className="container two-column">
						<div className="card">
							<h2>Select your mode of session</h2>

							<div className="doc-mode-tabs">
								<button className="chip chip-active">
									Free Call
								</button>
								<button className="chip">Video</button>
								<button className="chip">Chat</button>
							</div>

							<div className="doc-mode-pricing">
								<div>
									<p className="muted">Free Call</p>
									<p>₹15 / Min</p>
								</div>
								<div>
									<p className="muted">Video</p>
									<p>₹15 / Min</p>
								</div>
								<div>
									<p className="muted">Chat</p>
									<p>₹15 / Text</p>
								</div>
							</div>

							<p className="small muted">
								Choose Instant Chat, Instant Call, or Schedule
								Video call.
							</p>
						</div>

						<div className="card">
							<img
								src="/assets/doctorhome/comments.png"
								alt="Comments Illustration"
								className="card-illustration"
							/>
							<p className="small">
								“I have recently started Ayurvedic practices…”
							</p>
							<button className="btn btn-outline small-btn">
								View All 24 Comments
							</button>
						</div>
					</div>
				</section>

				{/* WALLET SECTION */}
				<section className="section doc-wallet">
					<div className="container two-column">
						<div className="card">
							<h3>Recent Withdrawals</h3>

							<div className="doc-withdrawal-row">
								<div>
									<p className="muted">28th July 2024</p>
									<p>₹44,000.00</p>
								</div>
								<p className="tag">Smart Wallet</p>
							</div>

							<p className="small">
								Withdraw payments safely — OTP is sent for
								verification.
							</p>

							<div className="doc-withdrawal-row">
								<div>
									<p className="muted">Amrutam Account</p>
									<p>₹12,000.00</p>
								</div>
							</div>

							<button className="btn btn-primary small-btn">
								Request Withdrawal
							</button>
						</div>

						<div className="card">
							<h3>Today</h3>
							<img
								src="/assets/doctorhome/dashboard.png"
								alt="Dashboard Illustration"
								className="card-illustration"
							/>
							<p>
								Offline / Online Appointments, Revenue,
								Feedback.
							</p>
							<p className="small muted">
								Track your day at a glance.
							</p>
						</div>
					</div>
				</section>

				{/* AVAILABILITY SECTION */}
				<section className="section doc-availability">
					<div className="container two-column">
						<div className="card">
							<h3>Flexible Work Timing</h3>
							<p className="muted">
								Average Ratings · Total Ratings
							</p>
							<p>
								<strong>4.8</strong> (218) ·{" "}
								<strong>4.5</strong> Feedback
							</p>
							<p className="small">
								Control when patients can book consultations.
							</p>
						</div>

						<div className="card">
							<img
								src="/assets/doctorhome/prema.png"
								alt="Doctor Profile"
								className="doc-avatar"
							/>
							<h3>Dr. Prerna Narang</h3>
							<p className="muted">
								Male-Female Infertility · 7 years
							</p>
							<p className="small">
								Speaks: English, Hindi, Marathi
							</p>

							<div className="doc-consult-options">
								<div>
									<p>Chat</p>
									<p className="muted">₹15/text</p>
								</div>
								<div>
									<p>Video</p>
									<p className="muted">₹15/min</p>
								</div>
								<div>
									<p>Instant Call</p>
									<p className="muted">₹15/min</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ONBOARDING STEPS SECTION */}
				<section className="section doc-steps" ref={onboardingRef}>
					<h2 className="section-title">Join Our Circle of Care</h2>
					<p className="page-subtitle">
						Becoming a part of Amrutam is simple.
					</p>
					<div className="container doc-steps-container">
						<div className="doc-steps-left">
							<div className="doc-steps-vertical">
								<div className="card small-card">
									<h4>Step 1</h4>
									<p>Get referral code.</p>
								</div>
								<div className="card small-card">
									<h4>Step 2</h4>
									<p>Register on Amrutam.</p>
								</div>
								<div className="card small-card">
									<h4>Step 3</h4>
									<p>Complete KYC.</p>
								</div>
								<div className="card small-card">
									<h4>Step 4</h4>
									<p>Start consulting.</p>
								</div>
							</div>

							<div className="doc-steps-tags">
								<span>Consultations</span>
								<span>Payment withdrawal</span>
								<span>Schedule</span>
							</div>
						</div>

						<div className="doc-steps-right">
							<img
								src="/assets/doctorhome/join-our-circle.png"
								alt="Onboarding Steps Illustration"
								className="steps-image"
							/>
						</div>
					</div>
				</section>

				{/* TESTIMONIALS */}
				<section
					className="section doc-testimonials"
					ref={testimonialRef}
				>
					<div className="container">
						<h2 className="section-title">
							What Doctors Are Saying
						</h2>
						<p className="page-subtitle">Trusted by experts.</p>

						<div className="grid-3 doc-why-grid">
							<article className="card">
								<img
									src="/assets/doctorhome/rajesh.png"
									alt=""
									className="card-icon"
								/>
								<h3>Dr. Rajesh Iyer</h3>
								<p className="small">
									Authentic herbal formulations…
								</p>
							</article>
							<article className="card">
								<img
									src="/assets/doctorhome/ananya.png"
									alt=""
									className="card-icon"
								/>
								<h3>Dr. Ananya Sharma</h3>
								<p className="small">
									Bridges Ayurveda & modern wellness…
								</p>
							</article>
							<article className="card">
								<img
									src="/assets/doctorhome/pooja.png"
									alt=""
									className="card-icon"
								/>
								<h3>Dr. Pooja Deshmukh</h3>
								<p className="small">
									Patients show positive results…
								</p>
							</article>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="section doc-faq" ref={faqRef}>
					<div className="container">
						<h2 className="section-title">
							Frequently Asked Questions
						</h2>
						<p className="page-subtitle">Find quick answers.</p>

						<div className="doc-faq-list">
							<details>
								<summary>What is Amrutam?</summary>
								<p className="small">
									A holistic Ayurvedic platform.
								</p>
							</details>
							<details>
								<summary>How does Amrutam help?</summary>
								<p className="small">
									More patients, flexible modes.
								</p>
							</details>
							<details>
								<summary>How to join?</summary>
								<p className="small">
									Referral → Register → KYC.
								</p>
							</details>
							<details>
								<summary>Is there a fee?</summary>
								<p className="small">
									Discuss with onboarding team.
								</p>
							</details>

							<button className="btn btn-outline small-btn">
								See More
							</button>
						</div>
					</div>
				</section>

				{/* CONTACT */}
				<section className="section doc-contact">
					<div className="container two-column">
						<div>
							<h2>Let’s Connect</h2>
							<p className="page-subtitle">
								Reach out for any questions.
							</p>

							<form className="form">
								<label>
									Your Name
									<input
										type="text"
										defaultValue="Your Name"
									/>
								</label>
								<label>
									Your Contact Number
									<input
										type="text"
										defaultValue="99XXXXXXX0"
									/>
								</label>
								<label>
									Your Email
									<input
										type="email"
										defaultValue="xyz@gmail.com"
									/>
								</label>
								<label>
									Message
									<textarea
										rows={3}
										defaultValue="I want to On-board as a Doctor"
									/>
								</label>

								<button className="btn btn-primary btn-full">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default DoctorHome;
