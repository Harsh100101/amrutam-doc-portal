import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({ openLogin }) {
	return (
		<header className="nav-header">
			<div className="nav-container">
				<div className="nav-logo">AMRUTAM</div>

				<nav className="nav-links">
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
				</nav>

				<button className="login-btn" onClick={openLogin}>
					Login
				</button>
			</div>
		</header>
	);
}
