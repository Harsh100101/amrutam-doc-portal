import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container container">
				<div className="footer-brand-block">
					<h1 className="footer-logo">AMRUTAM</h1>
					<p className="footer-lead">
						A calmer, more trustworthy Ayurvedic doctor portal for modern
						practice management.
					</p>
				</div>

				<div>
					<h3 className="footer-title">Get in touch</h3>
					<p className="footer-text">support@amrutam.global</p>
					<p className="footer-text">
						Amrutam Pharmaceuticals Pvt Ltd.,
						<br />
						Chitragupt Ganj, Nai Sadak, Lashkar,
						<br />
						Gwalior – 474001
					</p>
					<p className="footer-text">+91 9713171999</p>
				</div>

				<div>
					<h3 className="footer-title">Information</h3>
					<ul className="footer-links">
						<li>About Us</li>
						<li>Terms and Conditions</li>
						<li>Privacy Policy</li>
						<li>Shipping and Return Policy</li>
						<li>International Delivery</li>
					</ul>
				</div>

				<div>
					<h3 className="footer-title">Follow Us</h3>
					<div className="footer-social">
						<SocialIcon url="https://facebook.com" bgColor="#1f5b43" />
						<SocialIcon url="https://instagram.com" bgColor="#1f5b43" />
						<SocialIcon url="https://youtube.com" bgColor="#1f5b43" />
						<SocialIcon url="https://twitter.com" bgColor="#1f5b43" />
					</div>
				</div>
			</div>
		</footer>
	);
}
