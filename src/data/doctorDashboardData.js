// src/data/doctorDashboardData.js

// DASHBOARD SUMMARY (You may adjust numbers as needed)
export const dashboardSummary = {
	todayAppointments: 8,
	upcomingPatients: 12,
	thisWeekEarnings: 18600,
};

// UPCOMING APPOINTMENTS (from real home page doctors)
export const upcomingAppointments = [
	{ id: 1, name: "Dr. Prerna Narang", time: "10:30 AM", type: "Follow-up" },
	{
		id: 2,
		name: "Dr. Marium Roy",
		time: "12:45 PM",
		type: "New Consultation",
	},
	{ id: 3, name: "Dr. Ananya Sharma", time: "4:20 PM", type: "Follow-up" },
];

// EARNINGS OVERVIEW (sample realistic values)
export const earningsOverview = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	monthly: [12000, 15500, 9800, 21000, 18500, 24000],
};

// PROFILE DATA — Using Real Home Page Doctor
export const doctorProfileData = {
	name: "Dr. Prerna Narang",
	specialization: "Gynecology, Ayurvedic Women's Health, Infertility",
	experience: "7",
	email: "prerna.narang@example.com",
	languages: ["English", "Hindi", "Marathi"],
};

// SUPPORT SECTION
export const supportOptions = [
	{
		title: "Email Support",
		description: "Write to our support team.",
		value: "support@amrutam.com",
	},
	{
		title: "Chat Support",
		description: "Chat with our onboarding team.",
		value: "Available 10AM – 7PM",
	},
	{
		title: "Help Center",
		description: "Browse FAQ and step-by-step guides.",
		value: "View Articles",
	},
];

// TESTIMONIALS — Match Home Page Doctors
export const testimonialsData = [
	{
		id: 1,
		name: "Dr. Rajesh Iyer",
		feedback:
			"Authentic Ayurvedic formulations and a supportive digital platform! Amazing experience.",
	},
	{
		id: 2,
		name: "Dr. Ananya Sharma",
		feedback:
			"Amrutam bridges Ayurveda with modern healthcare beautifully. Highly recommended!",
	},
	{
		id: 3,
		name: "Dr. Pooja Deshmukh",
		feedback:
			"My patients show real improvements. Great place for Ayurvedic practitioners.",
	},
];
