import SEO from "../components/SEO";
import "./DoctorDashboard.css";

import {
	dashboardSummary,
	upcomingAppointments,
	earningsOverview,
} from "../data/doctorDashboardData";

export default function DoctorDashboard() {
	return (
		<>
			<SEO
				title="Doctor Dashboard"
				description="Overview of your appointments, patients and earnings."
			/>

			<div className="dd-wrapper">
				<header className="dd-header">
					<h1>Welcome, Doctor</h1>
					<p>Your practice summary at a glance</p>
				</header>

				{/* SUMMARY CARDS */}
				<section className="dd-stats">
					<div className="dd-stat-card">
						<p className="dd-stat-label">Today’s Appointments</p>
						<p className="dd-stat-value">
							{dashboardSummary.todayAppointments}
						</p>
					</div>

					<div className="dd-stat-card">
						<p className="dd-stat-label">Upcoming Patients</p>
						<p className="dd-stat-value">
							{dashboardSummary.upcomingPatients}
						</p>
					</div>

					<div className="dd-stat-card">
						<p className="dd-stat-label">This Week’s Earnings</p>
						<p className="dd-stat-value">
							₹ {dashboardSummary.thisWeekEarnings}
						</p>
					</div>
				</section>

				{/* GRID 2-PANEL SECTION */}
				<section className="dd-grid">
					{/* UPCOMING APPOINTMENTS */}
					<div className="dd-panel">
						<h2>Upcoming Appointments</h2>

						<ul className="dd-appointment-list">
							{upcomingAppointments.length === 0 ? (
								<p className="dd-empty">
									No appointments today.
								</p>
							) : (
								upcomingAppointments.map((app) => (
									<li key={app.id}>
										<div className="dd-app-info">
											<strong>{app.name}</strong>
											<span>{app.type}</span>
										</div>
										<div className="dd-app-time">
											{app.time}
										</div>
									</li>
								))
							)}
						</ul>
					</div>

					{/* EARNINGS OVERVIEW */}
					<div className="dd-panel">
						<h2>Earnings Overview</h2>

						<ul className="dd-earn-list">
							{earningsOverview.labels.map((month, i) => (
								<li key={month}>
									<span>{month}</span>
									<strong>
										₹ {earningsOverview.monthly[i]}
									</strong>
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</>
	);
}
