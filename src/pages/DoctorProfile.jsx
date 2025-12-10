// src/pages/DoctorProfile.jsx
import SEO from "../components/SEO";
import "./DoctorProfile.css";
import { doctorProfileData } from "../data/doctorDashboardData";

export default function DoctorProfile() {
	return (
		<>
			<SEO
				title="Doctor Profile"
				description="Manage your profile details, specialization and experience."
			/>

			<div className="dp-wrapper">
				<header className="dp-header">
					<h1>Profile</h1>
					<p>Update your basic information and practice details.</p>
				</header>

				<section className="dp-grid">
					{/* Left summary card */}
					<div className="dp-card">
						<h2>Profile Summary</h2>
						<p className="dp-name">{doctorProfileData.name}</p>
						<p className="dp-line">
							<span>Specialization:</span>{" "}
							{doctorProfileData.specialization}
						</p>
						<p className="dp-line">
							<span>Experience:</span>{" "}
							{doctorProfileData.experience}
						</p>
						<p className="dp-line">
							<span>Email:</span> {doctorProfileData.email}
						</p>
						<p className="dp-line">
							<span>Languages:</span>{" "}
							{doctorProfileData.languages.join(", ")}
						</p>
					</div>

					{/* Right editable form (mock UI) */}
					<form className="dp-form">
						<h2>Edit Details</h2>

						<label>
							Full Name
							<input
								type="text"
								defaultValue={doctorProfileData.name}
							/>
						</label>

						<label>
							Specialization
							<input
								type="text"
								defaultValue={doctorProfileData.specialization}
							/>
						</label>

						<label>
							Experience (Years)
							<input
								type="number"
								min="0"
								defaultValue={parseInt(
									doctorProfileData.experience,
									10
								)}
							/>
						</label>

						<label>
							Email
							<input
								type="email"
								defaultValue={doctorProfileData.email}
							/>
						</label>

						<label>
							Clinic Address
							<textarea placeholder="Enter clinic location, timings, contact details"></textarea>
						</label>

						<button type="button" className="dp-btn">
							Save Changes
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
