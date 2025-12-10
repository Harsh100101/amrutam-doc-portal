import SEO from "../components/SEO";
import "./DoctorEarnings.css";
import { earningsOverview } from "../data/doctorDashboardData";

export default function DoctorEarnings() {
	const total = earningsOverview.monthly.reduce((sum, val) => sum + val, 0);
	const latestMonth =
		earningsOverview.labels[earningsOverview.labels.length - 1];
	const latestAmount =
		earningsOverview.monthly[earningsOverview.monthly.length - 1];

	return (
		<>
			<SEO
				title="Earnings & Payouts"
				description="Track your earnings, payouts and monthly performance."
			/>

			<div className="de-wrapper">
				<header className="de-header">
					<h1>Earnings & Payouts</h1>
					<p>View your consultation earnings and payout history.</p>
				</header>

				<section className="de-summary">
					<div className="de-card">
						<p className="de-label">Total Earnings</p>
						<p className="de-value">₹ {total}</p>
					</div>
					<div className="de-card">
						<p className="de-label">Latest Month ({latestMonth})</p>
						<p className="de-value">₹ {latestAmount}</p>
					</div>
					<div className="de-card">
						<p className="de-label">Next Payout</p>
						<p className="de-value">15th of this month</p>
					</div>
				</section>

				<section className="de-grid">
					<div className="de-panel">
						<h2>Monthly Earnings</h2>
						<ul className="de-list">
							{earningsOverview.labels.map((month, idx) => (
								<li key={month}>
									<span>{month}</span>
									<strong>
										₹ {earningsOverview.monthly[idx]}
									</strong>
								</li>
							))}
						</ul>
					</div>

					<div className="de-panel">
						<h2>Payout Cycle</h2>
						<p className="de-text">
							Payouts are processed{" "}
							<strong>twice every month</strong> for all completed
							consultations. You can track your cleared and
							upcoming payouts here.
						</p>

						<table className="de-table">
							<thead>
								<tr>
									<th>Date</th>
									<th>Status</th>
									<th>Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>01 Jan 2025</td>
									<td>Paid</td>
									<td>₹ 12,000</td>
								</tr>
								<tr>
									<td>16 Jan 2025</td>
									<td>Paid</td>
									<td>₹ 9,500</td>
								</tr>
								<tr>
									<td>01 Feb 2025</td>
									<td>Upcoming</td>
									<td>₹ 10,200</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</>
	);
}
