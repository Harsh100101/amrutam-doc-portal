// src/components/Login.jsx

import { useState } from "react";

export default function Login({ onSwitchToRegister, onClose }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		alert("Login Successful (Demo)");
		onClose();
	};

	return (
		<div className="modal-content">
			<h2 className="modal-title">Login to Continue</h2>
			<p className="modal-sub">Access your doctor dashboard and tools.</p>

			<form onSubmit={handleLogin}>
				<label htmlFor="login-email">Email</label>
				<input
					id="login-email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder="Enter your email"
				/>

				<label htmlFor="login-password">Password</label>
				<input
					id="login-password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					placeholder="Enter your password"
				/>

				<button type="submit" className="btn btn-primary modal-btn">
					Login
				</button>
			</form>

			<p className="modal-footer-text">
				Don't have an account?{" "}
				<button
					type="button"
					className="modal-link"
					onClick={onSwitchToRegister}
				>
					Register Now
				</button>
			</p>
		</div>
	);
}
