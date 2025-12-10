import { useState, useEffect } from "react";
import "./BackToTop.css";

export default function BackToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) setShow(true);
			else setShow(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		show && (
			<button className="back-to-top-btn" onClick={scrollToTop}>
				↑
			</button>
		)
	);
}
