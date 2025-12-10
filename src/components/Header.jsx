import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header({ openLogin }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="nav-header">
			<div className="nav-container">
				<div className="nav-logo">AMRUTAM</div>

				{/* Hamburger Button */}
				<button
					className="hamburger"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					☰
				</button>

				{/* Navigation Links */}
				<nav className={`nav-links ${menuOpen ? "open" : ""}`}>
					<NavLink to="/" end>
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/onboarding">Onboarding</NavLink>
					<NavLink to="/faq">FAQ</NavLink>
					<NavLink to="/resources">Resources</NavLink>
					<NavLink to="/dashboard">Dashboard</NavLink>
					<NavLink to="/profile">Profile</NavLink>
					<NavLink to="/earnings">Earnings</NavLink>
					<NavLink to="/support">Support</NavLink>
					<NavLink to="/testimonials">Testimonials</NavLink>

					<button className="login-btn mobile" onClick={openLogin}>
						Login
					</button>
				</nav>

				{/* Desktop Login Button */}
				<button className="login-btn desktop" onClick={openLogin}>
					Login
				</button>
			</div>
		</header>
	);
}
