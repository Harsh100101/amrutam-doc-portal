import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const publicLinks = [
	{ to: "/", label: "Home", end: true },
	{ to: "/about", label: "About" },
	{ to: "/onboarding", label: "Onboarding" },
	{ to: "/faq", label: "FAQ" },
	{ to: "/resources", label: "Resources" },
];

const portalLinks = [
	{ to: "/dashboard", label: "Dashboard" },
	{ to: "/profile", label: "Profile" },
	{ to: "/earnings", label: "Earnings" },
	{ to: "/support", label: "Support" },
	{ to: "/testimonials", label: "Testimonials" },
];

export default function Header({ openLogin }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="nav-header">
			<div className="nav-container">
				<NavLink to="/" className="nav-logo" onClick={closeMenu}>
					AMRUTAM
				</NavLink>

				<button
					className="hamburger"
					onClick={() => setMenuOpen((open) => !open)}
					aria-label="Toggle navigation menu"
					aria-expanded={menuOpen}
				>
					<span />
					<span />
					<span />
				</button>

				<nav className={`nav-links ${menuOpen ? "open" : ""}`}>
					<div className="nav-group">
						{publicLinks.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								end={link.end}
								onClick={closeMenu}
							>
								{link.label}
							</NavLink>
						))}
					</div>

					<div className="nav-divider" aria-hidden="true" />

					<div className="nav-group nav-group-portal">
						{portalLinks.map((link) => (
							<NavLink key={link.to} to={link.to} onClick={closeMenu}>
								{link.label}
							</NavLink>
						))}
					</div>

					<button className="login-btn mobile" onClick={openLogin}>
						Login
					</button>
				</nav>

				<button className="login-btn desktop" onClick={openLogin}>
					Login
				</button>
			</div>
		</header>
	);
}
