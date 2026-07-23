import { useState } from "react";
import "./LoginModal.css";

import Login from "./Login";
import Register from "./Register";

export default function LoginModal({ onClose, defaultView = "login" }) {
	const [isLogin, setIsLogin] = useState(defaultView !== "register");

	return (
		<div className="modal-overlay" onClick={onClose} role="presentation">
			<div
				className="modal-box"
				onClick={(e) => e.stopPropagation()} // prevent close on inner click
				role="dialog"
				aria-modal="true"
			>
				<button
					className="modal-close"
					onClick={onClose}
					aria-label="Close dialog"
				>
					×
				</button>

				{isLogin ? (
					<Login
						onSwitchToRegister={() => setIsLogin(false)}
						onClose={onClose}
					/>
				) : (
					<Register
						onSwitchToLogin={() => setIsLogin(true)}
						onClose={onClose}
					/>
				)}
			</div>
		</div>
	);
}
