import { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ onClose }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			{/* Overlay */}
			<div className="modal-overlay" onClick={onClose}></div>

			{/* Popup window */}
			<div className="modal-box">
				<button className="modal-close" onClick={onClose}>
					×
				</button>

				<h2>Doctor Login</h2>
				<p className="modal-sub">Access your dashboard</p>

				<div className="modal-form">
					<label>Email</label>
					<input
						type="email"
						placeholder="doctor@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label>Password</label>
					<input
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button className="modal-btn">Login</button>
				</div>

				<p className="modal-footer-text">
					Don't have an account? <a href="/register">Register here</a>
				</p>
			</div>
		</>
	);
}
