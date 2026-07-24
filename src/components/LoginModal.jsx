import { useState } from "react";
import "./LoginModal.css";

import Login from "./Login";
import Register from "./Register";

export default function LoginModal({ onClose, initialMode = "login" }) {
	const [isLogin, setIsLogin] = useState(initialMode !== "register");

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-box" onClick={(e) => e.stopPropagation()}>
				<button
					className="modal-close"
					onClick={onClose}
					aria-label="Close modal"
				>
					×
				</button>

				{isLogin ? (
					<Login
						switchToRegister={() => setIsLogin(false)}
						onClose={onClose}
					/>
				) : (
					<Register
						switchToLogin={() => setIsLogin(true)}
						onClose={onClose}
					/>
				)}
			</div>
		</div>
	);
}
