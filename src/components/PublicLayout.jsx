import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import LoginModal from "./LoginModal";

export default function PublicLayout({ children }) {
	const [showLogin, setShowLogin] = useState(false);
	const [modalView, setModalView] = useState("login");

	useEffect(() => {
		window.openLoginModal = () => {
			setModalView("login");
			setShowLogin(true);
		};
		window.openRegisterModal = () => {
			setModalView("register");
			setShowLogin(true);
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
					defaultView={modalView}
				/>
			)}
		</>
	);
}
