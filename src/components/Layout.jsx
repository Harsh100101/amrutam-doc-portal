import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function DashboardLayout({ children }) {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	useEffect(() => {
		window.openLoginModal = () => setShowLogin(true);
		window.openRegisterModal = () => {
			setShowLogin(true);
			setShowRegister(true);
		};

		return () => {
			window.openLoginModal = undefined;
			window.openRegisterModal = undefined;
		};
	}, []);

	return (
		<>
			<Header openLogin={() => setShowLogin(true)} />

			<main className="dashboard-content">{children}</main>

			<Footer />

			{showLogin && (
				<LoginModal
					onClose={() => setShowLogin(false)}
					switchToRegister={() => setShowRegister(true)}
				/>
			)}
		</>
	);
}
