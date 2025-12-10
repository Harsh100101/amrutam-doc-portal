import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import LoginModal from "./LoginModal";

export default function PublicLayout({ children }) {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	// Create global functions window.openLoginModal & window.openRegisterModal
	useEffect(() => {
		window.openLoginModal = () => setShowLogin(true);
		window.openRegisterModal = () => setShowRegister(true);

		return () => {
			window.openLoginModal = undefined;
			window.openRegisterModal = undefined;
		};
	}, []);

	return (
		<>
			<Header openLogin={() => setShowLogin(true)} />

			{children}

			<Footer />

			{showLogin && (
				<LoginModal
					onClose={() => setShowLogin(false)}
					switchToRegister={() => {
						setShowLogin(false);
						setShowRegister(true);
					}}
				/>
			)}

			{showRegister && (
				<RegisterModal
					onClose={() => setShowRegister(false)}
					switchToLogin={() => {
						setShowRegister(false);
						setShowLogin(true);
					}}
				/>
			)}
		</>
	);
}
