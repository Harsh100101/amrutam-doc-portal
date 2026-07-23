import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header({ openLogin }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);
	const handleLogin = () => {
		openLogin?.();
		closeMenu();
	};

	return (
		<header className="nav-header">
			<div className="nav-container container">
				<NavLink to="/" className="nav-logo" onClick={closeMenu}>
					<span className="nav-logo-mark">A</span>
					<span>AMRUTAM</span>
				</NavLink>

				{/* Hamburger Button */}
				<button
					className="hamburger"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-expanded={menuOpen}
					aria-label="Toggle navigation"
				>
					<span />
					<span />
					<span />
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

					<button className="login-btn mobile" onClick={handleLogin}>
						Login
					</button>
				</nav>

				<button className="login-btn desktop" onClick={handleLogin}>
					Login
				</button>
			</div>
		</header>
	);
}
