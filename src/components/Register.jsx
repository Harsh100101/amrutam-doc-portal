import { useState } from "react";

export default function Register({ onSwitchToLogin, onClose }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		specialization: "",
		experience: "",
	});

	const handleRegister = (e) => {
		e.preventDefault();
		alert("Registration Successful (Demo)");
		onClose();
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="modal-content">
			<h2 className="modal-title">Doctor Registration</h2>
			<p className="modal-sub">Create your account and start onboarding.</p>

			<form onSubmit={handleRegister}>
				<label htmlFor="register-name">Full Name</label>
				<input
					id="register-name"
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="Enter your name"
				/>

				<label htmlFor="register-email">Email</label>
				<input
					id="register-email"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="Enter your email"
				/>

				<label htmlFor="register-password">Password</label>
				<input
					id="register-password"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
					placeholder="Create password"
				/>

				<label htmlFor="register-specialization">Specialization</label>
				<input
					id="register-specialization"
					type="text"
					name="specialization"
					value={formData.specialization}
					onChange={handleChange}
					placeholder="Ayurveda / Panchakarma etc."
				/>

				<label htmlFor="register-experience">Experience (Years)</label>
				<input
					id="register-experience"
					type="number"
					name="experience"
					value={formData.experience}
					onChange={handleChange}
					placeholder="5"
				/>

				<button type="submit" className="btn btn-primary modal-btn">
					Register
				</button>
			</form>

			<p className="modal-footer-text">
				Already have an account?{" "}
				<button type="button" className="modal-link" onClick={onSwitchToLogin}>
					Login
				</button>
			</p>
		</div>
	);
}
