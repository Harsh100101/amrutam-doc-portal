
import { useState } from "react";

export default function Register({ switchToLogin, onClose }) {
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

			<form onSubmit={handleRegister}>
				<label>Full Name</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="Enter your name"
				/>

				<label>Email</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="Enter your email"
				/>

				<label>Password</label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
					placeholder="Create password"
				/>

				<label>Specialization</label>
				<input
					type="text"
					name="specialization"
					value={formData.specialization}
					onChange={handleChange}
					placeholder="Ayurveda / Panchakarma etc."
				/>

				<label>Experience (Years)</label>
				<input
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
				<button className="modal-link" onClick={switchToLogin}>
					Login
				</button>
			</p>
		</div>
	);
}
