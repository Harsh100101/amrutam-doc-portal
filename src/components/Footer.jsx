import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* LEFT COLUMN */}
				<div className="footer-col">
					<h1 className="footer-logo">A M R U T A M</h1>
		
					<h3 className="footer-title">Get in touch</h3>

					<p className="footer-text">support@amrutam.global</p>

					<p className="footer-text">
						Amrutam Pharmaceuticals Pvt Ltd.,
						<br />
						chitragupt ganj, Nai Sadak, Lashkar,
						<br />
						Gwalior – 474001
					</p>

					<p className="footer-text">+91 9713171999</p>
				</div>

				{/* CENTER COLUMN */}
				<div className="footer-col">
					<h3 className="footer-title">Information</h3>

					<ul className="footer-links">
						<li>About Us</li>
						<li>Terms and Conditions</li>
						<li>Privacy Policy</li>
						<li>Privacy Policy for Mobile App</li>
						<li>Shipping and Return Policy</li>
						<li>International Delivery</li>
						<li>For Business, Hotels and Resorts</li>
					</ul>
				</div>

				{/* RIGHT COLUMN */}
				<div className="footer-col">
					<h3 className="footer-title">Follow Us</h3>

					<div className="footer-social">
						<SocialIcon
							url="https://facebook.com"
							bgColor="#2F5D3A"
						/>
						<SocialIcon
							url="https://instagram.com"
							bgColor="#2F5D3A"
						/>
						<SocialIcon
							url="https://youtube.com"
							bgColor="#2F5D3A"
						/>
						<SocialIcon
							url="https://twitter.com"
							bgColor="#2F5D3A"
						/>
						<SocialIcon
							url="https://linkedin.com"
							bgColor="#2F5D3A"
						/>
						<SocialIcon
							url="https://pinterest.com"
							bgColor="#2F5D3A"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
