import { useState, useEffect } from "react";
import "./BackToTop.css";

export default function BackToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShow(window.scrollY > 240);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		show && (
			<button
				className="back-to-top-btn"
				onClick={scrollToTop}
				aria-label="Back to top"
			>
				↑
			</button>
		)
	);
}
