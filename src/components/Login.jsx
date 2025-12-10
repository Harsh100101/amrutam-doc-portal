// src/components/Login.jsx

import { useState } from "react";

export default function Login({ switchToRegister, onClose }) {
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

			<form onSubmit={handleLogin}>
				<label>Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder="Enter your email"
				/>

				<label>Password</label>
				<input
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
				<button className="modal-link" onClick={switchToRegister}>
					Register Now
				</button>
			</p>
		</div>
	);
}
