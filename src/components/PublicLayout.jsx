import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import LoginModal from "./LoginModal";

export default function PublicLayout({ children }) {
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

			{children}

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
