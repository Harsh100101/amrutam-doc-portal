
import { useState } from "react";
import "./LoginModal.css";

import Login from "./Login";
import Register from "./Register";

export default function LoginModal({ onClose }) {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="modal-box"
				onClick={(e) => e.stopPropagation()} // prevent close on inner click
			>
				<button className="modal-close" onClick={onClose}>
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
