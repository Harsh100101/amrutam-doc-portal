import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import "./Header.css";

export default function Header() {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			<header className="nav-header">
				<div className="nav-container">
					{/* Logo */}
					<div className="nav-logo">AMRUTAM</div>

					{/* Navigation Links */}
					<nav className="nav-links">
						<NavLink to="/" end>
							Home
						</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/onboarding">Onboarding</NavLink>
						<NavLink to="/faq">FAQ</NavLink>
						<NavLink to="/resources">Resources</NavLink>

						{/* Doctor Navigation */}
						<NavLink to="/dashboard">Dashboard</NavLink>
						<NavLink to="/profile">Profile</NavLink>
						<NavLink to="/earnings">Earnings</NavLink>
						<NavLink to="/support">Support</NavLink>
						<NavLink to="/testimonials">Testimonials</NavLink>
					</nav>

					{/* Login Button */}
					<button
						className="login-btn"
						onClick={() => setShowLogin(true)}
					>
						Login
					</button>
				</div>
			</header>

			{/* LOGIN MODAL POPUP */}
			{showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
		</>
	);
}
