import { Routes, Route } from "react-router-dom";

import PublicLayout from "./components/PublicLayout";
import DashboardLayout from "./components/Layout";

import DoctorHome from "./pages/DoctorHome";
import DoctorAbout from "./pages/DoctorAbout";
import DoctorOnboarding from "./pages/DoctorOnboarding";
import DoctorFAQ from "./pages/DoctorFAQ";
import DoctorResources from "./pages/DoctorResources";

import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorEarnings from "./pages/DoctorEarnings";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorSupport from "./pages/DoctorSupport";
import DoctorTestimonials from "./pages/DoctorTestimonials";

export default function App() {
	return (
		<Routes>
			{/* ⬇ PUBLIC PAGES (Header + Footer only) */}
			<Route
				path="/"
				element={
					<PublicLayout>
						<DoctorHome />
					</PublicLayout>
				}
			/>
			<Route
				path="/about"
				element={
					<PublicLayout>
						<DoctorAbout />
					</PublicLayout>
				}
			/>
			<Route
				path="/onboarding"
				element={
					<PublicLayout>
						<DoctorOnboarding />
					</PublicLayout>
				}
			/>
			<Route
				path="/faq"
				element={
					<PublicLayout>
						<DoctorFAQ />
					</PublicLayout>
				}
			/>
			<Route
				path="/resources"
				element={
					<PublicLayout>
						<DoctorResources />
					</PublicLayout>
				}
			/>
			{/* ⬇ DASHBOARD PAGES (Header + Footer + Sidebar) */}
			<Route
				path="/dashboard"
				element={
					<DashboardLayout>
						<DoctorDashboard />
					</DashboardLayout>
				}
			/>
			<Route
				path="/earnings"
				element={
					<DashboardLayout>
						<DoctorEarnings />
					</DashboardLayout>
				}
			/>
			<Route
				path="/profile"
				element={
					<DashboardLayout>
						<DoctorProfile />
					</DashboardLayout>
				}
			/>
			<Route
				path="/support"
				element={
					<DashboardLayout>
						<DoctorSupport />
					</DashboardLayout>
				}
			/>{" "}
			<Route
				path="/testimonials"
				element={
					<DashboardLayout>
						<DoctorTestimonials />
					</DashboardLayout>
				}
			/>
		</Routes>
	);
}
